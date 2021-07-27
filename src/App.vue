<template>
<body>
  <div>
    <Navbar />
    <transition 
    mode="out-in"
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut">
      <router-view></router-view>
    </transition>
  </div>
</body>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Navbar from './components/Navbar'

export default {
  name: "App",
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
@import "./assets/scss/variables.scss";

* {
  margin: 0px; 
  padding: 0px;
  box-sizing: border-box;
}

body {
  background-color: $background;
  background-image: url('./assets/body.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  height: 100%;
  width: 100%;
}

.animate__animated{
  --animate-duration: 3s;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 1s;
  transition-property: opacity;
  transition-timing-function: ease-in;
}

.fade-enter-active {
  transition-delay: .5s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
