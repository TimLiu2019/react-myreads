import React, { Component } from "react";
import { Link } from "react-router-dom";  
import BookShelf from './BookShelf';
import * as BooksAPI from "./BooksAPI";
import PubSub from 'pubsub-js';
class BookShelves extends Component {
  state = {
    currentReadBooks: [],
    wantReadBooks: [],
    readBooks:[]

  };
  componentDidMount() {
    this.getAllShelves();

    this.token = PubSub.subscribe('updateShelves',(_,update)=>{
		  this.getAllShelves();
		})
	}

	componentWillUnmount(){
		PubSub.unsubscribe(this.token)
	}
  getAllShelves = () => {
    BooksAPI.getAll().then(books => {
    //  console.log('books',books );
      this.setState(() => ({
        currentReadBooks: books.filter(book => book.shelf === 'currentlyReading'),
        wantReadBooks: books.filter(book => book.shelf === 'wantToRead'),
        readBooks: books.filter(book => book.shelf === 'read')

      }));
      // console.log('currentlyreading', this.state.currentReadBooks);
      // console.log('wanttoread', this.state.wantReadBooks);
      // console.log('read', this.state.readBooks);
  });
  };

  render() {
   
    return (
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <BookShelf books={this.state.currentReadBooks }  />
              </div>
               
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <BookShelf books={this.state.wantReadBooks} />
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <BookShelf books={this.state.readBooks} />
              </div>
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">
              <button>Add a book</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default BookShelves;
