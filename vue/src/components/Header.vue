<template>
	<div class="header-wrapper">
		<div class="logo">Wayne Finance</div>
		<SpAcc />
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
import { SpAcc } from "@starport/vue";
export default {
	name: 'Header',
	components: { SpAcc },
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