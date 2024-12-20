/**
 * Finds the post with the longest title.
 * @param {Array<Object>} data - An array of post objects.
 * @returns {Object|null} The post with the longest title, or null if no posts are found.
 */
export function processData(data) {
	if (data.length === 0) return null;
  
	return data.reduce((longest, current) => 
	  current.title.length > longest.title.length ? current : longest
	);
}