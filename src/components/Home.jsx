import React from "react";
import Footer from "./Footer"
import ProductCard from "./ProductCard"
import { getProducts } from '../services/mockapi';





const Home = () =>{

    const TodosProdutos = getProducts();
    console.log(TodosProdutos);
    const protudos = TodosProdutos.map(() => {return( <ProductCart product={protudos}/>)});
    

    return(
        <div>
            <h2>Produtos já cadastrados</h2>
            <div>
                {protudos}
            </div>

            
          
            
            <br /><br />

            <Footer/>
        </div>
    )

}

export default Home;