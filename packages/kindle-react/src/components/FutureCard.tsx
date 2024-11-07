export function FutureWeatherCard() {
	return (
		<article
			className="flex flex-col p-4 items-center justify-center border-r border-black last:border-none">
			{/* 时间 */}
			<time dateTime="11:00" className="text-[20px]">11:00</time>

			{/* 天气图标 */}
			<i className="qi-100 text-[80px]" aria-label="天气图标"/>

			{/* 温度信息 */}
			<p className="font-bold text-[30px]">
				<span>18</span>
				<span className="text-[20px]">℃</span>
			</p>

			{/* 天气描述 */}
			<p className="text-[24px]">晴</p>
		</article>
	);
}
