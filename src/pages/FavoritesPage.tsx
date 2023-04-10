import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Card from "../components/Card";
import { VoidFunc } from "../models/models";
import { removeFavorites } from "../features/productsSlice";

const FavoritesPage = () => {
  const { favorites } = useAppSelector((state) => state.products);
  const dispace = useAppDispatch();
  const handleRemove: VoidFunc = (product) => {
    const newData = favorites.filter((item) => item.id !== product.id);
    dispace(removeFavorites(newData));
  };

  return (
    <div>
      {favorites.map((item) => (
        <Card
          key={item.id}
          item={item}
          text="Remove"
          handleFunc={handleRemove}
        />
      ))}
    </div>
  );
};

export default FavoritesPage;
