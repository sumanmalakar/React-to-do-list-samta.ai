// import { useEffect } from 'react';
import './css/Style.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { items } from './Data';
import { useState } from 'react';



const Navbar = ({setData }) => {
  const location = useLocation();

// filterbycategory items
  const filterByCategory = (category) => {
    // console.log(category)

    const filterProducts = items.filter(
      (product) => product.category == category
    );
    setData(filterProducts);

  }

  // filterbyprice items
  const filterByPrice = (price) => {
    // console.log(price)

    const filterProducts = items.filter(
      (product) => product.price >= price
    );
    setData(filterProducts);

  }



  // taking input for search
  const navigate = useNavigate();

    const [inputData, setInputData] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

         navigate(`/search/${inputData}`);

         setInputData('')


    }



  return (
    <header className='header'>
      <div className='navbar' >

        <div className="left">

          <div className='logo'>
            <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
              E-Commerce
            </Link>
          </div>

{/* search functionality */}

          <form className="input" onSubmit={handleSubmit}>
            <input
            value={inputData}
            onChange={(e)=>setInputData(e.target.value)}
              type="text"
              placeholder='Search Products...'
            />
          
          </form>
        </div>

        <div className="right">
          <div>Login</div>
        </div>
      </div>
      {/* <hr /> */}
      {location.pathname === '/' &&
        (<div className="options">

          <div className='links'>
            <div className='p-3 text-gray-100 hover:bg-slate-950 hover:text-w text-gray-100hite' href='/mobiles'>Filter by -{">"}</div>
            <div className='p-3 text-gray-100 hover:bg-slate-950 hover:text-w text-gray-100hite' href='/mobiles'
              onClick={() => setData(items)}
            >No Filter</div>

            <div className='p-3 text-gray-100 hover:bg-slate-950 hover:text-white'
              onClick={() => filterByCategory('mobiles')}
            >Mobiles</div>
            <div className='p-3 text-gray-100 hover:bg-slate-950 hover:text-white'
              onClick={() => filterByCategory('laptops')}
            >Laptops</div>
            <div className='p-3 text-gray-100 hover:bg-slate-950 hover:text-white'
              onClick={() => filterByCategory('tablets')}
            >Tablets</div>
            <div className='p-3 text-gray-100 hover:bg-slate-950 hover:text-white'
              onClick={() => filterByPrice('49999')}
            >{">="}49999 </div>
            <div className='p-3 text-gray-100 hover:bg-slate-950 hover:text-white'
              onClick={() => filterByPrice('69999')}
            >{">="}69999</div>
            <div className='p-3 text-gray-100 hover:bg-slate-950 hover:text-white'
              onClick={() => filterByPrice('89999')}
            >{">="}89999</div>

          </div>
        </div>)
      }

    </header>
  );
};
export default Navbar;
