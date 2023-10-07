import { useState } from "react"

const WeatherCard = ({weather, temp}) => {
  const [isCelsius, setIsCelcius] = useState(true)
  const handleChangeTemp = () => setIsCelcius(!isCelsius)
  return (
    <article className="container">
      <h1>Weather App</h1>
      <h2><span>{weather?.name}</span>, <span>{weather?.sys.country}</span></h2>
      <div className="container__div">
        <div className="img">
          <img src={weather && `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
          alt="foto"/>
        </div>
        <section className="container_data">
          <h3>"{weather?.weather[0].description}"</h3>
          <ul className="container_li">
            <li className="item"><span className="span">Wind Speed</span><span>{weather?.wind.speed} m/s</span></li>
            <li className="item"><span className="span">Clouds</span><span>{weather?.clouds.all} %</span></li>
            <li className="item"><span className="span">Pressure</span><span>{weather?.main.pressure} hPa</span></li>
          </ul>
       </section>
       <footer className="footer">
        <h2 className="footer_title">{isCelsius ? `${temp?.celsius} °C` :`${temp?.fahrenheit} °F`}</h2>
        <button className="button" onClick={handleChangeTemp}>{isCelsius ?'change to °F' : 'change to °C'}</button>
        </footer>
     </div>
    </article>
  )
}

export default WeatherCard