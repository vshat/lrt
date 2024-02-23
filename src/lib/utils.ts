export function selectTextInTextArea(
    textArea: HTMLTextAreaElement,
    selectionStart: number,
    selectionEnd: number,
) {
    textArea.focus();

    const fullText = textArea.value;
    textArea.value = fullText.substring(0, selectionEnd);
    textArea.scrollTop = textArea.scrollHeight;
    textArea.value = fullText;

    textArea.setSelectionRange(selectionStart, selectionEnd);
}