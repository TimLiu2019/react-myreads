import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import BookShelf from "./BookShelf";
//import * as BooksAPI from "./BooksAPI";

class SearchBooks extends Component {
  state = {
    searchedBooks: [],
    booksInShelf: []
  };
  componentDidMount() {
    this.getAllShelves();
  }
  //  log book in shelf
//   this.setState(() => ({
//     booksInShelf: shelfBooks,
//   }),()=>{console.log('book in shelf',this.state.booksInShelf)});
// });
// }
getAllShelves = () => {
   
  this.setState(() => ({
    booksInShelf: this.props.books
  }));
 
};
  handleSearch = books => {
    const shelfBooks = this.state.booksInShelf;
    console.log('books in shelves searchbooks',shelfBooks );
    if (typeof(books) !== 'undefined' && books != null){
      // if the searched book already is in shelf, assign the shelf to the searched book
      for (let book of shelfBooks){
        const indexInShelf = books.findIndex(item => item.id === book.id);
        if (indexInShelf !== -1){
           books[indexInShelf] = book;
        }
      }
   //   console.log('add shelf books',books);
      this.setState(() => ({
        searchedBooks: books
      }));
    } else if (books == null){
      this.setState(() => ({
        searchedBooks: []
      }));

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
          <BookShelf books={this.state.searchedBooks} />
        </div>
      </div>
    );
  }
}

export default SearchBooks;
