TextUtil = {};

// Allows to format a string based on token patterns
// ie: formatString("mi text ${myBar} something", {myBar: "value"})
// result in: mi text value something
TextUtil.formatString = function (string, data) {
	var token;
	for (token in data) {
		if (data.hasOwnProperty(token)) {
			var rg = new RegExp("\\${" + token + "}", "g");
			string = string.replace(rg, data[token]);
		}
	}
	//replace missed tokens
	string = string.replace(/[\${]+[\w]+[}]/g, "");
	return string;
};
