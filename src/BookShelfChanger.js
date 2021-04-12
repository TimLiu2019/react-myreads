import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";

class BookShelfChanger extends Component {
  state = {
    value: this.props.book.shelf
  };
  options = [
    { lable: "Move to...", value: "move", disabled: "yes" },
    { lable: "Currently Reading", value: "currentlyReading" },
    { lable: "Want to Read", value: "wantToRead" },
    { lable: "Read", value: "read" },
    { lable: "None", value: "none" }
  ];

  handleChange = event => {
    if (this.state.vaule !== event.target.value) {
      this.setState(
        () => ({
          value: event.target.value
        }),
        () => {
          this.selectNewShelf();
        }
      );
    }
  };

  selectNewShelf = () => {
    const pathname = window.location.pathname;
    console.log("new shelf", this.state.value);
    console.log("current path", pathname);

    BooksAPI.update(this.props.book, this.state.value).then(res => {
      console.log("new shelf", res);
    });
    BooksAPI.getAll().then(books => {
        console.log('books',books );
    });

  };

  render() {
    return (
      <div className="book-shelf-changer">
        <select
          defaultValue={this.props.book.shelf}
          onChange={this.handleChange}
        >
          {this.options.map(o => (
            <option value={o.value} disabled={o.disabled} key={o.value}>
              {o.lable}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
export default BookShelfChanger;
