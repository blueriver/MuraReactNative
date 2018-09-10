import React from 'react';

// This component will only render its children if the condition is truthy
// It takes an optional FallbackComponent that will render if the condition is falsy.
export default ({condition, FallbackComponent, children}) => {
  if (FallbackComponent === undefined) {
    FallbackComponent = () => null;
  }
  return condition ? children : <FallbackComponent />;
}
