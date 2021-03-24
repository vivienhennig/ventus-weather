import { useEffect, useState } from 'react';

import { IToday } from '../../interfaces/today';

import cloudImage from '../../images/cloud.png';
import sunImage from '../../images/sun.png';
import rainImage from '../../images/rain.gif';
import snowImage from '../../images/snow.gif';
import thunderImage from '../../images/thunder.gif';
import '../../styles/today.css';


export default function Today(props: IToday) {
    const { clouds, feels_like_current, humidity, temp_current, wind_speed, feels_like, temp, weather, city, country, rain } = props;

    const [image, setImage] = useState<string>('');

    useEffect(() => {
        switch (weather[0].main) {
            case 'Clouds':
                setImage(cloudImage);
                break;
            case 'Clear':
                setImage(sunImage);
                break;
            case 'Thunderstorm':
                setImage(thunderImage);
                break;
            case 'Drizzle':
                setImage(rainImage);
                break;
            case 'Rain':
                setImage(rainImage);
                break;
            case 'Snow':
                setImage(snowImage);
                break;
            default:
                setImage(cloudImage);
                break;
        };
    }, []);


    return (
        <section className='today-wrapper'>
            <section className='information-container'>
                <article className='location-container today-container'>
                    <p className='location-country'>{country}</p>
                    <p className='location-city'>{city}</p>
                </article>
                <section className='weather-container'>
                    <article className='weather-container__left today-container'>
                        {rain ? <p className='rain-chance'>{rain} %</p> : null}
                        <p className='wind-speed'>{wind_speed} m/s</p>
                        <p className='clouds'>{clouds} %</p>
                        <p className='humidity'>{humidity} %</p>
                    </article>
                    <article className='weather-container__right today-container'>
                        <p className='current-temperature'>{temp_current}</p>
                        <p className='feels-like'>feels like {feels_like_current}</p>
                        <p className='max-temperature temperature-range'>{temp.max}</p>
                        <p className='min-temperature temperature-range'>{temp.min}</p>
                    </article>
                </section>
                <section className='temperature-container'>
                    <article className='temperature-trend today-container'>
                        <p className='label'>Temperature</p>
                        <p>{temp.morn}</p>
                        <p>{temp.day}</p>
                        <p>{temp.eve}</p>
                        <p>{temp.night}</p>
                    </article>
                    <article className='temperature-trend today-container'>
                        <p className='label'>Feels like</p>
                        <p>{feels_like.morn}</p>
                        <p>{feels_like.day}</p>
                        <p>{feels_like.eve}</p>
                        <p>{feels_like.night}</p>
                    </article>
                </section>
            </section>
            <figure className='image-container'>
                <img className='image' src={image} alt={`${image}`} />
            </figure>
        </section >
    );
}