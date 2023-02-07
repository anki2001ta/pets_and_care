import * as types from "./ActionTypes"
const InitialData = {
    GroomSlideShow :[],
    FoodSlideShow:[],
    isLoading : false,
    isError : false
}

export default function Reducer (state=InitialData, action) {
    const {payload,type} = action;

    switch(type){

 //SideShow
        case types.GET_SLIDESHOW_REQUEST : {
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        }

        case types.GET_SLIDESHOW_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                GroomSlideShow : payload,
                isError : false
            }
        }

        case types.GET_Food_SLIDESHOW_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                FoodSlideShow: payload,
                isError : false
            }
        }

        case types.GET_SLIDESHOW_FAILURE : {
            return {
                ...state,
                isLoading : false,
                GROOMSlideShow : [ ],
                FoodSlideShow:[],
                isError : true
            }
        }

        default :
        return state
    }
    
}