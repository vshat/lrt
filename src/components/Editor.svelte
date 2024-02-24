<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { selectTextInTextArea } from "../lib/utils";
    export let value: string;
    export let isEditMode: boolean;

    export function setSelection(start: number, end: number) {
        selectTextInTextArea(textarea, start, end);
    }

    let textarea: HTMLTextAreaElement;

    const dispatch = createEventDispatcher();

    window.onload = () => {
        // useful if browser restores state
        dispatch("restoreText", textarea.value);
    };
</script>

<div class="one-third column editor {isEditMode ? '' : 'hidden'}">
    <textarea
        class={isEditMode ? "splitted" : ""}
        spellcheck="false"
        {value}
        on:input={() => dispatch("textInput", textarea.value)}
        bind:this={textarea}
        placeholder="Paste text here"
    ></textarea>
</div>
