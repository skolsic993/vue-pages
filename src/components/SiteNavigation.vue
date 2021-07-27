<template>
<div>
<input type="checkbox" id="burger-toggle">
<label for="burger-toggle" class="burger-menu">
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
</label>
<div class="overlay"></div>
<nav class="nav">
  <ul>
    <li><router-link to="/" class="links">Home</router-link></li>
    <li><router-link to="/projects" class="links">Projects</router-link></li>
    <li><router-link to="/about" class="links">About</router-link></li>
  </ul>
</nav>
</div>
</template>

<script>

export default {
  name: "SiteNavigation",
  components: {},
  mounted() {
    const navMenu = document.querySelector('.burger-menu')
    const nav = document.querySelector('.nav')
    let links = document.querySelectorAll('.links')

    navMenu.addEventListener('click', function() {
      nav.classList.toggle('nav-color')
    })

    links.forEach(element => element.addEventListener("click",
    () => {
      nav.classList.remove('nav-color')
      document.getElementById("burger-toggle").checked = false;
    }));
  },
}
</script>

<style lang="scss" scoped>
@import "./../assets/scss/variables.scss";

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}

nav {
  opacity: 0;
  transition: all 0.5s ease;
}

.nav-color {
  background-color: $blue;
  opacity: 1;
}

#burger-toggle {
  position: absolute;
  opacity: 0;

  &:checked {

    & ~ .overlay {
      opacity: 1;
      transform: scale(160);
    }

    & ~ nav {
      pointer-events: auto;

      ul li {
        opacity: 1;
        transform: translateX(0);
      }
    }

    & ~ main {
      opacity: 0.5;
      filter: blur(5px);
      pointer-events: none;
    }

    & ~ .burger-menu {
      .line {
        &:nth-child(1) {
          transform: translateY(calc(var(--burger-menu-radius) / 5))
            rotate(45deg);
        }

        &:nth-child(2) {
          transform: scaleX(0);
        }

        &:nth-child(3) {
          transform: translateY(calc(var(--burger-menu-radius) / -5))
            rotate(-45deg);
        }
      }
    }
  }
}

.burger-menu {
  background: linear-gradient(-45deg, rgba(0,0,0,0.22), rgba(255,255,255,0.25));
  box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.25),
   -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
  --burger-menu-radius: 4em;
  position: fixed;
  top: 25px;
  left: 25px;
  z-index: 101;
  display: block;
  width: var(--burger-menu-radius);
  height: var(--burger-menu-radius);
  background: white;
  border: solid 2px hsla(184, 9%, 62%, 0.4);
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  transition: 0.5s ease-in-out;

  .line {
    position: absolute;
    left: 25%;
    width: 50%;
    height: 3px;
    background: hsla(210, 29%, 24%, 0.3);
    border-radius: 10px;
    overflow: hidden;
    transition: all 0.5s ease;

    &:nth-child(1) {
      top: 30%;
    }

    &:nth-child(2) {
      top: 50%;
    }

    &:nth-child(3) {
      top: 70%;
    }

    &::after {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #2980b9;
      transform: translateX(-100%);
      transition: all 0.25s ease;
    }

    @for $item from 2 through 3 {
      &:nth-child(#{$item})::after {
        transition-delay: 0.1s * ($item - 1);
      }
    }
  }

  &:hover {

    .line::after {
      transform: translateX(0);
    }
  }
}

.overlay {
  position: fixed;
  top: 50px;
  left: 50px;
  width: 2em;
  height: 2em;
  background: $blue;
  border-radius: 50%;
  opacity: 0;
  transition: 0.5s ease-in-out;
  will-change: transform;
}

nav {
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;

  ul {
    position: fixed;
    z-index: 101;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    list-style-type: none;

    li {
      padding: 6px 0;
      margin: 1em 3em;
      opacity: 0;
      // easeOutQuart
      transition: 0.6s cubic-bezier(0.365, 0.84, 0.44, 1);

      &:nth-child(odd) {
        transform: translateX(-100%);
      }

      &:nth-child(even) {
        transform: translateX(100%);
      }

      @for $i from 1 through 4 {
        &:nth-child(#{$i}) {
          transition-delay: 0.05s * $i;
        }
      }

      a {
        position: relative;
        display: block;
        padding: 5px;
        font-family: $font;
        text-decoration: none;
        text-transform: uppercase;
        color: white;
        transition: 0.5s;
        position: relative;
        color: $dark;
        padding: 15px;
        font-size: 68px;
        line-height: 78px;
        font-weight: 800;

        @media (max-width: 560px) {
          font-size: 40px;
          line-height: 40px;
        }

         @media (min-width: 560px) and (max-width: 750px) {
          font-size: 50px;
          line-height: 70px;
        }

        &::after {
          position: absolute;
          content: "";
          top: 0;
          left: 0;
          z-index: -1;
          width: 100%;
          height: 100%;
          background: $pink;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.5s;
        }

        &:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }
      }
    }
  }
}
</style>

