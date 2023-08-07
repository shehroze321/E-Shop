import request from "../../utils/request";

// Load User
export const loadUser=()=>async(dispatch)=>{
    try {
        dispatch({
            type: "LoadUserRequest",
        });
        const {data}= await request.get(`/user/getuser`,{withCredentials:true});
        dispatch({
            type: "LoadUserSuccess",
            payload:data.user,
        });
    } catch (error) {
        dispatch({
            type: "LoadUserFail",
            payload:error.response.data.message,
        });
        
    }
}