<template>
    <div class="title-container">
        <div class="title-container">
            <h1 class="title-h1">{{displayTitle}}</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: "Title",
    props: ["displayTitle"]
}
</script>

<style>
    .title-container {
        width: 100%;
        height: 150px;
        background-color: #0074BB;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .title-h1 {
        color: #fff;
        font-weight: 600;
    } 
</style>