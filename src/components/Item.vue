<template>
	<section class="content" v-for="item in items" :key="item.number">
		<span class="content__item__num">{{ item.number }}</span>
		<h2 class="content__item__title">{{ item.number }}</h2>
		<figure class="content__item__imgwrap">
			<div class="content__item__img" :style="{ backgroundImage: `url(${item.img})` }"></div>
		</figure>
		<p>{{ item.text }}</p>
	</section>
</template>

<script>
export default {
	data() {
		return {
			items: [
				{ number: '01', section: 'Section1', img: 'https://webstoryboy.github.io/wtss/refer-effect/assets/img/bg1.jpg', text: '높은 목표를 세우고, 스스로를 채찍질 한다' },
				{ number: '02', section: 'Section2', img: 'https://webstoryboy.github.io/wtss/refer-effect/assets/img/bg1.jpg', text: '높은 목표를 세우고, 스스로를 채찍질 한다' },
				{ number: '03', section: 'Section3', img: 'https://webstoryboy.github.io/wtss/refer-effect/assets/img/bg1.jpg', text: '높은 목표를 세우고, 스스로를 채찍질 한다' },
				{ number: '04', section: 'Section4', img: 'https://webstoryboy.github.io/wtss/refer-effect/assets/img/bg1.jpg', text: '높은 목표를 세우고, 스스로를 채찍질 한다' },
				{ number: '05', section: 'Section5', img: 'https://webstoryboy.github.io/wtss/refer-effect/assets/img/bg1.jpg', text: '높은 목표를 세우고, 스스로를 채찍질 한다' },
			],
		}
	},
}
</script>

<style scoped>
.content {
	width: 1000px;
	background-color: rgba(103, 103, 103, 0.196);
	max-width: 70vw;
	text-align: right;
}
.content:nth-child(even) {
	margin-left: auto;
	text-align: left;
}
</style>
