var react = require('react');
var List = require('./List.jsx');
//var ReactDOM = require('react-dom');

var ListManager = React.createClass({
  getInitialState: function(){
      return {items: [], newItemText:''};
  },
  onChange: function(e){
    this.setState({newItemText; e.target.value});
  },

  handleSubmit:function(e){
    e.preventDefault();
    var currentItems = this.state.items;
    currentItems.push(this.state.newItemText);
    this.setState({items: currentItems, newItemText:''});
  },

  render: function(){
    return (
      <div>
        <h3> {this.props.title}</h3>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.newItemText}/>
          <button> add </button>
        </form>
      </div>
      <List items ={this.state.items} />
    )
  }
});
module.exports = ListManager;
