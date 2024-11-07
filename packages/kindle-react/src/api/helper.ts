// 定义请求方法类型
type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

// 定义请求函数的选项类型
interface RequestOptions {
	headers?: Record<string, string>; // 请求头
	credentials?: RequestCredentials; // 可选的 credentials 设置
	mode?: RequestMode;               // 可选的请求模式（如 'cors', 'no-cors', 'same-origin'）
	cache?: RequestCache;             // 可选的缓存模式
}

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
	method: RequestMethod = 'GET',
	params: Record<string, any> = {},
	options: RequestOptions = {}
): Promise<T> {
	// 默认 headers
	const defaultHeaders: Record<string, string> = {
		'Content-Type': 'application/json',
		...options.headers,
	};

	// GET 请求处理
	if (method === 'GET' && params) {
		const queryString = new URLSearchParams(params).toString();
		url = queryString ? `${url}?${queryString}` : url;
	}

	// 构造 fetch 配置项
	const fetchOptions: RequestInit = {
		method,
		headers: defaultHeaders,
		...options,
	};

	// 如果是非 GET 请求，添加请求体
	if (method !== 'GET' && params) {
		fetchOptions.body = JSON.stringify(params);
	}

	try {
		const response = await fetch(url, fetchOptions);

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
