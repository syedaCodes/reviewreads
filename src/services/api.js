const API_URL = 'https://openlibrary.org';

export async function getBooks(query) {
  const response = {
    docs: [],
    error: '',
  };
  try {
    const res = await fetch(`${API_URL}/search.json?q=${query}`);

    if (!res.ok) throw 'Failed fetching books';

    const { docs } = await res.json();

    if (!docs.length || !docs.length > 0) throw 'Book not found';

    response.docs = docs;
  } catch (err) {
    if (typeof err === 'object') {
      response.error = err.message;
    } else {
      response.error = 'No results found';
    }
  }

  return response;
}
