import type {PaginationData} from "./types"

export function calcPageArray(paginationData: PaginationData): number[] {
    let result: number[] = []
    for (let i = 1; i <= paginationData.numberOfPages; i++) {
        result.push(i)
    }
    return result
}