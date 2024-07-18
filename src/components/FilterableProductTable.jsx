import React from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'
import { useState } from 'react'

function FilterableProductTable({products}) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <div>
      <SearchBar setFilterText={setFilterText} setInStockOnly={setInStockOnly} />
      <ProductTable
        products={products} 
        filterText={filterText}
        inStockOnly={inStockOnly}/>
    </div>
  )
}

export default FilterableProductTable
