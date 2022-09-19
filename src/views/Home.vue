<template>
    <div>

        <router-link  class="block-left" to="/profile"> PROFILE </router-link>

        <router-link  class="block-right" to="/converter"> CONVERTER </router-link>

    </div>


</template>

<style scoped>

    div{
        font-size: 5rem;
        display: flex;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .block-left{
        width:50%;
        height: 100vh;
        overflow:auto;
        float:left;
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        text-decoration: none;
        color: black;
        margin: 0;
        padding: 0;
    }
    .block-right{
        width:50%;
        height: 100vh;
        overflow:auto;
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        text-decoration: none;
        color: black;
        margin: 0;
        padding: 0;
    }

    router-link:visited{
            color:black;
    }

    .block-left:hover{
        color: white;
        background-color: black;
        transition-delay: 0.15s;
        transition-duration: 0.6s;
    }

    .block-right:hover{
        color: white;
        background-color: black;
        transition-delay: 0.15s;
        transition-duration: 0.6s;
    }


</style>