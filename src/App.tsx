import { useEffect, useState } from 'react';

import Today from './components/Today/Today';
import SevenDayForecast from './components/SevenDayForecast/SevenDayForecast';
import Spinner from './components/Spinner/Spinner';

import { ICurrent } from './interfaces/current';
import { IForecastDay } from './interfaces/forecastDay';


export default function App() {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const LATITUDE = process.env.REACT_APP_LATITUDE;
  const LONGITUDE = process.env.REACT_APP_LONGITUDE;
  const API_KEY = process.env.REACT_APP_API_KEY;
  const UNITS = process.env.REACT_APP_UNITS;

  const locationName: string = 'Hamburg';
  const countryName: string = 'Germany';

  const [isLoading, setIsLoading] = useState(true);
  const [current, setCurrent] = useState<ICurrent>(Object);
  const [daily, setDaily] = useState<IForecastDay[]>([]);


  useEffect(() => {
    const exclude = 'hourly,minutely';

    const loadData = async () => {
      await fetch(`${BASE_URL}?lat=${LATITUDE}&lon=${LONGITUDE}&exclude=${exclude}&appid=${API_KEY}&units=${UNITS}`)
        .then(res => res.json())
        .then(data => {
          setCurrent(data.current);
          data.daily.shift();
          setDaily(data.daily);
        })
        .catch(err => console.error(err));

      setIsLoading(false);
    };

    loadData();
  }, []);


  return (
    <>
      {
        isLoading
          ?
          <Spinner />
          :
          <>
            <Today
              clouds={current.clouds}
              feels_like_current={current.feels_like}
              humidity={current.humidity}
              temp_current={current.temp}
              wind_speed={current.wind_speed}
              feels_like={daily[0].feels_like}
              temp={daily[0].temp}
              weather={current.weather}
              city={locationName}
              country={countryName}
              rain={current.rain}
            />
            <SevenDayForecast
              forecastDaily={daily}
            />
          </>

      }
    </>
  );
}