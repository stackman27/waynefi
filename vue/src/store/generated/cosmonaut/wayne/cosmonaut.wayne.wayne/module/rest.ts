/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ProtobufAny {
  "@type"?: string;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
  /**
   * key is a value returned in PageResponse.next_key to begin
   * querying the next page most efficiently. Only one of offset or key
   * should be set.
   * @format byte
   */
  key?: string;

  /**
   * offset is a numeric offset that can be used when key is unavailable.
   * It is less efficient than using key. Only one of offset or key should
   * be set.
   * @format uint64
   */
  offset?: string;

  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   * @format uint64
   */
  limit?: string;

  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs.
   * count_total is only respected when offset is used. It is ignored when key
   * is set.
   */
  count_total?: boolean;

  /**
   * reverse is set to true if results are to be returned in the descending order.
   *
   * Since: cosmos-sdk 0.43
   */
  reverse?: boolean;
}

/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
  /** @format byte */
  next_key?: string;

  /** @format uint64 */
  total?: string;
}

export interface WayneBorrow {
  /** @format uint64 */
  id?: string;

  /** @format int32 */
  blockHeight?: number;
  asset?: string;

  /** @format int32 */
  amount?: number;
  denom?: string;
  creator?: string;
}

export interface WayneDeposit {
  /** @format uint64 */
  id?: string;

  /** @format int32 */
  blockHeight?: number;
  asset?: string;

  /** @format int32 */
  amount?: number;
  denom?: string;
  creator?: string;
}

export interface WayneInterfaceApr {
  /** @format uint64 */
  id?: string;
  blocktime?: string;

  /** @format int32 */
  timeApr?: number;
  creator?: string;
}

export interface WayneLoadPoolResponse {
  /** @format uint64 */
  id?: string;
  asset?: string;

  /** @format int32 */
  collatoralFactor?: number;

  /** @format int32 */
  liquidity?: number;

  /** @format int32 */
  depositApy?: number;

  /** @format int32 */
  borrowApy?: number;
  creator?: string;
}

export interface WayneMsgCreateBorrowResponse {
  /** @format uint64 */
  id?: string;
}

export interface WayneMsgCreateDepositResponse {
  /** @format uint64 */
  id?: string;
}

export interface WayneMsgCreateInterfaceAprResponse {
  /** @format uint64 */
  id?: string;
}

export interface WayneMsgCreateLoadPoolResponseResponse {
  /** @format uint64 */
  id?: string;
}

export interface WayneMsgCreatePoolResponse {
  /** @format uint64 */
  id?: string;
}

export interface WayneMsgCreateRepayResponse {
  /** @format uint64 */
  id?: string;
}

export interface WayneMsgCreateUserResponse {
  /** @format uint64 */
  id?: string;
}

export interface WayneMsgCreateWithdrawResponse {
  /** @format uint64 */
  id?: string;
}

export type WayneMsgDeleteBorrowResponse = object;

export type WayneMsgDeleteDepositResponse = object;

export type WayneMsgDeleteInterfaceAprResponse = object;

export type WayneMsgDeleteLoadPoolResponseResponse = object;

export type WayneMsgDeletePoolResponse = object;

export type WayneMsgDeleteRepayResponse = object;

export type WayneMsgDeleteUserResponse = object;

export type WayneMsgDeleteWithdrawResponse = object;

export type WayneMsgUpdateBorrowResponse = object;

export type WayneMsgUpdateDepositResponse = object;

export type WayneMsgUpdateInterfaceAprResponse = object;

export type WayneMsgUpdateLoadPoolResponseResponse = object;

export type WayneMsgUpdatePoolResponse = object;

export type WayneMsgUpdateRepayResponse = object;

export type WayneMsgUpdateUserResponse = object;

export type WayneMsgUpdateWithdrawResponse = object;

/**
 * Params defines the parameters for the module.
 */
export type WayneParams = object;

export interface WaynePool {
  /** @format uint64 */
  id?: string;
  asset?: string;
  denom?: string;

  /** @format int32 */
  collatoralFactor?: number;

  /** @format int32 */
  depositBalance?: number;

  /** @format int32 */
  borrowBalance?: number;
  aPR?: WayneInterfaceApr[];
  users?: WayneUser[];
  creator?: string;
}

export interface WayneQueryAllBorrowResponse {
  Borrow?: WayneBorrow[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface WayneQueryAllDepositResponse {
  Deposit?: WayneDeposit[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface WayneQueryAllInterfaceAprResponse {
  InterfaceApr?: WayneInterfaceApr[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface WayneQueryAllLoadPoolResponseResponse {
  LoadPoolResponse?: WayneLoadPoolResponse[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface WayneQueryAllPoolResponse {
  Pool?: WaynePool[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface WayneQueryAllRepayResponse {
  Repay?: WayneRepay[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface WayneQueryAllUserResponse {
  User?: WayneUser[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface WayneQueryAllWithdrawResponse {
  Withdraw?: WayneWithdraw[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface WayneQueryGetBorrowResponse {
  Borrow?: WayneBorrow;
}

export interface WayneQueryGetDepositResponse {
  Deposit?: WayneDeposit;
}

export interface WayneQueryGetInterfaceAprResponse {
  InterfaceApr?: WayneInterfaceApr;
}

export interface WayneQueryGetLoadPoolResponseResponse {
  LoadPoolResponse?: WayneLoadPoolResponse;
}

export interface WayneQueryGetPoolResponse {
  Pool?: WaynePool;
}

export interface WayneQueryGetRepayResponse {
  Repay?: WayneRepay;
}

export interface WayneQueryGetUserResponse {
  User?: WayneUser;
}

export interface WayneQueryGetWithdrawResponse {
  Withdraw?: WayneWithdraw;
}

export interface WayneQueryLoadPoolResponse {
  LoadPoolResponse?: WayneLoadPoolResponse[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface WayneQueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: WayneParams;
}

export interface WayneRepay {
  /** @format uint64 */
  id?: string;

  /** @format int32 */
  blockHeight?: number;
  asset?: string;

  /** @format int32 */
  amount?: number;
  denom?: string;
  creator?: string;
}

export interface WayneUser {
  creator?: string;

  /** @format uint64 */
  id?: string;
  collateral?: boolean[];
  deposit?: WayneDeposit[];
  borrow?: WayneBorrow[];
  assetBalances?: number[];
}

export interface WayneWithdraw {
  /** @format uint64 */
  id?: string;

  /** @format int32 */
  blockHeight?: number;
  asset?: string;

  /** @format int32 */
  amount?: number;
  denom?: string;
  creator?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: keyof Omit<Body, "body" | "bodyUsed">;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType = null as any;
  private securityWorker: null | ApiConfig<SecurityDataType>["securityWorker"] = null;
  private abortControllers = new Map<CancelToken, AbortController>();

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType) => {
    this.securityData = data;
  };

  private addQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];

    return (
      encodeURIComponent(key) +
      "=" +
      encodeURIComponent(Array.isArray(value) ? value.join(",") : typeof value === "number" ? value : `${value}`)
    );
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) =>
        typeof query[key] === "object" && !Array.isArray(query[key])
          ? this.toQueryString(query[key] as QueryParamsType)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((data, key) => {
        data.append(key, input[key]);
        return data;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format = "json",
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams = (secure && this.securityWorker && this.securityWorker(this.securityData)) || {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];

    return fetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = (null as unknown) as T;
      r.error = (null as unknown) as E;

      const data = await response[format]()
        .then((data) => {
          if (r.ok) {
            r.data = data;
          } else {
            r.error = data;
          }
          return r;
        })
        .catch((e) => {
          r.error = e;
          return r;
        });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title wayne/borrow.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryBorrowAll
   * @summary Queries a list of Borrow items.
   * @request GET:/cosmonaut/wayne/wayne/borrow
   */
  queryBorrowAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<WayneQueryAllBorrowResponse, RpcStatus>({
      path: `/cosmonaut/wayne/wayne/borrow`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryBorrow
   * @summary Queries a Borrow by id.
   * @request GET:/cosmonaut/wayne/wayne/borrow/{id}
   */
  queryBorrow = (id: string, params: RequestParams = {}) =>
    this.request<WayneQueryGetBorrowResponse, RpcStatus>({
      path: `/cosmonaut/wayne/wayne/borrow/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDepositAll
   * @summary Queries a list of Deposit items.
   * @request GET:/cosmonaut/wayne/wayne/deposit
   */
  queryDepositAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<WayneQueryAllDepositResponse, RpcStatus>({
      path: `/cosmonaut/wayne/wayne/deposit`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDeposit
   * @summary Queries a Deposit by id.
   * @request GET:/cosmonaut/wayne/wayne/deposit/{id}
   */
  queryDeposit = (id: string, params: RequestParams = {}) =>
    this.request<WayneQueryGetDepositResponse, RpcStatus>({
      path: `/cosmonaut/wayne/wayne/deposit/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryInterfaceAprAll
   * @summary Queries a list of InterfaceApr items.
   * @request GET:/cosmonaut/wayne/wayne/interface_apr
   */
  queryInterfaceAprAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<WayneQueryAllInterfaceAprResponse, RpcStatus>({
      path: `/cosmonaut/wayne/wayne/interface_apr`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryInterfaceApr
   * @summary Queries a InterfaceApr by id.
   * @request GET:/cosmonaut/wayne/wayne/interface_apr/{id}
   */
  queryInterfaceApr = (id: string, params: RequestParams = {}) =>
    this.request<WayneQueryGetInterfaceAprResponse, RpcStatus>({
      path: `/cosmonaut/wayne/wayne/interface_apr/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPoolLoad
   * @request GET:/cosmonaut/wayne/wayne/loadPools
   */
  queryPoolLoad = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<WayneQueryLoadPoolResponse, RpcStatus>({
      path: `/cosmonaut/wayne/wayne/loadPools`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryLoadPoolResponseAll
   * @summary Queries a list of LoadPoolResponse items.
   * @request GET:/cosmonaut/wayne/wayne/load_pool_response
   */
  queryLoadPoolResponseAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<WayneQueryAllLoadPoolResponseResponse, RpcStatus>({
      path: `/cosmonaut/wayne/wayne/load_pool_response`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryLoadPoolResponse
   * @summary Queries a LoadPoolResponse by id.
   * @request GET:/cosmonaut/wayne/wayne/load_pool_response/{id}
   */
  queryLoadPoolResponse = (id: string, params: RequestParams = {}) =>
    this.request<WayneQueryGetLoadPoolResponseResponse, RpcStatus>({
      path: `/cosmonaut/wayne/wayne/load_pool_response/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @summary Parameters queries the parameters of the module.
   * @request GET:/cosmonaut/wayne/wayne/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<WayneQueryParamsResponse, RpcStatus>({
      path: `/cosmonaut/wayne/wayne/params`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPoolAll
   * @summary Queries a list of Pool items.
   * @request GET:/cosmonaut/wayne/wayne/pool
   */
  queryPoolAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<WayneQueryAllPoolResponse, RpcStatus>({
      path: `/cosmonaut/wayne/wayne/pool`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPool
   * @summary Queries a Pool by id.
   * @request GET:/cosmonaut/wayne/wayne/pool/{id}
   */
  queryPool = (id: string, params: RequestParams = {}) =>
    this.request<WayneQueryGetPoolResponse, RpcStatus>({
      path: `/cosmonaut/wayne/wayne/pool/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryRepayAll
   * @summary Queries a list of Repay items.
   * @request GET:/cosmonaut/wayne/wayne/repay
   */
  queryRepayAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<WayneQueryAllRepayResponse, RpcStatus>({
      path: `/cosmonaut/wayne/wayne/repay`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryRepay
   * @summary Queries a Repay by id.
   * @request GET:/cosmonaut/wayne/wayne/repay/{id}
   */
  queryRepay = (id: string, params: RequestParams = {}) =>
    this.request<WayneQueryGetRepayResponse, RpcStatus>({
      path: `/cosmonaut/wayne/wayne/repay/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryUserAll
   * @summary Queries a list of User items.
   * @request GET:/cosmonaut/wayne/wayne/user
   */
  queryUserAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<WayneQueryAllUserResponse, RpcStatus>({
      path: `/cosmonaut/wayne/wayne/user`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryUser
   * @summary Queries a User by id.
   * @request GET:/cosmonaut/wayne/wayne/user/{id}
   */
  queryUser = (id: string, params: RequestParams = {}) =>
    this.request<WayneQueryGetUserResponse, RpcStatus>({
      path: `/cosmonaut/wayne/wayne/user/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryWithdrawAll
   * @summary Queries a list of Withdraw items.
   * @request GET:/cosmonaut/wayne/wayne/withdraw
   */
  queryWithdrawAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<WayneQueryAllWithdrawResponse, RpcStatus>({
      path: `/cosmonaut/wayne/wayne/withdraw`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryWithdraw
   * @summary Queries a Withdraw by id.
   * @request GET:/cosmonaut/wayne/wayne/withdraw/{id}
   */
  queryWithdraw = (id: string, params: RequestParams = {}) =>
    this.request<WayneQueryGetWithdrawResponse, RpcStatus>({
      path: `/cosmonaut/wayne/wayne/withdraw/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
