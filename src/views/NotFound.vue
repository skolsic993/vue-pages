<template>
  <div class="home">
    <div class="container">
      <div class="row col align-self-center">
        <div class="col-md-6 offset-md-3">
          <h1 class="text-center">404 Not Found</h1>
        </div>
        <div class="col-md-6 offset-md-3">
         <router-link to="/" class="contact background mb-4" id="copyEmail">
          <div class="icon">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 0C14.5304 0 15.0391 0.210714 15.4142 0.585786C15.7893 0.960859 16 1.46957 16 2V14C16 14.5304 15.7893 15.0391 15.4142 15.4142C15.0391 15.7893 14.5304 16 14 16H2C1.46957 16 0.960859 15.7893 0.585786 15.4142C0.210714 15.0391 0 14.5304 0 14V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0L14 0ZM5.904 10.803L10 6.707V9.475C10 9.60761 10.0527 9.73479 10.1464 9.82855C10.2402 9.92232 10.3674 9.975 10.5 9.975C10.6326 9.975 10.7598 9.92232 10.8536 9.82855C10.9473 9.73479 11 9.60761 11 9.475V5.5C11 5.36739 10.9473 5.24021 10.8536 5.14645C10.7598 5.05268 10.6326 5 10.5 5H6.525C6.39239 5 6.26521 5.05268 6.17145 5.14645C6.07768 5.24021 6.025 5.36739 6.025 5.5C6.025 5.63261 6.07768 5.75979 6.17145 5.85355C6.26521 5.94732 6.39239 6 6.525 6H9.293L5.197 10.096C5.10592 10.1903 5.05552 10.3166 5.05666 10.4477C5.0578 10.5788 5.11039 10.7042 5.20309 10.7969C5.29579 10.8896 5.4212 10.9422 5.5523 10.9433C5.6834 10.9445 5.8097 10.8941 5.904 10.803Z" fill="white"/>
          </svg>
          </div>
          <p class="mail">Go Back!</p>
          <span class="copied hide">Downloaded!</span>
        </router-link> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "NotFound",
  computed: {
    routeName() {
      return this.$route.name
    },
  }
};
</script>

<style lang="scss" scoped>
@import "./../assets/scss/variables.scss";

h1 {
  display: block;
  padding: 5px;
  font-family: "Playfair Display", serif;
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  transition: 0.5s;
  position: relative;
  padding: 15px;
  font-size: 3rem;
  font-weight: 800;
}

a {

  &:hover {
    text-decoration: none;
  }
}

.home { 
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact {
  margin-top: 80px;
  border: 1px solid $light-text;
  transition: all 0.3s ease-in-out;
  display: flex;
  justify-content: space-evenly;
  position: relative;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  height: 80px;

  &::after{
    background: #fff;
    content: "";
    height: 155px;
    left: -75px;
    opacity: .4;
    position: absolute;
    top: -50px;
    width: 50px;
    -webkit-transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
            transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    -webkit-transform: rotate(35deg);
        -ms-transform: rotate(35deg);
            transform: rotate(35deg);
    z-index: -10;
  }

  &:hover:after {
    left: 120%;
    -webkit-transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
            transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  }

  .icon {
    z-index: 20;
    height: 100%;
    padding: 0 40px;
    margin-right: 40px;
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;

    @media (max-width: 560px) {
      padding: 0 8px;
      margin-right: 5px;
    }
  }

  .mail {
    font-family: $header-font;
    color: $heading-color;
    transition: all 0.4s ease-in-out;
    font-size: 1rem;
    font-weight: 500;
    margin: 0;

    @media (max-width: 420px) {
      font-size: 12px;
    }
  }

  .copied {
    position: relative;
    left: -100px;
    opacity: 0;
    font-family: $header-font;
    color: $heading-color;
    transition: all 0.4s ease-in-out;
    font-size: 1rem;
    font-weight: 500;
    margin: 0;

    @media (max-width: 420px) {
      font-size: 12px;
    }
  }
}

</style>