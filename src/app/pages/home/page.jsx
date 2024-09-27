// here i am gonna all the components for the Home page 

import Categories from "../../components/HomePage/category";
import DiscountProducts from "../../components/HomePage/discountProducts";
import IPhone from "../../components/HomePage/iphone14";
import Lcd from "../../components/HomePage/lcd";
import PopularProducts from "../../components/HomePage/popularProducts";
import ProductsCategory from "../../components/HomePage/newArrival";
import Macbook from "../../components/HomePage/macbook";

const HomePage=()=>{
    return(
        <div>
            <IPhone/>
            <Macbook/>
            <Categories/>
            <ProductsCategory/>
            <PopularProducts/>
            <DiscountProducts/>
            <Lcd/>
        </div>
    )
}
export default HomePage;
