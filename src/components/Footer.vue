<template>
  <div class="footer-container">
    <p class="footer-p">Terms & Conditions</p>
    <p class="footer-p">|</p>
    <p class="footer-p">Privacy Policy</p>
  </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style>
    .footer-container {
        background-color: #161616;
        width: 100%;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .footer-p {
        color: #fff;
        font-size: 20px;
        padding-left: 5px;
    }
</style>