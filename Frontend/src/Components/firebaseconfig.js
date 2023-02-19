import { RangeSlider } from "@chakra-ui/react";
import { initializeApp } from "firebase/app";
import {
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  getAuth,
} from "firebase/auth";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cat from "../Pages/Cat";
import { PostUserSuccess } from "../Redux/AppReducer/Action";
import { useDispatch } from "react-redux";

const firebaseConfig = {
  apiKey: "AIzaSyCUvSRh5yX4-ngtw2IgKzxCt7zZcqRDq1I",
  authDomain: "react-redux-project-46314.firebaseapp.com",
  projectId: "react-redux-project-46314",
  storageBucket: "react-redux-project-46314.appspot.com",
  messagingSenderId: "175058937703",
  appId: "1:175058937703:web:62a20f52de26076de771c2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app);

const useFire = () => {
  const toast = useToast();
  const navigateUser = useNavigate();
  const dispatch=useDispatch();
  const HandleGoogle = () => {
    
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(Auth, googleProvider)
      .then((res) => {
        // if(loading==true){

        
        //    <Cat/>
        // }
        
        let payload = {
          name: res.user.displayName,
          email: res.user.email,
          password: "T5hohnntnsTeXodJ",
        };
        axios
          .post("https://breakable-trench-coat-deer.cyclic.app/signup", payload)
          .then(() => {
            const payload = {
              email: res.user.email,
              password: "T5hohnntnsTeXodJ",
            };
            axios
              .post(
                "https://breakable-trench-coat-deer.cyclic.app/login",
                payload
              )
              .then((res) => {
                {
                  res.data.msg == "User not found"
                    ? toast({
                        title: res.data.msg,
                        description: "Please login with right cridentials.",
                        status: "error",
                        position: "top",
                        backgroundColor: "black",
                        duration: 9000,
                        isClosable: true,
                      })
                    : res.data.msg === "Wrong password"
                    ? toast({
                        title: res.data.msg,
                        status: "error",
                        position: "top",
                        backgroundColor: "black",
                        duration: 9000,
                        isClosable: true,
                      })
                    : toast({
                        title: res.data.msg,
                        description: "Now Enjoy the services",
                        status: "success",
                        position: "top",
                        backgroundColor: "black",
                        duration: 9000,
                        isClosable: true,
                      });
                }
                if (res.data.administration == false && res.data.token !== "") {
                  dispatch(PostUserSuccess({name:res.data.displayName}))
                  navigateUser("/");
                } else if (
                  res.data.administration == true &&
                  res.data.token !== ""
                ) {
                  navigateUser("/admin");
                } else {
                  toast({
                    title: "Try Login Again",
                    status: "error",
                    position: "top",
                    backgroundColor: "black",
                    duration: 9000,
                    isClosable: true,
                  });
                }
              })
              .catch((err) => {
                toast({
                  title: "Wrong Credential",
                  description: "Please Login with correct details",
                  status: "error",
                  duration: 9000,
                  isClosable: true,
                });
              });
          });
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };

  const HandleFacebook = () => {
    const facebookProvider = new FacebookAuthProvider();
    signInWithPopup(Auth, facebookProvider)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        return err;
      });
  };

  const HandleSignout = () => {
    return signOut(Auth);
  };

  return { HandleFacebook, HandleGoogle, HandleSignout };
};
export { useFire, Auth };
