export const getImageUrl = (path) => {
  // allow "theTowerOfAlbion/cover.png" or "/theTowerOfAlbion/cover.png"
  // also allow full http(s) URLs unchanged
  if (/^https?:\/\//.test(path)) return path;
  const clean = String(path || "").replace(/^\/+/, "");
  const withAssets = clean.startsWith("assets/") ? clean : `assets/${clean}`;
  return `${import.meta.env.BASE_URL}${withAssets}`;
};

