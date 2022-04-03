<template>
	<div class="header-wrapper">
		<div class="logo">Wayne Finance</div>
	</div>
</template>

<style scoped>
.header-wrapper {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
}
.logo {
	font-size: 48px;
	font-weight: bold;
}
</style>

<script>
export default {
	name: 'Header',
	data() {
		return {}
	},
	computed: {
		hasWallet() {
			return this.$store.hasModule(['common', 'wallet'])
		}
	}
}
</script>