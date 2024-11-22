import "../more-detail.css"; 
import { BookData } from "../assets/BookData"; 
import { useParams } from "react-router-dom"; 
import { Link } from "react-router-dom"; 

function MoreDetail(props) {
  let params = useParams(); // Get the book ID from the URL parameters
  let bookdes = BookData.filter((books) => books.id == params.id); // Find the book by its ID

  return (
    <>
      {bookdes.map((book) => (
        <div key={book.id} className="more-detail-books-card">
          <img
            src={book.coverImage}
            alt={book.title}
            height="400px"
            width="400px"
          />
          <div className="more-detail-books-content">
            <h4>Title: {book.title}</h4>
            <h5>Author: {book.author}</h5>
            <h5>Genre: {book.genre}</h5>
            <h5>Language: {book.language}</h5>
            <p>Description :- {book.description}</p>
            <h5>Rating: {book.rating}</h5>
            {/* Conditionally render back buttons based on the current URL path */}
            {location.pathname === `/browsebook/books/${book.id}` && (
              <Link to="/browsebook">
                <button className="back-btn">Back</button> {/* Back to browsebook */}
              </Link>
            )}
            {location.pathname === `/books/${book.id}` && (
              <Link to="/">
                <button className="back-btn">Back</button> {/* Back to home */}
              </Link>
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export default MoreDetail;
