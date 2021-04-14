import React from "react";
import BookShelfChanger from "./BookShelfChanger";
//import PropTypes from 'prop-types'

const ShelfBook = props => {
  // handle the errors when thumbnail is not exist
  const imageSrc =
    props.book["imageLinks"] === undefined
      ? ""
      : `url(${props.book["imageLinks"]["thumbnail"]})`;

  const style = {
    width: 128,
    height: 193,
    backgroundImage: imageSrc
  };

  const title = props.book.title === undefined ? "" : props.book.title;
  const authors = props.book.authors === undefined ? "" : props.book.authors;


  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={style}></div>
        <BookShelfChanger book={props.book} onShelfChange={props.onShelfChange} onSearchChange={props.onSearchChange}/>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors}</div>
    </div>
  );
};

export default ShelfBook;
