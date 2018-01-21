import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Checkmark from '../svgs/Checkmark';
import TodoTextInput from './TodoTextInput';
import { completeTodo, removeTodo, editTodo, updateTodo } from '../../actions/todos';

class Task extends React.Component {
   state = {
      editable: false
   };

   onClickCircle = () => {
		const { completed, _id } = this.props.task;
		this.props.updateTodo(_id, { completed: !completed })
			.then(() => this.props.completeTodo(_id));
}

   onClickDelete = () =>
      this.props.removeTodo(this.props.task._id);

   onClickEdit = () =>
      this.setState({ editable: true });

   onSave = text => {
      const { _id } = this.props.task;
      if (text.length === 0) 
         this.props.removeTodo(_id);
      else {
			this.props.updateTodo(_id, {text})
				.then(() => this.props.editTodo(_id, text))
		}
      this.setState({ editable: false });
   }

   render() {
      let { completed, text } = this.props.task;
      let { editable } = this.state;
      return (
         <div className={`todos__tasks__task ${completed && 'todos__tasks__task-completed'}`}>
            <div className="todos__tasks__circle" onClick={this.onClickCircle}>
               {completed && <Checkmark />}
            </div>

            { editable 
               ? <TodoTextInput text={text} onSave={text => this.onSave(text)} />
               : (<div className="todos__tasks__text">
                     {text}
                  </div>)
            }
            
            { !editable && <div className="todos__tasks__settings">
               <div className="todos__tasks__settings__icon todos__tasks__settings__icon_blue" onClick={this.onClickEdit}>
                  <i className="fas fa-pencil-alt"></i>
               </div>
               <div className="todos__tasks__settings__icon todos__tasks__settings__icon_red" onClick={this.onClickDelete}>
                  <i className="fas fa-trash-alt"></i>
               </div>
            </div> }
         </div >
      );
   }
}

Task.propTypes = {
   task: PropTypes.shape({
      completed: PropTypes.bool,
      text: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired
   }).isRequired,
   completeTodo: PropTypes.func.isRequired,
   removeTodo: PropTypes.func.isRequired,
   updateTodo: PropTypes.func.isRequired
};

export default connect(null, { completeTodo, removeTodo, editTodo, updateTodo })(Task);