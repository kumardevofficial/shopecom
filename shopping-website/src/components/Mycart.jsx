import "../App.css";
import EmptyCart from "./EmptyCart";
import ShowcartItem from "./ShowCartItem";
const Mycart = () => {
  let isItem = true;
  return <>{isItem ? <ShowcartItem /> : <EmptyCart />}</>;
};

export default Mycart;
