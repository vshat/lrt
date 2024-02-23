<script lang="ts">
    import InfoIcon from "../assets/info.png";
    import { tooltip } from "../lib/tooltip";

    export let text: string;
</script>

<img
    alt=""
    use:tooltip={text}
    src={InfoIcon}
    style="width: 20px; margin-left:4px"
/>
