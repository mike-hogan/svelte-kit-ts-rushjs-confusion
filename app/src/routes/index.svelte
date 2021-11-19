<script lang="ts">
    import {Paginator} from "../../../component";
    import type {PaginationData} from "../../../component";

    const paginationData:PaginationData = {
        numberPerPage:10,
        numberOfPages:4,
        numberOfRows:35
    }
</script>

<h3>Component below</h3>
<Paginator {paginationData} currentPageNumber="1" />