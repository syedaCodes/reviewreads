export function findItem(arr, findItem) {
    const foundItem = arr?.find((item) => item.isbn === findItem.isbn);
    return foundItem;
}
