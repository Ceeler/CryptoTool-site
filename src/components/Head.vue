<template>
    <div>

        <router-link class = 'Active' to="/"> HOME </router-link>

        <h2> {{ActiveTab.toUpperCase()}} </h2>

        <router-link class = 'Active'v-bind:to="'/'+AnotherTab"> {{AnotherTab.toUpperCase()}} </router-link>

    </div>
</template>

<script>
    export default {
        name: "Head",
        props:{
            ActiveTab : String,
            AnotherTab: String,
            required: true
        }
    }
</script>

<style scoped>
    div{
        display: flex;
        justify-content: center;
        justify-items: center;
        height: 5rem;
        border-bottom: black 1px solid;
        margin: 0 0 1rem 0;
        padding: 0;
        align-items: center;
        align-content: center;
        background-origin: content-box;
        background-size: 100%;

    }
    h2{
        flex: 33%;
        height: 100%;
        width: 100%;
        font-size: 2rem;


    }

    .Active:hover{
        color: white;
        background-color: black;
        transition-delay: 0.15s;
        transition-duration: 0.6s;
    }

    router-link:visited{
        color:black;
    }

    .Active{
        flex: 33%;
        height: 100%;
        width: 100%;
        text-decoration: none;
        color: black;
        padding: 0;
        margin: 0;
        font-weight: bold;
        font-size: 2rem;


    }

</style>