export function Search({ searchValue, setSearchValue }) {
  return (
    <input 
      type="text"
      value={searchValue}
      placeholder="Search.."
      onChange={(event) => setSearchValue(event.target.value)}
    />
  )
}
