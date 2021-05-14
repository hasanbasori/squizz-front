/**
 * @param { string } keyword
 * @return { string }
 */
export function convertConstantToUrl(keyword) {
  return keyword.toLowerCase().replaceAll('_', '-')
}

/**
 * @param { string } keyword
 * @return { string }
 */
export function convertUrlToConstant(keyword) {
  return keyword.toUpperCase().replaceAll('-', '_')
}

/**
 * @param { string } dateString
 * @return { string }
 */
export function convertDateStringToIso8601(dateString) {
  return new Date(dateString).toISOString()
}
