import React from "react";
import BookShelfChanger from './BookShelfChanger';
//import PropTypes from 'prop-types'

const ShelfBook = props => {
   // const{book} = props;
   const style = {
    width: 128,
    height: 193,
    backgroundImage: `url(${props.book['imageLinks']['thumbnail']})` 
  }
    

  return (
    <div className="book">
    <div className="book-top">
      <div
        className="book-cover"
        style={style}
      ></div>
    <BookShelfChanger book ={props.book} />
    </div>
    <div className="book-title">{props.book.title}</div>
    <div className="book-authors">{props.book.authors}</div>
  </div>
  );


};

export default ShelfBook;