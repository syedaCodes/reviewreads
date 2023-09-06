const API_URL = "https://openlibrary.org";

export async function getBooks(query) {
    const res = await fetch(`${API_URL}/search.json?q=${query}`);

    if (!res.ok) throw Error("Failed getting books");

    const { docs } = await res.json();

    return docs;
}
