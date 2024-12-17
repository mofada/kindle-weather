import {IToday} from "../types/today.ts";
import {formatDate, formatWeekday} from "../utils/util.ts";

export function Footer({today}: { today: IToday }) {
	const date = formatDate()
	const weekday = formatWeekday()

	return (
		<footer className="h-9 flex justify-center items-center px-4">
			{/* 当前日期和星期 */}
			<div className="flex items-center">
				<time dateTime={date}>{date}</time>
				<span className="ml-2">{weekday}</span>
			</div>

			{/* 今日气温 */}
			<div className="flex items-center">
				<span className="ml-2">·</span>
				<span>【{today?.tempMin} ~ {today?.tempMax} ℃】</span>
			</div>

			{/* 月相图标 */}
			<i className={`qi-${today?.moonPhaseIcon} text-[16px] ml-auto mr-2`}
			   aria-label="月相图标"/>

			{/* 日出和日落时间 */}
			<div className="flex items-center space-x-4">
				<p>
					<span>日出：</span>
					<time dateTime={today?.sunrise}>{today?.sunrise}</time>
				</p>
				<p>
					<span>日落：</span>
					<time dateTime={today?.sunset}>{today?.sunset}</time>
				</p>
			</div>
		</footer>
	);
}
