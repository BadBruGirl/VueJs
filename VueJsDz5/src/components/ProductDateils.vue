<template>
    <div>
        <h3>{{ product.name }}</h3>
        <p>Стоимость: {{ formattedPrice }}</p>
        <P class="green" v-if="product.balance">Остаток: {{ product.balance }}</P> 
        <p class="red" v-else>{{ 'Товара нет в наличии!' }}</p>
        <p>Описание: {{ product.diskription}}</p>
        <hr>
    </div>
</template>

<script>

export default {
    name: 'ProductDateils',
    data() {
        return {
            currency: '₽',
            product: {
                id: 1, 
                name: 'Товар 1', 
                price: 1999.45, 
                balance: 0, 
                diskription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, perferendis.'
            }
        };
    },

    computed: {
        formattedPrice(){
            return  this.currency + ' ' + this.product.price;
        }
    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
.red{
    color: red;
}
.green{
    color: green;
}

</style>