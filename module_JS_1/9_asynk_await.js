async function fetchData(url) {
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    let data = await response.json();
    return data;
  } catch (error) {
    console.error("При получении данных произошла ошибка:", error);
  }
}

fetchData("https://jsonplaceholder.typicode.com/posts/1")
  .then((data) => {
    console.log("Полученные данные:", data);
  })
  .catch((error) => {
    console.error("Ошибка:", error);
  });
