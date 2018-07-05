<style>
*{
  margin:0;
  padding:0;
}

li{
  list-style: none;
}



.page-container{
  width:100%;
  position: absolute;
  top:0;
  bottom:0;
  box-sizing: border-box;
  padding:60px 0 0;
}

.page-nav{
  position:fixed;
  left:0;
  top:60px;
  bottom:0;
  max-width:220px;
  box-sizing: border-box;
  padding:30px 50px;
  overflow-y:auto;
  border-right:1px #eee solid;
}

.page-component__content{
  padding:30px 30px 30px 230px;
  height:100%;
  box-sizing: border-box;
  overflow-y:auto;
}

.page-container .live-wrapper{
  margin-bottom: 10px;
}

.page-container .table td{
  max-width:150px;
}

</style>
<template>
  <div class="page-container page-component">
    <page-head></page-head>

    <side-nav :navs="navsData" class="page-nav"></side-nav>

    <div class="page-component__content container">
      <router-view class="content"></router-view>
    </div>
  </div>
</template>
<script>

  import navsData from '../nav.config.json';
  import '../assets/css/bootstrap.min.css';
  import '../assets/icon/iconfont.css';
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
