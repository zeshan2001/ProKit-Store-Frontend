import { useParams, } from "react-router-dom"
import { useState, useEffect } from "react"
import { GetProductById } from "../services/Product"

const DetailProduct = () => {
  const {productId} = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() =>{
    const getProductById = async () => {
      const data = await GetProductById(productId)
      setProduct(data)
    }

    productId && getProductById()
  }, [])

  return (
    product ? (
      <div>
        <img src={`${product.image}`} alt="" />
        <p>{product.name}</p>
        <p>{product.description}</p>
      </div>
    ) : (
      <div>Loading...</div>
    )
  )
}
export default DetailProduct