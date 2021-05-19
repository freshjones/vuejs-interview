<template>
    <div>
        <div>{{ train.name }}</div>
        <div>{{ type }}</div>
    </div>
</template>

<script>
    export default {
        props: ['name', 'type', 'train']
    }
</script>

<style scoped>

</style>