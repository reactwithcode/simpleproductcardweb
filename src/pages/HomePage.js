import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import FilterSidebar from '../components/FilterSidebar';
import HomePageProducts from '../components/HomePageProducts';
import Footer from '../components/Footer';
import './HomePage.scss'
import {Container, Col, Row} from 'react-bootstrap';

const HomePage = () => {

    const [inputSearch, setInputSearch] = useState("");
    
    const [arrayFilter, setArrayFilter] = useState("");

    console.log('input search',inputSearch);

    return (
        <div>         
            <Navbar changeInput={inputSearch => setInputSearch(inputSearch)}/>
            <Container>
                <Row>
                    <Col lg={3} className="d-flex flex-wrap justify-content-center"><FilterSidebar changeInputFilter={arrayFilter => setArrayFilter(arrayFilter)}/></Col>
                    <Col lg={9} className=""><HomePageProducts dataInputSearch={inputSearch} dataArrayFilter={arrayFilter}/></Col>  
                </Row>    
            </Container>
            <Footer/>
        </div>
    )
}

export default HomePage
