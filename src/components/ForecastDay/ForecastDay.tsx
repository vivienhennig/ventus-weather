import { useEffect, useState } from 'react';

import { IForecastDay } from '../../interfaces/forecastDay';

import '../../styles/forecastDay.css';

interface props {
    forecastDay: IForecastDay,
}


export default function ForeCastDay(props: props) {
    const { forecastDay } = props;
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const [date, setDate] = useState<string>('');
    const [weekday, setWeekday] = useState<string>('');
    const [windSpeed, setWindSpeed] = useState<number>();
    const [temperature, setTemperature] = useState<number>();
    const [rainChance, setRainChance] = useState<number>();
    const [clouds, setClouds] = useState<number>();
    const [humidity, setHumidity] = useState<number>();
    const [sunrise, setSunrise] = useState<string>();
    const [sunset, setSunset] = useState<string>();


    useEffect(() => {
        setDate(new Date(forecastDay.dt * 1000).toLocaleDateString('de-DE'));
        if ((new Date(forecastDay.dt * 1000).getDay()) !== 0) {
            setWeekday(days[(new Date(forecastDay.dt * 1000).getDay()) - 1]);
        } else {
            setWeekday(days[6]);
        };
        setWindSpeed(forecastDay.wind_speed);
        setClouds(forecastDay.clouds);
        setHumidity(forecastDay.humidity);
        setRainChance(forecastDay.rain);
        setSunrise(new Date(forecastDay.sunrise * 1000).toLocaleTimeString('de-DE').replace(/(:\d{2}| [AP]M)$/, ""));
        setSunset(new Date(forecastDay.sunset * 1000).toLocaleTimeString('de-DE').replace(/(:\d{2}| [AP]M)$/, ""));
        setTemperature(forecastDay.temp.day);
    }, []);


    return (
        <article className='forecast-day-wrapper'>
            <p className='weekday'>{weekday}</p>
            <p className='date'>{date}</p>
            <p className='value temperature'>{temperature}</p>
            {rainChance ? <p className='value rain-chance'>{rainChance} %</p> : null}
            <p className='value wind-speed'>{windSpeed} m/s</p>
            <p className='value clouds'>{clouds} %</p>
            <p className='value humidity'>{humidity} %</p>
            <p className='value sunrise'>{sunrise} h</p>
            <p className='value sunset'>{sunset} h</p>
        </article>
    );
}