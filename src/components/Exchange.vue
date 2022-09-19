<template>
    <div>
        <div class="flex">
        <input v-on:input="ConvertToCoin()" v-model="message_USD" type="number" placeholder="DOLLAR" >
        <img src="src/img/exchange.png" alt="">
        <input v-on:input="ConvertToUsd()" v-model="message_COIN" type="number" :placeholder= coin_id.id.toUpperCase()>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Exchange",
        props:{
            coin_id:{
                type: Object,
                required: true
            }
        },
        data(){
            return{
                price: 0,
                message_COIN: undefined,
                message_USD: undefined
            }
        },
        mounted() {
            fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${this.coin_id.id}&vs_currencies=usd`)
                .then(response => response.json())
                .then(json => {
                    this.price = json[this.coin_id.id]['usd']
                })
        },
        filters:{
            to_usd(value){
                return value*10
            },
            to_btc(value){
                return value*100
            }
        },
        methods:{
            ConvertToCoin(){
                if(this.message_USD == ''){
                    this.message_COIN = undefined
                    return
                }
                this.message_COIN = Math.round(this.message_USD*100000000000/this.price)/100000000000
            },
            ConvertToUsd(){
                if(this.message_COIN == ''){
                    this.message_USD = undefined
                    return
                }
                this.message_USD = Math.round(this.message_COIN*this.price*100)/100
            }
        }
    }
</script>

<style scoped>
    div{
        display: flex;
        flex-direction: row;
    }

    input{
        width: 16rem;
        height: 3rem;
        border-radius: 10px;
        border: black solid 1px;
        margin: 0rem .2rem;
        text-align: center;
        font-size: 2rem;

    }

</style>