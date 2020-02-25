<template>
  <div class="main-home">
    <Title displayTitle="Rewards" />
    <h2>Here is the full list of prizes that you can win.</h2>
    <div class="prize-list-container">
      <div 
        class="prize-div"
        v-for="prize in prizes"
        v-bind:item="prize"
        v-bind:key="prize._id"
      >
        <PrizeCard :prize="prize" />
      </div>
    </div>
  </div>
</template>

<script>
import PrizeCard from "./PrizeCard";
import Title from './Title';
import ApiCalls from '../commonMethods/apiResponse';
const Api = require('../apiCalls/api').Api;

export default {
  name: 'Home',
  props: {
    msg: String
  },
  components: {
    PrizeCard,
    Title
  },
  data: function () {
    return {
      prizes: []
    }
  },
  async created() {
    try {
      this.prizes = await ApiCalls.callToApi("GET", Api.URL_get_prizes, null);
    } catch(err) {
      alert(err);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h2 {
    font-weight: 300;
    padding: 50px 0px 25px 0px;
  }
  .main-home {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .prize-list-container {
    margin: 25px;
    padding: 15px; 
    max-width: 1000px;
    min-width: 300px;
  }
  .prize-div {
    float: left;
  }
</style>
