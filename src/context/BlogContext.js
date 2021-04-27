import React from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  return (
    <BlogContext.provider>
      {children}
    </BlogContext.provider>
  )
};