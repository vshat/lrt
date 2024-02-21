export interface Doc {
    title: string;
    lines: Line[];
}

export interface Line {
    targetLanguage?: PositionedText;
    originalLanguage?: PositionedText;
    isLineBreak?: boolean;
    words: WordsPair[];
}

export interface WordsPair {
    left?: PositionedText;
    right?: PositionedText;
    puzzled?: boolean;
}

export interface PositionedText {
    value: string;
    start: number;
    end: number;
}

export function parseText(text: string): Doc {
    const res: Doc = {
        title: "",
        lines: [],
    };
    let line: PositionedText[] = [];
    let nextLineOffset = 0;
    text
        .split("\n")
        .forEach((l) => {
            let lineOffset = nextLineOffset
            nextLineOffset += l.length + 1

            if (l.trim().length == 0) {
                return
            }

            if (l.indexOf("!!") === 0 && !res.title.length) {
                res.title = l.substring(2);
            } else {
                if (line.length == 2) {
                    res.lines.push({
                        targetLanguage: line[0],
                        originalLanguage: line[1],
                        words: [],
                    });
                    line.length = 0;
                }
                if (l[0] == "-") {
                    if (line.length == 1) {
                        res.lines.push({ targetLanguage: line[0], words: [] });
                        line.length = 0;
                    }
                    res.lines.push({ isLineBreak: true, words: [] });
                } else {
                    line.push({ value: l, start: lineOffset, end: lineOffset + l.length });
                }
            }
        });
    if (line.length) {
        res.lines.push({
            targetLanguage: line[0],
            originalLanguage: line[1],
            words: [],
        });
    }

    res.lines.forEach((l) => {
        l.words = parseWords(l.targetLanguage, l.originalLanguage);
    });

    return res;
}

function parseWords(left?: PositionedText, right?: PositionedText): WordsPair[] {
    const leftWords = toWords(left)
    const rightWords = toWords(right)
    const res: WordsPair[] = [];

    const len = Math.max(leftWords.length, rightWords.length);
    for (let i = 0; i < len; i++) {
        res.push({
            left: leftWords[i],
            right: rightWords[i],
        });
    }

    return res;

    function toWords(text?: PositionedText): PositionedText[] {
        if (text == null) return [];
        return joinByPlus(splitByWords(text));
    }

    function splitByWords(text: PositionedText): PositionedText[] {
        const regex = /[^+ ]+|\+/gm;
        const res: PositionedText[] = []

        let match;
        while ((match = regex.exec(text.value)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (match.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            const start = text.start + match.index
            res.push({ value: match[0], start, end: start + match[0].length })
        }
        return res
    }

    function joinByPlus(words: PositionedText[]): PositionedText[] {
        const res: PositionedText[] = []

        for (let i = 0; i < words.length; i++) {
            let w = words[i];
            if (w.value == '+' && i > 0 && i < words.length - 1) {
                const prevWord = res[res.length - 1]

                let nextWord: PositionedText
                do {
                    nextWord = words[i + 1]
                    i++
                } while (nextWord.value == '+' && i < words.length - 1)

                const joinedWord: PositionedText = {
                    value: prevWord.value + ' ' + nextWord.value,
                    start: prevWord.start,
                    end: nextWord.end
                }
                res[res.length - 1] = joinedWord
            } else {
                res.push(w)
            }
        }
        return res
    }
}