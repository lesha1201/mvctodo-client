import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Task from './Task';
import { fetchTodos } from '../../actions/todos';

function renderTasks(tasks) {
   return tasks.map(task => (
      <Task key={task._id} task={task} />
   ));
}

class TodosTasks extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	componentDidMount() {
		this.props.fetchTodos();
	}

	render() {
		const { tasks } = this.props;
		return (
			<div className="todos__tasks">
				{ renderTasks(tasks) }
			</div >
		);
	}
}

TodosTasks.propTypes = {
	tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
	fetchTodos: PropTypes.func.isRequired
}

function mapStateToProps(state) {
   return {
      tasks: state.todos
   }
}

export default connect(mapStateToProps, { fetchTodos })(TodosTasks);