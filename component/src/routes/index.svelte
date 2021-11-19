<script lang="ts">
    import Paginator from "$lib/Paginator.svelte";
    import {PaginationData} from "$lib/types";
    const paginationData:PaginationData = {
        numberPerPage:10,
        numberOfPages:4,
        numberOfRows:35
    }
</script>

<Paginator {paginationData} currentPageNumber="1" />