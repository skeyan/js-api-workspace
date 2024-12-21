import { processData } from "./data-processor";
import { fetchData, postResult } from "./data-service";

/**
 * Orchestrates the entire process of fetching data, processing the data, and posting the result.
 * @async
 * @returns {Promise<void>}
 */
async function solution() {
	try {
		// Fetch data
		const data = await fetchData();

		if (data) {
			console.log('Data fetched:', data);
			console.log('Processing data...');

			// Process data
			let processedData = processData(data);
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

