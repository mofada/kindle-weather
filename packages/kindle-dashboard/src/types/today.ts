import {IResponse} from "./response.ts";

export interface IToday {
	/** 预报日期 */
	fxDate: string;
	/** 日出时间，可能为空 */
	sunrise?: string;
	/** 日落时间，可能为空 */
	sunset?: string;
	/** 月升时间，可能为空 */
	moonrise?: string;
	/** 月落时间，可能为空 */
	moonset?: string;
	/** 月相名称 */
	moonPhase: string;
	/** 月相图标代码 */
	moonPhaseIcon: string;
	/** 最高温度 */
	tempMax: string;
	/** 最低温度 */
	tempMin: string;
	/** 白天天气图标代码 */
	iconDay: string;
	/** 白天天气文字描述 */
	textDay: string;
	/** 夜间天气图标代码 */
	iconNight: string;
	/** 晚间天气文字描述 */
	textNight: string;
	/** 白天风向360角度 */
	wind360Day: string;
	/** 白天风向 */
	windDirDay: string;
	/** 白天风力等级 */
	windScaleDay: string;
	/** 白天风速，公里/小时 */
	windSpeedDay: string;
	/** 夜间风向360角度 */
	wind360Night: string;
	/** 夜间风向 */
	windDirNight: string;
	/** 夜间风力等级 */
	windScaleNight: string;
	/** 夜间风速，公里/小时 */
	windSpeedNight: string;
	/** 相对湿度，百分比 */
	humidity: string;
	/** 总降水量，毫米 */
	precip: string;
	/** 大气压强，百帕 */
	pressure: string;
	/** 能见度，公里 */
	vis: string;
	/** 云量，百分比，可能为空 */
	cloud: string;
	/** 紫外线强度指数 */
	uvIndex: string;
}

// 定义天气数据的主类型
export type ITodayResponse = IResponse & { today: IToday };
