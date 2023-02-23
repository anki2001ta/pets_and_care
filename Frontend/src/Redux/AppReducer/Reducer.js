import * as types from "./ActionTypes";
const InitialData = {
  GroomSlideShow: [],
  FoodSlideShow: [],
  CatProduct: [],
  DogProduct: [],
  BirdProduct: [],
  RabbitProduct: [],
  isLoading: false,
  user: { name: "", token: "" },
  searchData: [],
  singleData: {},
  cart: [],
  purchasedItems: [],
  coupon: false,
  isError: false,
};

export default function Reducer(state = InitialData, action) {
  const { payload, type } = action;
  let newArray = [];
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

    case types.GET_SEARCH_REMOVE: {
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

    case types.ADD_TO_CART:
      const newPayload = payload.map((ele) => {
        ele.qty = 1;
        return ele;
      });

      return { ...state, cart: newPayload };

    case types.DELETE_FROM_CART:
      newArray = [...state.cart];
      newArray = newArray.filter((el) => {
        return el.url !== payload;
      });
      return { ...state, cart: [...newArray] };

    case types.ADD_CART_ITEMS:
      newArray = [...state.cart];
      newArray = newArray.map((el) => {
        if (el.url === payload) {
          return { ...el, qty: el.qty + 1 };
        } else {
          return el;
        }
      });
      return { ...state, cart: [...newArray] };

    case types.REDUCE_CART_ITEMS:
      newArray = [...state.cart];
      newArray = newArray.map((el) => {
        if (el.url === payload) {
          return { ...el, qty: el.qty - 1 };
        } else {
          return el;
        }
      });
      return { ...state, cart: [...newArray] };

    case types.RESET_CART:
      return { ...state, purchasedItems: [...state.cart], cart: [] };

    case types.APPLY_COUPON:
      return { ...state, coupon: true };

    default:
      return state;
  }
}
