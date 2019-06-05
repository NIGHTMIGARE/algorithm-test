/**
 * 回文串
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
	let maxString = [];
	if (s.length <= 1) {
		return s;
	}
	for (let i = 0; i < s.length; i++) {
		let j = 0,
			k = 0;

		while (s[i + j] === s[i - j] && s[i + j] && s[i - j]) {
			j++;
		}
		maxString.push(s.slice(i - (j-1), i + j))
		j = 0;
		while (s[(i + 1) + k] === s[i - k] && s[(i + 1) + k] && s[i - k]) {
			k++;
		}

		maxString.push(s.slice(i - (k-1), (i + 1) + k))
		k = 0;
	}
	return maxString.sort((a, b) => {
		return b.length - a.length
	})[0];
};
