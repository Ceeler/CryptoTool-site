<script>
    import { Doughnut } from "vue-chartjs"

    export default {
        props: ['Coins', 'Currency'],
        extends: Doughnut,
        name: "diagram",
        mounted() {

            this.renderChart({
                labels: this.Coins.map(c => c.title),
                datasets: [{
                    data: this.Coins.map(c => {
                        return Math.round(c.amount * this.Currency[c.id]['usd']*100000)/100000
                    }),
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(255, 206, 86, 0.5)',
                        'rgba(19,132,43,0.5)'

                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(19,132,43,1)'
                    ],
                    borderWidth: 1
                },
                ],
                options: {
                    responsive: true,
                    maintainAspectRatio: true
            }})


        }
    }
</script>

<style scoped>

</style>