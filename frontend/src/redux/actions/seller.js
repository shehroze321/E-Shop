import request from "../../utils/request";

// Load Seller
export const loadSeller=()=>async(dispatch)=>{
    try {
        dispatch({
            type: "LoadSellerRequest",
        });
        const {data}= await request.get(`/shop/getSeller`,{withCredentials:true});
        dispatch({
            type: "LoadSellerSuccess",
            payload:data.seller,
        });
    } catch (error) {
        dispatch({
            type: "LoadSellerFail",
            payload:error.response.data.message,
        });
        
    }
}