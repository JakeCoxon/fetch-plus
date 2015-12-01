/**
 * @copyright © 2015, Rick Wong. All rights reserved.
 */

// Export using middleware creation notation.
module.exports = (userAgents) => (request) => {
	if (typeof userAgents !== "string") {
		userAgents = Object.keys(userAgents).map((key) => {
			return [key, userAgents[key]].join("/").replace(/[\t\r\n\s]+/g, "-");
		}).join(" ");
	}

	request.options.headers["User-Agent"] = userAgents;
};
