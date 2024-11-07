/**
 * 头部展示区域，包含天气信息
 * @constructor
 */
export function WeatherNow() {
	return (
		<header className="min-h-[300px] flex-[3] flex border-b-4 border-b-black" aria-label="当前天气信息">
			{/* 左侧时间显示 */}
			<div className="flex flex-col p-4">
				<i className="qi-100 h-full text-[200px]" aria-label="天气图标"/>

				{/* 日出和日落时间 */}
				<p className="text-xs">
					<span>日出：17:15</span> / <span>日落：17:13</span>
				</p>
			</div>

			{/* 右侧天气信息 */}
			<div className="flex flex-col p-4 ml-auto items-end justify-between">
				<h1 className="text-[42px]" aria-label="城市名称">杭州市</h1>

				{/* 温度显示 */}
				<div className="text-[100px]">
					<span>18</span>
					<span className="text-[50px]">℃</span>
				</div>

				{/* 天气描述 */}
				<p className="text-[30px]">晴</p>
			</div>
		</header>
	);
}
