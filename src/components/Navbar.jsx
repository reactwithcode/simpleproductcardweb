import React, { useState, useEffect } from "react";
import {
  InputGroup,
  FormControl,
  Form,
  Image,
  Row,
  Col,
} from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { getDataProductsSearch } from "../store/services/productsDataSearch";
import { getDataProducts } from "../store/services/productsData";

import { useHistory, Redirect } from "react-router-dom";

// import HomePage from "../pages/HomePage";

const Navbar = (props) => {
  const token = localStorage.getItem("token");

  const dispatch = useDispatch();
  const dataProduct = useSelector((state) => state.productsData.products);

  const [search, setSearch] = useState("");

  // const [city, setCity] = useState(dataProduct.city_or_regional);

  // console.log('city', city);

  // const history = useHistory();

  // console.log('nav', dataProduct);
  // console.log(search)

  // useEffect(() => {
  //       dispatch(getDataProductsSearch(search));
  //       if(search) {
  //         history.push("/")
  //       }
  // }, [search]);


  const changeInput = (e) => {
    setSearch(e.target.value);
  };

  // const submitSearch = (e) => {
  //     dispatch(getDataServiceSearch())
  // }


  return (
    <div>
      <div className="w-100">
        <div className="container-fluid navbar-user">
          <div className="container">
            <Row className="customerNav justify-content-center text-center">
              <Col lg={5} md={4} sm={12}>
                <a className="navbarTxt" href="/">
                  A-SHOP
                </a>
              </Col>
              <Col lg={7} md={4} sm={12} className="w-100">
                <Form>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">
                        <i className="fa fa-search" aria-hidden="true"></i>
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      placeholder="Need best products?"
                      aria-label="products"
                      aria-describedby="basic-addon1"
                      name="brand_product_name"
                      onChange={(e) => props.changeInput(e.target.value)}
                    />
                  </InputGroup>
                </Form>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
