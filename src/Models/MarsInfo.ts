export interface MarsInfo {
    sol_keys: string[];
    [sol: string]: SolWeather;
}

export interface SolWeather {
    AT: TemperatureData;
    WD: WindDirectionData;
    HWS: HorizontalWindSpeedData;
    Season: string;
}

export interface TemperatureData {
    av: number;
    mn: number;
    mx: number;
}

export interface WindDirectionData {
    most_common: MostCommonWindData;
}

export interface MostCommonWindData {
    compass_degrees: number;
    compass_point: string;
}

export interface HorizontalWindSpeedData {
    av: number;
}