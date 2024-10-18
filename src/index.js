let data = null;

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => {
	console.log(json);
	data = json;
	document.getElementById('apiData').textContent = data[0]?.title;
});