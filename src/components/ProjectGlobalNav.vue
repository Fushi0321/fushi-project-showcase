
<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useLanguage } from '../i18n'

import LanguageSwitcher from './LanguageSwitcher.vue'


const route = useRoute()
const { language } = useLanguage()


const projects = [
  {
    number: '01',
    title: '项目背景',
    enTitle: 'Background',
    path: '/project-background',
  },
  {
    number: '02',
    title: '总体定位',
    enTitle: 'Vision',
    path: '/project-vision',
  },
  {
    number: '03',
    title: '空间规划',
    enTitle: 'Planning',
    path: '/project-planning',
  },
  {
    number: '04',
    title: '建筑创新',
    enTitle: 'Architecture',
    path: '/project-architecture',
  },
  {
    number: '05',
    title: '产业运营',
    enTitle: 'Operations',
    path: '/project-operations',
  },
  {
    number: '06',
    title: '合作实施',
    enTitle: 'Implementation',
    path: '/project-implementation',
  },
]

</script>

<template>
  <nav class="global-project-nav" aria-label="六大项目专题导航">
    <div class="global-nav-inner">
      <RouterLink to="/" class="nav-home">
        <span class="home-symbol">⌂</span>
        <span>{{ language === 'en' ? 'Home' : '项目首页' }}</span>
      </RouterLink>

      <div class="nav-divider"></div>

      <div class="nav-items">
        <RouterLink
          v-for="item in projects"
          :key="item.number"
          :to="item.path"
          class="nav-item"
          :class="{ active: route.path === item.path }"
          :aria-current="route.path === item.path ? 'page' : undefined"
        > 
          <small>{{ item.number }}</small>
          <span>{{ language === 'en' ? item.enTitle : item.title }}</span>
        </RouterLink>
      </div>

      <div class="nav-language">
        <LanguageSwitcher />
      </div>
    </div>
  </nav>
</template>

<style scoped>

.global-project-nav {
  position: sticky;
  top: 0;
  z-index: 1000;

  width: 100%;
  background: #103b5d;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 4px 16px rgba(9, 40, 63, 0.12);
}


.global-nav-inner {
  width: min(1400px, 96%);
  min-height: 64px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 18px;
}

.nav-home {
  display: flex;
  align-items: center;
  gap: 7px;
  flex-shrink: 0;
  color: #ffffff;
  text-decoration: none;
  font-size: 13px;
  font-weight: 700;
  transition: color 0.25s;
}

.nav-home:hover {
  color: #edbd76;
}

.home-symbol {
  font-size: 23px;
  line-height: 1;
}

/* 全站导航右侧语言切换区域 */
.nav-language {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding-left: 8px;
}

@media (max-width: 800px) {
  .nav-language {
    padding-left: 0;
  }
}

.nav-divider {
  width: 1px;
  height: 28px;
  background: rgba(255, 255, 255, 0.18);
  flex-shrink: 0;
}

.nav-items {
  display: flex;
  align-items: stretch;
  flex: 1;
  min-width: 0;
  overflow-x: auto;
  scrollbar-width: none;
}

.nav-items::-webkit-scrollbar {
  display: none;
}

.nav-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  flex: 1 0 auto;
  min-width: 120px;
  min-height: 64px;
  padding: 0 12px;
  text-decoration: none;
  color: #d2e0e9;
  font-size: 13px;
  white-space: nowrap;
  position: relative;
  transition: color 0.25s, background 0.25s;
}

.nav-item small {
  font-size: 11px;
  color: #8fb1c7;
}

.nav-item:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.07);
}

.nav-item.active {
  color: #edbd76;
  background: rgba(214, 162, 91, 0.08);
  font-weight: 700;
}

.nav-item.active small {
  color: #edbd76;
}

.nav-item.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 15%;
  width: 70%;
  height: 3px;
  background: #d6a25b;
  border-radius: 3px 3px 0 0;
}

@media (max-width: 800px) {
  .global-nav-inner {
    width: 100%;
    gap: 10px;
    padding: 0 10px;
  }

  .nav-home {
    font-size: 12px;
  }

  .nav-divider {
    height: 22px;
  }

  .nav-item {
    min-width: 105px;
    min-height: 56px;
    padding: 0 8px;
    font-size: 12px;
  }

  .nav-item small {
    font-size: 10px;
  }
}

@media (max-width: 480px) {
  .nav-home span:last-child {
    display: none;
  }

  .nav-item {
    min-width: 96px;
    gap: 5px;
  }
}
</style>
