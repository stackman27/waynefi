<template>
	<div>
		<div class="pools">
			<DepositPools @click-asset="openModal" />
			<BorrowPools @click-asset="openModal" />
		</div> 
	<Modal v-bind="pool" v-bind:initialType="type" v-if="isModalOpen" @click-outside="closeModal" />
	</div>
</template>

<style scoped>
.user {
	display: flex;
}
.pools {
	margin-top: 48px;
	display: flex;
	background: 'blue';
} 
</style>

<script>

import DepositPools from '../components/DepositPools.vue'
import BorrowPools from '../components/BorrowPools.vue'
import Modal from '../components/Modal.vue'

export default {
	name: 'Index',
	data() {
		return { 
			isModalOpen: false,
			isNftModalOpen: false,
			pool: null, 
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
		openModal(pool, type) {
			this.pool = pool
			this.type = type
			this.isModalOpen = true
		},
		closeModal() {
			this.pool = null
			this.type = ''
			this.isModalOpen = false
		}, 
	},
	components: { 
		DepositPools,
		BorrowPools,
		Modal,
	}
}
</script>