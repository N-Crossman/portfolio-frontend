"use client";
import React, { useEffect, useState } from "react";

interface WeatherData {
    main: {
        temp: number;
        feels_like: number;
        humidity: number;
    };
    weather: Array<{
        id: number;
        main: string;
        description: string;
        icon: string;
    }>;
    wind: {
        speed: number;
    };
    name: string;
}

interface WeatherProps {
    apiKey: string;
    unit?: 'metric' | 'imperial';
}

const WeatherFooter: React.FC<WeatherProps> = ({ apiKey, unit = 'metric' }) => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [currentTime, setCurrentTime] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }));
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const url = `https://api.openweathermap.org/data/2.5/weather?q=Calgary,CA&units=${unit}&appid=${apiKey}`;
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to fetch weather data');
                }

                const data = await response.json();
                setWeatherData(data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError('Error fetching weather data');
                setLoading(false);
            }
        };

        fetchWeather();
    }, [apiKey, unit,]);

    const tempUnit = unit === 'metric' ? '°C' : '°F';

    return (
    <>
        {loading && <span className="text-base">Loading weather...</span>}
        
        {error && <span className="text-base">{error}</span>}
        
        {weatherData && !loading && !error && (
            <div className="flex items-center gap-2">
                <span className="font-semibold text-black dark:text-white">{currentTime}</span>
                <span className="font-semibold text-black dark:text-white">
                    {Math.round(weatherData.main.temp)}{tempUnit} • {weatherData.weather[0].main}
                </span>
                <span className="font-semibold text-black dark:text-white">{weatherData.name}</span>
            </div>
        )}
    </>
);};

export default WeatherFooter;