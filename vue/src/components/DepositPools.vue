<template>
  <div class="user-deposit">
    <SpAcc />
    <div class="deposit-status">
      <div class="deposit-balance">
        <div class="title">Deposit Pools</div>
      </div>
    </div>
    <div class="asset-table">
      <div class="table-header">
        <div class="table-cell">Asset</div>
        <div class="table-cell">APY</div>
        <div class="table-cell">Wallet</div>
      </div>
      <div v-if="Array.isArray(pools)" class="table-rows">
        <!-- <div v-for="pool in pools" v-bind:key="pool.id" class="table-row" @click="clickAsset(pool)"> -->
        <div
          v-for="pool in pools"
          v-bind:key="pool.id"
          class="table-row"
          @click="submit"
        >
          <div class="table-cell">{{ pool.asset }}</div>
          <div class="table-cell">{{ pool.depositApy / 10000 }}%</div>
          <div class="table-cell">
            {{
              `${
                Number.isNaN(parseFloat(pool.AssetBalance))
                  ? 0
                  : parseFloat(pool.AssetBalance) / 1000000
              } ${pool.asset}`
            }}
          </div>
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
.user-deposit {
  width: 100%;
  padding: 0 20px;
}
.deposit-status {
  display: flex;
  justify-content: space-between;
}
.title {
  font-size: 20px;
}
.value {
  font-size: 26px;
  font-weight: bold;
}
.asset-table {
  margin-top: 16px;
  padding: 12px;
  border: 1px solid white;
  border-radius: 10px;
}
.table-header {
  display: flex;
  padding: 8px 12px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
}
.table-row {
  display: flex;
  padding: 8px 12px 7px;
  border-radius: 5px;
}
.table-row:hover {
  cursor: pointer;
  background: rgba(0, 0, 0, 0.5);
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
import { SpAcc } from "@starport/vue";
export default {
  name: "DepositPools",
  components: { SpAcc },
  computed: {
    pools() {
      const loggedAddress = this.$store.getters["common/wallet/address"];
      const userAssets = loggedAddress
        ? this.$store.getters["cosmonaut.wayne.wayne/getUserLoad"]({
            params: {
              id: loggedAddress,
            },
          })?.LoadUserResponse ?? []
        : [];
      const assetPools =
        this.$store.getters["cosmonaut.wayne.wayne/getPoolLoad"]({
          params: {},
        })?.LoadPoolResponse ?? [];
      return assetPools.map((pool, index) => ({
        ...pool,
        ...userAssets[index],
      }));
    },
  },
  methods: {
    async submit() {
      const loggedAddress = this.$store.getters["common/wallet/address"];
      console.log("🚀 ~ submit ~ loggedAddress", loggedAddress);
      const value = {
        creator: loggedAddress,
        blockHeight: 0,
        asset: "atom",
        amount: 10,
        denom: "uatom",
      };
      const res = await this.$store.dispatch(
        "cosmonaut.wayne.wayne/sendMsgCreateDeposit",
        {
          value,
          fee: [],
        }
      );
      console.log("🚀 ~ submit ~ res", res);
    },
    clickAsset(pool) {
      console.log(pool);
      this.$emit("click-asset", pool, "Deposit");
    },
  },
};
</script>
