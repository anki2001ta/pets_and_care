import * as types from "./ActionTypes";
const InitialData = {
  GroomSlideShow: [],
  FoodSlideShow: [],
  CatProduct: [],
  DogProduct: [],
  BirdProduct: [],
  RabbitProduct: [],
  isLoading: false,
  user: {},
  searchData: [],
  singleData: {},
  isError: false,
};

export default function Reducer(state = InitialData, action) {
  const { payload, type } = action;

  switch (type) {
    //SideShow
    case types.GET_SLIDESHOW_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case types.GET_SLIDESHOW_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        GroomSlideShow: payload,
        isError: false,
      };
    }

    case types.GET_Food_SLIDESHOW_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        FoodSlideShow: payload,
        isError: false,
      };
    }

    case types.GET_SEARCH_REMOVE:{
      return {
        ...state,
        searchData: [],
      };
    }
    case types.GET_SLIDESHOW_FAILURE: {
      return {
        ...state,
        isLoading: false,
        GROOMSlideShow: [],
        FoodSlideShow: [],
        isError: true,
      };
    }
    //product
    case types.GET_Product_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case types.GET_Product_cat_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        CatProduct: payload,
        isError: false,
      };
    }

    case types.GET_Product_dog_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        DogProduct: payload,
        isError: false,
      };
    }

    case types.GET_Product_bird_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        BirdProduct: payload,
        isError: false,
      };
    }

    case types.GET_Product_rabbit_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        RabbitProduct: payload,
        isError: false,
      };
    }

    case types.GET_Product_FAILURE: {
      return {
        ...state,
        isLoading: false,
        searchData: [],
        isError: true,
      };
    }

    case types.GET_User_SUCCESS: {
      return {
        ...state,
        user: payload,
      };
    }
    ////SEARCH///
    case types.GET_SEARCH_SUCCESS: {
      return {
        ...state,
        searchData: payload,
      };
    }

    case types.GET_SINGLEPAGE_SUCCESS: {
      return {
        ...state,

        singleData: payload,
      };
    }

    default:
      return state;
  }
}
