import React, { PropTypes } from 'react';

export const Core = ({ children }) => (
  <div className="core">
    {children}
  </div>
);

Core.propTypes = {
  children: PropTypes.any.isRequired
};
