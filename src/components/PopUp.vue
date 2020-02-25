<template>
  <div class="popup-main-container">

    <!-- Congratulations -->
    <div v-if="isRedeemed" class="congrats-container">
        <div class="cancel-container">
            <div class="cancel-btn" @click="onClickCancel">
                <h1>X</h1>
            </div>
        </div>
        <h1 class="congrats">Congratulations</h1>
        <p>You redeemed</p>
        <p><strong>{{prizeName}}</strong></p>
        <v-button name="More Prizes" color="" :onClick="redirect" />
    </div>

    <!-- Redeem Prize -->
    <div v-if="!isRedeemed" class="popup-contain-content">
        <div class="cancel-container">
            <div class="cancel-btn" @click="onClickCancel">
                <h1>X</h1>
            </div>
        </div>

        <div class="prize-info">
            <h1>Are you Sure?</h1>
            <img :src="prizeImg" />
            <p>Redeem {{prizeName}}?</p>
        </div>

        <div class="popup-btn-container">
            <v-button name="Yes" color="" :onClick="onClickYes" /> 
            <v-button name="Cancel" color="#EBEBEB" :onClick="onClickCancel" /> 
        </div>
    </div>
  </div>
</template>

<script>
import Button from './UIComponents/Button';
export default {
    name: "PopUp",
    components: {
        "v-button": Button
    },
    props: {
        prizeName: { type: String },
        prizeImg: { type: String },
        isRedeemed: { type: Boolean },
        onClickYes: { type: Function, required: true },
        onClickCancel: { type: Function, required: true },
        redirect: { type: Function, required: true }
    },
}
</script>

<style>
    .popup-main-container {
        background-color: rgba(0,0,0,.85);
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
        min-height: 800px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .popup-contain-content {
        width: 50%;
        height: 50%;
        background-color: #fff;
        border-radius: 5px;
    }
    .cancel-btn {
        display: flex;
        justify-content: flex-end;
    }
    .cancel-btn h1 {
        font-weight: 300;
        font-size: 36px;
        padding: 10px 25px 10px 10px;
        cursor: pointer;
    }
    .prize-info {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .prize-info img {
        width: 150px;
        height: 150px;
        object-fit: cover;
        border-radius: 100%;
        margin: 25px 0px;
    }
    .cancel-container {
        width: 100%;
    }
    .popup-btn-container {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 10px;
    }
    .congrats-container {
        width: 45%;
        height: 40%;
        background-color: #fff;
        border-radius: 5px;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        align-items: center;
    }
    .congrats-container p {
        padding: 15px;
    }

</style>