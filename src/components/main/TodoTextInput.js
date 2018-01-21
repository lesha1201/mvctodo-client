import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoTextInput extends Component {
   state = {
      text: this.props.text || ''
   }

   onChange = e =>
      this.setState({
         text: e.target.value
      });

   onKeyDown = e => {
      const text = e.target.value.trim();
      if (e.which === 13)
         this.props.onSave(text);
   }

   onBlur = e => {
      const text = e.target.value.trim();
      this.props.onSave(text);
   }

   render() {
      return (
         <input 
            type="text"
            autoFocus="true"
            value={this.state.text}
            onChange={this.onChange}
            onKeyDown={this.onKeyDown}
            onBlur={this.onBlur} />
      );
   }
}

TodoTextInput.propTypes = {
   text: PropTypes.string
};

export default TodoTextInput;