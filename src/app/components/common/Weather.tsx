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
    unit?: 'metric' | 'imperial';
}

const WeatherFooter: React.FC<WeatherProps> = ({ unit = 'metric' }) => {
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
        let isMounted = true;

        const fetchWeather = async (lat?: number, lon?: number) => {
            if (!isMounted) return;
            setLoading(true);
            setError(null);

            try {
                const params = new URLSearchParams();
                if (lat && lon) {
                    params.append('lat', lat.toString());
                    params.append('lon', lon.toString());
                }
                params.append('unit', unit);

                const response = await fetch(`/api/weather?${params.toString()}`, {
                    cache: 'no-store',
                });
                const data = await response.json();

                if (response.status !== 200) {
                    throw new Error(data.error || 'Failed to fetch weather data');
                }

                setWeatherData(data);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (err: any) {
                console.error(err);
                setError(err.message || 'An error occurred while fetching weather data');
            } finally {
                setLoading(false);
            }
        };

        const requestWeather = () => {
            if (!navigator.geolocation) {
                fetchWeather();
                return;
            }

            const timeoutId = window.setTimeout(() => {
                console.warn('Geolocation timed out. Fetching weather for default city.');
                fetchWeather();
            }, 6000);

            navigator.geolocation.getCurrentPosition(
                (position) => {
                    window.clearTimeout(timeoutId);
                    fetchWeather(position.coords.latitude, position.coords.longitude);
                },
                () => {
                    window.clearTimeout(timeoutId);
                    console.warn('Geolocation permission denied. Fetching weather for default city.');
                    fetchWeather();
                },
                {
                    enableHighAccuracy: false,
                    timeout: 5000,
                    maximumAge: 600000,
                }
            );
        };

        requestWeather();

        return () => {
            isMounted = false;
        };
    }, [unit]);
    const tempUnit = unit === 'metric' ? '°C' : '°F';

    return (
    <>
        {loading && <span className="text-base text-black dark:text-white">Loading weather...</span>}
        
        {error && <span className="text-base text-red-500">{error}</span>}
        
        {weatherData && !loading && !error && (
            <div className="w-fit mx-auto flex items-center gap-3 px-4 py-2 rounded-xl backdrop-blur-md bg-black/5 dark:bg-white/10 shadow-sm dark:shadow-none border border-black/10 dark:border-white/10 md:gap-6 md:px-10 md:py-3 md:rounded-2xl">
                <div className="flex flex-col leading-tight">
                <span className=" text-sm font-semibold text-black dark:text-white">{currentTime}</span>
                <span className=" text-sm font-semibold text-black dark:text-white">
                    {Math.round(weatherData.main.temp)}{tempUnit} • {weatherData.weather[0].main}
                </span>
                <span className="text-xs text-black/70 dark:text-white/70">{weatherData.name}</span>
            </div>
            </div>
        )}
    </>
    );
};

export default WeatherFooter;