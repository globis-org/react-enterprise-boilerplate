/**
 * @usage
 * import { genI18nResources } from './utils/localeHandler';
 * const resources = genI18nResources(
 *   require.context('../locales', true, /\.json$/),
 * );
 */
export const genI18nResources = (
  context: __WebpackModuleApi.RequireContext,
) => {
  const resources = {};

  context.keys().forEach(file => {
    const matched = file.match(/([^\/]+)\/([^\/]+)\.json$/);
    const [id, topKey] = matched ?
      [matched[1], matched[2]] : ['id', 'topKey'];

    if (resources[id]) {
      resources[id]['translation'][topKey] = context(file);
    } else {
      resources[id] = {
        translation: {
          [topKey]: context(file),
        },
      };
    }
  });

  return resources;
};
