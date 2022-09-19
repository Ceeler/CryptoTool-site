<template>
    <div>
    <Head v-bind:ActiveTab= 'ActiveTab = "Converter"'
          v-bind:AnotherTab = "AnotherTab = 'Profile'"/>

        <div class = 'tabs'>
        <div  v-for = "coin_id_tab of coins_ids"
        >

       <h2 class="tab"
           v-bind:class="{ Selected: coin_id_tab.id === active }"
           v-on:click="active = coin_id_tab.id">
           {{coin_id_tab.id.toUpperCase()}}

       </h2>

        </div>
        </div>

        <div class="chart" v-for = "coin_id of coins_ids"
             v-bind:coin_id = "coin_id"
             v-bind:key="coins_ids.id"
        >




        <Coin_tab
                v-if="coin_id.id === active"
                v-bind:coin_id = "coin_id"
        />
        </div>
    </div>
</template>

<script>
    import Coin_tab from "@/components/Coin_tab"
    import Head from "@/components/Head"

    export default {
        name: "Converter",
        components: {
            Coin_tab, Head
        },
        data() {
            return{
                coins_ids: [
                    {id:'ethereum'},
                    {id:'bitcoin'},
                ],
                active: '',
                isActive: false
            }
        },
        methods: {
            setActive(id){
                this.active = id
                this.isActive = !this.isActive
            }
        }

    }
</script>

<style scoped>



.tabs{
    display: flex;
    justify-content: space-around;
}

.Selected{
    color: white;
    background-color: rgba(0,0,0, 0.9);
    transition-delay: 0.05s;
    transition-duration: 0.1s;

}
    .tab{
        flex: 50%;
        width: 95vh;
        height: 3rem;
        margin: 0;
        padding: 0;
        border: black 1px solid;

        border-radius: 10px;
    }




</style>