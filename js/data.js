
import Cart from "../models/Cart.js";
import Products from "../models/products.js";
import { fetchData } from "../utils/httpreq.js";

const productsNode = document.getElementById("products");
const cartListNode = document.getElementById("cart-list");
const totalPricNode = document.getElementById("total-price").querySelector("span");
async function render() { 
  const productsData = await fetchData(); 
  const cartInstance = new Cart(cartListNode, totalPricNode);
  const productsInstance = new Products(productsNode, productsData,cartInstance); 

  console.log(cartInstance);
  productsInstance.showProducts();
}

document.addEventListener("DOMContentLoaded", render);
