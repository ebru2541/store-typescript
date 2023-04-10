import React, { useEffect } from "react";
import SearchComp from "../components/Searchcomp";
import axios from "axios";
import { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { fetchFail, getSuccessProduct } from "../features/productsSlice";

export interface Product {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
const Home = () => {
  const [search, setSearch] = useState("");
  const dispace = useAppDispatch();
  const url = `https://dummyjson.com/products/search?q=${search}`;

  const getData = async () => {
    try {
      const { data } = await axios(url);
      dispace(getSuccessProduct(data.products));
    } catch (error) {
      dispace(fetchFail());
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [search]);

const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
  setSearch(e.target.value)
  setSearch("")
}

  return (
    <div>
      <SearchComp handleChange={handleChange} />
    </div>
  );
};

export default Home;
