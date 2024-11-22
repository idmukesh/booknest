import "../books.css";
import "../browse-book.css";
import { Link } from "react-router-dom"; // Import Link for navigation between pages
import { useState } from "react";
import { BookData } from "../assets/BookData";
import PopularBooks from "./PopularBooks";

function BrowseBook() {
  const [filteredBook, setFilteredBook] = useState(BookData); // State to store filtered books
  const [searchTerm, setSearchTerm] = useState(""); // State to track the search term
  const [selectedCategory, setSelectedCategory] = useState(""); // State to track the selected category

  // Handle search input and filter books based on title or author
  const handleSearch = () => {
    let filtered = BookData;
    filtered = filtered.filter(
      (book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredBook(filtered); // Update the filtered books
    // setSearchTerm('') // Optionally reset search term after search
  };

  // Reset filter and search term
  const handleBack = () => {
    setFilteredBook(BookData); // Reset the filtered book list
    setSearchTerm(""); // Optionally clear the search term
    setSelectedCategory(""); // Optionally clear selected category
  };

  return (
    <section className="browse-book-section">
      <div className="search-container">
        <div className="category">
          <select
            name="category"
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Select a category</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Mystery & Thriller">Mystery & Thriller</option>
          </select>
          {/* Link to a route that shows books from the selected category */}
          <Link to={`/book/${selectedCategory}`}>
            <button disabled={!selectedCategory}>Search by Category</button>
          </Link>
        </div>

        <div className="search-input">
          <input
            type="text"
            placeholder="Title or Author name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Submit</button>
        </div>
      </div>

      <section className="books-cards-section">
        {filteredBook.length > 0 ? (
          // Display books if there are any in the filtered list
          filteredBook.map((books) => (
            <PopularBooks
              title={books.title}
              author={books.author}
              image={books.coverImage}
              description={books.description}
              key={books.id}
              id={books.id}
            />
          ))
        ) : (
          // Display "No Books Found" if the filtered list is empty
          <>
            <h2>No Books Found</h2>
            <button onClick={handleBack}>Back</button> {/* Button to reset and show all books */}
          </>
        )}
      </section>
    </section>
  );
}

export default BrowseBook;
