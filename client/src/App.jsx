
import './App.css'
import "./index.css"
import React from 'react'
import { Home, CreatePost } from "./pages"
import { logo } from "./assets"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>
        <Link to="/" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">
          Create
        </Link>
      </header>

      <main></main>
      <footer></footer>
    </BrowserRouter>
  )
}

export default App