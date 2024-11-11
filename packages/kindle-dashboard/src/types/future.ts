// 定义逐小时天气预报的类型
import {IResponse} from "./response.ts";

export interface IHourlyForecast {
	/** 预报时间 */
	fxTime: string;
	/** 温度（摄氏度） */
	temp: string;
	/** 天气状况的图标代码 */
	icon: string;
	/** 天气状况的文字描述 */
	text: string;
	/** 风向角度（360度） */
	wind360: string;
	/** 风向 */
	windDir: string;
	/** 风力等级 */
	windScale: string;
	/** 风速（公里/小时） */
	windSpeed: string;
	/** 相对湿度（百分比） */
	humidity: string;
	/** 逐小时预报降水概率（百分比），可能为空 */
	pop?: string;
	/** 当前小时累计降水量（毫米） */
	precip: string;
	/** 大气压强（百帕） */
	pressure: string;
	/** 云量（百分比），可选 */
	cloud?: string;
	/** 露点温度，可选 */
	dew?: string;
}

// 定义天气数据的主类型
export type IFutureResponse = IResponse & { hourly: IHourlyForecast[] };
