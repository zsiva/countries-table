import { useSelector } from "react-redux";

export const useCountries = () =>
  useSelector(state => {
    return state.items;
  });
