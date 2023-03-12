import axios from "axios";

export const getWeights = async () => {
  const { data } = await axios.get(
    "https://raw.githubusercontent.com/alphacrash/database/main/health/weight.json"
  );
  return data;
};
