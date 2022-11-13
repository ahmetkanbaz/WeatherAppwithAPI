import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Col, Card} from 'reactstrap'

function SearchCities (){

    const [search, setSearch] = useState();
    const [weather, setWeather] = useState({});

    const API = {
        API_KEY : '', //Your API KEY //Sizin adınıza oluşturmuş olduğunuz API KEY
        API_URL : 'https://api.openweathermap.org/data/2.5/'
    }

    const searchLocation = () => {
        fetch(`${API.API_URL}weather?q=${search}&units=metric&APPID=${API.API_KEY}`)
        .then(response => response.json())
        .then(data => {
            setWeather(data)
        }
        )
    }

    const inputEnter = (e) => {
        if (e.key === 'Enter') {
            searchLocation();
        }
      }
    return(
        <div  className='styleRightCol'>
            {/* Search */}
            <div className='rightColUst'>
                <p style={{fontWeight:'bold'}}>Şehir Giriniz:</p>
                
                <input className='textArea'
                    type= 'text'
                    placeholder= 'Şehir Giriniz...'
                    onChange={(event) => setSearch(event.target.value)}
                    onKeyDown = {inputEnter}
                />
                
                {
                    search == null ?
                        <button className='ornek' type='button' >Ara</button> :
                        <button className='ornek' type='button' onClick={searchLocation}>Ara</button>
                }
                      
            </div>
            {typeof weather.main != "undefined" ?
            <div>
                {/* Location */}
                <Card style={{width: '55%', textAlign: 'center', fontWeight:'bold', margin:'10px 20px', backgroundColor:'#E1F3F7'}}>{weather.name} / {weather.sys.country}</Card>
                <Col style={{marginLeft: '20px'}}>
                    <p>Sıcaklık Değeri: <span className='styleSpan'>{weather.main.temp} °C</span></p>
                    <hr />
                    <p>Hissedilen Sıcaklık Değeri:  <span className='styleSpan'>{weather.main.feels_like} °C</span></p>
                    <hr />
                    <p>Nem Oranı:   <span className='styleSpan'>%{weather.main.humidity}</span></p>
                    <hr />
                    <p>Hava Koşulu: <span className='styleSpan'>{weather.weather[0].main}</span></p>  
                </Col>           
            </div>
            :
                ''
            }
        </div>
    )
}

export default SearchCities