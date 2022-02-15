import React from 'react';
import PropTypes from 'prop-types';
import './section.css';

function Section({ title, children }) {
  return (
    <div className="section">
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
