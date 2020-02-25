<template>
    <button class="yellow-btn" :style="{backgroundColor: color}" @click="onClick">{{name}}</button>
</template>

<script>
export default {
    name: "Button",
    props: {
        name: { type: String, required: true },
        onClick: { type: Function, required: true },
        color: { type: String, required: true },
  },
}
</script>

<style>
    .yellow-btn {
        width: 120px;
        height: 30px;
        border-radius: 25px;
        border: none;
        background-color: #FFCF09;
        color: #333;
        margin: 30px 0px;
        cursor: pointer;
        margin: 25px 5px;
    }
</style>