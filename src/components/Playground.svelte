<script lang="ts">
    import type { ColorScheme } from "../lib/colors";
    import type { Doc } from "../lib/parser";
    import { createEventDispatcher } from "svelte";
    import Tooltip from "./Tooltip.svelte";

    export let isEditMode: boolean;
    export let selectedColor: ColorScheme;
    export let doc: Doc;
    export let puzzledWords: { [key: number]: true };

    const dispatch = createEventDispatcher();

    $: puzzledStyle = `background: ${selectedColor.background}; color: ${selectedColor.background}`;
    $: nonPuzzledStyle = `color: ${selectedColor.foreground}`;

    let currentWord: string | undefined;

    document.body.addEventListener("keydown", (e) => {
        if (e.code == "KeyQ" && currentWord?.length) {
            e.preventDefault();
            window.open("https://wooordhunt.ru/word/" + currentWord);
        }
    });
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
                                {word.left.value}
                                {#if word.left.tooltip}
                                    <Tooltip text={word.left.tooltip} />
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
                                {word.right.value}
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
