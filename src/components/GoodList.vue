<template>
    <div>
       <button @click.stop.prevent="addCart($event)">add</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {};
        },
        methods: {
            addCart(event) {
                this.$emit('cartanim', event.target);
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>