import axios from "axios";
import { CarBrandsResponse } from "../lib/types";

export const getCarsData = async (): Promise<CarBrandsResponse> => {
  try {
    const response = await axios.get<CarBrandsResponse>(
      "https://private-anon-1305132f66-carsapi1.apiary-mock.com/manufacturers"
    );
    return response.data;
  } catch (error) {
    console.error("Error occurred while fetching car data", error);
    throw error;
  }
};
