import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			'/api/': {
				changeOrigin: true,
				target: 'https://devapi.qweather.com/v7',
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	},
	build: {
		rollupOptions: {
			output: {
				entryFileNames: '[name].js',
				chunkFileNames: '[name].js',
				assetFileNames: 'assets/[name].[ext]',
			},
		}
	}
})
