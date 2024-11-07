import { WeatherNow } from './components/WeatherNow';
import { FutureWeatherCard } from './components/FutureCard.tsx';
import { Footer } from './components/Footer.tsx';
import './App.css';

function App() {
	return (
		<main className="flex flex-col w-screen h-screen overflow-hidden">
			{/* 当前天气信息 */}
			<WeatherNow />

			{/* 未来天气预报区域 */}
			<section className="flex-[2] grid grid-cols-5 border-b border-b-black">
				<FutureWeatherCard />
				<FutureWeatherCard />
				<FutureWeatherCard />
				<FutureWeatherCard />
				<FutureWeatherCard />
			</section>

			{/* 页脚 */}
			<Footer />
		</main>
	);
}

export default App;
