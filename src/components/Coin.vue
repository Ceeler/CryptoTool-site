<template>
    <li>
        <span>
            {{coin.title}}
        </span>
        <form @submit.prevent="onSubmit">
            <strong> {{coin.amount | beutify }} </strong>
            <button type="submit" @click="$emit('decrease',[coin.id, Num])"> - </button>
            <input @submit.prevent="$emit('increase',[coin.id, -Num])"  v-model.number="Num" type="number" step="0.000001"  placeholder = 'AMOUNT'>
            <button  type="submit" @click="$emit('increase',[coin.id, Num])"> + </button>
        </form>

    </li>
</template>

<script>
    export default {
        props:{
            coin:{
                type: Object,
                required: true
            }
        },
        data(){
            return{
                Num: undefined
            }
        },
        methods:{
            onSubmit(){
                this.Num = ''
            },
        },
        filters:{
            beutify(value){
                return Math.round(value*100000)/100000
            }
        }

    }
</script>

<style scoped>
    li{
        border:  black solid 1px;
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        font-size: 25px;
        padding: .5rem 20rem;
        margin-bottom: 1rem;
        background-color: #f1f1f1;
    }
    strong{
        margin-right: 2rem;

    }
    button{
        width: 2rem;
        height: 2rem;
        border-radius: 10px;
        border: black solid 1px;
        background: white;
        font-size: 1.2rem;
    }
    button:hover{
        background: rgba(0,0,0, 0.6);
        color: white;
    }

    input{
        width: 8rem;
        height: 2rem;


    }


    span{
        margin-right: 1rem;
    }

</style>