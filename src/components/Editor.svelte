<script lang="ts">
    import { IS_DEV, selectTextInTextArea } from "../lib/utils";
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
        placeholder={IS_DEV ? "(development mode)" : "Paste text here"}
    ></textarea>
</div>
