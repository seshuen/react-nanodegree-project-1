import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./Book";

class Books extends Component {
  /*
   * This is a stateless Books collection component
   */
  static propTypes = {
    books: PropTypes.array.isRequired,
    shelfBooks: PropTypes.array,
    handleBookShelfChange: PropTypes.func.isRequired,
  };

  render() {
    return (
      <ol className="books-grid">
        {this.props.books.map((book) => (
          <Book
            key={book.id}
            book={book}
            shelfBooks={this.props.shelfBooks}
            handleBookShelfChange={this.props.handleBookShelfChange}
          />
        ))}
      </ol>
    );
  }
}

export default Books;
