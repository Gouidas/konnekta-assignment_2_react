import axios from "axios";
import { CarBrandsResponse } from "../lib/types";

// getCarsData is an asynchronous function that fetches car brands data from a remote API
export const getCarsData = async (): Promise<CarBrandsResponse> => {
  try {
    // Make a GET request to the API endpoint and await for the response
    const response = await axios.get<CarBrandsResponse>(
      "https://private-anon-1305132f66-carsapi1.apiary-mock.com/manufacturers"
    );
    // Return the data from the response when it's received
    return response.data;
  } catch (error) {
    // If an error occurs during the API call, log the error to the console and throw the error again to be caught and handled by the calling function
    console.error("Error occurred while fetching car data", error);
    throw error;
  }
};
