export default {
	namespaced: true,
	state: () => {
		return {
			items: [
				{ number: '01', section: 'Section1', img: 'https://webstoryboy.github.io/wtss/refer-effect/assets/img/bg1.jpg', text: '높은 목표를 세우고, 스스로를 채찍질 한다' },
				{ number: '02', section: 'Section2', img: 'https://webstoryboy.github.io/wtss/refer-effect/assets/img/bg2.jpg', text: '높은 목표를 세우고, 스스로를 채찍질 한다' },
				{ number: '03', section: 'Section3', img: 'https://webstoryboy.github.io/wtss/refer-effect/assets/img/bg3.jpg', text: '높은 목표를 세우고, 스스로를 채찍질 한다' },
				{ number: '04', section: 'Section4', img: 'https://webstoryboy.github.io/wtss/refer-effect/assets/img/bg4.jpg', text: '높은 목표를 세우고, 스스로를 채찍질 한다' },
				{ number: '05', section: 'Section5', img: 'https://webstoryboy.github.io/wtss/refer-effect/assets/img/bg5.jpg', text: '높은 목표를 세우고, 스스로를 채찍질 한다' },
			],
			// reveal: '',
			// windowTop: '',
		}
	},
	mutations: {
		// updateState(state, payload) {
		// 	Object.keys(payload).forEach((key) => {
		// 		state[key] = payload[key]
		// 	})
		// },
	},
	actions: {
		onScroll() {
			this.windowTop = window.scrollY
			const reveal = document.querySelectorAll('.reveal')
			reveal.forEach((el) => {
				const revealDelay = el.dataset.delay
				if (this.windowTop > el.parentElement.offsetTop - 800) {
					if (revealDelay === undefined) {
						el.classList.add('show')
					} else {
						setTimeout(() => {
							el.classList.add('show')
						}, revealDelay)
					}
				}
			})
		},
	},
}
