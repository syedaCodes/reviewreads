export function findItem(arr, findItem) {
  const foundItem = arr?.find((item) => item.key === findItem.key);
  return foundItem;
}
