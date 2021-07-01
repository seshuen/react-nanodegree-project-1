import React from "react";
import * as BooksAPI from "./BooksAPI";
import BookShelf from "./BookShelf";
import Search from "./Search";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

class BooksApp extends React.Component {
  /*
   * TODO: Convert the state variable to shelves of book id and see if that helps.
   */
  state = {
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

  /*
   * handleBookShelfChange: Function to update shelf value for a given
   * The function passes down the data from parent to components
   */
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
              <Search
                handleBookShelfChange={this.handleBookShelfChange}
                shelfBooks={this.state.books}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default BooksApp;
