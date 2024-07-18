import React from 'react'

function SearchBar({setFilterText,setInStockOnly}) {
    
  return (
    <div className='flex'>
      <form className='flex'>
        <div>
        <input type="text" placeholder='Search....' onChange={(e)=>setFilterText(e.target.value)} />
        </div>

        <div>
        <input type="checkbox" onChange={(e)=>setInStockOnly(e.target.checked)}/>
       <span>only show product in stock</span> 
        </div>

      </form>
    </div>
  )
}

export default SearchBar
