import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./Book";

class Books extends Component {
  /*
   * TODO: Create stateless component for book
   * TODO: Validate shelf value
   */
  static propTypes = {
    books: PropTypes.array.isRequired,
    handleBookShelfChange: PropTypes.func.isRequired,
  };

  render() {
    return (
      <ol className="books-grid">
        {this.props.books.map((book) => (
          <Book
            key={book.id}
            book={book}
            handleBookShelfChange={this.props.handleBookShelfChange}
          />
        ))}
      </ol>
    );
  }
}

export default Books;
