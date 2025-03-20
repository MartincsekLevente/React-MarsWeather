import './Mars.css';
import { getMarsWeather } from "../../Services/apiService.ts";
import MarsInfoItem from "./MarsInfoItem/MarsInfoItem.tsx";
import { useEffect, useState } from "react";
import { MarsInfo } from "../../Models/MarsInfo.ts";

export default function Mars() {

    const [weatherData, setWeatherData] = useState<MarsInfo>();
    const [lastSol, setLastSol] = useState<string | null>(null)

    useEffect(() => {
        initialSetup();
    }, []);

    function initialSetup() {
        getMarsWeather().then((data) => {
            setWeatherData(data);
            setLastSol(data.sol_keys.slice(-1)[0]);
        });
    }

    return (
        <div className="mars-wrapper">
            <div className="mars-container">
                <div className="mars-img-container">
                </div>
                {weatherData && lastSol ? (
                    <div className="mars-info-anchor">
                        <MarsInfoItem
                            name="Sol"
                            value={lastSol}>
                        </MarsInfoItem>
                        <MarsInfoItem
                            name="Season:"
                            value={weatherData[lastSol].Season}>
                        </MarsInfoItem>
                        <MarsInfoItem
                            name="Minimum Temp:"
                            value={weatherData[lastSol].AT.mn.toFixed(0).toString()}>
                        </MarsInfoItem>
                        <MarsInfoItem
                            name="Maximum Temp:"
                            value={weatherData[lastSol].AT.mx.toFixed(0).toString()}>
                        </MarsInfoItem>
                        <MarsInfoItem
                            name="Wind Speed:"
                            value={`${weatherData[lastSol].HWS.av.toFixed(1).toString()} kmph`}>
                        </MarsInfoItem>
                        <MarsInfoItem
                            name="Wind Direction:"
                            value={weatherData[lastSol].WD.most_common.compass_point}>
                        </MarsInfoItem>
                    </div>
                ) : (
                    <div className="error-message-container">
                        NASA InSight is down!
                    </div>
                )}
            </div>
        </div>
    );
}