import React, { useState, useEffect, useContext } from "react";
import {
  Col,
  Form,
  Row,
  Card,
  Accordion,
  InputGroup,
  FormControl,
  Button,
  useAccordionToggle,
  ContextToggle,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/fontawesome-svg-core";
import { useDispatch, useSelector } from "react-redux";
import StarRatings from "react-star-ratings";
import ReactPaginate from "react-paginate";
import {
  BsFillCaretDownFill,
  BsFillCaretUpFill,
  BsFillStarFill,
} from "react-icons/bs";
import { getDataProductsFilter } from "../store/services/productsDataFilter";

const FilterSidebar = (props) => {
  const [minPriceFilter, setMinPriceFilter] = useState("");

  const [maxPriceFilter, setMaxPriceFilter] = useState("");

  const dispatch = useDispatch();
  const productsDataFiltered = useSelector(
    (state) => state.productsDataFilter.products
  );

  console.log("filter", productsDataFiltered);

  useEffect(() => {
    if (minPriceFilter || maxPriceFilter) {
      dispatch(getDataProductsFilter(minPriceFilter, maxPriceFilter));
    }
  }, [minPriceFilter, maxPriceFilter]);

  const changeInputMinPrice = (e) => {
    // console.log(minPriceFilter);
    setMinPriceFilter(e.target.value);
  };

  const changeInputMaxPrice = (e) => {
    setMaxPriceFilter(e.target.value);
  };

  return (
    <div>
      <Accordion className="accordion-container mt-5" defaultActiveKey="0">
        <div className="side-card">
          <Card className="accordion-card">
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Filter
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Price</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    name="minPrice"
                    placeholder="min price"
                    aria-label="min price"
                    aria-describedby="basic-addon1"
                    onChange={changeInputMinPrice}
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Price</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    name="maxPrice"
                    placeholder="max price"
                    aria-label="harga maksimal"
                    aria-describedby="basic-addon1"
                    onChange={changeInputMaxPrice}
                  />
                </InputGroup>
                <Button 
                variant="primary" 
                type="submit"
                onClick={ () => props.changeInputFilter(productsDataFiltered)}
                >
                Filter
                </Button>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </div>
      </Accordion>
    </div>
  );
};

export default FilterSidebar;
