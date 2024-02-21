<script lang="ts">
  import { tick } from "svelte";
  import {
    parseText,
    type Doc,
    type WordsPair,
    type PositionedText,
  } from "./lib/parser";

  const tip = `!!Language Learning Tool\n\ntry to+click on words and buttons\n\nпопробуй нажать на слова и кнопки\nlet's learn\nдавай изучать\n\nyour language\nтвой язык\n\n(hover a+word and press "Q" for fun)\nнаведи на+слово и нажми "Q" для веселья\n-\nwhile you're+enjoying+it\nпока тебе+это+нравится\n`;
  let currentWord: string | undefined | null = null;
  let editorText = "";
  let editor: HTMLTextAreaElement;
  let isEditMode = true;
  let puzzledWords: { [key: number]: true } = {};

  window.onload = () => {
    // useful if browser restores state
    editorText = editor.value;
  };

  let doc: Doc = {
    title: "",
    lines: [],
  };
  $: {
    doc = parseText(editorText);
    document.title = doc.title;
  }

  $: {
    editorText; // when changed
    puzzledWords = {};
  }

  window.onbeforeunload = function (e) {
    if (editorText.trim() != "") {
      e.preventDefault();
    }
  };

  document.body.addEventListener("keydown", (e) => {
    if (e.code == "KeyQ" && currentWord?.length) {
      e.preventDefault();
      window.open("https://wooordhunt.ru/word/" + currentWord);
    }
  });

  function setAllPuzzled(isPuzzled: boolean) {
    if (isPuzzled) {
      const allWords: any = {};
      doc.lines
        .flatMap((l) => l.words.map(getId))
        .forEach((id) => {
          allWords[id] = true;
        });
      puzzledWords = allWords;
    } else {
      puzzledWords = {};
    }
  }

  function help() {
    isEditMode = true;
    if (
      !editorText.length ||
      confirm("Are you sure? Your text will be discarded")
    ) {
      editorText = tip;
    }
  }

  async function doPrint() {
    isEditMode = false;
    setAllPuzzled(false);
    await tick();
    print();
  }

  function toggleEditor() {
    isEditMode = !isEditMode;
  }

  function clearArea() {
    if (confirm("Are you sure? Your text will be discarded")) {
      isEditMode = true;
      editorText = "";
    }
  }

  function onFileInput() {
    const input = (document.getElementById("uploadFile") as any).files[0];
    if (input) {
      readFile(input, document.querySelector(".editor>textarea"));
    }
  }

  function readFile(source: any, target: any) {
    const reader = new FileReader();
    reader.addEventListener("load", (event) => {
      editorText = event.target!.result!.toString();
      (document.getElementById("uploadFile") as any)!.value = null;
    });
    reader.readAsText(source);
  }

  function loadTxt() {
    document.getElementById("uploadFile")!.click();
  }

  function saveTxt() {
    let file = document.title + "-" + Date.now() + ".txt";

    let link = document.createElement("a");
    link.download = file;
    let blob = new Blob(["" + editorText + ""], {
      type: "text/plain",
    });
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
  }

  function onWordsPairClick(e: MouseEvent, pair: WordsPair) {
    if (isEditMode) {
      if (pair.right && pair.left) {
        if (detectClickedPart(e, e.currentTarget) == DivPart.lower) {
          selectText(pair.right);
        } else {
          selectText(pair.left);
        }
      } else if (pair.right) {
        selectText(pair.right);
      } else if (pair.left) {
        selectText(pair.left);
      }
    } else {
      const id = getId(pair);
      if (puzzledWords[id]) {
        delete puzzledWords[id];
      } else {
        puzzledWords[id] = true;
      }
      puzzledWords = puzzledWords;
    }
  }

  function getId(pair: WordsPair): number {
    return pair.left?.position ?? pair.right?.position ?? -1;
  }

  function selectText(text: PositionedText) {
    selectTextInTextArea(
      editor,
      text.position,
      text.position + text.value.length,
    );
  }

  function selectTextInTextArea(
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

  enum DivPart {
    upper,
    lower,
  }

  function detectClickedPart(event: any, target: any): DivPart {
    var rect = target.getBoundingClientRect();
    var y = event.clientY - rect.top;
    var divHeight = rect.bottom - rect.top;

    if (y < divHeight / 2) {
      return DivPart.upper;
    } else {
      return DivPart.lower;
    }
  }
</script>

<div class="container">
  <div class="row" style="margin-top: 1%;margin-bottom: 1%;">
    <div class="column">
      <div class="controls row">
        <div class="three columns">
          <button
            class="editor-button {isEditMode ? 'button-primary' : ''}"
            on:click={toggleEditor}>Editor</button
          >
        </div>
        <div class="three columns">
          <button on:click={() => setAllPuzzled(true)}>Hide all</button>
          <button on:click={() => setAllPuzzled(false)}>Show all</button>
        </div>
        <div class="four columns" style="text-align: right;">
          <button on:click={clearArea}>Clear</button>
          <button on:click={loadTxt}>Load TXT</button>
          <input
            type="file"
            accept=".txt"
            id="uploadFile"
            hidden={true}
            on:change={onFileInput}
          />
          <button on:click={saveTxt}>Save TXT</button>
        </div>
        <div class="two columns" style="text-align: right;">
          <button on:click={help}>Help</button>
          <button on:click={doPrint}>Print</button>
        </div>
      </div>

      <div class="row">
        <div class="one-third column editor {isEditMode ? '' : 'hidden'}">
          <textarea
            class={isEditMode ? "splitted" : ""}
            spellcheck="false"
            bind:value={editorText}
            bind:this={editor}
            placeholder="Paste text here"
          ></textarea>
        </div>
        <div class="column content {isEditMode ? 'splitted two-thirds' : ''}">
          {#if doc.title.length}
            <h3>{doc.title}</h3>
          {/if}
          {#each doc.lines as line}
            <div class="line">
              {#if line.isLineBreak}
                <hr />
              {:else}
                {#each line.words as word (getId(word))}
                  <!-- svelte-ignore a11y-click-events-have-key-events -->
                  <!-- svelte-ignore a11y-no-static-element-interactions -->
                  <div
                    class="dword"
                    on:mouseenter={() => (currentWord = word.left?.value)}
                    on:mouseleave={() => (currentWord = undefined)}
                    on:click={(e) => onWordsPairClick(e, word)}
                  >
                    <div data-type="left">
                      {#if word.left}
                        {word.left.value}
                      {:else}
                        <span style="font-style:normal"> ⚠️ </span>
                      {/if}
                    </div>
                    <div
                      data-type="right"
                      class={puzzledWords[getId(word)] ? "puzzled" : ""}
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
      </div>
    </div>
  </div>
</div>

<style>
</style>
