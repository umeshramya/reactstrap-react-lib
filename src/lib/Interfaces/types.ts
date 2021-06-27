import axios, { AxiosRequestConfig } from "axios"
/*
 * THis is form submit method
 * value could be "GET" | "POST" | "PUT" | "DELETE | "ACTION"
 * ACTION mehod will redierct to page with curURI and querystring recived
 */
export type RequestMethods = "GET" | "POST" | "PUT" | "DELETE" | "ACTION";

/**
 * This data to be passed in axios 
 */
let data = {}

/**
 * array 0 th element is method and 1 element is data to be passes
 */
export type axiosMethodObj = ["GET"] | ["POST", typeof data] | ["PUT", typeof data] | ["DELETE"] | ["ACTION", typeof data]








