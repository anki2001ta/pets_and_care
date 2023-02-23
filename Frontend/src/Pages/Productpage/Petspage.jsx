import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Radio,
  RadioGroup,
  Stack,
  Tag,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import {
  GetProductcatSuccess,
  GetProductRequest,
} from "../../Redux/AppReducer/Action";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./productpage.css";

//sorting by asc and desc

const Petspage = () => {
  const dispatch = useDispatch();
  const [color, setColor] = useState("");
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("asc");
  const [, setSearchParams] = useSearchParams();
  const catData = useSelector((store) => store.CatProduct);
  const load = useSelector((store) => store.isLoading);
  const { pets } = useParams();
  const Navigate = useNavigate();
  const sortDataByDesc = () => {
    setSort("desc");
  };

  const sortDataByAsc = () => {
    setSort("asc");
  };
  const catproduct = () => {
    var url;
    if (color != "") {
      url = `https://breakable-trench-coat-deer.cyclic.app/pets/${pets}?color=${color}&sortBy=${sort}&page=${page}`;
    } else {
      url = `https://breakable-trench-coat-deer.cyclic.app/pets/${pets}?&sortBy=${sort}&page=${page}`;
    }
    dispatch(GetProductRequest());
    axios.get(url).then((res) => {
      dispatch(GetProductcatSuccess(res.data.petbase));
      // console.log(res.data.petbase)
    });
  };
  const handlePage = (ops) => {
    if (ops == "-") {
      setPage((prev) => prev - 1);
    } else if (ops == "+") {
      setPage((prev) => prev + 1);
    }
  };

  const handlerefreash = () => {
    setColor("");
    setSort("asc");
  };

  const handleSinglepage = (id) => {
    try {
      Navigate(`/individualpage/pets/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const params = {
      sortBy: sort,
      page: page,
    };
    catproduct();
    if (color != "") {
      params.color = color;
    }
    setSearchParams(params);
  }, [color, sort, page]);

  return (
    <Box className="Product_page">
      <Box>
        <Navbar />
      </Box>
      <Box className="Product_br">
        <Box className="Product_g">
          <h3 id="title">SORTING</h3>
          <Box className="functi">
            <h2 id="title2">SORT BY PRICES</h2>
            <button class="button-73" role="button" onClick={sortDataByDesc}>
              PRICE: HIGH TO LOW
            </button>
            <button class="button-73" role="button" onClick={sortDataByAsc}>
              PRICE: LOW TO HIGH
            </button>
          </Box>
          <h3 id="title" style={{ marginTop: "15px" }}>
            FILTERATION
          </h3>
          <Box className="radio">
            <h2 id="title2">FILTER BY COLOR</h2>
            <Box className="radio_gp">
              <RadioGroup onChange={setColor} value={color}>
                <Stack direction="column" gap={"5px"}>
                  <Radio value="White">White</Radio>
                  <Radio value="Black">Black</Radio>
                  <Radio value="Brown">Brown</Radio>
                  <Radio value="Red">Red</Radio>
                  <Radio value="Green">Green</Radio>
                  <Radio value="Yellow">Yellow</Radio>
                  <Radio value="Grey">Grey</Radio>
                  <button
                    id="btn_12"
                    class="button-73"
                    role="button"
                    onClick={handlerefreash}
                  >
                    REsET
                  </button>
                </Stack>
              </RadioGroup>
            </Box>
          </Box>
        </Box>
        <Box className="Product_gr">
          <h3 id="title">PICK ME</h3>
          <Center>
            <Box className="product_list">
              {load === true ? (
                <Center>
                  <Box className="productPage_product_side_loading">
                    <img
                      id="loading"
                      src="https://cdn.svgator.com/images/2022/07/cute-animated-cat-tutorial.gif"
                      alt=""
                    />
                  </Box>
                </Center>
              ) :catData.length<=0?(<Center><img  src="https://cdn.dribbble.com/userupload/2905383/file/original-4ea237e94e803ddd575a66eb32198899.png?compress=1&resize=700x600&vertical=top"/></Center>): (
                catData?.map((item, ind) => (
                  <Box
                    key={ind}
                    className="para"
                    h={"auto"}
                    p="3"
                    rounded="md"
                    border={"1px solid grey"}
                    mb={"20px"}
                  >
                    <Image
                      className="slider_v"
                      w={"100%"}
                      h={"180px"}
                      src={item.url}
                      alt="Image 1"
                    />

                    <p>
                      <span
                        style={{
                          color: "red",
                          fontFamily: "sans-serif",
                          fontSize: "16px",
                          textAlign: "left",
                        }}
                      >
                        Name:
                      </span>{" "}
                      {item.name}
                    </p>

                    <p>
                      <span
                        style={{
                          color: "red",
                          fontFamily: "sans-serif",
                          fontSize: "14px",
                          textAlign: "left",
                        }}
                      >
                        Breed:
                      </span>{" "}
                      {item.breed}
                    </p>

                    <p>
                      <span
                        style={{
                          color: "red",
                          fontFamily: "sans-serif",
                          fontSize: "14px",
                          textAlign: "left",
                        }}
                      >
                        Location:
                      </span>{" "}
                      {item.location}
                    </p>

                    <p>
                      <span
                        style={{
                          color: "red",
                          fontFamily: "sans-serif",
                          fontSize: "14px",
                          textAlign: "left",
                        }}
                      >
                        Color:
                      </span>{" "}
                      {item.color}
                    </p>

                    <p>
                      <span
                        style={{
                          color: "red",
                          fontFamily: "sans-serif",
                          fontSize: "14px",
                          textAlign: "left",
                        }}
                      >
                        Price:
                      </span>{" "}
                      Rs{item.price}
                    </p>

                    <button
                      className="button-54"
                      onClick={() => handleSinglepage(item._id)}
                    >
                      VIEW ME
                    </button>
                  </Box>
                ))
              )}
            </Box>
          </Center>
          <Flex gap={"50px"} justifyContent={"center"} mt={"20px"}>
            <Center>
              <Button
                bgColor={"black"}
                color={"white"}
                isDisabled={page <= 1}
                onClick={() => handlePage("-")}
              >
                Prev
              </Button>
            </Center>
            <Tag bgColor={"yellow.400"} color={"black"}>
              {page}
            </Tag>
            <Center>
              <Button
                bgColor={"black"}
                color={"white"}
                onClick={() => handlePage("+")}
              >
                Next
              </Button>
            </Center>
          </Flex>
        </Box>
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Petspage;
