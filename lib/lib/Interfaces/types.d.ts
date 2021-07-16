export declare type RequestMethods = "GET" | "POST" | "PUT" | "DELETE" | "ACTION";
/**
 * This data to be passed in axios
 */
declare let data: {};
/**
 * array 0 th element is method and 1 element is data to be passes
 */
export declare type axiosMethodObj = ["GET"] | ["POST", typeof data] | ["PUT", typeof data] | ["DELETE"] | ["ACTION", typeof data];
export declare type AgeType = "Years" | "Months" | "Days";
export {};
//# sourceMappingURL=types.d.ts.map