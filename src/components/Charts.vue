<template>

        <div>
            <Loader v-if="loading" />

            <Chart :width="900" :height="400"
                    v-else-if = '!loading'
                    v-bind:data="data"> </Chart>
        </div>

</template>

<script>
    import Chart from "@/components/Chart"
    import Loader from "@/components/loader"

    export default {
        name: "Charts",
        components: {
            Chart, Loader
        },
        data(){
            return{
                data: [{'date':[]},
                    {'price':[]},
                    {'market_cap':[]}

                ],
                loading: true
            }
        },
        props:{
            coin_id:{
                type: Object,
                required: true
            }
        },mounted() {
            fetch(`https://api.coingecko.com/api/v3/coins/${this.coin_id.id}/market_chart?vs_currency=usd&days=14&interval=daily`)
                .then(response => response.json())
                .then(json => {
                    setTimeout(() => {

                        json['prices'].map(c => {
                            let date = new Date(c[0])
                            this.data[0]['date'].push(date.getDate()+"-"+ date.getMonth()+"-"+ date.getFullYear())
                            this.data[1]['price'].push(c[1])

                        })
                        json['market_caps'].map(c => {
                                this.data[2]['market_cap'].push(c[1])

                            }
                        )
                        this.loading = false
                    }, 600)

                })
        }
    }
</script>
