const API_KEY = '60d8869fe45c4d778662291dd21ecc38';
/**
 * (必选)需要查询地区的LocationID或以英文逗号分隔的经度,纬度坐标（十进制，最多支持小数点后两位），LocationID可通过GeoAPI获取。例如 location=101010100 或 location=116.41,39.92
 */
const LOCATION = '101210114';

/**
 * 封装的通用请求函数
 * @param url - 请求的 URL
 * @param method - 请求方法 (GET, POST, PUT, DELETE 等)
 * @param params - 请求参数
 * @param options - 可选的其他配置项（如 headers）
 * @returns 返回一个包含请求结果的 Promise
 */
export async function request<T>(
	url: string,
): Promise<T> {
	const params = {
		key: API_KEY,
		location: LOCATION,
	}

	const queryParams = new URLSearchParams(params)
	if (queryParams.has('key')) params.key = queryParams.get('key') as string
	if (queryParams.has('location')) params.location = queryParams.get('location') as string

	// 将参数拼接到 URL 中
	const queryString = new URLSearchParams(params).toString();

	try {
		const response = await fetch(`${url}?${queryString}`);

		if (!response.ok) {
			throw new Error(`请求失败：${response.statusText}`);
		}

		// 返回解析后的 JSON 数据，类型为 T
		return await response.json() as T;
	} catch (error) {
		console.error('请求错误：', error);
		throw error;
	}
}
