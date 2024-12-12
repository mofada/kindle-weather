/**
 * 格式化时间
 * @param date
 */
export function formatTime(date: Date = new Date()): string {
	return date.toLocaleTimeString('zh-CN', {
		hour: '2-digit',
		minute: '2-digit',
	})
}

/**
 * 格式化日期
 * @param date
 */
export function formatDate(date: Date = new Date()): string {
	return date.toLocaleDateString('zh-CN', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	})
}

/**
 * 格式化星期
 * @param date
 */
export function formatWeekday(date: Date = new Date()): string {
	return date.toLocaleDateString('zh-CN', {
		weekday: 'long'
	})
}
