import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Table } from 'react-bootstrap';
const API_KEY = "8a9d27ce0b11afef8878bf5bd490dae5";
const CompleteWeatherList = (props) => {
    const [cityList, setCityList] = useState([]);
    useEffect(() => {
        axios.get(`http://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=${API_KEY}`)
            .then(res => {
                setCityList(res.data.list)
            })
            .catch(err => {
                console.log(err)
            })
    }, []);
    useEffect(() => {
        axios.get(`http://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=${API_KEY}`)
            .then(res => {
                setCityList(res.data.list)

            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div>
            <h4 className="pt-4" >Current Weather List Of Various Cities:-</h4>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>City Name</th>
                        <th>Temp</th>
                        <th>Min_Temp</th>
                        <th>Max_Temp</th>
                        <th>Description</th>
                        <th>Weather Icon</th>
                    </tr>
                </thead>
                <tbody>


                    {Object.entries(cityList).map((city, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{city[1].name}</td>
                                <td>{city[1].main.temp}</td>
                                <td>{city[1].main.temp_min}</td>
                                <td>{city[1].main.temp_max}</td>
                                <td>{city[1].weather[0].description.toUpperCase()}</td>
                                <td><img src={`http://openweathermap.org/img/wn/${city[1].weather[0].icon}@2x.png`} alt="Weather Description" style={{ height: "40px" }} /></td>
                                {console.log(city)}
                            </tr>
                        )
                    })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default CompleteWeatherList
