import React, { useEffect, useState } from 'react'

function useDebounce(value, timeout) {
    const [debouncedValue, setDebouncedValue] = useState(value)
    useEffect(() => {
        const timeoutNumber = setTimeout(() => {
            setDebouncedValue(value)
        }, timeout)
        return() => {
          clearTimeout(timeoutNumber)
        }
    }, [value])

    return debouncedValue;
}

function SearchBar() {
    const [input, setInput] = useState([])
    const debouncedValue = useDebounce(input, 500)
  return (
    <div>
      <input type="text"
      value={input}
      placeholder='Search'
      onChange={(e) => {setInput(e.target.value)}}
      />
    </div>
  )
}

export default SearchBar

