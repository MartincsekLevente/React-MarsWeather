const API_KEY = "4wa96dKh09PgNgXRrEpMAyGjzoeaj1g32d8N2BYW"
const INSIGHT_API_URL = `https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`;

export async function getMarsWeather() {
    const response = await fetch(INSIGHT_API_URL);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();

}