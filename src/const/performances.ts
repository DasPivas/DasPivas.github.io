import { Performance } from '../types/performances'
import { images } from '../assets/images/performances'

export const PERFORMANCES: Performance[] = [
	{
		title: 'UWDC 2025',
		name: 'Анимация до кончиков пальцев',
		date: '24.05.2025',
		link: 'https://uwdc.ru/events/uwdc2025',
		photo: images.uwdc2025,
		youtube: 'https://www.youtube.com/watch?v=tE5er8VnDgY',
		vk: 'https://vkvideo.ru/video-14839588_456239245',
	},
	{
		title: 'Frontend Mix: митап про фронтенд-разработку',
		name: 'Анимация до кончиков пальцев',
		date: '24.04.2025',
		link: 'https://events.yoomoney.ru/frontend-mix_2025',
		photo: images.frontendMix2025,
		youtube:
			'https://www.youtube.com/watch?v=1PzAKiSMJx8&list=PLIZR3nsCfy8_jn7H3sbqrNqwcpPmlDbxI&index=24',
		vk: 'https://vkvideo.ru/playlist/-216177318_5/video-216177318_456239185?linked=1',
	},
	{
		title: 'IT Talk by Sber',
		name: 'Правильная анимация и хороший CSS',
		date: '21.03.2024',
		link: 'https://developers.sber.ru/kak-v-sbere/events/it_talk_ekaterinburg',
		photo: images.itTalkBySber,
	},
]
