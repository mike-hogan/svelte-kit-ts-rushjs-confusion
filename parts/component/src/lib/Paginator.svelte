<script lang="ts">
    import type {PaginationData} from "./types";
    import {calcPageArray} from "./helpers";
    import {createEventDispatcher} from "svelte";

    export let paginationData: PaginationData
    export let currentPageNumber: number
    let pageArray = []
    $:pageArray = calcPageArray(paginationData)

    const dispatch = createEventDispatcher()
    function showPage(pageNumber:number) {
        dispatch("showPage",{pageNumber})
    }
</script>

<nav aria-label="Page navigation example">
    <ul class="pagination">
        {#if currentPageNumber === 1}
            <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
            </li>
        {:else}
            <li class="page-item">
                <a class="page-link" href="#" tabindex="-1" on:click|preventDefault={() => showPage(currentPageNumber - 1)}>Previous</a>
            </li>
        {/if}
        {#each pageArray as pa}
            {#if pa === currentPageNumber}
                <li class="page-item active"><a class="page-link" href="#">{pa}</a></li>
            {:else}
                <li class="page-item"><a class="page-link" href="#" on:click|preventDefault={() => showPage(pa)}>{pa}</a></li>
            {/if}
        {/each}
        {#if currentPageNumber === paginationData.numberOfPages}
            <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Next</a>
            </li>
        {:else}
            <li class="page-item">
                <a class="page-link" href="#" tabindex="-1" on:click|preventDefault={() => showPage(currentPageNumber + 1)}>Next</a>
            </li>
        {/if}
    </ul>
</nav>