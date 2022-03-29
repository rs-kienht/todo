import React, {useState, ChangeEvent} from 'react'
import "./../style/Search.css"
interface Props {
  valueSearch: any;
}

const Search: React.FC<Props> = ({valueSearch}) => {
  const [valueInput, setValueInput] = useState('');
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value)
    valueSearch(e.target.value)
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