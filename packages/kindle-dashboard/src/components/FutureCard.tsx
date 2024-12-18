import {IHourlyForecast} from "../types/future.ts";
import {formatTime} from "../utils/util.ts";


export function FutureWeatherCard({hourly}: { hourly: IHourlyForecast }) {

	return (
		<article
			className="flex flex-col p-4 items-center justify-center border-r border-black last:border-none">
			{/* 时间 */}
			<time dateTime={hourly.fxTime}
			      className="text-xl">{formatTime(new Date(hourly.fxTime))}</time>

			{/* 天气图标 */}
			<i className={`qi-${hourly.icon} text-[80px]`} aria-label="天气图标"/>

			{/* 温度信息 */}
			<p className="font-bold text-4xl font-cabin-sketch ">
				{hourly.temp}°
			</p>

			{/* 天气描述 */}
			<p className="text-2xl">{hourly.text}</p>
		</article>
	);
}
