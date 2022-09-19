<template>
    <div>

        <Charts
                v-bind:coin_id = "coin_id"
        />


        <div class = 'Exchange'>
            <strong>CONVERT</strong>
        <Exchange
                v-bind:coin_id = "coin_id"
        />
        </div>
    </div>
</template>

<script>
    import Charts from "@/components/Charts"
    import Exchange from "@/components/Exchange"

    export default {
        name: "Converter",
        components: {
            Charts,Exchange
        },
        props:{
            coin_id:{
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>

    div{
        display: flex;
        flex-direction: column;
        padding: 1rem;
        margin: 1rem;
        align-items: center;
    }

    strong{
        font-size: 1.5rem;
        font-weight: 700;
    }

    .Exchange{
        border: black 1px solid;
        border-radius: 10px;
        width: 100vh;
        background-color: #f1f1f1;
    }


</style>