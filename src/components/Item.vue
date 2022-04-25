<template>
	<section class="content" v-for="item in items" :key="item.number">
		<span class="content__item__num">{{ item.number }}</span>
		<h2 class="content__item__title">{{ item.section }}</h2>
		<figure class="content__item__imgwrap reveal">
			<div class="content__item__img" :style="{ backgroundImage: `url(${item.img})` }"></div>
		</figure>
		<p class="content__item__desc reveal" data-delay="500">{{ item.text }}</p>
	</section>
</template>

<script>
import { mapState } from 'vuex'
export default {
	data() {
		return {}
	},
	mounted() {
		window.addEventListener('scroll', this.onScroll)
	},
	computed: {
		...mapState('item', ['items']),
	},
	methods: {
		onScroll() {
			this.$store.dispatch('item/onScroll')
		},
	},
}
</script>

<style scoped>
.content {
	width: 1000px;
	max-width: 70vw;
	text-align: right;
	position: relative;
	margin-top: 40vw;
}
.content:nth-child(even) {
	margin-left: auto;
	text-align: left;
}
.content__item__num {
	font-size: 25vw;
	font-family: 'Lato', sans-serif;
	font-weight: 100;
	opacity: 0.08;
	position: absolute;
	right: -5vw;
	top: -17vw;
}
.content:nth-child(even) .content__item__num {
	right: 0;
	left: -5vw;
	top: -17vw;
}
.content__item__title {
	font-size: 2vw;
}
.content__item__imgwrap {
	width: 100%;
	padding-bottom: 56%;
	position: relative;
}
.content__item__img {
	width: 100%;
	height: 100%;
	background-size: cover;
	position: absolute;
}
.content__item__desc {
	font-size: 4vw;
	word-break: keep-all;
	position: absolute;
	bottom: -4vw;
}

.reveal > div,
.reveal > span {
	opacity: 0;
}
.reveal.show > div,
.reveal.show > span {
	animation: opacity 500ms linear forwards;
}
.reveal {
	position: relative;
}
.reveal::before {
	content: '';
	position: absolute;
	right: 0;
	top: 0;
	width: 0;
	height: 100%;
	z-index: 100;
	background-color: #fff;
}
.reveal.reveal-two::after {
	content: '';
	position: absolute;
	right: 0;
	top: 0;
	width: 0;
	height: 100%;
	z-index: 100;
	background-color: orange;
}

.reveal.show::before {
	animation: reveal 1000ms cubic-bezier(0.77, 0, 0.18, 1);
}
@keyframes opacity {
	0% {
		opacity: 0;
	}
	60% {
		opacity: 0;
	}
	70% {
		opacity: 1;
	}
	100% {
		opacity: 1;
	}
}
@keyframes reveal {
	0% {
		width: 0;
		left: 0;
	}
	50% {
		width: 100%;
		left: 0;
	}
	80% {
		width: 100%;
		left: 0;
	}
	100% {
		width: 0;
		left: 100%;
	}
}
</style>
