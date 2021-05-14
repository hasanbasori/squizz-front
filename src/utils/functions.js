/**
 * @param { string } keyword
 * @return { string }
 */
export function convertConstantToUrl(keyword) {
  return keyword.toLowerCase().replace('_', '-')
}
