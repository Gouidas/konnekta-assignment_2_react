import axios from "axios";
import { CarBrandsResponse } from "../lib/types";

// getCarsData is an asynchronous function that fetches car brands data from a remote API
export const getCarsData = async (): Promise<CarBrandsResponse> => {
  try {
    // Try to fetch data and timestamp from localStorage
    const cachedData = localStorage.getItem("carBrandsData");
    const cachedTimestamp = localStorage.getItem("carBrandsTimestamp");
    // Define the time limit for cache validity - in this case, 24 hours
    const oneDay = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

    // If both cachedData and cachedTimestamp exist and the data is less than one day old...
    if (
      cachedData &&
      cachedTimestamp &&
      Date.now() - Number(cachedTimestamp) < oneDay
    ) {
      // ...parse and return the cached data
      return JSON.parse(cachedData);
    } else {
      // If the data doesn't exist in cache or is outdated, fetch it from the API
      const response = await axios.get<CarBrandsResponse>(
        "https://private-anon-1305132f66-carsapi1.apiary-mock.com/manufacturers"
      );

      // Store the fetched data and the current timestamp in localStorage
      localStorage.setItem("carBrandsData", JSON.stringify(response.data));
      localStorage.setItem("carBrandsTimestamp", String(Date.now()));

      // Return the fetched data
      return response.data;
    }
  } catch (error) {
    // If an error occurs, log it to the console and re-throw it
    console.error("Error occurred while fetching car data", error);
    throw error;
  }
};
