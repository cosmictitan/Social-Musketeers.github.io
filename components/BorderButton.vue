<template>
    <BaseButton :name="name" :navigateTo="navigateTo" class="btn-border" />
</template>
  
<script>
import BaseButton from '~/components/BaseButton.vue'

export default {
    name: 'BorderButton',
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
.btn-border {
    border: 1px solid #126656;
}
</style>
  