const API_URL = "https://openlibrary.org";

export async function getBooks(query) {
    const response = {
        docs: [],
        error: "",
    };
    try {
        const res = await fetch(`${API_URL}/search.json?q=${query}`);

        if (!res.ok) throw "Failed fetching books";

        const { docs } = await res.json();

        if (!docs.length) throw "Book not found";

        response.docs = docs;
    } catch (err) {
        response.error = err.message;
    }

    return response;
}
