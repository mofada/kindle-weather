import {INow} from "../types/now.ts";
import {formatTime} from "../utils/util.ts";


/**
 * 头部展示区域，包含天气信息
 * @constructor
 */
export function WeatherNow({now}: { now: INow }) {
	// 从 URL 中获取城市名称
	const params = new URLSearchParams(location.search);
	const cityName = params.get('city') || '杭州市';

	return (
		<header className="min-h-0 flex-[3] flex border-b-4 border-b-black"
		        aria-label="当前天气信息">
			{/* 左侧时间显示 */}
			<div className="flex flex-col p-4 gap-2">
				<i className={`qi-${now?.icon} flex-1 text-[160px]`} aria-label="天气图标"/>

				{/* 当前时间 */}
				<p className="text-xs flex-none">
					<span>{formatTime()}</span> / <span>{formatTime(new Date(now?.obsTime))}</span>
				</p>
			</div>

			{/* 右侧天气信息 */}
			<div className="flex flex-col p-4 ml-auto items-end justify-between">
				<h1 className="text-[42px]" aria-label="城市名称">{cityName}</h1>

				{/* 温度显示 */}
				<div className="text-[100px]">
					<span>{now?.temp}</span>
					<span className="text-[50px]">℃</span>
				</div>

				{/* 天气描述 */}
				<p className="text-[30px]">{now?.text}</p>
			</div>
		</header>
	);
}
