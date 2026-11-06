
<script setup lang="ts">
import { useRoute } from 'vue-router'
import BackToTop from './components/BackToTop.vue'
import ProjectGlobalNav from './components/ProjectGlobalNav.vue'

const route = useRoute()
</script>

<template>
  <ProjectGlobalNav v-if="route.path !== '/'" />

  <RouterView />

  <BackToTop />
</template>

<style>
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
}

#app {
  width: 100%;
  min-height: 100vh;
}


/* 统一隐藏六大专题页面中重复的顶部返回栏 */
#app > [class$="-page"] > .page-header {
  display: none;
}


/* 统一优化六大专题的标题区域 */
#app .page-hero {
  padding-top: 72px;
  padding-bottom: 78px;
}

/* 手机端适当减少标题区域高度 */
@media (max-width: 600px) {
  #app .page-hero {
    padding-top: 52px;
    padding-bottom: 58px;
  }
}

</style>
