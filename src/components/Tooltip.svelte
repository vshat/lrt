<script lang="ts">
    import InfoIcon from "../assets/info.png";
    import { tooltip } from "../lib/tooltip";

    export let isEditMode: boolean;
    export let text: string;

    $: textSize = isEditMode ? "11pt" : "13pt";
    $: tooltipHtml = `<span style="font-size: ${textSize}">${text}</span>`;
</script>

<img
    alt=""
    use:tooltip={tooltipHtml}
    src={InfoIcon}
    style="width: {isEditMode ? 14 : 18}px; vertical-align: middle;"
/>
