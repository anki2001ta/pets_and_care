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

export const GetSearchRemove = () =>{
    return {
        type : types.GET_SEARCH_REMOVE
    }
}

export const GetfoodlideShowSuccess = (payload) =>{
    return {
        type : types.GET_Food_SLIDESHOW_SUCCESS,
        payload
    }
}

export const PostUserSuccess = (payload) =>{
    return {
        type : types.GET_User_SUCCESS,
        payload
    }
}

export const GetGROOMSlideShowFailure = ( ) =>{
    return {
        type : types.GET_SLIDESHOW_FAILURE
    }
}

//product

export const GetProductRequest = ( ) =>{
    return {
        type : types.GET_Product_REQUEST
    }
}

export const GetProductcatSuccess = (payload) =>{
    return {
        type : types.GET_Product_cat_SUCCESS,
        payload
    }
}

export const GetProductdogSuccess = (payload) =>{
    return {
        type : types.GET_Product_dog_SUCCESS,
        payload
    }
}

export const GetProductbirdSuccess = (payload) =>{
    return {
        type : types.GET_Product_bird_SUCCESS,
        payload
    }
}

export const GetSearchSuccess = (payload) =>{
    return {
        type : types.GET_SEARCH_SUCCESS,
        payload
    }
}

export const GetProductrabbitSuccess = (payload) =>{
    return {
        type : types.GET_Product_rabbit_SUCCESS,
        payload
    }
}

export const GetProductFailure = ( ) =>{
    return {
        type : types.GET_Product_FAILURE
    }
}

export const GetSingleSuccess = (payload) =>{
    return {
        type : types.GET_SINGLEPAGE_SUCCESS,
        payload
    }
}