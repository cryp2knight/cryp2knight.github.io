<script>
    import { MEDIUM_RSS } from "../src/constants";
    import { onMount } from "svelte";
    let rssItems;
    onMount(async () => {
        const response = await fetch(MEDIUM_RSS)
        const text = await response.text()
        const xml = await new DOMParser().parseFromString(text, "text/xml")
        console.log(xml.querySelectorAll("item"))
    });
</script>

<section id="blogs">
    <h2>Blogs</h2>
</section>
