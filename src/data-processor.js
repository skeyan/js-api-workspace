/**
 * Processes the data
 * @param {Array<Object>} data - TBA
 * @returns {Object|null} TBA
 */
export function processData(data) {
	if (data.length === 0) return null;
  
	return data.reduce((longest, current) => 
	  current.title.length > longest.title.length ? current : longest
	);
}