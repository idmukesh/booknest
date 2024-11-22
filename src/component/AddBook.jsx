import React, { useState } from "react";
import { BookData } from "../assets/BookData"; 
import '../add-book.css'

function AddBook() {
  const [title, setTitle] = useState(""); 
  const [author, setAuthor] = useState(""); 
  const [description, setDescription] = useState(""); 
  const [image, setImage] = useState(""); 
  const [language, setLanguage] = useState(""); 
  const [genre, setGenre] = useState(""); 
  const [errors, setErrors] = useState({}); // Holds validation errors

  // Validate form fields before submission
  const validateForm = () => {
    const newErrors = {}; 
    if (!title) newErrors.title = "Title is required."; 
    if (!author) newErrors.author = "Author name is required."; 
    if (!description) newErrors.description = "Description is required."; 
    if (!image) newErrors.image = "Image URL is required."; 
    if (!language) newErrors.language = "Language is required."; 
    if (!genre) newErrors.genre = "Genre is required."; 
    
    // Validate image URL format
    const urlPattern = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/);
    if (image && !urlPattern.test(image)) { 
      newErrors.image = "Please enter a valid URL."; 
    }

    setErrors(newErrors); // Update errors state
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    if (!validateForm()) { // Prevent form submission if validation fails
      return;
    }

    const newBook = {
      id: BookData.length, // Generate ID based on current length of BookData
      title,
      author,
      description,
      coverImage: image, 
      language,
      genre,
    };

    BookData.push(newBook); // Add new book to the BookData array

    // Reset form fields and errors
    setTitle("");
    setAuthor("");
    setDescription("");
    setImage("");
    setLanguage("");
    setGenre("");
    setErrors({}); 

    alert("Book added successfully!"); // Show success message
  };

  return (
    <form className="add-book-form" onSubmit={handleSubmit}>
      <h2>Add a New Book</h2>
      <div>
        <label>Title:</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        {errors.title && <span className="error">{errors.title}</span>}
      </div>
      <div>
        <label>Author:</label>
        <input 
          type="text" 
          value={author} 
          onChange={(e) => setAuthor(e.target.value)} 
        />
        {errors.author && <span className="error">{errors.author}</span>}
      </div>
      <div>
        <label>Description:</label>
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
        {errors.description && <span className="error">{errors.description}</span>}
      </div>
      <div>
        <label>Image URL:</label>
        <input 
          type="url" 
          value={image} 
          onChange={(e) => setImage(e.target.value)} 
        />
        {errors.image && <span className="error">{errors.image}</span>}
      </div>
      <div>
        <label>Language:</label>
        <input 
          type="text" 
          value={language} 
          onChange={(e) => setLanguage(e.target.value)} 
        />
        {errors.language && <span className="error">{errors.language}</span>}
      </div>
      <div>
        <label>Genre:</label>
        <input 
          type="text" 
          value={genre} 
          onChange={(e) => setGenre(e.target.value)} 
        />
        {errors.genre && <span className="error">{errors.genre}</span>}
      </div>
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBook;
