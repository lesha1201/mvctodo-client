import React from 'react';
import PropTypes from 'prop-types';

import PlusCircle from '../svgs/PlusCircle';

const AddBtn = ({ color, onClick }) => (
   <div className="todos__add__btn" onClick={onClick}>
      <PlusCircle color={color} />
   </div>
);

AddBtn.propTypes = {
   color: PropTypes.string,
   onClick: PropTypes.func
};

AddBtn.defaultProps = {
   color: '#23d576',
   onClick: () => {}
};

export default AddBtn;