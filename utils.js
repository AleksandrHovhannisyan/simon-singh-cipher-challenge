/**
 * @param {string} text
 * @param {Record<string, string>} substitutions
 */
export const substitute = (text, substitutions) =>
 text
   .split('')
   .map((symbol) => substitutions[symbol] ?? symbol)
   .join('');