async function getData(url) {
  try {
    const request = await fetch(url);
    if (!request.ok) {
      return { error: request.status }
    }
    const data = await request.json();
    return data;
  } catch (e) {
    console.log(e);
    return { error: e }
  }
}

export default getData;
