/**
 * @param {string} text
 * @param {Record<string, string>} substitutions
 */
export const substitute = (text, substitutions) =>
  text
    .split('')
    .map((symbol) => substitutions[symbol] ?? symbol)
    .join('');

/**
 * Removes all punctuation (except those appearing within a word) from the given string, preserving words.
 * @param {string} string
 */
export const removePunctuation = (string) => {
  return string.replace(/[~`!@#$%^&*()_+={[}\]|\\:;"<,>.?/\u2013\u2014]/g, '');
};

export const removeWhitespace = (string) => string.replace(/\s/g, '');

/**
 * @param {string} text
 * @param {'symbol'|'word'} type The type of frequency analysis to do
 */
export const getFrequencyTable = (text, type = 'symbol') => {
  const cleanedText = removePunctuation(removeWhitespace(text));
  const elements = cleanedText.split(type === 'symbol' ? '' : ' ');
  return elements.reduce((count, element) => {
    if (!count[element]) {
      count[element] = 0;
    }
    count[element]++;
    return count;
  }, {});
};
