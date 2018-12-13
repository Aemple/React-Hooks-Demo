import React, { useState } from 'react';

const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: e => setValue(e.target.value),
    resetValue: () => setValue("")
  }
}

export default ({ onSubmit }) => {
  const { resetValue, ...text } = useInputValue("")
  return (
    <form onSubmit={ e => {
      e.preventDefault();
      onSubmit(text.value);
      resetValue();
    }}>
     <div className="form-group">
       <label htmlFor="text1">输入TODO</label>
      <input type="text" className="form-control" id="text1" { ...text } />
     </div>
    </form>
  )
}