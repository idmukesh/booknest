import { Link } from "react-router-dom"; 
import "../books.css"; 

function PopularBooks(props) {
  return (
    <div className="books-card">
      <img src={props.image} alt="" />
      <div className="books-content">
        <h4>{props.title}</h4>
        <h5>{props.author}</h5>
        <p>{props.description}</p>
        {/* Link to the more details page for the specific book */}
        <Link to={`books/${props.id}`}>
          <button> More Details</button>
        </Link>
      </div>
    </div>
  );
}

export default PopularBooks;
