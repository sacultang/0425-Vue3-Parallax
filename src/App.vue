<template>
	<Header></Header>
	<div class="contents">
		<Item></Item>
	</div>
</template>

<script>
import Header from './components/Header.vue'
import Item from './components/Item.vue'
export default {
	components: {
		Header,
		Item,
	},
	name: 'App',
}
</script>

<style>
/* font-family */
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700&family=Noto+Sans+KR:wght@100;400&family=Roboto+Condensed:wght@300;400;700&display=swap');
body {
	background-color: #222;
	color: #dddddd;
	padding: 20px;
	font-size: 62.5%;
}
.contents {
	max-width: 1600px;
	width: 100%;
	margin: 0 auto;
}
</style>
