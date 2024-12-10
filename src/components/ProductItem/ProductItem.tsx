//import {Product} from '../ProductList/types'
import { ProducName, ProductImg, ProductImgWrapper, ProductItemWrapper } from "./styles";
import { ProductItemProps } from "./types";

function ProductItem({
    productImg,
    productName,
    onCadrClick,
}: ProductItemProps) {
    return (
        <ProductItemWrapper onClick={onCadrClick}>
            <ProducName>{productName}</ProducName>
            <ProductImgWrapper>
            <ProductImg src={productImg} />
            </ProductImgWrapper>
        </ProductItemWrapper>
    );
}

export default ProductItem;
