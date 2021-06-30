import React, { Component } from "react";
import PropTypes from "prop-types";
import Books from "./Books";

class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    shelf: PropTypes.string.isRequired,
    shelfTitle: PropTypes.string.isRequired,
    handleBookShelfChange: PropTypes.func.isRequired,
  };
  render() {
    const books = this.props.books.filter(
      (books) => books.shelf.toLowerCase() === this.props.shelf.toLowerCase()
    );
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
        <div className="bookshelf-books">
          <Books
            books={books}
            handleBookShelfChange={this.props.handleBookShelfChange}
          />
        </div>
      </div>
    );
  }
}

export default BookShelf;
