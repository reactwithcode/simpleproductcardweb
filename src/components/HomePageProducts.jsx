import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Col,
  Form,
  Row,
  Card,
  Accordion,
  InputGroup,
  FormControl,
  AccordionContext,
  useAccordionToggle,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/fontawesome-svg-core";
import StarRatings from "react-star-ratings";

import ReactPaginate from "react-paginate";
import {
  BsFillCaretDownFill,
  BsFillCaretUpFill,
  BsFillStarFill,
} from "react-icons/bs";

import NotFoundImage from "../assets/img/notfound.jpeg";
import { getDataProducts } from "../store/services/productsData";
import { getDataProductsSearch } from "../store/services/productsDataSearch";

const HomePageProducts = (props) => {

  const { dataInputSearch, dataArrayFilter } = props;

  const dispatch = useDispatch();
  const productData = useSelector((state) => state.productsData.products);
  const productDataSearch = useSelector((state) => state.productsDataSearch.products);

  useEffect(() => {
    dispatch(getDataProducts());
  }, []);


  const [postFilter, setPostFilter] = useState(productData);

  console.log('dataArray', dataArrayFilter);
  

  const reducerSearchProduct = () => {
    const product = setPostFilter(productData.filter((product) => product?.name == dataInputSearch))
    return product;
  }

  useEffect(() => {
    reducerSearchProduct();
  }, [dataInputSearch]);

  console.log('post', postFilter);


  return (
    <div>
      <Col className="mb-5 mt-5 d-flex flex-wrap justify-content-center align-items-center">
        {

        (postFilter.length !== 0 || dataArrayFilter) ?

        (
          (dataArrayFilter || postFilter).map((item, i) => {
            return (
              <a href={`/DetailProductPage/${item.permalink}`} key={i}>
                <Card
                  style={{
                    width: "15rem",
                    height: "30rem",
                    margin: "0 20px 10px 0", 
                    boxShadow: "10px 20px 30px rgba(80, 80, 80, 0.07)",
                    border: "none",
                    borderRadius: "6px",
                  }}
                >
                  <Card.Img
                    style={{ width: "100%"}}
                    variant="top"
                    src={(item.SpreeProductImages[0]["main_image"]) ? (`https://apis-dev.aspenku.com${item?.SpreeProductImages[0]["main_image"]}`) : NotFoundImage}
                    alt="products-img"
                  />
                  <Card.Body style={{ textAlign: "center" }}>
                    <Card.Title>
                      {item?.name}
                    </Card.Title>
                    <Card.Text style={{ color: "#0796C6" }}>
                      {item?.SpreeStore?.store_name}
                    </Card.Text>
                    {/* <StarRatings
                      rating={parseInt(item.SpreeStore?.store_average_rating)}
                      starRatedColor="yellow"
                      // changeRating={this.changeRating}
                      numberOfStars={5}
                      name="rating"
                      starDimension="20px"
                      starSpacing="5px"
                    /> */}
                  </Card.Body>
                </Card>
              </a>
            );

          })
        )

        :

        (productData.map((item, i) => {
          return (
            <a href={`/DetailProductPage/${item.permalink}`} key={i}>
              <Card
                style={{
                  width: "15rem",
                  height: "30rem",
                  margin: "0 20px 10px 0", 
                  boxShadow: "10px 20px 30px rgba(80, 80, 80, 0.07)",
                  border: "none",
                  borderRadius: "6px",
                }}
              >
                <Card.Img
                  style={{ width: "100%"}}
                  variant="top"
                  src={(item.SpreeProductImages[0]["main_image"]) ? (`https://apis-dev.aspenku.com${item.SpreeProductImages[0]["main_image"]}`) : NotFoundImage}
                  alt="products-img"
                />
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title>
                    {item?.name}
                  </Card.Title>
                  <Card.Text style={{ color: "#0796C6" }}>
                    {item?.SpreeStore?.store_name}
                  </Card.Text>
                  <StarRatings
                    rating={parseInt(item.SpreeStore?.store_average_rating)}
                    starRatedColor="yellow"
                    // changeRating={this.changeRating}
                    numberOfStars={5}
                    name="rating"
                    starDimension="20px"
                    starSpacing="5px"
                  />
                </Card.Body>
              </Card>
            </a>
          );
        })
)

        }
      </Col>
    </div>
  );
};

export default HomePageProducts;
