import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Col, Card} from 'reactstrap'

function CurrentWeather() {

    const [lat, setLat] = useState([0])
    const [long, setLong] = useState([0])
    const [current, setCurrent] = useState({})

    const API = {
        API_KEY : '', //Your API KEY //Sizin adınıza oluşturmuş olduğunuz API KEY
        API_URL : 'https://api.openweathermap.org/data/2.5/'
    }

   useEffect(() => {
         navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude)
            setLong(position.coords.longitude)
        });

        
        fetch(`${API.API_URL}weather?lat=${lat}&lon=${long}&appid=${API.API_KEY}&units=metric`)
        .then(response => response.json())
        .then(data => setCurrent(data))
    }, [lat, long])

    return (
        <div  className='styleLeftCol'>
            <div className='currentBaslik'>BULUNDUĞUNUZ KONUMDAKİ HAVA DURUMU</div>
            {typeof current.main != "undefined" ?
            <div>
                {/* Location */}
                <Card style={{width: '55%', textAlign: 'center', fontWeight:'bold', margin:'10px 20px', backgroundColor:'#E1F3F7'}}>{current.name} / {current.sys.country}</Card>
                <Col style={{marginLeft: '20px'}}>
                    <p>Sıcaklık Değeri: <span className='styleSpan'>{current.main.temp} °C</span></p>
                    <hr />
                    <p>Hissedilen Sıcaklık Değeri:  <span className='styleSpan'>{current.main.feels_like} °C</span></p>
                    <hr />
                    <p>Nem Oranı:   <span className='styleSpan'>%{current.main.humidity}</span></p>
                    <hr />
                    <p>Hava Koşulu: <span className='styleSpan'>{current.weather[0].main}</span></p>
                </Col>
        
            </div>
            :
                ''
            }
        </div>
    )
}

export default CurrentWeather