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
