<template>
  <div>
    <AboutMe />
    <AboutMeCards />
  </div>
</template>

<script>
import AboutMe from './../components/AboutMe'
import AboutMeCards from './../components/AboutMeCards'

export default {
  name: "About",
  components: {
    AboutMeCards,
    AboutMe
  },
  created: function(){
    this.onCreated();
  },
  watch: {
    '$route' () {
      this.onCreated();
    }
  }
};
</script>
