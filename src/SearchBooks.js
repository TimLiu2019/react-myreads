import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import BookShelf from "./BookShelf";

class SearchBooks extends Component {
  state = {
    searchedBooks: [],
  };
  handleSearch = books => {
    console.log('received books',books);
    if (typeof(books) !== 'undefined' && books != null){
      this.setState(() => ({
        searchedBooks: books
      }));
    } else if (books == null){
      this.setState(() => ({
        searchedBooks: []
      }));

    }
  //  console.log("searched books to view: ", this.state.searchedBooks);
  };


  render() {
   
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <SearchInput onHandleSearch={this.handleSearch} />
        </div>
        <div className="search-books-results">
          <BookShelf books={this.state.searchedBooks} />
        </div>
      </div>
    );
  }
}

export default SearchBooks;
