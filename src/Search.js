import React, { Component } from "react";
import PropTypes from "prop-types";
import * as BooksAPI from "./BooksAPI";
import Books from "./Books";
import { Link } from "react-router-dom";

class Search extends Component {
  static propTypes = {
    handleBookShelfChange: PropTypes.func.isRequired,
  };

  state = {
    searchText: "",
    books: [],
  };

  getSearchResult = (searchTerm) => {
    searchTerm !== "" &&
      BooksAPI.search(searchTerm, 20).then((books) => {
        this.setState(() => ({
          searchText: searchTerm,
          books: books,
        }));
      });
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => this.getSearchResult(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {this.state.books.length > 0 && (
            <ol className="books-grid">
              <Books
                books={this.state.books}
                handleBookShelfChange={this.props.handleBookShelfChange}
              />
            </ol>
          )}
        </div>
      </div>
    );
  }
}

export default Search;
