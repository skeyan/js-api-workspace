let data = null;

/**
 * Fetches data from the API.
 * @returns {Promise<Array<Object>>|undefined} An array or undefined if an error occurs
 * @throws {Error} If fetch operation fails
 */
async function fetchData() {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts');
		// .then((res) => res.json())
		// .then((json) => {
		// 	console.log('Response fetched:', json);
		// 	data = json;
		// 	document.getElementById('apiData').textContent = data[0]?.title;
		// });
		return await response.json();
	  } catch (error) {
		console.error('Error fetching data:', error);
	  }
}

/**
 * Finds the post with the longest title.
 * @param {Array<Object>} data - An array of post objects.
 * @returns {Object|null} The post with the longest title, or null if no posts are found.
 */
function processData(data) {
	if (data.length === 0) return null;
  
	return data.reduce((longest, current) => 
	  current.title.length > longest.title.length ? current : longest
	);
}

/**
 * Orchestrates the entire process of fetching data, finding the most available date, and posting the result.
 * @returns {Promise<void>}
 */
async function solution() {
	// Fetch data
	const data = await fetchData();

	// Process data
	if (data) {
		console.log('Data fetched:', data);
		console.log('Processing data...');
		processedData = processData(data);
		console.log('Processed data:', processedData);

		// Post data

	}
}

// Run the program.
solution();

