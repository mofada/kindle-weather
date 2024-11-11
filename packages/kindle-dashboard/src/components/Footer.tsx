export function Footer() {
	const date = new Date();
	const formattedDate = date.toLocaleDateString('zh-CN', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});

	const weekday = date.toLocaleDateString('zh-CN', {
		weekday: 'long' // 仅显示星期几
	});

	return (
		<footer className="h-9 flex justify-center items-center px-4">
			{/* 当前日期和星期 */}
			<div className="flex items-center">
				<time dateTime={formattedDate}>{formattedDate}</time>
				<span className="ml-2">{weekday}</span>
			</div>

			{/* 月相图标 */}
			<i className="qi-802 text-[16px] ml-auto mr-2" aria-label="月相图标"/>

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
