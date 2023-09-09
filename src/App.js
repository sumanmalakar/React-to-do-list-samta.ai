import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { items } from './components/Data'
import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import Navbar from './components/Navbar'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'
import SearchItems from './components/SearchItems'

const App = () => {
  const [data, setData] = useState([...items])



  return (
    <>
      <Router>
        <Navbar items={items} setData={setData} />
        <Routes>

          <Route path='/' element={<Products items={data} />} />
          <Route path='category/:id' element={<ProductDetail items={data} />} />
          <Route path='search/:searchTerm' element={<SearchItems />} />

        </Routes>
      </Router>
    </>
  )
}

export default App