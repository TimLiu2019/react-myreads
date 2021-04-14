import React from "react";
import ShelfBook from "./ShelfBook";

const BookShelf = props => {
  const { books } = props;

  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map(book => (
          <li key={book.id}>
            <ShelfBook
              book={book}
              onShelfChange={props.onShelfChange}
              onSearchChange={props.onSearchChange}
            />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default BookShelf;
