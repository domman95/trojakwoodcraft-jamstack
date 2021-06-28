export default function sortByNewest(arr) {
  const result = arr.sort((a, b) => {
    const publishedAtA = a.meta.publishedAt;
    const publishedAtB = b.meta.publishedAt;

    return publishedAtA < publishedAtB ? 1 : -1;
  });

  return result;
}
