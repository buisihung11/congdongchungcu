import brandApi from "api/brand";
import { useQuery } from "react-query";
/** Get list root categories */
const useBrands = (params?: any) => {
  return useQuery(["brands", params], async () => await brandApi.get(params), {
    select: (res) => res.data.results,
  });
};

export default useBrands;
