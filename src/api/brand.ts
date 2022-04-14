import { TBrands } from "types/brand";
import { generateAPIWithPaging } from "./utils";

// ----------------------------------------------------------------------

const brandApi = {
  ...generateAPIWithPaging<TBrands>("brands"),
};

export default brandApi;
