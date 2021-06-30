import React from "react";
import * as BooksAPI from "./BooksAPI";
import BookShelf from "./BookShelf";
import Search from "./Search";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
  };

  updateBoooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books,
      }));
    });
  };

  componentDidMount() {
    this.updateBoooks();
  }

  handleBookShelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then((res) => {
      this.updateBoooks();
    });
  };

  render() {
    return (
      <Router>
        <div className="app">
          <Route
            exact
            path="/"
            render={() => (
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  <div>
                    <BookShelf
                      shelf="currentlyReading"
                      shelfTitle="Currently Reading"
                      books={this.state.books}
                      handleBookShelfChange={this.handleBookShelfChange}
                    />
                    <BookShelf
                      shelf="wantToRead"
                      shelfTitle="Want to Read"
                      books={this.state.books}
                      handleBookShelfChange={this.handleBookShelfChange}
                    />
                    <BookShelf
                      shelf="read"
                      shelfTitle="Read"
                      books={this.state.books}
                      handleBookShelfChange={this.handleBookShelfChange}
                    />
                  </div>
                </div>
                <div className="open-search">
                  <Link to="/search">Add a book</Link>
                </div>
              </div>
            )}
          />
          <Route
            path="/search"
            render={() => (
              <Search handleBookShelfChange={this.handleBookShelfChange} />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default BooksApp;
