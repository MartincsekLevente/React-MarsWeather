import './Mars.css';
import { getMarsWeather } from "../../Services/apiService.ts";
import MarsInfoItem from "./MarsInfoItem/MarsInfoItem.tsx";

export default function Mars() {

    return (
        <div className="mars-wrapper">
            <div className="mars-container">
                <div className="mars-img-container">
                </div>
                <div className="mars-info-anchor">
                    <MarsInfoItem
                        name="Sol 377">
                    </MarsInfoItem>
                    <MarsInfoItem
                        name="Season">
                    </MarsInfoItem>
                    <MarsInfoItem
                        name="Minimum Temperature">
                    </MarsInfoItem>
                    <MarsInfoItem
                        name="Maximum Temperature">
                    </MarsInfoItem>
                    <MarsInfoItem
                        name="Wind Speed">
                    </MarsInfoItem>
                    <MarsInfoItem
                        name="Wind Direction">
                    </MarsInfoItem>
                </div>
            </div>
        </div>
    );
}