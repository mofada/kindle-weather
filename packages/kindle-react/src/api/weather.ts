const API_KEY = '60d8869fe45c4d778662291dd21ecc38';
/**
 * (必选)需要查询地区的LocationID或以英文逗号分隔的经度,纬度坐标（十进制，最多支持小数点后两位），LocationID可通过GeoAPI获取。例如 location=101010100 或 location=116.41,39.92
 */
const LOCATION = '101210114';

const query = `?key=${API_KEY}&location=${LOCATION}`;

export default {
	async now() {
		const response = await fetch('/api/weather/now' + query, {})
		response.json()
	}
}
