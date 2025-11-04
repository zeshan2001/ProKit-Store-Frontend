import { Link } from "react-router-dom"

const Product = ({ product }) => {
  return (
    <Link to={`/${product._id}`}>
      <div className="product-class">
        <p>{product.name}</p>
        <p>{product.description}</p>
      </div>
    </Link>
  )
}
export default Product