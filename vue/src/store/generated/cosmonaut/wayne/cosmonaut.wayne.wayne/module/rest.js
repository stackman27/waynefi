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
export var ContentType;
(function (ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
})(ContentType || (ContentType = {}));
export class HttpClient {
    constructor(apiConfig = {}) {
        this.baseUrl = "";
        this.securityData = null;
        this.securityWorker = null;
        this.abortControllers = new Map();
        this.baseApiParams = {
            credentials: "same-origin",
            headers: {},
            redirect: "follow",
            referrerPolicy: "no-referrer",
        };
        this.setSecurityData = (data) => {
            this.securityData = data;
        };
        this.contentFormatters = {
            [ContentType.Json]: (input) => input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
            [ContentType.FormData]: (input) => Object.keys(input || {}).reduce((data, key) => {
                data.append(key, input[key]);
                return data;
            }, new FormData()),
            [ContentType.UrlEncoded]: (input) => this.toQueryString(input),
        };
        this.createAbortSignal = (cancelToken) => {
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
        this.abortRequest = (cancelToken) => {
            const abortController = this.abortControllers.get(cancelToken);
            if (abortController) {
                abortController.abort();
                this.abortControllers.delete(cancelToken);
            }
        };
        this.request = ({ body, secure, path, type, query, format = "json", baseUrl, cancelToken, ...params }) => {
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
                const r = response;
                r.data = null;
                r.error = null;
                const data = await response[format]()
                    .then((data) => {
                    if (r.ok) {
                        r.data = data;
                    }
                    else {
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
                if (!response.ok)
                    throw data;
                return data;
            });
        };
        Object.assign(this, apiConfig);
    }
    addQueryParam(query, key) {
        const value = query[key];
        return (encodeURIComponent(key) +
            "=" +
            encodeURIComponent(Array.isArray(value) ? value.join(",") : typeof value === "number" ? value : `${value}`));
    }
    toQueryString(rawQuery) {
        const query = rawQuery || {};
        const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
        return keys
            .map((key) => typeof query[key] === "object" && !Array.isArray(query[key])
            ? this.toQueryString(query[key])
            : this.addQueryParam(query, key))
            .join("&");
    }
    addQueryParams(rawQuery) {
        const queryString = this.toQueryString(rawQuery);
        return queryString ? `?${queryString}` : "";
    }
    mergeRequestParams(params1, params2) {
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
}
/**
 * @title wayne/borrow.proto
 * @version version not set
 */
export class Api extends HttpClient {
    constructor() {
        super(...arguments);
        /**
         * No description
         *
         * @tags Query
         * @name QueryBorrowAll
         * @summary Queries a list of Borrow items.
         * @request GET:/cosmonaut/wayne/wayne/borrow
         */
        this.queryBorrowAll = (query, params = {}) => this.request({
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
        this.queryBorrow = (id, params = {}) => this.request({
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
        this.queryDepositAll = (query, params = {}) => this.request({
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
        this.queryDeposit = (id, params = {}) => this.request({
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
        this.queryInterfaceAprAll = (query, params = {}) => this.request({
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
        this.queryInterfaceApr = (id, params = {}) => this.request({
            path: `/cosmonaut/wayne/wayne/interface_apr/${id}`,
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
        this.queryParams = (params = {}) => this.request({
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
        this.queryPoolAll = (query, params = {}) => this.request({
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
        this.queryPool = (id, params = {}) => this.request({
            path: `/cosmonaut/wayne/wayne/pool/${id}`,
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
        this.queryUserAll = (query, params = {}) => this.request({
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
        this.queryUser = (id, params = {}) => this.request({
            path: `/cosmonaut/wayne/wayne/user/${id}`,
            method: "GET",
            format: "json",
            ...params,
        });
    }
}
