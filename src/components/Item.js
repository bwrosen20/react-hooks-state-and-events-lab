import React, {useState} from "react";

function Item({ name, category }) {
  
  const [inCart,setCart]=useState(true);
  const [cartButton,setButton]=useState("Add to Cart")
  const [appClass,setAppClass]=useState("")
  

  function handleClick(){
    setCart((inCart)=> !inCart);
    (cartButton==="Add to Cart")? setButton((cartButton)=>"Remove From Cart"): setButton((cartButton)=>"Add to Cart");
    (appClass==="in-cart")? setAppClass((appClass)=>""):setAppClass((appClass)=>"in-cart")
  }
  
  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{cartButton}</button>
    </li>
  );
}

export default Item;
