let data = null;

/**
 * Fetches data from the API.
 * @returns {Promise<Array<Object>>|undefined} An array or undefined if an error occurs
 * @throws {Error} If fetch operation fails
 */
async function fetchData() {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts');
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
 * Posts the resulting data to the API.
 * @param {Object} data - Data to be posted
 * @returns {Promise<Object>} The response from the API.
 * @throws {Error} If the post operation fails.
 */
async function postResult(data) {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
		  method: 'POST',
		  body: JSON.stringify({
			title: 'Longest Title Found',
			body: `The longest title is: "${data.title}" (Post ID: ${data.id})`,
			userId: 1,
		  }),
		  headers: {
			'Content-type': 'application/json; charset=UTF-8',
		  },
		});
	
		return await response.json();
	  } catch (error) {
		console.error('Error posting data:', error);
		throw error;
	  }
}

/**
 * Orchestrates the entire process of fetching data, finding the most available date, and posting the result.
 * @returns {Promise<void>}
 */
async function solution() {
	try {
		// Fetch data
		const data = await fetchData();

		// Process data
		if (data) {
			console.log('Data fetched:', data);
			console.log('Processing data...');

			processedData = processData(data);
			console.log('Processed data:', processedData);
			document.getElementById('apiData').textContent = processedData.title;

			// Post data
			console.log('Posting the processed data...')
			const result = await postResult(processedData);
			console.log('Post result:', result);
		}
	} catch(error) {
		console.log('Error:', error);
	}
}

// Run the program.
solution();

