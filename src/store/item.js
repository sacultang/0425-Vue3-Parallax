import _throttle from 'lodash/throttle'
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
			// reveal: document.querySelectorAll('.reveal'),
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
			window.addEventListener(
				'scroll',
				_throttle(function () {
					const reveal = document.querySelectorAll('.reveal')
					this.windowTop = window.scrollY
					// console.log(this.windowTop)
					reveal.forEach((el) => {
						const revealDelay = el.dataset.delay
						if (this.windowTop > el.parentElement.offsetTop - 1000) {
							if (revealDelay === undefined) {
								el.classList.add('show')
							} else {
								setTimeout(() => {
									el.classList.add('show')
								}, revealDelay)
							}
						}
					})
				}, 300)
			)
		},
	},
}
