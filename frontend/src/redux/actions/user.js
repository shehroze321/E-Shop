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
// user update information
export const updateUserInformation =
  (name, email, phoneNumber, password) => async (dispatch) => {
    try {
      dispatch({
        type: "updateUserInfoRequest",
      });

      const { data } = await request.put(
        `/user/update-user-info`,
        {
          email,
          password,
          phoneNumber,
          name,
        },
        {
          withCredentials: true,
          headers: {
            "Access-Control-Allow-Credentials": true,
          },
        }
      );

      dispatch({
        type: "updateUserInfoSuccess",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "updateUserInfoFailed",
        payload: error.response.data.message,
      });
    }
  };
  // update user address
export const updatUserAddress =
(country, state, address1, address2, zipCode, addressType) =>
async (dispatch) => {
  try {
    dispatch({
      type: "updateUserAddressRequest",
    });

    const { data } = await request.put(
      `/user/update-user-addresses`,
      {
        country,
        state,
        address1,
        address2,
        zipCode,
        addressType,
      },
      { withCredentials: true }
    );

    dispatch({
      type: "updateUserAddressSuccess",
      payload: {
        successMessage: "User address updated succesfully!",
        user: data.user,
      },
    });
  } catch (error) {
    dispatch({
      type: "updateUserAddressFailed",
      payload: error.response.data.message,
    });
  }
};

// delete user address
export const deleteUserAddress = (id) => async (dispatch) => {
try {
  dispatch({
    type: "deleteUserAddressRequest",
  });

  const { data } = await request.delete(
    `/user/delete-user-address/${id}`,
    { withCredentials: true }
  );

  dispatch({
    type: "deleteUserAddressSuccess",
    payload: {
      successMessage: "User deleted successfully!",
      user: data.user,
    },
  });
} catch (error) {
  dispatch({
    type: "deleteUserAddressFailed",
    payload: error.response.data.message,
  });
}
};
