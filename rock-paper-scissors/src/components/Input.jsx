import React from 'react'

export default function Input({inputValue}) {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

  return (
    <div>
      {inputValue}
    </div>
  )
}
