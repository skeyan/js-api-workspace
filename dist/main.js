(()=>{let t=null;fetch("https://jsonplaceholder.typicode.com/posts").then((t=>t.json())).then((e=>{console.log(e),t=e,document.getElementById("apiData").textContent=t[0]?.title}))})();