import { processData } from "./data-processor";
import { fetchData, postResult } from "./data-service";

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

