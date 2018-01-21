import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Header = ({ tasks }) => {
   const completedTasks = tasks.filter(task => task.completed);
   const percent = Math.round(completedTasks.length * 100 / tasks.length);

   return (
      <div className="header__progress">
         <div className="header__progress__completed-line" />
         <span className="header__progress__completed-text">{percent ? percent : '0'}%</span>
      </div>
   );
};

Header.propTypes = {
   tasks: PropTypes.arrayOf(PropTypes.object)
}

Header.defaultProps = {
   tasks: []
}

function mapStateToProps(state) {
   return {
      tasks: state.todos
   }
}

export default connect(mapStateToProps)(Header);