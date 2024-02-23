<script lang="ts">
    import { selectTextInTextArea } from "../lib/utils";
    export let value: string;
    export let isEditMode: boolean;

    export function setSelection(start: number, end: number) {
        selectTextInTextArea(editor, start, end);
    }

    let editor: HTMLTextAreaElement;

    window.onload = () => {
        // useful if browser restores state
        value = editor.value;
    };
</script>

<div class="one-third column editor {isEditMode ? '' : 'hidden'}">
    <textarea
        class={isEditMode ? "splitted" : ""}
        spellcheck="false"
        bind:value
        bind:this={editor}
        placeholder="Paste text here"
    ></textarea>
</div>
