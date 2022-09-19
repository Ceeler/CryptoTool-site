<template>
    <div>

        <Head v-bind:ActiveTab= 'ActiveTab = "Profile"'
              v-bind:AnotherTab = "AnotherTab = 'Converter'"/>

       <Portfolio
               v-bind:Coins="Coins"
               v-bind:Currency = "Currency"
/>


    </div>
</template>

<script>
    import Portfolio from "@/components/portfolio"
    import Head from "@/components/Head"

    export default {
        name: 'App',
        data() {
            return{
                Coins: [
                    {id: 'ethereum', title: 'ETH', amount: '1.234512'},
                    {id: 'bitcoin', title: 'BTC', amount: '0.524124'},
                    {id: 'tether', title: 'USDT', amount: '1353.5242'}
                ],
                Currency:[],

            }
        },
        mounted() {
            fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum%2Cbitcoin%2Ctether&vs_currencies=usd")
                .then(response => response.json())
                .then(json => {
                    this.Currency = json
                })


        },
        components: {
            Portfolio, Head
        }

    }
</script>

<style scoped>

</style>