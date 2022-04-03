<template>
	<div class="container">
		<div class="user">
			<UserDeposit @click-asset="openModal" />
			<UserBorrow @click-asset="openModal" />
		</div>
		<div class="pools">
			<DepositPools @click-asset="openModal" />
			<BorrowPools @click-asset="openModal" />
		</div>
		<div class="nftList">
			<NftList @click-nft-card="openNftModal" />
		</div>
		<Modal v-bind="pool" v-bind:initialType="type" v-if="isModalOpen" @click-outside="closeModal" />
		<NftModal v-bind="nft" v-bind:initialType="type" v-if="isNftModalOpen" @click-outside="closeNftModal" />
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
			isModalOpen: false,
			isNftModalOpen: false,
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