import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Row, Col} from 'reactstrap'
import SearchCities from './SearchCities'
import CurrentWeather from './CurrentWeather'

function App () {

    return(
        <div>
            <div className='baslik'>
                Weather App
            </div>
            <br />
            <br />
                <Row>
                    <Col xs='4'>
                        <CurrentWeather />
                    </Col>
                    <Col xs='8'>
                        <SearchCities />
                    </Col>
                </Row>
        </div>
    )
}

export default App