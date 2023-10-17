# Review Reads

Review Reads is a React project built using CSS for styling and Vite as the development tool. The primary goal of this project is to help you learn how to create custom hooks in React while building a simple book review application. With Review Reads, you can search for books you've read, select the edition you read from the search results, give it a rating out of 5 stars, and add it to your "books reviewed" list.

## Table of Contents

-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
-   [Usage](#usage)
-   [Custom Hooks](#custom-hooks)
-   [Responsivenss](#responsiveness)
-   [Contributing](#contributing)
-   [Screenshots](#screenshots)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following software installed on your machine:

-   Node.js: Review Reads is built with Node.js, so make sure you have it installed. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

Follow these steps to get Review Reads up and running on your local machine:

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/review-reads.git
    ```

2. Navigate to the project directory:

    ```bash
    cd review-reads
    ```

3. Install the project dependencies:

    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

Review Reads should now be running on `http://localhost:3000` in your web browser.

## Usage

1. **Search for a Book:**

    - Type the title of the book you've read into the search bar.
    - Select the edition of the book you've read from the search results.

2. **Rate the Book:**

    - Give the book a rating out of 5 stars by clicking on the star icons.

3. **Add to Your "Books Reviewed" List:**

    - Click the "Add to Books Reviewed" button to add the book to your list of reviewed books.

4. **View Your Reviewed Books:**
    - Click the "View Reviewed Books" button to see the list of books you've reviewed.

## Responsiveness

Review Reads is designed to be a responsive web application, ensuring a great user experience on screens above 360 pixels in width. Here are some key points regarding its responsiveness:

-   The user interface is optimized for screens with a width of 360 pixels and above.
-   The layout and elements adapt to different screen sizes, making it easy to use on a variety of devices.
-   Whether you're using a desktop computer, laptop, tablet, or a larger smartphone, Review Reads will provide an enjoyable and functional experience.

The responsive design of Review Reads is tailored to screens above 360 pixels, offering a seamless experience for users on a wide range of devices.

## Custom Hooks

Review Reads is a learning project designed to teach you how to create custom React hooks. It contains custom hooks that help manage book data and user reviews. You can explore and learn from these hooks by examining the source code.

## Contributing

Contributions are welcome! If you want to improve or extend Review Reads, follow these steps:

1. Fork the repository to your own GitHub account.

2. Create a new branch for your feature or fix:

    ```bash
    git checkout -b feature-name
    ```

3. Make your changes and commit them:

    ```bash
    git commit -m 'Description of your changes'
    ```

4. Push your changes to your fork:

    ```bash
    git push origin feature-name
    ```

5. Open a pull request on the original repository, explaining your changes.

## Screenshots

### Search Page

![Search Page](/src/imgs/search.png)

On the search page, you can search for books you've read by typing the book title in the search bar.

### Reviewed Page

![Reviewed Page](/src/imgs/booksreviewed.png)

The reviewed page displays your list of reviewed books and their ratings.
