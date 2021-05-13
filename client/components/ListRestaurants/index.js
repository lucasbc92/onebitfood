import React from 'react';
import { Container, Row, Col, Spinner, Alert }  from 'react-bootstrap';
import getRestaurants from '../../services/getRestaurants';
import Restaurant from '../ListRestaurants/Restaurant';


export default function ListRestaurants() {
    const { restaurants, isLoading, isError } = getRestaurants();
    
    function renderContent() {
        if(isError) {
            return <Col><Alert variant='custom-red'>Erro ao carregar</Alert></Col>
        } else if(isLoading) {
            return <Col><Spinner animation='border'></Spinner></Col>
        } else if(restaurants.length == 0) {
            return <Col>Nenhum restaurante disponível</Col>
        } else {
            return restaurants.map((restaurant) => <Restaurant {...restaurant} key={restaurant.id}/>)
        }
    }   

    return (
        <div className='mt-5'>
            <h3 className='fw-bold'>Restaurantes</h3>
            <Row>
                {renderContent()}
            </Row>
       </div>
    )
}