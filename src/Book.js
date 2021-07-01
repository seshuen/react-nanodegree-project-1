import React from "react";
import PropTypes from "prop-types";

// Create Stateless component
const Book = (props) => {
  /*
   * TODO: Fix the search without shelf property
   */
  const book = props.book;
  const hasShelf =
    props.shelfBooks &&
    props.shelfBooks.filter((shelfBook) => shelfBook.id === book.id);

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
              value={
                book.shelf || hasShelf.length > 0
                  ? book.shelf
                    ? book.shelf
                    : hasShelf[0].shelf
                  : "none"
              }
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
  shelfBooks: PropTypes.array,
  handleBookShelfChange: PropTypes.func.isRequired,
};

export default Book;
