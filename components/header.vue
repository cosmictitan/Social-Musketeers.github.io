<template>
    <div class="header">
        <img src="/images/logo2.png" href="/" class="logo" />
        <nav>
            <BaseButton name="Services" navigateTo="services" />
            <BaseButton name="Faq's" navigateTo="faqs" />
            <BorderButton name="Get in touch" navigateTo="contact" />
        </nav>
    </div>
</template>
  
<script>
import BaseButton from '~/components/BaseButton.vue'
import BorderButton from '~/components/BorderButton.vue'

export default {
    name: 'Header',
    components: {
        BaseButton,
        BorderButton
    }
    // mounted() {
    //     window.addEventListener('scroll', function () {
    //         var logo_element = document.getElementsByClassName('logo').item(0);
    //         var header_element = document.querySelector('header');
    //         var nav_elements = document.querySelector('nav').querySelectorAll('a');

    //         if (window.scrollY > 10) {
    //             header_element.style.height = "30px";
    //             logo_element.style.height = "7%";
    //             logo_element.style.width = "7%";
    //             nav_elements.forEach(e => {
    //                 e.style.fontSize = "13px";
    //             })
    //         } else {
    //             header_element.style.height = "70px";
    //             logo_element.style.height = "10%";
    //             logo_element.style.width = "10%";
    //             nav_elements.forEach(e => {
    //                 e.style.fontSize = "18px";
    //             })
    //         }
    //     });
    // }
}
</script>
  
<style>
.header {
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 150rem;
    margin: 0 2rem 0 2rem;
}

.logo {
    width: 15%;
    height: auto;
}

/* nav a {
    color: #126656;
    text-decoration: none;
    padding: 10px;
    margin-right: 20px;
    transition: all 0.3s;
    font-size: 18px;
    position: relative;
} */
</style>