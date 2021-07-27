<template>
<div class="container mb-5">
  <div class="home-casestudies">
  <div class="row">
    <div class="heading col-12 col-lg-12 col-md-12">
      <h5>Selected projects</h5>
      <h1>Personal projects</h1>
    </div>
  </div>
  <section class="project">
    <a>
      <div class="row row-card animate-card">
        <div class="project-desc col-12 col-lg-5">
          <h3>CsGo Stats Platform</h3>
          <p>The fastest way to get stats from tournaments. Follow your favorite teams and stay updated.</p>
          <ul>
            <li>- Laravel</li>
            <li>- Vue</li>
            <li>- Axios</li>
            <li>- Sass</li>
            <li>- Tailwind</li>
          </ul>
          <div class="mb-3">
            <span class="project-number">01</span>
              <span class="project-arrow"></span> 
              <span class="project-hover">
            <span class="project-client">Private</span>
              <span class="project-view">In progress</span>
            </span>
          </div>
        </div>
        <div class="project-img project-img1 col-12 col-lg-7">
          <img alt="thumb project msc interface" src="./../assets/cs.png">
        </div>
      </div>
    </a>
    </section>
    <section class="project">
    <a>
      <div class="row row-card animate-card">
        <div class="project-img project-img2 col-12 col-lg-7">
          <img alt="thumb project msc interface" src="https://skolsic993.github.io/skolsic993/img/car.gif">
        </div>
        <div class="project-desc col-12 col-lg-5">
          <h3>Car Dealer</h3>
          <p>Find best car deales today. Be the first to grab the opportunity and send a message to the dealer or just sell your car.</p>
          <ul>
            <li>- Laravel</li>
            <li>- Bootstrap 4</li>
            <li>- Dynamic forms / validation with JQuery, AJAX, and PHP </li>
            <li>- JavaScript / JQuery</li>
          </ul>
          <div class="mb-3">
            <span class="project-number">02</span>
              <span class="project-arrow"></span> 
              <span class="project-hover">
            <span class="project-client">Private</span>
              <span class="project-view">Code Private</span>
            </span>
          </div>
        </div>
      </div>
    </a>
    </section>
    <section class="project">
    <a href="https://github.com/skolsic993/Lanaya-gaming" target="_blank">
      <div class="row row-card animate-card">
        <div class="project-desc col-12 col-lg-5">
          <h3>Lanaya Gaming Shop</h3>
          <p>Find the best gaming equipment for the lowest price you can buy.</p>
          <ul>
            <li>- PHP</li>
            <li>- MVC Concept</li>
            <li>- Material Design Bootstrap </li>
            <li>- HTML / CSS / JavaScript / JQuery</li>
            <li>- AJAX</li>
          </ul>
          <div class="mb-3">
            <span class="project-number">03</span>
              <span class="project-arrow"></span> 
              <span class="project-hover">
            <span class="project-client">Public</span>
              <span class="project-view">View Code</span>
            </span>
          </div>
        </div>
        <div class="project-img project-img3 col-12 col-lg-7">
          <img alt="thumb project msc interface" src="https://skolsic993.github.io/skolsic993/img/game.gif">
        </div>
      </div>
    </a>
    </section>
    <section class="project mb-5">
    <a href="https://github.com/skolsic993/zilli-Movie" target="_blank">
      <div class="row row-card animate-card">
        <div class="project-img project-img4 col-12 col-lg-7">
          <img alt="thumb project msc interface" src="https://skolsic993.github.io/skolsic993/img/movie.gif">
        </div>
        <div class="project-desc col-12 col-lg-5">
          <h3>Watch Favorite Movies</h3>
          <p>I collaborated with MySkillCamp to rebuild their eLearning platform. This case stud the design system.</p>
          <ul>
            <li>- The Movie Database API</li>
            <li>- Bootstrap 4</li>
            <li>- HTML / CSS / JavaScript / JQuery </li>
            <li>- AJAX</li>
          </ul>
          <div class="mb-3">
            <span class="project-number">04</span>
              <span class="project-arrow"></span> 
              <span class="project-hover">
            <span class="project-client">Public</span>
              <span class="project-view">View Code</span>
            </span>
          </div>
        </div>
      </div>
    </a>
    </section>
    </div>
  </div>
</template>

<script>

export default {
  name: "Work",
  components: {},
};

</script>

<style lang="scss" scoped>
@import "./../assets/scss/variables.scss";

.heading {
  margin-top: 50px;
  width: 100%;
  padding: 30px;

  @media (max-width: 400px) {
    padding: 10px;
    margin-top: 80px;
  }

  h5 {
    font-size: 1rem;
    line-height: 1.25rem;
    text-transform: uppercase;
    padding-top: 5px;
    padding-bottom: 5px;
    font-weight: 400;
    letter-spacing: .4em;
    color: $background-project;

    @media (max-width: 650px) {
      display: none;
    }
  }
  

  h1 {
    font-size: 3rem;
    letter-spacing: 1px;
    line-height: 4.6875rem;
    font-family: $page-header;
    padding-top: 1px;
    padding-bottom: 4px;
    font-weight: 800;
    letter-spacing: -.01em;
    color: $dark;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    width: 100%;
    white-space: nowrap;

    @media (max-width: 400px) {
      font-size: 2rem;
    }

    @media (min-width: 400px) and (max-width: 560px) {
        font-size: 2rem;
    }

    &::after {
      content: "";
      display: block;
      position: relative;
      top: 5px;
      width: 300px;
      height: 1px;
      margin-left: 20px;
      background-color: $light-text;
    }
  }
}

.home-casestudies {
 
  .project {
    padding: 30px 0;
    position: relative;
    cursor: pointer;
    
    @media (max-width: 500px) {
      padding: 10px;
    }

    &::before {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: -10;
      top: 0;
      left: 0;
      outline: 1px solid rgba(87,76,242,0.4);
      outline-offset: -1px;
      background: linear-gradient(to bottom right, transparent calc(50% - 1px), rgba(87,76,242,0.4) calc(50% - 1px), rgba(87,76,242,0.4) 50%, transparent 50%),linear-gradient(to bottom left, transparent calc(50% - 1px), rgba(87,76,242,0.4) calc(50% - 1px), rgba(87,76,242,0.4) 50%, transparent 50%);
    }

    a {
      font-family: $font;
      color: #F3F2F4;
      font-size: 16px;
      text-decoration: none;
      transition: all 0.4s ease;

      .row-card {
        position: relative;
        transition: all 0.4s ease;

        &:hover {
          background-color: rgba(34,30,65,0.03);

          .project-img {

            img {
              transform: scale(1.05);
            }
          }
        }
      }

      .project-img {
        overflow: hidden;
        position: relative;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40vh;
        padding: 25px;

        img {
          width: 100%;
          object-fit: cover;
          height: 100%;
          transition: all 0.4s ease;
        }
      }

      .project-img1 {
        background-image: url("./../assets/third.png");
      }

      .project-img2 {
        background-image: url("./../assets/first.png");
      }

      .project-img3 {
        background-image: url("./../assets/second.png");
      }

      .project-img4 {
        background-image: url("./../assets/fourth.png");
      }

      .project-desc {
        padding-left: 25px;
        box-sizing: border-box;

        span {
          letter-spacing: 1px;
        }

        .project-number {
          color: $light-text;
          transition: color 200ms;
        }

        .project-arrow {
          position: relative;
          display: inline-block;
          background-color: #18033C;
          height: 1px;
          width: 40px;
          top: -5px;
          margin: 0 20px;
          transition: width 400ms;

          &::before {
            top: 0;
            transform: rotate(0);
            opacity: 0;
            content: "";
            position: absolute;
            background: #18033C;
            height: 1px;
            width: 10px;
            right: -2px;
            margin-right: 0;
            backface-visibility: hidden;
            transition: transform 400ms, top 400ms, opacity 200ms;
          }

          &::after {
            top: 0;
            transform: rotate(0);
            opacity: 0;
            content: "";
            position: absolute;
            background: #18033C;
            height: 1px;
            width: 10px;
            right: -2px;
            margin-right: 0;
            backface-visibility: hidden;
            transition: transform 400ms, top 400ms, opacity 200ms;
          }
        }

        .project-hover {

          .project-client {
            position: absolute;
            transform: translateX(0);
            opacity: 1;
            transition: transform 400ms, opacity 200ms, color 400ms;
            color: $light-text;
          }

          .project-view {
            position: absolute;
            transform: translateX(-10px);
            opacity: 0;
            transition: transform 400ms, opacity 200ms, color 400ms;
            color: #8C85F3;
          }
        }

        ul {
          padding: 0 20px;

          li {
            letter-spacing: 1px;
            text-decoration: none;
            list-style: none;
          }
        }

        h3 {
          margin: 32px 0;
          font-family: $header-font;
          font-size: 24px;
          line-height: 42px;
          letter-spacing: 1px;
        }

        p {
          font-family: $weird-font;
          margin-bottom: 1rem;
          letter-spacing: 1px;
          color: #ccf2ff;
          line-height: 30px;
          font-weight: 300;
        }
      }

      &:hover {

        .project-desc {

          .project-arrow {

            &::before {
              top: -3px;
              transform: rotate(30deg);
              margin-left: 5px;
              opacity: 1;
            }

            &::after {
              top: 3px;
              transform: rotate(-30deg);
              margin-left: 5px;
              opacity: 1;
            }
          }

          .project-hover {
            
            .project-client {
              transform: translateX(30px);
              opacity: 0;
              color: #F3F2F4;
            }

            .project-view {
              transform: translateX(10px);
              opacity: 1;
              color: #F3F2F4;
            }
          }
        }
      }
    }
  }
}

.is-centered {
  -webkit-box-pack: center;
  justify-content: center;
}
</style>

