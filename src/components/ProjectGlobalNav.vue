<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useLanguage } from '../i18n'
import LanguageSwitcher from './LanguageSwitcher.vue'

const route = useRoute()
const { language } = useLanguage()

const openedMenu = ref<string | null>(null)
const navRoot = ref<HTMLElement | null>(null)

const projects = [
  {
    number: '01',
    title: '项目背景',
    enTitle: 'Background',
    path: '/project-background',
    sections: [
      { id: 'background', title: '项目合作与发展背景', enTitle: 'Project Background & Cooperation' },
      { id: 'location', title: '项目区位与土地基础', enTitle: 'Location & Land Foundations' },
      { id: 'indicators', title: '土地规划主要指标', enTitle: 'Planning Indicators' },
      { id: 'strategy', title: '项目发展方向', enTitle: 'Development Strategy' },
    ],
  },
  {
    number: '02',
    title: '总体定位',
    enTitle: 'Vision',
    path: '/project-vision',
    sections: [
      { id: 'position', title: '项目总体定位', enTitle: 'Overall Project Positioning' },
      { id: 'industries', title: '六大产业融合体系', enTitle: 'Six-Industry Integrated Ecosystem' },
      { id: 'principles', title: '项目核心发展理念', enTitle: 'Core Development Principles' },
      { id: 'values', title: '城市综合服务价值', enTitle: 'Integrated Urban Service Value' },
      { id: 'future', title: '项目总体发展愿景', enTitle: 'Overall Development Vision' },
    ],
  },
  {
    number: '03',
    title: '空间规划',
    enTitle: 'Planning',
    path: '/project-planning',
    sections: [
      { id: 'masterplan', title: '总体规划结构', enTitle: 'Master Planning Structure' },
      { id: 'functions', title: '功能分区与产业空间', enTitle: 'Functional Zoning & Industry Spaces' },
      { id: 'vertical', title: '立体复合空间体系', enTitle: 'Integrated Multi-Level Spaces' },
      { id: 'sports', title: '体育场馆与公共空间', enTitle: 'Sports Venues & Public Spaces' },
      { id: 'traffic', title: '道路交通与停车体系', enTitle: 'Road Access, Mobility & Parking' },
      { id: 'phases', title: '分期组团与实施策略', enTitle: 'Phased Development & Implementation Strategy' },
    ],
  },
  {
    number: '04',
    title: '建筑创新',
    enTitle: 'Architecture',
    path: '/project-architecture',
    sections: [
      { id: 'durability', title: '百年建筑与高耐久体系', enTitle: 'Long-Life Buildings & Durability' },
      { id: 'flexible', title: '大跨度与可变建筑空间', enTitle: 'Long-Span & Flexible Spaces' },
      { id: 'structure', title: '建筑结构与立体承载体系', enTitle: 'Structural Systems & Spatial Load Capacity' },
      { id: 'art', title: '建筑艺术与空间一体化', enTitle: 'Integrated Architecture & Art' },
      { id: 'green', title: '绿色低碳与节能技术', enTitle: 'Green & Low-Carbon Technologies' },
      { id: 'smart', title: '智慧建筑与数字化运营', enTitle: 'Smart Buildings & Digital Operations' },
    ],
  },
  {
    number: '05',
    title: '产业运营',
    enTitle: 'Operations',
    path: '/project-operations',
    sections: [
      { id: 'position', title: '产业融合与运营定位', enTitle: 'Industry Integration & Positioning' },
      { id: 'culture', title: '体育文化旅游产业运营', enTitle: 'Sports, Culture & Tourism Operations' },
      { id: 'commerce', title: '商业消费与生活服务', enTitle: 'Commerce & Lifestyle Services' },
      { id: 'management', title: '专业化运营组织体系', enTitle: 'Professional Operations Management' },
      { id: 'revenue', title: '多元收入与商业模式', enTitle: 'Diversified Revenue & Business Models' },
      { id: 'implementation', title: '招商培育与运营实施', enTitle: 'Tenant Recruitment & Operations' },
    ],
  },
  {
    number: '06',
    title: '合作实施',
    enTitle: 'Implementation',
    path: '/project-implementation',
    sections: [
      { id: 'foundation', title: '项目实施主体与合作基础', enTitle: 'Project Implementing Entity & Cooperation Foundations' },
      { id: 'coordination', title: '政府与企业协同机制', enTitle: 'Government–Enterprise Coordination Mechanism' },
      { id: 'epco', title: 'EPC+O 建设运营协同模式', enTitle: 'EPC+O Integrated Delivery & Operations Model' },
      { id: 'investment', title: '投资建设与资源整合路径', enTitle: 'Investment, Construction & Resource Integration' },
      { id: 'timeline', title: '项目实施阶段与工作计划', enTitle: 'Implementation Stages & Work Plan' },
      { id: 'support', title: '重点协调事项与发展展望', enTitle: 'Key Coordination Priorities & Outlook' },
    ],
  },
]

function toggleMenu(path: string) {
  openedMenu.value = openedMenu.value === path ? null : path
}

function closeMenu() {
  openedMenu.value = null
}

function handleOutsideClick(event: MouseEvent) {
  if (navRoot.value && !navRoot.value.contains(event.target as Node)) {
    closeMenu()
  }
}

function handleEscape(event: KeyboardEvent) {
  if (event.key === 'Escape') closeMenu()
}

onMounted(() => {
  document.addEventListener('click', handleOutsideClick)
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('click', handleOutsideClick)
  document.removeEventListener('keydown', handleEscape)
})
</script>

<template>
  <nav
    ref="navRoot"
    class="global-project-nav"
    :aria-label="language === 'en' ? 'Project navigation' : '六大项目专题导航'"
  >
    <div class="global-nav-inner">
      <RouterLink to="/" class="nav-home" @click="closeMenu">
        <span class="home-symbol">⌂</span>
        <span>{{ language === 'en' ? 'Home' : '项目首页' }}</span>
      </RouterLink>

      <div class="nav-divider"></div>

      <div class="nav-items">
        <div
          v-for="item in projects"
          :key="item.number"
          class="nav-group"
          :class="{
            active: route.path === item.path,
            'is-open': openedMenu === item.path
          }"
        >
          <div class="nav-main">
            <RouterLink
              :to="item.path"
              class="nav-item"
              :class="{ active: route.path === item.path }"
              :aria-current="route.path === item.path ? 'page' : undefined"
              @click="toggleMenu(item.path)"
            >
              <small>{{ item.number }}</small>
              <span>
                {{ language === 'en' ? item.enTitle : item.title }}
              </span>
            </RouterLink>

            <button
              type="button"
              class="nav-toggle"
              :aria-expanded="openedMenu === item.path"
              :aria-label="
                language === 'en'
                  ? 'Toggle ' + item.enTitle + ' sections'
                  : '展开或收起' + item.title + '章节目录'
              "
              @click="toggleMenu(item.path)"
            >
              <span class="chevron">⌄</span>
            </button>
          </div>

          <div class="nav-dropdown">
            <div class="dropdown-heading">
              <span>{{ language === 'en' ? 'CHAPTER' : '专题' }} {{ item.number }}</span>
              <strong>
                {{ language === 'en' ? item.enTitle : item.title }}
              </strong>
            </div>

            <RouterLink
              v-for="(section, index) in item.sections"
              :key="section.id"
              :to="{ path: item.path, hash: '#' + section.id }"
              class="dropdown-link"
              @click="closeMenu"
            >
              <span class="dropdown-number">
                {{ String(index + 1).padStart(2, '0') }}
              </span>

              <span class="dropdown-title">
                {{ language === 'en' ? section.enTitle : section.title }}
              </span>

              <span class="dropdown-arrow">↗</span>
            </RouterLink>
          </div>
        </div>
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
  overflow: visible;
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
  overflow: visible;
}

.nav-group {
  position: relative;
  display: flex;
  flex: 1 1 0;
  min-width: 0;
}

.nav-main {
  display: flex;
  align-items: stretch;
  width: 100%;
}

.nav-item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-width: 0;
  min-height: 64px;
  gap: 7px;
  padding: 0 3px 0 8px;
  text-decoration: none;
  color: #d2e0e9;
  font-size: 13px;
  white-space: nowrap;
  transition: color 0.25s, background 0.25s;
}

.nav-item small {
  font-size: 11px;
  color: #8fb1c7;
}

.nav-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 23px;
  padding: 0;
  border: none;
  background: transparent;
  color: #a9c4d5;
  cursor: pointer;
}

.chevron {
  font-size: 20px;
  line-height: 1;
  transition: transform 0.2s;
}

.nav-group.is-open .nav-item,
.nav-group.is-open .nav-toggle {
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

.nav-group.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 15%;
  width: 70%;
  height: 3px;
  background: #d6a25b;
  border-radius: 3px 3px 0 0;
  pointer-events: none;
}

.nav-group.is-open .chevron {
  transform: rotate(180deg);
}

/* 下拉章节菜单 */
.nav-dropdown {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(6px);
  width: 320px;
  max-width: calc(100vw - 24px);
  padding: 10px;
  background: #ffffff;
  border: 1px solid #e1e8ee;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 14px 36px rgba(9, 40, 63, 0.2);

  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition:
    opacity 0.18s ease,
    transform 0.18s ease,
    visibility 0.18s;
}


.nav-group.is-open .nav-dropdown {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translateX(-50%) translateY(0);
}


.dropdown-heading {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 13px;
  margin-bottom: 5px;
  border-bottom: 1px solid #e8edf1;
  color: #123d5d;
}

.dropdown-heading > span {
  font-size: 10px;
  color: #b58a4f;
  letter-spacing: 1px;
}

.dropdown-heading strong {
  font-size: 14px;
}

.dropdown-link {
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 43px;
  padding: 10px 12px;
  border-radius: 7px;
  text-decoration: none;
  color: #274760;
  transition: background 0.2s, color 0.2s;
}

.dropdown-link:hover {
  background: #eaf2f7;
  color: #123d5d;
}


.dropdown-number {
  flex-shrink: 0;
  color: #c29a63;
  font-size: 11px;
  font-weight: 700;
}

.dropdown-title {
  flex: 1;
  min-width: 0;
  font-size: 13px;
  line-height: 1.5;
}

.dropdown-arrow {
  flex-shrink: 0;
  color: #a1b4c2;
  font-size: 13px;
}

/* 防止最左和最右侧菜单超出屏幕 */
.nav-group:first-child .nav-dropdown {
  left: 0;
  transform: translateX(0) translateY(6px);
}

.nav-group:first-child.is-open .nav-dropdown {
  transform: translateX(0) translateY(0);
}

.nav-group:last-child .nav-dropdown {
  left: auto;
  right: 0;
  transform: translateX(0) translateY(6px);
}

.nav-group:last-child.is-open .nav-dropdown {
  transform: translateX(0) translateY(0);
}

/* 语言切换区域 */
.nav-language {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding-left: 8px;
}

/* 平板与较窄屏幕 */
@media (max-width: 1100px) {
  .global-nav-inner {
    width: 100%;
    gap: 10px;
    padding: 0 10px;
  }

  .nav-items {
    overflow-x: auto;
    scrollbar-width: none;
  }

  .nav-items::-webkit-scrollbar {
    display: none;
  }

  .nav-group {
    flex: 0 0 auto;
    min-width: 125px;
  }

  .nav-item {
    min-height: 56px;
    font-size: 12px;
  }

  .nav-dropdown {
    position: fixed;
    top: 56px;
    left: 12px;
    right: 12px;
    width: auto;
    max-width: none;
    max-height: calc(100vh - 70px);
    overflow-y: auto;
    transform: translateY(6px);
  }

  .nav-group:first-child .nav-dropdown,
  .nav-group:last-child .nav-dropdown {
    left: 12px;
    right: 12px;
    transform: translateY(6px);
  }

    .nav-group.is-open .nav-dropdown,
    .nav-group:first-child.is-open .nav-dropdown,
    .nav-group:last-child.is-open .nav-dropdown {
    transform: translateY(0);
  }
}

/* 手机端：通过小箭头展开菜单 */
@media (max-width: 700px) {
  .nav-home {
    font-size: 12px;
  }

  .nav-divider {
    height: 22px;
  }

  .nav-group {
    min-width: 117px;
  }

  .nav-language {
    padding-left: 0;
  }

  .nav-item {
    font-size: 12px;
    padding-left: 6px;
  }

  .nav-item small {
    font-size: 10px;
  }

  .nav-dropdown {
    width: auto;
  }
}

@media (max-width: 480px) {
  .nav-home span:last-child {
    display: none;
  }

  .nav-group {
    min-width: 110px;
  }
}
</style>
