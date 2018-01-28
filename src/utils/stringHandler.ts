export const removeTrailingSlash = (url: string) => (
  url.replace(/\?.*/, '').replace(/\/$/, '')
);

export const fullTrim = (text: string) => (
  text.replace(/^[\s　]+/, '').replace(/[\s　]+$/, '')
);
