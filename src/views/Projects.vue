<template>
  <div class="pb-3">
    <Work />
    <Cards />
  </div>
</template>

<script>
import Work from './../components/Work'
import Cards from './../components/Cards'

export default {
  name: "Projects",
  components: {
    Work,
    Cards
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

<style lang="scss" scoped>
</style>

