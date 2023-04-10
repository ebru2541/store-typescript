import React, { useEffect } from "react";
import SearchComp from "../components/Searchcomp";
import axios from "axios";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addFavorites, fetchFail, getSuccessProduct } from "../features/productsSlice";
import Card from "../components/Card";

export interface Product {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
const Home = () => {
  const [search, setSearch] = useState("");
  const dispace = useAppDispatch();
  const {loading, error,productsList,favorites}=useAppSelector(state=> state.products)
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

const handleAdd=(product:Product)=>{
if (favorites.filter(item=> item.id===product.id).length===0){
  dispace(addFavorites(product))
}
}
  return (
    <div>
      <SearchComp handleChange={handleChange} />
      {loading ? (
        error ? (
          <div>
            <p className="text-center text-red-600">Something went wrong...</p>
          </div>
        ) : (
          <div>
            <p className="text-center text-red-600">Products loading...</p>
          </div>
        )
      ) : (
        <div>
          {productsList.map((item) => (
            <Card item={item} text="Add Favorites" handleFunc={handleAdd} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
