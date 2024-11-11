import {request} from './helper.ts'
import {INowResponse} from "../types/now.ts";
import {IFutureResponse} from "../types/future.ts";

export default {
	/**
	 * 获取实时天气
	 */
	async now() {
		return request<INowResponse>('/api/weather/now',)
	},

	/**
	 * 获取未来天气
	 */
	async future() {
		return request<IFutureResponse>('/api/weather/24h',)
	}
}
