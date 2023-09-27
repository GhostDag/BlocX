import { Grid } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";

interface Props{
    products: Product[];
}
        // <List>
        //     {products.map((product) => (
        //         <ProductCard key = {product.id} product={product} />
        //     ))}
        // </List>
export default function Productlist({products}: Props){
    return(
        <Grid container spacing={4}>
            {products.map((product) => (
                <Grid item xs={3} key = {product.id}>
                    <ProductCard product={product} />
                </Grid>
            ))}
        </Grid>
    )
}