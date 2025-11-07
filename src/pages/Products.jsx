import { useState, useEffect } from "react"
import { GetAllProducts } from "../services/Product"
import Product from "../components/Product"

const Products = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const data = await GetAllProducts()
      setProducts(data)
    }

    getProducts()
  }, [])
  return (
    products.length ? (
      <div>
        <h2>List of Products</h2>
        <hr />
        <div>
          {products.map(
              (product) => <Product key={product._id} product = {product}/>
              )}
        </div>
      </div>
    ) : (
      <div>
        <h2>Empty there is no products!!</h2>
      </div>
    )
  )
}
export default Products