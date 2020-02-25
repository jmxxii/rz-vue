<template>
  <div>
      <div class="prize-card">
          <div class="image-div">
            <img class="prize-img" :src="prize.image_url" alt="prize-img" />
          </div>
          <div class="card-content-container">
              <div class="info-btn-container">
                <h4 class="name-h4">{{prize.name}}</h4>
                <v-button name="Redeem >" :onClick="goToPrizePage" color="" />
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Hashids from 'hashids'
import Button from './UIComponents/Button';
const hashids = new Hashids();

export default {
    name: "PrizeCard",
    props: ["prize"],
    components: {
        "v-button": Button
    },
    methods: {
        goToPrizePage() {
            let encoded = hashids.encodeHex(this.prize._id);
            this.$router.push({ path: `/prize/${encoded}` })
        }
    },
}
</script>

<style>
    .card-content-container {
        display: flex;
        height: 180px;
        justify-content: center;
        align-items: center;
    }
    .prize-card {
        width: 300px;
        height: 400px;
        border: 2px solid #efefef;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px;
    }
    .prize-img {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        max-width: 300px; 
        height: 220px;
    }
    .image-div {
        border-bottom: #efefef solid 1px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .info-btn-container {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
</style>