<template>
    <div class="social-header">
        <img src="~/assets/images/logo2.png" href="/" class="logo" />
        <nav>
            <nuxt-link to="/services" class="btn">Services</nuxt-link>
            <nuxt-link to="/faqs" class="btn">Faq's</nuxt-link>
            <nuxt-link to="/contact" class="btn btn-border">Get in touch</nuxt-link>
        </nav>
    </div>
</template>
  
<script>
export default {
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
.social-header {
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 150rem;
}

.logo {
    width: 15%;
    height: auto;
}

nav a {
    color: #126656;
    text-decoration: none;
    padding: 10px;
    margin-right: 20px;
    transition: all 0.3s;
    font-size: 18px;
    position: relative;
}

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
}

.btn-border {
    border: 1px solid #126656;
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