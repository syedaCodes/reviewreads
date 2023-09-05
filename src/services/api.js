const API_URL = "https://openlibrary.org";

export async function getBooks(query) {
    const res = await fetch(`${API_URL}/search.json?q=${query}`);

    // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
    if (!res.ok) throw Error("Failed getting books");

    const { docs } = await res.json();

    return docs;
}
