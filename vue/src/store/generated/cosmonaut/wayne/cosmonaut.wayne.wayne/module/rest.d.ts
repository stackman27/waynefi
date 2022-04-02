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
    countTotal?: boolean;
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
    nextKey?: string;
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
export interface WayneMsgCreatePoolResponse {
    /** @format uint64 */
    id?: string;
}
export interface WayneMsgCreateUserResponse {
    /** @format uint64 */
    id?: string;
}
export declare type WayneMsgDeleteBorrowResponse = object;
export declare type WayneMsgDeleteDepositResponse = object;
export declare type WayneMsgDeleteInterfaceAprResponse = object;
export declare type WayneMsgDeletePoolResponse = object;
export declare type WayneMsgDeleteUserResponse = object;
export declare type WayneMsgUpdateBorrowResponse = object;
export declare type WayneMsgUpdateDepositResponse = object;
export declare type WayneMsgUpdateInterfaceAprResponse = object;
export declare type WayneMsgUpdatePoolResponse = object;
export declare type WayneMsgUpdateUserResponse = object;
/**
 * Params defines the parameters for the module.
 */
export declare type WayneParams = object;
export interface WaynePool {
    /** @format uint64 */
    id?: string;
    asset?: string;
    denom?: string;
    /** @format int32 */
    collatoralFactor?: number;
    /** @format int32 */
    depth?: number;
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
export interface WayneQueryGetBorrowResponse {
    Borrow?: WayneBorrow;
}
export interface WayneQueryGetDepositResponse {
    Deposit?: WayneDeposit;
}
export interface WayneQueryGetInterfaceAprResponse {
    InterfaceApr?: WayneInterfaceApr;
}
export interface WayneQueryGetPoolResponse {
    Pool?: WaynePool;
}
export interface WayneQueryGetUserResponse {
    User?: WayneUser;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface WayneQueryParamsResponse {
    /** params holds all the parameters of this module. */
    params?: WayneParams;
}
export interface WayneUser {
    creator?: string;
    /** @format uint64 */
    id?: string;
    collateral?: boolean[];
    deposit?: WayneDeposit[];
    borrow?: WayneBorrow[];
}
export declare type QueryParamsType = Record<string | number, any>;
export declare type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;
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
export declare type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
    securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}
export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
    data: D;
    error: E;
}
declare type CancelToken = Symbol | string | number;
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded"
}
export declare class HttpClient<SecurityDataType = unknown> {
    baseUrl: string;
    private securityData;
    private securityWorker;
    private abortControllers;
    private baseApiParams;
    constructor(apiConfig?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType) => void;
    private addQueryParam;
    protected toQueryString(rawQuery?: QueryParamsType): string;
    protected addQueryParams(rawQuery?: QueryParamsType): string;
    private contentFormatters;
    private mergeRequestParams;
    private createAbortSignal;
    abortRequest: (cancelToken: CancelToken) => void;
    request: <T = any, E = any>({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }: FullRequestParams) => Promise<HttpResponse<T, E>>;
}
/**
 * @title wayne/borrow.proto
 * @version version not set
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryBorrowAll
     * @summary Queries a list of Borrow items.
     * @request GET:/cosmonaut/wayne/wayne/borrow
     */
    queryBorrowAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<WayneQueryAllBorrowResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryBorrow
     * @summary Queries a Borrow by id.
     * @request GET:/cosmonaut/wayne/wayne/borrow/{id}
     */
    queryBorrow: (id: string, params?: RequestParams) => Promise<HttpResponse<WayneQueryGetBorrowResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryDepositAll
     * @summary Queries a list of Deposit items.
     * @request GET:/cosmonaut/wayne/wayne/deposit
     */
    queryDepositAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<WayneQueryAllDepositResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryDeposit
     * @summary Queries a Deposit by id.
     * @request GET:/cosmonaut/wayne/wayne/deposit/{id}
     */
    queryDeposit: (id: string, params?: RequestParams) => Promise<HttpResponse<WayneQueryGetDepositResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryInterfaceAprAll
     * @summary Queries a list of InterfaceApr items.
     * @request GET:/cosmonaut/wayne/wayne/interface_apr
     */
    queryInterfaceAprAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<WayneQueryAllInterfaceAprResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryInterfaceApr
     * @summary Queries a InterfaceApr by id.
     * @request GET:/cosmonaut/wayne/wayne/interface_apr/{id}
     */
    queryInterfaceApr: (id: string, params?: RequestParams) => Promise<HttpResponse<WayneQueryGetInterfaceAprResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryParams
     * @summary Parameters queries the parameters of the module.
     * @request GET:/cosmonaut/wayne/wayne/params
     */
    queryParams: (params?: RequestParams) => Promise<HttpResponse<WayneQueryParamsResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryPoolAll
     * @summary Queries a list of Pool items.
     * @request GET:/cosmonaut/wayne/wayne/pool
     */
    queryPoolAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<WayneQueryAllPoolResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryPool
     * @summary Queries a Pool by id.
     * @request GET:/cosmonaut/wayne/wayne/pool/{id}
     */
    queryPool: (id: string, params?: RequestParams) => Promise<HttpResponse<WayneQueryGetPoolResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryUserAll
     * @summary Queries a list of User items.
     * @request GET:/cosmonaut/wayne/wayne/user
     */
    queryUserAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<WayneQueryAllUserResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryUser
     * @summary Queries a User by id.
     * @request GET:/cosmonaut/wayne/wayne/user/{id}
     */
    queryUser: (id: string, params?: RequestParams) => Promise<HttpResponse<WayneQueryGetUserResponse, RpcStatus>>;
}
export {};
