import { Grid } from "@mui/material";
import { Fragment } from "react";
import { Product } from "../../app/models/product";
import { useAppSelector } from "../../app/store/configureStore";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

interface Props {
    products: Product[];
}

export default function ProductList({products}: Props) {
    const {productsLoaded} = useAppSelector(state => state.catalog);
    return (
    <Fragment>
    <Grid container spacing={4}>
       {products.map(product => (
           <Grid item xs={4} key={product.id}>
               {!productsLoaded ? (
                   <ProductCardSkeleton />
               ) : (
                <ProductCard key={product.id} product={product} />
               )}
                
           </Grid>
         
       ))}
     </Grid>

     </Fragment>
     )
}