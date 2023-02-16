import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import AddCategory from '../../components/SearchContainer/AddCategory';
import DisplayGifs from '../../components/SearchContainer/DisplayGifs';
import '../../components/SearchContainer/SearchContainer.css'

const SearchPage = () => {
    const [category, setCategory] = useState("");

  return (
    <>
    <Header />
    <AddCategory setCategory={setCategory} />
    <DisplayGifs category={category} />
    </>
  )
}

export default SearchPage;