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
    position: number;
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
                    line.push({ value: l, position: lineOffset });
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
    const leftWords = left == null ? [] : splitByWords(left)
    const rightWords = right == null ? [] : splitByWords(right)
    const res = [];

    const len = Math.max(leftWords.length, rightWords.length);
    for (let i = 0; i < len; i++) {
        res.push({
            left: leftWords[i],
            right: rightWords[i],
        });
    }

    return res;
}

function splitByWords(text: PositionedText): PositionedText[] {
    let nextOffset = text.position;
    return text.value.split(" ").map(word => {
        let offset = nextOffset;
        nextOffset += word.length + 1
        return {
            value: word,
            position: offset
        }
    })
}