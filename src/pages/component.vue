<style>
*{
  margin:0;
  padding:0;
}

.page-container{
  width:100%;
  position: absolute;
  top:0;
  bottom:0;
}

.main{
  display: flex;
  height:100%;
}

.page-component__content{
  flex:1;
  padding:30px;
  height:100%;
  box-sizing: border-box;
  overflow-y:auto;
}


</style>
<template>
  <div class="page-container page-component">
    <div class="main">
      <div class="nav-wapper">
        <side-nav :navs="navsData"></side-nav>
      </div>
      <div class="page-component__content">
        <router-view class="content"></router-view>
      </div>
    </div>
  </div>
</template>
<script>

  import navsData from '../nav.config.json';
  import '../assets/css/bootstrap.min.css';
  import 'highlight.js/styles/github-gist.css';

  export default {
    data() {
      return {
        lang: this.$route.meta.lang,
        navsData,
        hover: false,
        showBackToTop: false,
        scrollTop: 0,
        showHeader: true,
        componentScrollBar: null,
        componentScrollBoxElement: null
      };
    },

    methods: {
      renderAnchorHref() {
        if (/changelog/g.test(location.href)) return;
        const anchors = document.querySelectorAll('h2 a,h3 a');
        const basePath = location.href.split('#').splice(0, 2).join('#');

        [].slice.call(anchors).forEach(a => {
          const href = a.getAttribute('href');
          a.href = basePath + href;
        });
      },

      goAnchor() {
        if (location.href.match(/#/g).length > 1) {
          const anchor = location.href.match(/#[^#]+$/g);
          if (!anchor) return;
          const elm = document.querySelector(anchor[0]);
          if (!elm) return;

          setTimeout(_ => {
            this.componentScrollBox.scrollTop = elm.offsetTop;
          }, 50);
        }
      },
      toTop() {
        this.hover = false;
        this.showBackToTop = false;
        this.componentScrollBox.scrollTop = 0;
      },

      handleScroll() {
        const scrollTop = this.componentScrollBox.scrollTop;
        this.showBackToTop = scrollTop >= 0.5 * document.body.clientHeight;
        if (this.showHeader !== this.scrollTop > scrollTop) {
          this.showHeader = this.scrollTop > scrollTop;
        }
        if (scrollTop === 0) {
          this.showHeader = true;
        }

        this.scrollTop = scrollTop;
      }
    },
    created() {

      window.addEventListener('hashchange', () => {
        if (location.href.match(/#/g).length < 2) {
          document.documentElement.scrollTop = document.body.scrollTop = 0;
          this.renderAnchorHref();
        } else {
          this.goAnchor();
        }
      });
    },
    mounted() {
      this.componentScrollBar = this.$refs.componentScrollBar;

      this.renderAnchorHref();
      this.goAnchor();
      document.body.classList.add('is-component');
    },
    destroyed() {
      document.body.classList.remove('is-component');
    },
    beforeDestroy() {

    }
  };
</script>
