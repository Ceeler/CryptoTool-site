
<script>
    import { Line } from "vue-chartjs"

    export default {
        name: "Chart",
        props: ["data"],
        extends: Line,
        mounted() {
            this.renderChart({
                labels: this.data[0]["date"],
                datasets: [{
                    label: "Price",
                    type: "line",
                    borderColor: 'rgb(0,0,0)',
                    fill: false,
                    lineTension: 0.2,
                    data: this.data[1]["price"]
                }],

                options: {
                    plugins: {
                        legend: {
                            display: false,
                            responsive: false,
                            labels: {
                                font:{
                                    size: 100,
                                    weight: 700
                                }
                            }

                        }

                    }

                }
            })

        }
    }


</script>
