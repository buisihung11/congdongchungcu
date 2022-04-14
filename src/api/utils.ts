import { AxiosResponse } from "axios";
import { BaseReponse, TRequestPaging } from "types/response";
import request from "utils/axios";

// ----------------------------------------------------------------------

export interface BaseApiWithPaging<
  T,
  Q extends TRequestPaging = TRequestPaging
> {
  get: (params?: Q) => Promise<AxiosResponse<BaseReponse<T>>>;
  create: (data: Partial<T>) => Promise<AxiosResponse<any>>;
  getById: (id: any, params?: any) => Promise<AxiosResponse<T>>;
  delete: (id: any) => Promise<AxiosResponse<any>>;
  update: (id: any, data: T) => Promise<AxiosResponse<any>>;
}

export function generateAPIWithPaging<
  T,
  Q extends TRequestPaging = TRequestPaging
>(resource: string): BaseApiWithPaging<T, Q> {
  return {
    get: (params?: Q) =>
      request.get<BaseReponse<T>>(`/${resource}`, {
        params: { Page: 1, PageSize: 40, ...params },
      }),
    getById: (id, params: Q) =>
      request.get<T>(`/${resource}/${id}`, {
        params,
      }),
    delete: (id) => request.delete<any>(`/${resource}/${id}`),
    create: (data) => request.post<BaseReponse<T>>(`/${resource}`, data),
    update: (id, data) => request.put<T>(`/${resource}/${id}`, data),
  };
}
