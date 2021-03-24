export interface ICurrent {
    clouds: number,
    dew_point: number,
    dt: number,
    feels_like: number,
    humidity: number,
    pressure: number,
    rain?: any,
    snow?: any,
    sunrise: number,
    sunset: number,
    temp: number,
    uvi: number,
    visibility: number,
    weather: IWeather[],
    wind_deg: number,
    wind_speed: number,
    wind_gust?: number,
};

interface IWeather {
    id: number,
    main: string,
    description: string,
    icon: string,
};