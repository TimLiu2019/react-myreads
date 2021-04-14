import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import BookShelves from "./BookShelves";
import SearchBooks from "./SearchBooks";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

class BooksApp extends React.Component {
  state = {
    allBooks: []
  };
  componentDidMount() {
    this.getAllBooks();
  }
  getAllBooks = () => {
    BooksAPI.getAll().then(books => {
      //  console.log('books',books );
      this.setState(() => ({
        allBooks: books
      }));
    });
  };

  shelfChange = () => {
    this.getAllBooks();
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <BookShelves
              books={this.state.allBooks}
              onShelfChange={this.shelfChange}
            />
          )}
        />
        <Route
          exact
          path="/search"
          render={() => (
            <SearchBooks
              books={this.state.allBooks}
              onSearchChange={this.shelfChange}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
