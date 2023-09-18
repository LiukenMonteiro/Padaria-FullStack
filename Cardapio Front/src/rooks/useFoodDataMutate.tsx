import { useMutation, useQueryClient } from "react-query";
import axios, { AxiosPromise } from "axios";
import { FoodData } from "../interface/FoodData";

const API_URL = 'http://localhost:8080';

const fetchData = async (data: FoodData): AxiosPromise<any> => { 
    const response = axios.post(API_URL + '/padaria', data);
    return response;
}

export function useFoodDataMutate() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: fetchData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['food-data'])
        }
    })
      return mutate;
}