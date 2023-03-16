<template>
    <BaseButton :name="name" :navigateTo="navigateTo" class="btn-filled" />
</template>
  
<script>
import BaseButton from '~/components/BaseButton.vue'

export default {
    name: 'FilledButton',
    components: {
        BaseButton
    },
    props: {
        name: {
            type: String,
            required: true
        },
        navigateTo: {
            type: String,
            required: true
        }
    }
}
</script>
  
<style scoped>
.btn-filled {
    background-color: #126656;
    color: #fff;
}

.btn-filled:hover {
    background-color: transparent;
    color: #126556;
}
</style>
  