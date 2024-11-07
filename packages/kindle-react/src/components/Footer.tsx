export function Footer() {
	return (
		<footer className="h-9 flex justify-center items-center px-4">
			{/* 当前日期和星期 */}
			<div className="flex items-center">
				<time dateTime="2024-11-07">2024年11月7日</time>
				<span className="ml-2">星期四</span>
			</div>

			{/* 月相图标 */}
			<i className="qi-802 text-[20px] ml-auto" aria-label="月相图标" />

			{/* 日出和日落时间 */}
			<div className="flex items-center space-x-4">
				<p>
					<span>日出：</span>
					<time dateTime="06:15">06:15</time>
				</p>
				<p>
					<span>日落：</span>
					<time dateTime="18:15">18:15</time>
				</p>
			</div>
		</footer>
	);
}
