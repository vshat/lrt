<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { colors, type ColorScheme } from "../lib/colors";

    export let isEditMode: boolean;
    export let selectedColor: ColorScheme;

    const dispatch = createEventDispatcher();
    let fileInput: HTMLInputElement;
</script>

<div class="controls row">
    <div class="two columns">
        <button
            class="editor-button {isEditMode ? 'button-primary' : ''}"
            on:click={() => dispatch("toggleEditMode")}>Editor</button
        >
    </div>
    <div class="three columns">
        <button on:click={() => dispatch("hideAll")}>Hide all</button>
        <button on:click={() => dispatch("showAll")}>Show all</button>
    </div>
    <div class="four columns" style="text-align: right;">
        <button on:click={() => dispatch("clearArea")}>Clear</button>
        <button on:click={() => fileInput.click()}>Load TXT</button>
        <input
            type="file"
            accept=".txt"
            bind:this={fileInput}
            id="uploadFile"
            hidden={true}
            on:change={() => dispatch("fileInput", { fileInput })}
        />
        <button on:click={() => dispatch("saveTxt")}>Save TXT</button>
    </div>
    <div class="three columns" style="text-align: right;">
        <button on:click={() => dispatch("help")}>Help</button>
        <button on:click={() => dispatch("print")}>Print</button>
        <span>
            <select
                style="width: 50px; appearance:none; border: 2px solid {selectedColor.foreground}"
                bind:value={selectedColor}
            >
                {#each colors as colors}
                    <option value={colors}>
                        {colors.name}
                    </option>
                {/each}
            </select>
        </span>
    </div>
</div>
