async function fetchData(file) {
  const response = await fetch(file);
  const data = await response.json();
  return data;
}

export default fetchData;
