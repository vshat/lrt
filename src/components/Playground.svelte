<script lang="ts">
    import type { ColorScheme } from "../lib/colors";
    import { getNonDictRuWords, type Doc } from "../lib/parser";
    import { createEventDispatcher } from "svelte";
    import Tooltip from "./Tooltip.svelte";

    export let isEditMode: boolean;
    export let selectedColor: ColorScheme;
    export let doc: Doc;
    export let puzzledWords: { [key: number]: true };
    export let wordsDictReady: boolean;

    const dispatch = createEventDispatcher();

    $: puzzledStyle = `background: ${selectedColor.background}; color: ${selectedColor.background}`;
    $: nonPuzzledStyle = `color: ${selectedColor.foreground}`;
    $: nondictClass = `nondict ${
        ["Red", "Pink", "Amber", "Orange", "Deep Orange"].includes(
            selectedColor.name,
        )
            ? "blue"
            : ""
    }`;

    let currentWord: string | undefined;

    document.body.addEventListener("keydown", (e) => {
        if (e.code == "KeyQ" && currentWord?.length && !isEditMode) {
            e.preventDefault();
            window.open("https://wooordhunt.ru/word/" + currentWord);
        }
    });

    function grammarChecked(text: string) {
        if (!wordsDictReady || !isEditMode) return text;

        let arr = text.split("");
        let offset = 0;
        let positioned = {
            start: 0,
            end: text.length,
            value: text,
        };

        getNonDictRuWords(positioned).forEach((w) => {
            console.log("nondict", w);
            arr.splice(
                w.start + offset++,
                0,
                `<span class='${nondictClass}' style='color: ${selectedColor.foreground}'>`,
            );
            arr.splice(w.end + offset++, 0, "</span>");
        });

        return arr.join("");
    }
</script>

<div class="column content {isEditMode ? 'splitted two-thirds' : ''}">
    {#if doc.title.length}
        <h3>{doc.title}</h3>
    {/if}
    {#each doc.lines as line}
        <div class="line">
            {#if line.isLineBreak}
                <hr />
            {:else}
                {#each line.words as word (word.id)}
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <div
                        class="dword"
                        on:mouseenter={() => (currentWord = word.left?.value)}
                        on:mouseleave={() => (currentWord = undefined)}
                        on:click={(e) =>
                            dispatch("wordsPairClick", { e, word })}
                    >
                        <div data-type="left">
                            {#if word.left}
                                <span style="vertical-align: middle;"
                                    >{word.left.value}</span
                                >
                                {#if word.left.tooltip}
                                    <Tooltip
                                        text={word.left.tooltip}
                                        {isEditMode}
                                    />
                                {/if}
                            {:else}
                                <span style="font-style:normal"> ⚠️ </span>
                            {/if}
                        </div>
                        <div
                            data-type="right"
                            style={puzzledWords[word.id]
                                ? puzzledStyle
                                : nonPuzzledStyle}
                        >
                            {#if word.right}
                                {@html grammarChecked(word.right.value)}
                            {:else}
                                <span style="font-style:normal"> ⚠️ </span>
                            {/if}
                        </div>
                    </div>
                {/each}
            {/if}
        </div>
    {/each}
</div>

<style>
    :global(span.nondict) {
        padding: 0 4px;
        border-bottom: 3px dashed #c62828;
    }

    :global(span.nondict.blue) {
        padding: 0 4px;
        border-color: #1565c0;
    }
</style>
