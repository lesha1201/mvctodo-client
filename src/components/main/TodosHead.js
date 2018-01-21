import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const TodosHead = ({ tasks }) => (
   <div className="todos__head">
      <h2 className="todos__head__heading">Todos</h2>
      <span className="todos__head__tasks">{tasks.length} tasks</span>
   </div>
);

TodosHead.propTypes = {
   tasks: PropTypes.arrayOf(PropTypes.object)
}

TodosHead.defaultProps = {
   tasks: []
}

function mapStateToProps(state) {
   return {
      tasks: state.todos
   }
}

export default connect(mapStateToProps)(TodosHead);