
const initialState={
    mobiles:[],
    selectedMobile:null,
    cartData:[],
    likedItems:[],
    selectedAddress:[],
    selectedShipping:null,
}

const mobileReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'FETCH_MOBILE_SUCCESS':
            return{
                ...state,
                mobiles:action.payload
            }
        case 'SELECT_MOBILE':
            return{
                ...state,
                selectedMobile:action.payload
            }    
        case 'ADD_TO_CART':
            return{
                ...state, 
                cartData: [...state.cartData, action.payload],
            }
        case 'REMOVE_TO_CART':
            return{
                ...state,
                cartData:state.cartData.filter((item)=>item.id !==action.payload)
            }  
        case 'ADD_TO_WISHLIST':
            return{
                ...state,
                likedItems:[...state.likedItems, action.payload],
            }
        case 'REMOVE_TO_WISHLIST':
            return{
                ...state,
                likedItems:state.likedItems.filter((item)=>item.id !== action.payload)
            }  
        case 'ADD_TO_ADDRESS':
            return{
                ...state,
                selectedAddress:[...state.selectedAddress, action.payload]
            }   
        case 'REMOVE_TO_ADDRESS':
            return{
                ...state,
                selectedAddress:state.selectedAddress.filter((item)=>item.id!==action.payload)
            }   
        case 'ADD_TO_SHIPPING':
            return{
                ...state,
                selectedShipping:action.payload
            }                         
        default:
            return state;        
    }
};

export default mobileReducer;