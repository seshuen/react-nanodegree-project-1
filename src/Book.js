import React from "react";
import PropTypes from "prop-types";

// Create Stateless component
const Book = (props) => {
  const book = props.book;
  const bookCover = book.imageLinks
    ? book.imageLinks.thumbnail
    : "https://via.placeholder.com/128x193.png?text=No%20Book%20Cover";
  return (
    <li key={book.id}>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${bookCover})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              onChange={(event) =>
                props.handleBookShelfChange(book, event.target.value)
              }
              value={book.shelf}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors && book.authors.map((author) => author)}
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  handleBookShelfChange: PropTypes.func.isRequired,
};

export default Book;
