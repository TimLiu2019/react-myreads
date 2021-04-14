import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ""
    };
    this.timeout = 0;
  }
  /* Search after stop typing */ 
  handleChange = event => {
    this.setState({inputText: event.target.value});

    if(this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(()=>{
         this.search();
    },800);
  };

/* search when typing, may have errors when typing too fast */
//   handleChange = event => {
//     this.setState(
//       {
//         inputText: event.target.value
//       },
//       () => {this.search();}
//     );
//   };
  // } ({ title: event.target.value }, () => this.APICallFunction())
  //  console.log(` change is: ${this.state.inputText} `);

  /*  press enter to search  */
    handleKeyDown = e => {
     if (e.key === "Enter") {
     //   console.log("do search");
        this.search();
      }
    };
  
  search = () => {
    let query = this.state.inputText;
    if (query.length > 0) {
      BooksAPI.search(query).then(books => {
    //    console.log("query", query);
    //    console.log("searched books", books);
        if (books.length > 0) {
          this.props.onHandleSearch(books);
        }
      });
    } else if (query.length === 0) {
   //   console.log("query length", query.length);
      const books = [];
      this.props.onHandleSearch(books);
    }
  };

  render() {
    return (
      <div className="search-books-input-wrapper">
        {/*
        NOTES: The search from BooksAPI is limited to a particular set of search terms.
        You can find these search terms here:
        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
        you don't find a specific author or title. Every search is limited by search terms.
      */}
        <input
          type="text"
          placeholder="Search by title or author"
          value={this.state.inputText}
          onKeyDown={this.handleKeyDown}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default SearchInput;
