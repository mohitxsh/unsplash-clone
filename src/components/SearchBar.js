import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onInputChange(event) {
    this.setState({ term: event.target.value });
  }
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className='ui basic segment'>
        <form className='ui fluid icon input' onSubmit={this.onFormSubmit}>
          <input
            type='text'
            placeholder='Search...'
            value={this.state.term}
            onChange={this.onInputChange.bind(this)}
          />
          <i className='search icon' />
        </form>
      </div>
    );
  }
}

export default SearchBar;
