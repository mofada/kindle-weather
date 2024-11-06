/**
 * 头部展示区域，包含天气信息
 * @constructor
 */
export function WeatherNow() {
	return (
		<header className="flex-[5] flex">
			{/* 左侧时间显示 */}
			<div className="flex flex-col p-4">
				<i className="qi-100 h-full text-[200px]"/>

				<p className="text-xs">17:15 / 17:13</p>
			</div>

			{/* 右侧天气信息 */}
			<div className="flex flex-col p-4 ml-auto items-end justify-evenly">
				<h1 className="text-[42px]">杭州市</h1>

				{/* 温度显示 */}
				<h2 className="text-[150px] leading-[150px]">
					<span>18</span>
					<span className="text-[50px]">℃</span>
				</h2>

				<p className="text-[40px]">晴</p>
			</div>
		</header>
	);
}
