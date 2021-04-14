import React from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";
//import * as BooksAPI from "./BooksAPI";
//import PubSub from "pubsub-js";
const BookShelves = props => {
  // state = {
  //   currentReadBooks: [],
  //   wantReadBooks: [],
  //   readBooks: []
  // };
  // componentDidMount() {
  //   console.log('componentDidMount in BookShelves');
  //   this.getAllShelves();
  //   //source:  https://www.npmjs.com/package/pubsub-js
  //   // this.token = PubSub.subscribe("updateShelves", (_, update) => {

  //   // });
  // }

  // componentWillUnmount() {
  //   PubSub.unsubscribe(this.token);
  // }

  // getAllShelves = () => {
  //   //  console.log('books',books );

  //   this.setState(() => ({
  //     currentReadBooks: this.props.books.filter(
  //       book => book.shelf === "currentlyReading"
  //     ),
  //     wantReadBooks: this.props.books.filter(
  //       book => book.shelf === "wantToRead"
  //     ),
  //     readBooks: this.props.books.filter(book => book.shelf === "read")
  //   }));
  //   console.log("currentlyreading", this.state.currentReadBooks);
  //   // console.log('wanttoread', this.state.wantReadBooks);
  //   // console.log('read', this.state.readBooks);
  // };

  
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
                <BookShelf
                  books={props.books.filter(
                    book => book.shelf === "currentlyReading"
                  )}
                />
              </div>

              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <BookShelf
                  books={props.books.filter(
                    book => book.shelf === "wantToRead"
                  )}
                />
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <BookShelf
                  books={props.books.filter(book => book.shelf === "read")}
                />
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


export default BookShelves;
