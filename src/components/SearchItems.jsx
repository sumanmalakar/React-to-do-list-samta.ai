import React, { useEffect, useState } from 'react'
import { items } from './Data'
import { useParams, Link } from 'react-router-dom'
import Products from './Products'

const SearchItems = () => {
    const {searchTerm} = useParams();

    const [filteredProducts, setFilteredProducts] = useState(items);

    useEffect(() => {
        const products = () => {
            const filteredProducts = items.filter((product) =>
              product.title.toLowerCase().includes(searchTerm.toLowerCase()));
            setFilteredProducts(filteredProducts);
          };

          products();
          console.log(filteredProducts)


    }, [searchTerm])
    
    
  
  

  return (
    <>
    <Products items={filteredProducts} />
    </>
  )
}

export default SearchItems