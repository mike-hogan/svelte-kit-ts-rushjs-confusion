<script lang="ts">
    import {Paginator} from "@parts/component";
    import type {PaginationData} from "@parts/component";

    const paginationData:PaginationData = {
        numberPerPage:10,
        numberOfPages:4,
        numberOfRows:35
    }
</script>

<h3>Rushjs: Component below</h3>
<Paginator {paginationData} currentPageNumber="1" />