<template>
    <div>
        <div class = "chart">
            <Loader v-if="loading" />
        <Diagram
                v-else-if = '!loading'
                v-bind:Coins="Coins"
                v-bind:Currency = "Currency"

        />

        </div>
        <strong>TOTAL BALANCE: {{total | beautify}}$</strong>


        <ul>
            <Coin
            v-for = "coin of Coins"
            v-bind:coin = "coin"
            v-bind:key="Coins.id"
            @decrease = "decrease"
            @increase = "increase"
            />

        </ul>

    </div>
</template>

<script>
    import Coin from "@/components/Coin"
    import Diagram from "@/components/diagram"
    import Loader from "@/components/loader"

    export default {
        name: "portfolio",
        props: ["Coins", "Currency"],
        components: {
            Diagram,
            Coin,
            Loader
        },
        methods: {
            decrease(id){
                if(id[1]=='' || id[1] == undefined){
                    return
                }
                this.loading = true
                this.Coins.map(c => {
                    if(c.id == id[0]){
                        c.amount -= Number(id[1])
                        if(c.amount < 0){
                            c.amount = 0;
                        }
                        setTimeout(()=>{
                            this.loading = false
                        }, 1000)
                    }
                })
                this.ReCountTotal()
            },
            increase(id){
                if(id[1] == ''){
                    return
                }
                this.loading = true
                this.Coins.map(c => {
                    if(c.id == id[0] || id[1] == undefined){
                        c.amount = +c.amount +  Number(id[1])
                        if(c.amount < 0){
                            c.amount = 0;
                        }
                        setTimeout(()=>{
                            this.loading = false
                        }, 1000)
                    }
                })
                this.ReCountTotal()
                console.log("ssss")
            },
            ReCountTotal(){
                this.total = 0
                this.Coins.map(c => {
                        this.total += c.amount * this.Currency[c.id]['usd']
                })

            }

        },
        data() {
            return{
                total:0,
                loading: true
            }

        },
        mounted() {
            this.Coins.map(c => {
                setTimeout(()=>{
                    this.total += c.amount * this.Currency[c.id]['usd']
                    this.loading = false

                }, 1000)

            })
        },
        filters:{
            beautify(value){
                return Math.round(value*100)/100
            }
        }

    }
</script>

<style scoped>
    ul{
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .chart{
        width: 30rem;
        height: 30rem;
        margin-bottom: 0rem;
    }

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    strong{
        font-size: 2rem;
        padding: 0;
        margin-bottom: 1rem;
    }
</style>