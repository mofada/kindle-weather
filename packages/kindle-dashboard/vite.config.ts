import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			'/api/': {
				changeOrigin: true,
				target: 'http://localhost:3000',
			}
		}
	},
	build: {
		outDir: '../kindle-server/weather',
		rollupOptions: {
			output: {
				entryFileNames: '[name].js',
				chunkFileNames: '[name].js',
				assetFileNames: 'assets/[name].[ext]',
			},
		}
	}
})
