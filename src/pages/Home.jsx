import Products from '../components/Products'

const Home = ({user}) => {
  return <>
    <div>
      ** WELCOM TO THE HOME PAGE **
      {user && <p>GOOD TO SEE YOU {user.email}</p>}
    </div>
    <div>
      <Products />
    </div>
  </>
  
}
export default Home