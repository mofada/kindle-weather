export interface IResponse {
	/**
	 * 状态码
	 */
	code: string;
	/**
	 * API最近更新时间
	 */
	updateTime: string;
	/**
	 * 响应式页面链接
	 */
	fxLink: string;

	/**
	 * 实况天气数据
	 */
	refer: {
		/**
		 * 数据来源，可能为空
		 */
		sources?: string[];
		/**
		 * 许可或版权声明，可能为空
		 */
		license?: string[];
	};
};
