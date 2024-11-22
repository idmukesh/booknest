import { useParams } from "react-router-dom"; 
import { BookData } from "../assets/BookData"; 
import PopularBooks from "./PopularBooks"; 
import { Link } from "react-router-dom"; 
import "../category-books.css";

function CategoryBooks() {
  const { category } = useParams(); // Get the category from URL params
  const filteredBooks = BookData.filter((book) => book.genre == category); // Filter books by genre/category

  return (
    <section className="category-books-section">
      <h2>{category.replace("-", " ")}</h2> {/* Display category name, replace hyphens with spaces */}
      <Link to="/browsebook">
        <button>Back To Browse Book</button> {/* Button to navigate back to browse book section */}
      </Link>
      <section className="books-cards-section">
        {filteredBooks.length > 0 ? (
          // Map through filtered books and display them
          filteredBooks.map((book) => (
            <PopularBooks
              title={book.title}
              author={book.author}
              image={book.coverImage}
              description={book.description}
              key={book.id}
              id={book.id}
            />
          ))
        ) : (
          // Display message if no books found for the selected category
          <>
            <h1>No Books is available</h1>
          </>
        )}
      </section>
    </section>
  );
}

export default CategoryBooks;
