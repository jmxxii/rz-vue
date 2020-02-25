<template>
  <div class="view-prize-main-container">
      <Title displayTitle="Rewards" />
      
      <div class="view-prize-container">

        <div class="prize-img-checkout-container">
          <div class="view-prize-img">
            <img class="prize-image" :src="prize.image_url" alt="prize-image" />
          </div>

          <div class="view-prize-checkout">
            <h1 class="name-h1">{{prize.name}}</h1>
            <hr/>
            <v-button name="Redeem >" :onClick="redeemPopup" color="" />
            <hr/>
            <p class="quantity-text">{{prize.quantity}} left in stock</p>
          </div>
        </div>

        <hr />

        <div class="view-prize-desciption-container">
          <h2>Description</h2>
          <p class="description">{{prize.description}}</p>
        </div>

      </div>
  </div>
</template>

<script>
import Hashids from 'hashids'
import Title from './Title';
import ApiCalls from '../commonMethods/apiResponse';
import Button from '../components/UIComponents/Button';

const Api = require('../apiCalls/api').Api;
const hashids = new Hashids();

export default {
    name: "ViewPrize",
    components: {
      Title,
      "v-button": Button,
    },
    data: function() {
      return {
        prize: {},
      }
    },
    methods: {
      redeemPopup: function() {
        this.$emit('togglePopUp', this.prize)
      }
    },
    async created() {
      try {
        let decoded = hashids.decodeHex(this.$route.params.prizeID);
        this.prize = await ApiCalls.callToApi("GET", Api.URL_get_prize + decoded, null);
      } catch(err) {
        alert(err);
      }
  },
}
</script>

<style>
  hr {
    color: #efefef;
  }
  .view-prize-container {
    margin: 25px;
    width: 1000px;
  }
  .view-prize-img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 475px;
  }
  .prize-image {
    max-width: 475px;
    max-height: 300px;
  }
  .view-prize-checkout {
    width: 475px;
    height: 250px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, .3);
    padding: 15px;
    border-radius: 5px
  }
  .prize-img-checkout-container {
    width: 1000px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-bottom: 50px;
  }
  .name-h1 {
    padding-bottom: 50px
  }
  .view-prize-main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .view-prize-desciption-container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 50px;
    height: 150px;
  }
  .description {
    padding: 5px 0px 0px 50px;
    font-size: 18px;
  }
  .quantity-text {
    font-weight: 300;
    padding: 15px 0px;
  }
</style>