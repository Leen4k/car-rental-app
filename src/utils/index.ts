import { CarProps, FilterProps } from '@/types';
import axios from 'axios';



const fetchCar = async (filters: FilterProps) => {
  const {manufacturer, year, model, limit, fuel} = filters;

  const options = {
    method: 'GET',
    url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
    params: {model: model, makes: manufacturer, limit:limit, fuel_type:fuel},
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_KEY,
      'X-RapidAPI-Host': process.env.RAPID_HOST
    }
  };

    try {
        const response = await axios.request(options);
        return response.data
    } catch (error) {
        console.error(error);
    }
};

export default fetchCar; 

const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export {calculateCarRent};

const generateCarImageUrl = (car: CarProps, angle?:string) => {
  const url = new URL ("https://cdn.imagin.studio/getimage") 
  const  {make, year, model} = car;
  console.log(car)

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make)
  url.searchParams.append("modelFamily", model.split(" ")[0])
  url.searchParams.append("zoomType", "fullscreen")
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`)

  return `${url}`
}

export {generateCarImageUrl};