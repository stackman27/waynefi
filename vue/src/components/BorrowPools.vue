<template>
	<div class="user-borrow">
		<div class="borrow-status">
			<div class="borrow-balance">
				<div class="title">Borrow Pools</div>
			</div>
		</div>
		<div class="asset-table">
			<div class="table-header">
				<div class="table-cell">Asset</div>
				<div class="table-cell">APY</div>
				<div class="table-cell">Liquidity</div>
			</div>
			<div v-if="Array.isArray(pools)" class="table-rows">
				<div v-for="pool in pools" v-bind:key="pool.id" class="table-row" @click="clickAsset(pool)">
					<div class="table-cell"> <img :src = "`../../public/assets/${pool.asset}.png`" class = "logos"/> &nbsp;  &nbsp; {{ pool.asset }}</div>
					<div class="table-cell">{{ pool.borrowApy / 10000 }}%</div>
					<div class="table-cell">{{ `${parseFloat(pool.liquidity / 100000)} ${pool.asset}`}}</div>
				</div>
			</div>
			<div v-else class="table-rows">
				<div class="table-row">
					<div class="table-cell">NONE</div>
					<div class="table-cell">NONE</div>
					<div class="table-cell">NONE</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.user-borrow {
	width: 100%;
	padding: 0 20px;
}
.borrow-status {
	display: flex;
	justify-content: space-between;
}

.logos {
	height: 30px;
	width: 30px;
	margin-bottom: -20px;
}


.title {
	font-size: 20px;
		font-weight: 800;
}
.value {
	font-size: 26px;
	font-weight: bold;
}
.asset-table {
	margin-top: 16px;
		padding: 20px;
	border: 1px solid #bbb;
	border-radius: 5px;
}
.table-header {
	display: flex;
	padding: 8px 12px;
	color: black;
	font-weight: 600;
	font-size: 16px;
}
.table-row {
	display: flex;
	padding: 20px;
border-bottom: 1px solid #bbb;
}
.table-row:hover {
	cursor: pointer;
	background: #eee;
}
.table-cell {
	width: 100%;
	min-width: 40px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
    font-size: 18px;
}
.table-cell:first-child {
	justify-content: flex-start;
	width: 10px;
}
</style>

<script>
export default {
	name: 'BorrowPools',
	computed: {
		pools() {
			const loggedAddress = this.$store.getters['common/wallet/address']
			const userAssets = loggedAddress
				? this.$store.getters['cosmonaut.wayne.wayne/getUserLoad']({
						params: {
							id: loggedAddress
						}
				  })?.LoadUserResponse ?? []
				: []
			const assetPools =
				this.$store.getters['cosmonaut.wayne.wayne/getPoolLoad']({
					params: {}
				})?.LoadPoolResponse ?? []
			return assetPools.map((pool, index) => ({
				...pool,
				...userAssets[index]
			}))
		}
	},
	methods: {
		clickAsset(pool) {
			this.$emit('click-asset', pool, 'Borrow')
		}
	}
}
</script>