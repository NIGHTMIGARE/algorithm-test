/**
 * Z 字形变换
 * @param {*} s 
 * @param {*} numRows 
 */
var convert = function(s, numRows) {

	if (s.length < 3 || numRows == 1) {
		return s;
	}
	let l = numRows * 2 - 2;
	let ss = ""
	for (let i = 0; i < numRows; i++) {
		for (let j = 0; j < Math.ceil(s.length / l); j++) {
			if (i == 0) {
				if (s[l * j] != undefined) ss += s[l * j];
			} else
			if (i == numRows - 1) {
				if (s[l * j + numRows - 1] != undefined) ss += s[l * j + numRows - 1]
			} else {
				if (s[l * j + i] != undefined) ss += s[l * j + i];
				if (s[l * (j + 1) - i] != undefined) ss += s[l * (j + 1) - i];
			}
		}
	}
	return ss;
};
convert("PAYPALISHIRING", 3)