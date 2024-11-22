import "../books.css"; 
import PopularBooks from "./PopularBooks"; 
import { BookData } from "../assets/BookData"; 
import { Link } from "react-router-dom"; 

function PopularBookList() {
  // Filter books with a rating of 5 or higher
  let filteredPopularBooks = BookData.filter((books) => books.rating >= 5); 

  return (
    <section className="books-section">
      <h1>
        Check out Some <span>Popular Books !</span>
      </h1>
      <section className="books-cards-section">
        {filteredPopularBooks.map((books) => {
          return (
            <>
              <PopularBooks
                key={books.id}
                title={books.title}
                author={books.author}
                image={books.coverImage}
                description={books.description}
                id={books.id}
              />
            </>
          );
        })}
      </section>
    </section>
  );
}

export default PopularBookList;
