<template>
  <!-- Uncomment the following component to add a form for a `modelName` -->
  <!-- <SpCrud store-name="org.repo.module" item-name="modelName" /> -->
  <div class="container">
    <ul id="example-1">
      <li v-for="item in this.pools" :key="item.id">
        <p>
          Asset:
          {{ item.asset }}
        </p>
        <p>
          Borrow APY:
          {{ item.borrowApy }}
        </p>
        <p>
          Collateral Factor:
          {{ item.collatoralFactor }}
        </p>
        <p>
          Creator:
          {{ item.creator }}
        </p>
        <p>
          Deposit APY:
          {{ item.depositApy }}
        </p>
        <p>
          Pool ID:
          {{ item.id }}
        </p>
        <p>
          Pool Liquidity:
          {{ item.liquidity }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

// console.log(this.pools);

export default {
  name: "Data",

  data() {
    return {
      pools: {},
    };
  },

  // async created() {
  //   const data = await fetch(
  //     "http://0.0.0.0:1317/cosmonaut/wayne/wayne/loadPools"
  //   )
  //     .then((res) => res.json())
  //     .then((res) => res.LoadPoolResponse);
  //   this.pools = data;
  //   // this.totalVuePackages = data.total;
  // },
  async created() {
    let $s = useStore();
    const data = await $s
      .dispatch("cosmonaut.wayne.wayne/QueryPoolAll", {
        options: { subscribe: true, all: true },
        params: {},
      })
      .then((res) => res.Pool);
    console.log("🚀 ~ created ~ data", data);
    // console.log("🚀 ~ created ~ data", Object.keys(data));
    this.pools = data;
  },

  setup() {
    // store
    let $s = useStore();

    // computed
    let address = computed(() => $s.getters["common/wallet/address"]);

    // let pools = computed(() =>
    //   $s.dispatch("cosmonaut.wayne.wayne/QueryPoolAll", {
    //     options: { subscribe: true, all: true },
    //     params: {},
    //   })
    // );
    // console.log(pools.value);

    // let pools = computed(() =>
    //   $s.getters["cosmonaut.wayne.wayne/getPoolAll"]()
    // );
    // let pools =
    //   $s.getters["cosmonaut.wayne.wayne/getPoolAll"]({
    //     params: {},
    //   })?.Pool ?? [];
    // console.log("🚀 ~ setup ~ pools", pools.value);

    return {
      address,
    };
  },

  // computed: {
  //   pools() {
  //     return (
  //       $s.getters["cosmonaut.wayne.wayne/getPoolAll"]({
  //         params: {},
  //       })?.Pool ?? []
  //     );
  //   },
  // },
};
</script>
