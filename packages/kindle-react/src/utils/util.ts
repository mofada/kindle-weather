export function formatTime(date: Date = new Date()): string {
	return date.toLocaleTimeString('zh-CN', {
		hour: '2-digit',
		minute: '2-digit',
	})
}
