

import "./Product.css";
import Price from './assets/price.jsx';
function Product( {Title, idx,Description} ) {
    let oldPrice=["1999", "2999", "3999","11999"];
    let newprice=["1499", "2499", "3499","10999"];
    let description=[
        ["Wireless mouse ", "clickable buttons"],
        ["Compact keyboard", "mechanical switches"],
         ["High-resolution monitor ","ips panel" ],
         ["Noise-canceling headphones","active noise cancellation"]];
         let styles={height:"190px"}
    return(
        <div className="Product" >
        <div style={styles}>
        <h4>{Title}</h4>
        <ul>
            <li>{description[idx][0]}</li>
            <li>{description[idx][1]}</li>
        </ul>
        </div>
        <div>
        <Price oldPrice={oldPrice[idx]} newPrice={newprice[idx]}/>
        </div>
        </div>
    )
}
export default Product;
