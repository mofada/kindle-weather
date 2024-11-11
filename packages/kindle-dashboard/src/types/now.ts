import {IResponse} from "./response.ts";

export interface INow {
	/**
	 * 数据观测时间
	 */
	obsTime: string;
	/**
	 * 温度（摄氏度）
	 */
	temp: string;
	/**
	 * 体感温度（摄氏度）
	 */
	feelsLike: string;
	/**
	 * 天气状况图标代码
	 */
	icon: string;
	/**
	 * 天气状况描述
	 */
	text: string;
	/**
	 * 风向角度（360度）
	 */
	wind360: string;
	/**
	 * 风向
	 */
	windDir: string;
	/**
	 * 风力等级
	 */
	windScale: string;
	/**
	 * 风速（公里/小时）
	 */
	windSpeed: string;
	/**
	 * 相对湿度（百分比）
	 */
	humidity: string;
	/**
	 * 过去1小时降水量（毫米）
	 */
	precip: string;
	/**
	 * 大气压强（百帕）
	 */
	pressure: string;
	/**
	 * 能见度（公里）
	 */
	vis: string;
	/**
	 * 云量（百分比），可选
	 */
	cloud?: string;
	/**
	 * 露点温度，可能为空
	 */
	dew?: string;
}

export type INowResponse = IResponse & { now: INow };
