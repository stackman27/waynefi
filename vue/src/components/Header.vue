<template>
	<div class="header-wrapper">
		<div class="logo"> <img src = "https://1000logos.net/wp-content/uploads/2021/10/Batman-Logo.png" class = "batmanlogo"/>  &nbsp; W A Y N E . F I</div>
	 
		<SpAcc />
	</div>
</template>

<style scoped>
.header-wrapper {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	margin-top: 20px;
}
.logo {
	display: flex;
	justify-content: space-between;
	align-items: center;

	font-size: 48px;
	font-weight: 1000; 
	align-items: center;
}

.batmanlogo {
	height: 50px;
	width: 70px; 
 
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