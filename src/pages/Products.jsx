import { useState, useEffect } from "react"
import { GetAllProducts } from "../services/Product"
import Product from "../components/Product"

const Products = () => {

  const [products, setProducts] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const getProducts = async () => {
      const data = await GetAllProducts()
      setProducts(data)
    }
    getProducts()
  }, [])

  const filterProductsByName = (products, keyword) => {
    return products.filter(product => product.name.toLowerCase().includes(keyword.toLowerCase()) )
  }

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  const getSearchResults = async (e) => {
    e.preventDefault()
    searchQuery && setSearchResults(filterProductsByName(products, searchQuery))
    searchQuery && toggleSearched(!searched)
    setSearchQuery('')
  }

  return (
    products.length ? (
      <div>
        <div>
          <input type="text" name="search" id="search" onChange={handleChange} value={searchQuery}/>
          <button onClick={getSearchResults}>Search</button>
        </div>
        {
          searched ? (
          <div>
            <p>Results: </p>
            {
              searchResults.map(
                (product) => <Product key={product._id} product = {product}/>
              )
            }
          </div> ) : (
            <div>
              <h2>List of Products</h2>
                {
                  products.map(
                    (product) => <Product key={product._id} product = {product}/>
                    ) 
                }
            </div>
          )
        }
      </div>
    ) : (
      <div>
        <h2>Empty there is no products!!</h2>
      </div>
    )
  )
}
export default Products