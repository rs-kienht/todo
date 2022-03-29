import React, {useState} from 'react'
import "./../style/Search.css"

const Search = ({valueSearch}: any) => {
  const [valueInput, setValueInput] = useState('');
  const handleInputChange = (event: any) => {
    setValueInput(event.target.value)
    valueSearch(valueInput)
  }
  const handleClearInput = () => {
    setValueInput('')
  }
  return (
    <div className="wrap-search">
      <input value={valueInput} onChange={handleInputChange} className="form-control" placeholder="Search Item Name"/>
      <button onClick={handleClearInput}className="btn btn-info">Clear</button>
    </div>
  )

}
export default Search;