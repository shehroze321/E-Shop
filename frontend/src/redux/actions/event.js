// Create Event

import request from "../../utils/request";

export const createEvent = (newForm) => async (dispatch) => {
  try {
    dispatch({
      type: "eventCreateRequest",
    });
    const config = { header: { "Content-Type": "multipart/form-data" } };
    const { data } = await request.post(
      `/event/create-event`,
      newForm,
      config
    );
    dispatch({
      type: "eventCreateSuccess",
      payload: data.event,
    });
  } catch (error) {
    dispatch({
      type: "eventCreateFail",
      payload: error.response.data.message,
    });
  }
};

// get All events of a shop
export const getAllEventsShop = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "getAllEventsShopRequest",
    });

    const { data } = await request.get(`/event/get-all-events-shop/${id}`);
    dispatch({
      type: "getAllEventsShopSuccess",
      payload: data.events,
    });
  } catch (error) {
    dispatch({
      type: "getAllEventsShopFailed",
      payload: error.response.data.message,
    });
  }
};
// delete event of a shop
export const deleteEvent = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteEventRequest",
    });

    const { data } = await request.delete(
      `/event/delete-shop-event/${id}`,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "deleteEventSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteEventFailed",
      payload: error.response.data.message,
    });
  }
};

// get all events
export const getAllEvents = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAlleventsRequest",
    });

    const { data } = await request.get(`/event/get-all-events`);
    dispatch({
      type: "getAlleventsSuccess",
      payload: data.events,
    });
    console.log("🚀 ~ file: event.js:84 ~ getAllEvents ~ data.events:", data.events)

  } catch (error) {
    dispatch({
      type: "getAlleventsFailed",
      payload: error.response.data.message,
    });
  }
};