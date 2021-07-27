<template>
  <div>
    <SiteNavigation />
  </div>
</template>

<script>
import SiteNavigation from "./SiteNavigation"


export default {
    name: "Navbar",
    components: {
      SiteNavigation,
    },
  }
</script>

<style lang="scss">
@import "./../assets/scss/variables.scss";

@keyframes infiniteLine {
  0% {
    transform: translateX(-65%) translateY(0px) rotate(0) scaleX(1);
  }
  33% {
   transform: translateX(-50%) translateY(0px) rotate(0) scaleX(1);
  }
  67% {
    transform: translateX(30%) translateY(0px) rotate(0) scaleX(1);
  }
  100% {
   transform: translateX(-65%) translateY(0px) rotate(0) scaleX(1);
  }
}
</style>
