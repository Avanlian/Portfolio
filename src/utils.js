export const getImageUrl = (path) => {
  const assetPath = `/assets/${path}`;
  return new URL(assetPath, import.meta.url).href;
};