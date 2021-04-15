import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import BookShelf from "./BookShelf";
//import * as BooksAPI from "./BooksAPI";

class SearchBooks extends Component {
  state = {
    searchedBooks: [],
    booksNotFound: false
  };

  handleSearch = (books, booksNotFound) => {
    const shelfBooks = this.props.books;
    //   console.log('books in shelves searchbooks',shelfBooks );
    if (typeof books !== "undefined" && books != null) {
      // if the searched book already is in shelf, assign the shelf to the searched book
      for (let book of shelfBooks) {
        const indexInShelf = books.findIndex(item => item.id === book.id);
        if (indexInShelf !== -1) {
          books[indexInShelf] = book;
        }
      }
      //   console.log('add shelf books',books);
      this.setState(() => ({
        searchedBooks: books,
        booksNotFound: booksNotFound
      }));
    } else if (books == null) {
      this.setState(() => ({
        searchedBooks: []
      }));
      if (booksNotFound){
        this.setState(() => ({
          searchedBooks: [],
          booksNotFound: booksNotFound
        }));
      } 
    } 
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
         {this.state.booksNotFound && <p>Books not found</p> }
          <BookShelf
            books={this.state.searchedBooks}
            onSearchChange={this.props.onSearchChange} />
        </div>
      </div>
    );
  }
}

export default SearchBooks;
