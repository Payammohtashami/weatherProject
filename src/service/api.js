import axios from "axios";


export const GetData = async(city) => {
    const apiKey = "1279d61c177ff3d2f36a10c7108c85f8";
    const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await axios.get(BASE_URL);
    return response;
                
};
