<script>
    import { ME } from "../constants";
    const currentYear = new Date().getFullYear();
</script>

<footer>
    © {currentYear}, {ME}
</footer>

<style>
    footer {
        border-top: gray 1px solid;
        padding: 3rem 1rem 1rem 1rem;
        margin: 3rem 2rem 0 2rem;
        text-align: center;
    }
</style>