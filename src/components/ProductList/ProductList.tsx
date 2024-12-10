import { ProductListContainer } from "./styles";
import { productData } from "./data";
import ProductItem from "../ProductItem/ProductItem";
import { Product } from "./types";

function ProductList() {

    const productList = (productData.map((product: Product) => {
        return <ProductItem productImg={product.img} productName={product.product}/>
    }))
    return <ProductListContainer>
        {productList}
    </ProductListContainer>
};

export default ProductList;