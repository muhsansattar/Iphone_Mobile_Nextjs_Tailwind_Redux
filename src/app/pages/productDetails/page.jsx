import ItemDetails from "../../components/ItemDetails/page";
import Details from "@/app/components/ProductDetails/itemDescription";
import Reviews from "@/app/components/ProductDetails/review";
import Comments from "@/app/components/ProductDetails/comments";
import DiscountProducts from "@/app/components/HomePage/discountProducts";

const ProductDetailsPage=()=>{
    return(
        <div>
            <ItemDetails/>
            <Details/>
            <Reviews/>
            <Comments/>
            <DiscountProducts/>
        </div>
    )
}
export default ProductDetailsPage;