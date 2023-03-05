import {
    GET_ALL_POSTS_REQUEST,
    GET_ALL_POSTS_SUCCESS,
    GET_ALL_POSTS_FAILURE,
    GET_POST_DETAILS_REQUEST,
    GET_POST_DETAILS_FAILURE,
    GET_POST_DETAILS_SUCCESS,
} from "./actionTypes";
import axios from "axios";
import blogsData from "../blogs.json"


export const getAllPostsRequest = (payload) => ({
    type: GET_ALL_POSTS_REQUEST,
    payload,
});

export const getAllPostsSuccess = (payload) => ({
    type: GET_ALL_POSTS_SUCCESS,
    payload,
});

export const getAllPostsFailure = (payload) => ({
    type: GET_ALL_POSTS_FAILURE,
    payload,
});

export const getPostDetailsRequest = (payload) => ({
    type: GET_POST_DETAILS_REQUEST,
    payload,
});

export const getPostDetailsSuccess = (payload) => ({
    type: GET_POST_DETAILS_SUCCESS,
    payload,
});

export const getPostDetailsFailure = (payload) => ({
    type: GET_POST_DETAILS_FAILURE,
    payload,
});

export const getAllPosts = () => (dispatch) => {
    // dispatch(getAllPostsRequest());
    dispatch(getAllPostsSuccess({ allPostsData: blogsData }));
    // return axios
    //     .get("https://frozen-fjord-76966.herokuapp.com/blogs-app/cards")
    //     .then((res) => {
    //         if (res.status === 200) {
    //             return dispatch(getAllPostsSuccess({ allPostsData: res.data }));
    //         } else {
    //             return dispatch(getAllPostsFailure({ message: "Error" }));
    //         }
    //     });
};

export const getPostDetails = (id) => (dispatch) => {
    dispatch(getPostDetailsRequest());
    return axios
        .get(
            `https://frozen-fjord-76966.herokuapp.com/blogs-app/cards/${id}`
        )
        .then((res) => res)
        .then((res) => {
            if (res.status === 200) {
                return dispatch(getPostDetailsSuccess({ postDetailsData: res.data }));
            } else {

                return dispatch(getPostDetailsFailure({ message: "Error" }));
            }
        });
};