<template>
  <div class="container">
    <div class="row mb-5">
      <div class="heading col-12 col-lg-12 col-md-12">
        <h5>Find Everything</h5>
        <h1>About me</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-6">
        <p>
          Hello again! I am a very motivated developer who is always looking for a new challenge. I am capable of working with a
          variety of technologies and software. My main focus these days is creating <strong>bold</strong>, unique, and amazing experiences
          that help your business growth and much more!<br><br>
          The valuable team member who has experience diagnosing problems and developing solutions. 
          I spend my free time playing sport (especially cycling) and video games.
        </p>
        <a class="link" @click="download" download>
          <div class="contact background mb-4" id="copyEmail" @click="copied">
            <div class="icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7 10L12 15L17 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 15V3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <p class="mail">Download Resume</p>
            <span class="copied hide">Downloaded!</span>
          </div>
        </a>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6">
        <img src="./../assets/me.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "AboutMe",
  methods: {
    download() {
      axios.get('http://localhost:8080/static/resume.pdf', {
        responseType: 'blob',
      }).then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        let fname = 'resume.pdf';
        link.href = url;
        link.setAttribute('download', fname);
        document.body.appendChild(link);
        link.click();
      })
    },
    copied() {
    const copied = document.querySelector('.copied')
    const mail = document.querySelector('.mail')
    const url ='milosstojsavljevic93@gmail.com'

    mail.setAttribute('style', 'opacity: 0')
    copied.setAttribute('style', 'opacity: 1')
    
    const copyToClipboard = str => {
      const el = document.createElement('textarea');
      el.value = str;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    };

    let myUrl =  url;
    copyToClipboard( myUrl );
  
    setTimeout( () => {
      mail.setAttribute('style', 'opacity: 1')
    }, 1500)

    setTimeout( () => {
      copied.setAttribute('style', 'opacity: 0')
    }, 1500)
  }
  }
};
</script>

<style lang="scss" scoped>
@import "./../assets/scss/variables.scss";

p {
  margin-bottom: 0;
  color: $color-cover;
  line-height: 30px;
  font-weight: 300;

  @media (max-width: 560px) {
    font-size: 14px;
  }
}

.heading {
  margin-top: 50px;
  width: 100%;
  padding: 30px;

  @media (max-width: 400px) {
    padding: 10px 10px 0 10px;
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

.link {
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
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
    left: -140px;
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

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
