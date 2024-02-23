<script lang="ts">
  import { tick } from "svelte";
  import {
    parseText,
    type Doc,
    type WordsPair,
    type PositionedText,
  } from "./lib/parser";
  import { colors, type ColorScheme } from "./lib/colors";
  import Playground from "./components/Playground.svelte";
  import Editor from "./components/Editor.svelte";
  import Controls from "./components/Controls.svelte";
  import { appHelpText } from "./lib/data";
  import { IS_DEV } from "./lib/utils";

  let editorText = "";
  let isEditMode = true;
  let selectedColor: ColorScheme;

  let puzzledWords: { [key: number]: true } = {};

  const name = localStorage.getItem("selectedColorName");
  const userSelected = colors.find((c) => c.name == name);
  if (userSelected) {
    selectedColor = userSelected;
  } else {
    selectedColor = colors[0];
  }
  $: localStorage.setItem("selectedColorName", selectedColor.name);

  let editor: Editor;

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

  if (import.meta.env.MODE === "development") {
    console.log("We are in development mode!");
  } else if (import.meta.env.MODE === "production") {
    console.log("We are in production mode!");
  }

  function setAllPuzzled(isPuzzled: boolean) {
    if (isPuzzled) {
      const allWords: any = {};
      doc.lines
        .flatMap((l) => l.words.map((w) => w.id))
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
      editorText = appHelpText;
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

  function onFileInput(e: CustomEvent<{ fileInput: HTMLInputElement }>) {
    const fileInput = e.detail.fileInput;
    const file = fileInput.files?.[0];
    if (file) {
      readFile(file, (text) => {
        editorText = text;
        fileInput.value = "";
      });
    }
  }

  function readFile(source: Blob, onLoad: (text: string) => void) {
    const reader = new FileReader();
    reader.addEventListener("load", (event) => {
      editorText = event.target?.result?.toString() ?? "";
      onLoad(editorText);
    });
    reader.readAsText(source);
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
        if (detectClickedPart(e, e.currentTarget) == "lower") {
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
      const id = pair.id;
      if (puzzledWords[id]) {
        delete puzzledWords[id];
      } else {
        puzzledWords[id] = true;
      }
      puzzledWords = puzzledWords;
    }
  }

  function selectText(text: PositionedText) {
    editor.setSelection(text.start, text.end);
  }

  function detectClickedPart(event: any, target: any): "upper" | "lower" {
    var rect = target.getBoundingClientRect();
    var y = event.clientY - rect.top;
    var divHeight = rect.bottom - rect.top;

    if (y < divHeight / 2) {
      return "upper";
    } else {
      return "lower";
    }
  }
</script>

<div class="container">
  <div class="row" style="margin-top: 1%;margin-bottom: 1%;">
    <div class="column">
      <Controls
        {isEditMode}
        bind:selectedColor
        on:clearArea={clearArea}
        on:help={help}
        on:hideAll={() => setAllPuzzled(true)}
        on:showAll={() => setAllPuzzled(false)}
        on:print={doPrint}
        on:fileInput={onFileInput}
        on:saveTxt={saveTxt}
        on:toggleEditMode={toggleEditor}
      />

      <div class="row">
        <Editor bind:this={editor} bind:value={editorText} {isEditMode} />
        <Playground
          {puzzledWords}
          {isEditMode}
          {selectedColor}
          {doc}
          on:wordsPairClick={(e) => onWordsPairClick(e.detail.e, e.detail.word)}
        />
      </div>
    </div>
  </div>
</div>
