export type BaseReponse<T> = {
  results: T[];
  metadata: {
    page: number;
    size: number;
    total: number;
  };
};

export type TRequestPaging = {
  size?: number;
  page?: number;
};
