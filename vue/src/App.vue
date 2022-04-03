<template>
	<div v-if="initialized" class="container">
		<Header />
		<router-view />
	</div>
</template>

<style>
html {
	height: 100vh;
}
body {
	background: #fefefe;
	margin: 0 auto;
	max-width: 1200px;
	width: 100%;
}
.container {
	background: transparent;
}
</style>

<script>

import Header from './components/Header.vue'
export default {
	components: {
		Header
	},
	data() {
		return {
			initialized: false
		}
	},
	computed: {
		hasWallet() {
			return this.$store.hasModule(['common', 'wallet'])
		}
	},
	async created() {
		await this.$store.dispatch('common/env/init')
		this.initialized = true
	},
	errorCaptured(err) {
		console.log(err)
		return false
	}
}
</script>