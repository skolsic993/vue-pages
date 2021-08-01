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
  computed: {
    routeName() {
      return this.$route.name
    },
  }
};
</script>
