import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import App from "./App";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

import Caff from "./chemicals/caffeine.png";
import Theo from "./chemicals/theobromine.png";
import Adra from "./chemicals/adrafinil.png";
import Pira from "./chemicals/piracetam.png";
import Phenyl from "./chemicals/phenylpiracetam.png";
import Bacopa from "./chemicals/bacopa-monnieri.jpg";
import Ginseng from "./chemicals/panax-ginseng.jpeg";
import Sage from "./chemicals/salvia-officinalis2.jpeg";

const RouteSwitch = () => {
  const [rerender, setRerender] = useState(false);
  const [products, setProducts] = useState([
    {
      name: "Caffeine",
      desc: "World's most widely consumed drug.",
      img: Caff,
      price: "$4.99 per gram",
      count: 0,
    },
    {
      name: "Theobromine",
      desc: "Relative of caffeine found in dark chocolate.",
      img: Theo,
      price: "$6.99 per gram",
      count: 0,
    },
    {
      name: "Adrafinil",
      desc: "Converted in vivo to the nootropic modafinil, used to promote awakeness.",
      img: Adra,
      price: "$11.99 per gram",
      count: 0,
    },
    {
      name: "Piracetam",
      desc: "Well-known nootropic with over half a century of use.",
      img: Pira,
      price: "$9.99 per gram",
      count: 0,
    },
    {
      name: "Phenylpiracetam",
      desc: "Developed in Russia in the 1980s, used by Soviet cosmonauts to endure the stresses of space.",
      img: Phenyl,
      price: "$10.99 per gram",
      count: 0,
    },
    {
      name: "Bacopa Monnieri",
      desc: "Herb from India, used in Ayurvedic traditional medicine to imporve memory and cognition.",
      img: Bacopa,
      price: "$6.99 per gram",
      count: 0,
    },
    {
      name: "Panax Ginseng",
      desc: "East Asian herb used in traditional Chinese medicine.",
      img: Ginseng,
      price: "$3.99 per gram",
      count: 0,
    },
    {
      name: "Salvia Officinalis",
      desc: "Also known as common sage, a plant from the Mediterranean with a long history of medicinal use.",
      img: Sage,
      price: "$2.99 per gram",
      count: 0,
    },
  ]);

  const useOnClickAdd = (event) => {
    const itemCount = parseInt(event.target.form[0].value);
    if (itemCount === 0) return;
    const name = event.target.form[0].name;
    const index = getProdIndex(name);
    const newProducts = products;
    const newProd = products[index];
    newProd.count = newProd.count + itemCount;
    newProducts[index] = newProd;
    setProducts(newProducts);
    setRerender(!rerender);
  }

  const useOnChangeCartCount = (event) => {
    const itemCount = parseInt(event.target.value);
    const name = event.target.name;
    const index = getProdIndex(name);
    const newProducts = products;
    const newProd = products[index];
    newProd.count = itemCount;
    newProducts[index] = newProd;
    setProducts(newProducts);
    setRerender(!rerender);
  }

  const useOnClickRemove = (event) => {
    console.log(event.target.name);
    const name = event.target.name;
    const index = getProdIndex(name);
    const newProducts = products;
    const newProd = products[index];
    newProd.count = 0;
    newProducts[index] = newProd;
    setProducts(newProducts);
    setProducts(newProducts);
    setRerender(!rerender);
  }

  const getProdIndex = (name) => {
    let index;
    for (let i = 0; i < products.length; i++) {
      if (products[i].name === name) {
        index = i;
      }
    }
    return index;
  }

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop products={products} rerender={rerender} onClickAdd={useOnClickAdd}/>} />
        <Route path="/cart" element={<Cart products={products} onChangeCartCount={useOnChangeCartCount} onClickRemove={useOnClickRemove} rerender={rerender}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;