import Client from "./api"

export const GetAllProducts = async () => {
  try {
    const res = await Client.get('/products')
    return res.data.products
  } catch (error) {
    throw error
  }
}

export const GetProductById = async (productId) => {
  try {
    const res = await Client.get(`/products/${productId}`)
    return res.data.product
  } catch (error) {
    throw error
  }
}
export const GetProductByCategory = async (category) => {
  try {
    const res = await Client.get(`/products/category/${category}`)
    return res.data.products
  } catch (error) {
    throw error
  }
}