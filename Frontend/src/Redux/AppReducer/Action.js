import * as types from "./ActionTypes"

//SlideShow
export const GetGROOMSlideShowRequest = ( ) =>{
    return {
        type : types.GET_SLIDESHOW_REQUEST
    }
}

export const GetGROOMSlideShowSuccess = (payload) =>{
    return {
        type : types.GET_SLIDESHOW_SUCCESS,
        payload
    }
}

export const GetfoodlideShowSuccess = (payload) =>{
    return {
        type : types.GET_Food_SLIDESHOW_SUCCESS,
        payload
    }
}

export const GetGROOMSlideShowFailure = ( ) =>{
    return {
        type : types.GET_SLIDESHOW_FAILURE
    }
}