import React from "react";
import { Grid } from '@material-ui/core';
import Product from "./Products/Product/Product";

const products = [
  { id: 1, name: 'shoes', description: 'running shoes.', price: `$${5}`},
  { id: 2, name: 'Macbook', description: 'Apple macbook.', price: `$${10}`}
];

const Products = () => {
  return (
    <main>
    <Grid container justify="center" spacing={4}>
      {products.map(product => {
        return (<Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Product product={product}/>
        </Grid>)
      })}
    </Grid>
  </main>
  )



}

export default Products