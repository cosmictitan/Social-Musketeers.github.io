<template>
    <nuxt-link :to="`/${navigateTo}`" class="btn">{{ name }}</nuxt-link>
</template>
  
<script lang="ts">
export default {
    name: 'BaseButton',
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
  
<style>
.btn {
    position: relative;
    display: inline-block;
    padding: 1em 2em;
    border-radius: 30px;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    font-size: 14px;
    transition: all .1s ease;
    background-color: transparent;
    color: #126656;
    text-decoration: none;
}

.btn:hover {
    box-shadow: inset 0 -3px 0 rgba(0, 0, 0, 0.15);
}

.btn:active {
    transform: translateY(1px);
    box-shadow: inset 0 3px 0 0 rgba(0, 0, 0, 0.15);
}

.btn:focus {
    outline: none;
}
</style>
  