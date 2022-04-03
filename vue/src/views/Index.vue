<template>
	<div class="container">
	 
		<div class="pools">
			<DepositPools  />
			<BorrowPools />
		</div> 
		  
	</div>
</template>

<style scoped>
.user {
	display: flex;
}
.pools {
	margin-top: 48px;
	display: flex;
}
.nftList {
	margin-top: 48px;
	padding-bottom: 48px;
}
</style>

<script>

import DepositPools from '../components/DepositPools.vue'
import BorrowPools from '../components/BorrowPools.vue'

export default {
	name: 'Index',
	data() {
		return { 
			pool: null,
			nft: null,
			type: ''
		}
	},
	async created() {
		await this.$store.dispatch('cosmonaut.wayne.wayne/QueryPoolLoad', {
			options: { all: true },
			params: {}
		})
		
	},
	computed: {
		address() {
			return this.$store.getters['common/wallet/address']
		}
	},
	methods: {
	 
	},
	components: { 
		DepositPools,
		BorrowPools,
 
	}
}
</script>