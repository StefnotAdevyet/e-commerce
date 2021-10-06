import React from "react";
import { Grid } from '@material-ui/core';
import Product from "./Products/Product/Product";

const products = [
  { id: 1, name: 'shoes', description: 'running shoes.', price: `$${5}`, image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/qwqfyddzikcgc4ozwigp/revolution-5-mens-running-shoes-ZXqS6C.png'},
  { id: 2, name: 'Macbook', description: 'Apple macbook.', price: `$${10}`, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202011?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1613672894000'}
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