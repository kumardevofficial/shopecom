import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import ProductCard from "./ProductCard";
const ShowItemList = () => {
  const [initialProductList, setProductList] = useState([]);

  const getProducts = async () => {
    const data = await axios.get("http://localhost:3000/");
    console.log(data.data);
    setProductList(data.data);
  };

  const removeItem = async () => {
    getProducts();
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="showItemList">
      {initialProductList.map((item, index) => (
        <ProductCard
          removeItem={removeItem}
          key={index}
          myId={item._id}
          productName={item.productName}
          productDescription={item.productDescription}
          productPrice={item.productPrice}
          productImageLink={item.productImageLink}
          productDiscount={item.productDiscount}
          productQuantity={item.productQuantity}
          sellerName={item.sellerName}
        />
      ))}
    </div>
  );
};

export default ShowItemList;
