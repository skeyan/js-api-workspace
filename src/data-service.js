/**
 * Fetches data from the API.
 * @returns {Promise<Array<Object>>|undefined} An array or undefined if an error occurs
 * @throws {Error} If fetch operation fails
 */
export async function fetchData() {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts');
		return await response.json();
	  } catch (error) {
		console.error('Error fetching data:', error);
	  }
}


/**
 * Posts the resulting data to the API.
 * @param {Object} data - Data to be posted
 * @returns {Promise<Object>} The response from the API.
 * @throws {Error} If the post operation fails.
 */
export async function postResult(data) {
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