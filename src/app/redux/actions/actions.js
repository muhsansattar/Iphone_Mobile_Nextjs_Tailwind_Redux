// here i have defined an action function in which  i making an api call and returning an object to redux store
'use client'
export const fetchMobiles=()=>
    async (dispatch)=>{
        try {
        const respose=await fetch("https://dummyjson.com/products/search?q=phone");
        const data=await respose.json();
        dispatch({type:'FETCH_MOBILE_SUCCESS', payload:data.products});
        } catch (error) {
            console.log("Error =",error)
        };
};

// here i am gonna defining a function to select any individual mobile 
export const selectMobile=(mobile)=>{
    return{
        type:'SELECT_MOBILE',
        payload:mobile,
    }
};

// here i am gonna defining a function of addToCart to add items in the cart
export const addToCart=(data)=>{
    return{
        type:'ADD_TO_CART',
        payload:data,
    }
};
// here i am gonna writing a function an order from the cart 
export const removeToCart=(id)=>{
    return{
        type:'REMOVE_TO_CART',
        payload:id
    }
};
// a function to add liked items in the wish list
export const addToWishlist=(likedItem)=>{
    return{
        type:'ADD_TO_WISHLIST',
        payload:likedItem,
    }
};
// a function to remove liked items from the wish list
export const removeToWishlist=(id)=>{
    return{
        type:'REMOVE_TO_WISHLIST',
        payload:id,
    }
};
// a function to add the address in the store
export const addtoAddress=(address)=>{
    return{
        type:'ADD_TO_ADDRESS',
        payload:address,
    }
};
// a function to remove the address from the store
export const removeToAddress=(id)=>{
    return{
        type:'REMOVE_TO_ADDRESS',
        payload:id,
    }
};
// a function to add shipping rate in the store
export const addShipping=(shipping)=>{
    return{
        type:'ADD_TO_SHIPPING',
        payload:shipping,
    }
};