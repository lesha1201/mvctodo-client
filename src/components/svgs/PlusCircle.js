import React from 'react';
import PropTypes from 'prop-types';

const PlusCircle = ({ color }) => (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="604.879 594.879 55.121 55.121">
      <g id="Plus_Btn" data-name="Plus Btn" transform="translate(448.879 7.879)">
         <path id="Path_4" data-name="Path 4" fill={color} d="M27.56,0A27.656,27.656,0,0,1,50.478,12.247,27.208,27.208,0,0,1,55.121,27.56,27.56,27.56,0,1,1,27.56,0Z"
            transform="translate(156 587)" />
         <line id="Line_4" data-name="Line 4" fill="none" stroke="#fff" strokeWidth="3px" className="cls-2" y2="34.122" transform="translate(183.56 597.937)" />
         <line id="Line_5" data-name="Line 5" fill="none" stroke="#fff" strokeWidth="3px" className="cls-2" y2="34.122" transform="translate(200.621 614.998) rotate(90)" />
      </g>
   </svg>
);

PlusCircle.propTypes = {
   color: PropTypes.string.isRequired
};

export default PlusCircle;