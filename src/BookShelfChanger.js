import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
// import PubSub from "pubsub-js";

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
   defaultOption = this.props.book.shelf === undefined ? "none" : this.props.book.shelf;
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
  shelfChange = ()=>{
     this.props.onShelfChange();
  }

  searchChange = ()=>{
    this.props.onSearchChange();
 }
 
  selectNewShelf = () => {
    const pathname = window.location.pathname;
    //  console.log("new shelf", this.state.value);
    //  console.log("current path", pathname);
    // use pubsub to inform home page
    BooksAPI.update(this.props.book, this.state.value).then(res => {
      // console.log("new shelf", res);
      if (pathname === "/") {
          this.shelfChange();
        //source:  https://www.npmjs.com/package/pubsub-js
        // PubSub.publish("updateShelves", { updateShelves: true });
        //  console.log("publish new ");
      }  else if(pathname ==="/search"){
          this.searchChange();
      }
    });
  };

  render() {
    return (
      <div className="book-shelf-changer">
        <select
          defaultValue={this.defaultOption}
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
