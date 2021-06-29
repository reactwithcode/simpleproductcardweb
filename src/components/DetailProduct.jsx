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
  Container,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/fontawesome-svg-core";
import StarRatings from "react-star-ratings";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import ReactPaginate from "react-paginate";
import {
  BsFillCaretDownFill,
  BsFillCaretUpFill,
  BsFillStarFill,
} from "react-icons/bs";
import {InlineReactionButtons} from 'sharethis-reactjs';
import {InlineShareButtons} from 'sharethis-reactjs';
import {StickyShareButtons} from 'sharethis-reactjs';
import {InlineFollowButtons} from 'sharethis-reactjs';

import NotFoundImage from "../assets/img/notfound.jpeg";
import { getDataProductsDetail } from "../store/services/productsDataDetail";

const DetailProduct = () => {
  const permalink = window.location.pathname.split("/")[2];
  const path = window.location.pathname;
  const productUrl = `https://apis-dev.aspenku.com${path}`;

  const dispatch = useDispatch();
  const productDetailData = useSelector(
    (state) => state.productsDataDetail.products
  );

  console.log(productDetailData);

  useEffect(() => {
    dispatch(getDataProductsDetail(permalink));
  }, []);

  return (
    <Container>
     <Row>
          <Col lg={4} className="mb-5 mt-5 p-0 d-flex flex-wrap justify-content-center align-items-center">
            <Card
              style={{
                width: "30rem",
                height: "30rem",
                margin: "0 20px 0 0",
                boxShadow: "10px 20px 30px rgba(80, 80, 80, 0.07)",
                border: "none",
                borderRadius: "6px",
              }}
            >
              <Zoom>
                <img
                  style={{ width: "100%"}}
                  variant="top"
                  src={`https://apis-dev.aspenku.com${productDetailData.SpreeProductImages?.[0]["main_image"]}`}
                  alt="products-img"
                />
              </Zoom>
              </Card>
   
          </Col>


          <Col lg={8} className="mb-5 mt-5 d-flex flex-wrap">
            <Card
              style={{
                width: "70rem",
                height: "40rem",
                margin: "0 20px 10px 0",
                boxShadow: "10px 20px 30px rgba(80, 80, 80, 0.07)",
                border: "none",
                borderRadius: "6px",
              }}
            >
              <Card.Body style={{ textAlign: "left", paddingLeft: '5rem' }}>
              <Card.Title style={{ color: "#0796C6", marginBottom: '50px' }}><h1>Product: {productDetailData?.name}</h1></Card.Title>
                <Card.Text><h3>Minimum order: {productDetailData?.min_qty_order} {productDetailData?.unit_measure}</h3></Card.Text>
                <Card.Text><h3>Price: {productDetailData?.sell_price} {productDetailData?.currency}</h3></Card.Text>
                <Card.Text><h3>Description: {productDetailData?.short_description}</h3></Card.Text>
                <Card.Text><h3>Store name: {productDetailData?.SpreeStore?.store_name}</h3></Card.Text>
                <Card.Text className="d-flex flex-wrap">
                <h3 className="me-3 mb-3">Store Rating:</h3>
                <StarRatings
                  rating={4}
                  starRatedColor="yellow"
                  // changeRating={this.changeRating}
                  numberOfStars={5}
                  name="rating"
                  starDimension="20px"
                  starSpacing="5px"
                />
                </Card.Text>
                
        <InlineShareButtons
          config={{
            alignment: 'left',  // alignment of buttons (left, center, right)
            color: 'social',      // set the color of buttons (social, white)
            enabled: true,        // show/hide buttons (true, false)
            font_size: 16,        // font size for the buttons
            labels: 'cta',        // button labels (cta, counts, null)
            language: 'en',       // which language to use (see LANGUAGES)
            networks: [           // which networks to include (see SHARING NETWORKS)
              'whatsapp',
              'linkedin',
              'facebook',
            ],
            padding: 12,          // padding within buttons (INTEGER)
            radius: 4,            // the corner radius on each button (INTEGER)
            show_total: true,
            size: 30,             // the size of each button (INTEGER)

            // OPTIONAL PARAMETERS
            url: `${productUrl}`, // (defaults to current url)
            image: 'https://bit.ly/2CMhCMC',  // (defaults to og:image or twitter:image)
            description: `${productDetailData?.short_description}`,       // (defaults to og:description or twitter:description)
            title: `${productDetailData?.name}`,            // (defaults to og:title or twitter:title)
            message: 'Best product',     // (only for email sharing)
            subject: 'Offering',  // (only for email sharing)
            username: 'user' // (only for twitter sharing)
          }}
        />

              </Card.Body>
            </Card>
          </Col>
     </Row>
    </Container>
  );
};

export default DetailProduct;
