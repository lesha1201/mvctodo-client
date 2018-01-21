import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AddBtn from '../btns/AddBtn';
import { postTodo } from '../../actions/todos';

class AddTask extends Component {
   constructor(props) {
      super(props);

      this.state = {
         text: '',
         showAdd: false
      }
   }

   onAddClick = () => {
      this.setState(prevState => ({
			showAdd: !prevState.showAdd,
			text: ''
      }));
   }

   onChange = (e) => {
      this.setState({
         [e.target.name]: e.target.value
      });
   }

   onSubmit = (e) => {
      e.preventDefault();
      this.props.postTodo({ text: this.state.text });
      this.setState({ text: '', showAdd: false });
   }

   render() {
      let { showAdd, text } = this.state;

      return (
         <div className="todos__add">
            { 
               showAdd && 
                  ( <form className="todos__add__textbox" onSubmit={this.onSubmit}>
                     <input 
                        className="todos__add__textbox__input" 
                        onChange={this.onChange} type="text" 
                        id="text" name="text"
                        placeholder="Task" value={text} />
                     <button className="btn todos__add__textbox__btn">Add</button>
                  </form> )
            }
            <AddBtn onClick={this.onAddClick} />
         </div>
      );
   }
}

AddTask.propTypes = {
   postTodo: PropTypes.func.isRequired
};

export default connect(null, { postTodo })(AddTask);