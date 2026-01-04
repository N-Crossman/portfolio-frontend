import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = request.nextUrl;
        const unit = searchParams.get('unit') || 'metric';
        const apiKey = process.env.OPENWEATHER_API_KEY;

        if (!apiKey) {
            return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
        }

        const lat = searchParams.get('lat');
        const lon = searchParams.get('lon');
        const city = searchParams.get('city') || 'Calgary,CA';

        let url = '';

        if (lat && lon) {
            url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${apiKey}`;
            } else {
            url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
        }

        const response = await fetch(url, { cache: 'no-store' });
        if (!response.ok) {
            return NextResponse.json({ error: 'Failed to fetch weather data' }, { status: 500});
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
