!async function(){const t=await async function(){try{const t=await fetch("https://jsonplaceholder.typicode.com/posts");return await t.json()}catch(t){console.error("Error fetching data:",t)}}();t&&console.log("Data fetched:",t)}();