import {WeatherNow} from './components/WeatherNow';
import {FutureWeatherCard} from './components/FutureCard.tsx';
import {Footer} from './components/Footer.tsx';
import './App.css';
import {useEffect, useState} from "react";
import weatherApi from "./api/weather.ts";
import {INow} from "./types/now.ts";
import {IHourlyForecast} from "./types/future.ts";
import {IToday} from "./types/today.ts";

function App() {
	const [now, setNow] = useState<INow>({} as INow)
	const [future, setFuture] = useState<IHourlyForecast[]>([])
	const [today, setToday] = useState({} as IToday)

	useEffect(() => {
		weatherApi.now()
			.then(data => {
				setNow(data.now)
			})
			.catch(err => {
				console.error(err)
			})

		weatherApi.future()
			.then(data => {
				setFuture(data.hourly?.slice(0, 5) ?? [])
			})
			.catch(err => {
				console.error(err)
			})

		weatherApi.today()
			.then(data => {
				setToday(data.today)
			})
			.catch(err => {
				console.error(err)
			})
	}, [])

	return (
		<main
			className="flex flex-col font-lxgw-wenkai overflow-hidden rotate-90 origin-bottom-left w-[100vh] h-[100vw] absolute -top-[100vw] lg:w-screen lg:h-screen lg:rotate-0 lg:relative lg:top-0">
			{/* 当前天气信息 */}
			<WeatherNow now={now}/>

			{/* 未来天气预报区域 */}
			<section
				className="flex-[3] lg:flex-[2] min-h-0 grid grid-cols-5 border-b border-b-black">
				{
					future.map((hourly, index) => {
						return <FutureWeatherCard key={index} hourly={hourly}/>
					})
				}
			</section>

			{/* 页脚 */}
			<Footer today={today}/>
		</main>
	);
}

export default App;
