import ForecastDay from '../ForecastDay/ForecastDay';

import { IForecastDay } from '../../interfaces/forecastDay';

import '../../styles/sevenDayForecast.css';

interface props {
    forecastDaily: IForecastDay[],
}


export default function SevenDayForecast(props: props) {
    const { forecastDaily } = props;


    return (
        <section className='seven-day-forecast-wrapper'>
            {
                forecastDaily.map((day) => (
                    <ForecastDay
                        key={day.dt}
                        forecastDay={day}
                    />
                ))
            }
        </section>
    );
}