
<script setup lang="ts">
import { ref } from 'vue'

import LanguageSwitcher from '../components/LanguageSwitcher.vue'

import { useLanguage } from '../i18n'

const { t, language } = useLanguage()


const modules = ref([
  {
    number: '01',
    title: '项目背景与实施基础',
    enTitle: 'Project Background & Foundations',
    description: '项目合作背景、区位条件、土地规划与实施基础',
    enDescription:
      'Project background, location, land-use planning and implementation foundations.',
    icon: '🏙️',
  },
  {
    number: '02',
    title: '总体定位与发展愿景',
    enTitle: 'Positioning & Development Vision',
    description: '文体旅商住融合发展、产业定位与城市价值',
    enDescription:
      'Integrated development, industry positioning and long-term urban value.',
    icon: '🌏',
  },
  {
    number: '03',
    title: '总体规划与空间体系',
    enTitle: 'Master Planning & Spatial Framework',
    description: '规划布局、功能分区、公共空间与立体交通',
    enDescription:
      'Master planning, functional zoning, public spaces and integrated mobility.',
    icon: '🏗️',
  },
  {
    number: '04',
    title: '建筑技术与设计创新',
    enTitle: 'Architectural Technology & Innovation',
    description: '建筑结构、空间创新、绿色低碳与智慧科技',
    enDescription:
      'Structural systems, spatial innovation, green design and smart technologies.',
    icon: '🏛️',
  },
  {
    number: '05',
    title: '产业运营与商业模式',
    enTitle: 'Industry Operations & Business Model',
    description: '体育赛事、文化研学、旅游商业与长期运营',
    enDescription:
      'Sports events, cultural programs, tourism, commerce and long-term operations.',
    icon: '📈',
  },
  {
    number: '06',
    title: '合作实施与发展路径',
    enTitle: 'Cooperation & Implementation Roadmap',
    description: 'EPC+O合作模式、分期实施与政府协同',
    enDescription:
      'EPC+O cooperation, phased development and government-enterprise coordination.',
    icon: '🤝',
  },
])


const activeIndustry = ref(1)

const industries = [
  {
    icon: '🏠',
    name: '品质居住',
    enName: 'Quality Living',
    description: '以品质社区和生活服务形成稳定的日常需求。',
    enDescription:
      'Quality communities and lifestyle services create stable everyday demand.',
  },
  {
    icon: '🏆',
    name: '体育运动',
    enName: 'Sports',
    description: '通过体育场馆、全民健身、运动培训与赛事活动形成特色。',
    enDescription:
      'Sports venues, fitness activities, training programs and events create a distinctive identity.',
  },
  {
    icon: '🎨',
    name: '文化体验',
    enName: 'Culture',
    description: '融合文化艺术、研学教育和休闲体验，丰富项目内容。',
    enDescription:
      'Arts, educational programs and leisure experiences enrich the project.',
  },
  {
    icon: '🛍️',
    name: '商业服务',
    enName: 'Commerce',
    description: '以餐饮休闲、特色零售和生活服务承接多元消费。',
    enDescription:
      'Dining, specialty retail and lifestyle services support diverse consumer needs.',
  },
  {
    icon: '🌿',
    name: '城市配套',
    enName: 'Urban Services',
    description: '联动公共空间、社区服务和城市配套，完善综合服务能力。',
    enDescription:
      'Public spaces, community services and urban amenities support integrated city life.',
  },
]

</script>

<template>
  <div class="showcase-home">    
    <header class="site-header">
      <div class="site-brand">
        <span class="brand-mark">FS</span>
        <span>
          {{ language === 'en'
            ? 'Culture, Sports, Tourism, Commerce & Living'
            : '文体旅商住融合服务产业' }}
        </span>
      </div>

      <!-- 六大专题顶部导航 -->
      <nav class="header-nav">
        <RouterLink to="/project-background">
          {{ language === 'en' ? '01 Background' : '01 项目背景' }}
        </RouterLink>

        <RouterLink to="/project-vision">
          {{ language === 'en' ? '02 Positioning' : '02 总体定位' }}
        </RouterLink>

        <RouterLink to="/project-planning">
          {{ language === 'en' ? '03 Planning' : '03 空间规划' }}
        </RouterLink>

        <RouterLink to="/project-architecture">
          {{ language === 'en' ? '04 Architecture' : '04 建筑创新' }}
        </RouterLink>

        <RouterLink to="/project-operations">
          {{ language === 'en' ? '05 Operations' : '05 产业运营' }}
        </RouterLink>

        <RouterLink to="/project-implementation">
          {{ language === 'en' ? '06 Implementation' : '06 合作实施' }}
        </RouterLink>
      </nav>

      <div class="header-right">
        <span class="header-label">
          {{ language === 'en'
            ? 'Project Planning Showcase'
            : '项目总体策划展示平台' }}
        </span>
        <LanguageSwitcher />
      </div>
    </header>


    <section class="hero">
      <div class="hero-content">
        <div class="hero-eyebrow">
          EZHOU · HUAHU AIRPORT · XM-10-20
        </div>

        <p class="location">
          {{ language === 'en'
            ? 'XM-10-20 Parcel · Ezhou Huahu Airport Economic Zone'
            : '湖北· 鄂州市花湖机场临空区 XM-10-20 地块' }}
        </p>
     
        <h1 :class="{ 'hero-title-en': language === 'en' }">
          {{ t('projectTitle') }}
          <span>{{ t('projectSubtitle') }}</span>
        </h1>

        <p class="hero-description">
          {{ t('heroDescription') }}
        </p>
        
        <RouterLink
          :to="{ path: '/', hash: '#modules' }"
          class="explore-button"
        >
          {{ t('explore') }}
          <span>↓</span>
        </RouterLink>

      </div>
        
      <div class="hero-visual">
        <div class="fusion-ecosystem">
          <div class="ecosystem-heading">
            <span>FUSION INDUSTRY ECOSYSTEM</span>
            <h3>{{ language === 'en' ? 'Five-Industry Ecosystem' : '五大产业融合生态' }}</h3>
          </div>

          <div class="orbit-stage">
            <svg
              class="orbit-lines"
              viewBox="0 0 400 360"
              aria-hidden="true"
            >
              <circle
                cx="200"
                cy="180"
                r="128"
                class="orbit-ring"
              />

              <line
                v-for="(item, index) in industries"
                :key="item.name"
                x1="200"
                y1="180"
                :x2="[200, 328, 288, 112, 72][index]"
                :y2="[35, 101, 288, 288, 101][index]"
                class="orbit-line"
                :class="{ selected: activeIndustry === index }"
              />
            </svg>

            <div class="orbit-core">
              <strong>{{ language === 'en' ? 'Integrated' : '文体旅商住' }}</strong>
              <span>{{ language === 'en' ? 'Industries' : '融合发展' }}</span>
              <small>FUSION CORE</small>
            </div>

            <button
              v-for="(item, index) in industries"
              :key="item.name"
              type="button"
              class="orbit-node"
              :class="[
                'node-' + index,
                { active: activeIndustry === index },
              ]"
              :aria-pressed="activeIndustry === index"
              @click="activeIndustry = index"
            >
              <span class="node-icon">{{ item.icon }}</span>
              <span class="node-name">
                {{ language === 'en' ? item.enName : item.name }}
              </span>
            </button>
          </div>

          <div class="ecosystem-description">
            <span class="description-number">
              0{{ activeIndustry + 1 }} / 05
            </span>
            <div>
              <h4>
                {{ language === 'en'
                  ? industries[activeIndustry]!.enName
                  : industries[activeIndustry]!.name }}
              </h4>
              <p>
                {{ language === 'en'
                  ? industries[activeIndustry]!.enDescription
                  : industries[activeIndustry]!.description }}
              </p>
            </div>
          </div>

          <p class="ecosystem-hint">
            {{ language === 'en'
              ? 'Click an industry node to explore its role'
              : '点击周围产业节点，查看各业态的融合价值' }}
          </p>
        </div>
      </div>


      <div class="hero-decoration">FUTURE CITY</div>
    </section>
    
    <section class="vision-section">
      <div class="section-heading">
        <span class="section-kicker">PROJECT VISION</span>

        <h2>
          {{ language === 'en'
            ? 'Project Vision'
            : '项目总体愿景' }}
        </h2>

        <p>
          {{ language === 'en'
            ? 'From traditional real estate development to integrated industries and long-term operations'
            : '从传统房地产开发迈向产业融合与长期运营' }}
        </p>
      </div>

      <div class="vision-grid">
        <div class="vision-item">
          <span class="vision-icon">🏠</span>
          <h3>
            {{ language === 'en' ? 'Quality Living' : '品质居住' }}
          </h3>
          <p>
            {{ language === 'en'
              ? 'Create a foundation for the project through quality communities and lifestyle services.'
              : '以宜居环境和高品质生活服务构建项目基础' }}
          </p>
        </div>

        <div class="vision-item">
          <span class="vision-icon">🏆</span>
          <h3>
            {{ language === 'en' ? 'Sports & Events' : '体育赛事' }}
          </h3>
          <p>
            {{ language === 'en'
              ? 'Develop a distinctive identity through fitness, sports training and events.'
              : '以全民健身、体育培训和赛事活动形成特色' }}
          </p>
        </div>

        <div class="vision-item">
          <span class="vision-icon">🎨</span>
          <h3>
            {{ language === 'en' ? 'Culture & Tourism' : '文化旅游' }}
          </h3>
          <p>
            {{ language === 'en'
              ? 'Enrich project experiences through arts, educational programs and leisure activities.'
              : '以文化艺术、研学教育和休闲体验丰富内容' }}
          </p>
        </div>

        <div class="vision-item">
          <span class="vision-icon">🌐</span>
          <h3>
            {{ language === 'en' ? 'Long-Term Operations' : '持续运营' }}
          </h3>
          <p>
            {{ language === 'en'
              ? 'Create long-term value through diversified commerce, smart services and professional operations.'
              : '以多元商业、智慧服务和专业运营创造价值' }}
          </p>
        </div>
      </div>
    </section>

    <section id="modules" class="modules-section">
      <div class="section-heading">
        <span class="section-kicker">PROJECT OVERVIEW</span>
        <h2>
          {{ language === 'en'
            ? 'Six Core Project Themes'
            : '项目六大核心专题' }}
        </h2>
        <p>
          {{ language === 'en'
            ? 'Explore the project from its implementation foundations to integrated industry operations.'
            : '从项目实施基础到产业运营，全面了解项目总体构想' }}
        </p>
      </div>

      <div class="module-grid">
        <RouterLink
          v-for="item in modules"
          :key="item.number"
          :to="
            item.number === '01' 
              ? '/project-background' 
              : item.number === '02'
                ? '/project-vision'
                : item.number === '03'
                  ? '/project-planning'
                  : item.number === '04'
                    ? '/project-architecture'
                    : item.number === '05'
                      ? '/project-operations'
                      : item.number === '06'
                        ? '/project-implementation'
                        : '/'
          "
          class="module-card"
        >
          <div class="module-top">
            <span class="module-number">{{ item.number }}</span>
            <span class="module-icon">{{ item.icon }}</span>
          </div>

          <h3>{{ language === 'en' ? item.enTitle : item.title }}</h3>
          <p>{{ language === 'en' ? item.enDescription : item.description }}</p>
          
          <div class="module-footer">
            <span>{{ language === 'en' ? 'Explore Theme' : '进入专题' }}</span>
            <span>↗</span>
          </div>

        </RouterLink>
      </div>
    </section>
    
    <footer class="site-footer">
      <p>
        {{ language === 'en'
          ? 'XM-10-20 Parcel · Ezhou Huahu Airport Economic Zone · Integrated Culture, Sports, Tourism, Commerce & Living Project'
          : '鄂州市花湖机场临空区 XM-10-20 地块文体旅商住融合服务产业项目' }}
      </p>

      <span>
        {{ language === 'en'
          ? 'Master Planning Showcase · Concept Study'
          : '总体策划展示 · 概念研究' }}
      </span>
    </footer>
  </div>
</template>

<style scoped>
.showcase-home {
  min-height: 100vh;
  background: #f5f7fa;
  color: #1e2d3e;
  font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}


.site-header {
  height: 56px;
  padding: 0 7%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
}


.site-brand {
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 17px;
  font-weight: 700;
  color: #123d5d;
}

.brand-mark {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #123d5d;
  color: #fff;
  border-radius: 10px;
  font-weight: 800;
}

.header-label {
  font-size: 13px;
  color: #7a8998;
}

.header-right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  flex-shrink: 0;
}

@media (max-width: 600px) {
  .header-right {
    gap: 8px;
  }
}


.hero {
  min-height: 0;
  padding: 45px 8%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  background: linear-gradient(120deg, #09283f, #105476);
  color: white;
}

.hero::after {
  content: '';
  position: absolute;
  width: 540px;
  height: 540px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 50%;
  right: -120px;
  top: -110px;
}


.hero-content {
  position: relative;
  z-index: 2;
  flex: 1.15;
  min-width: 0;
  max-width: none;
}

.hero {
  gap: 55px;
}

.hero h1 {
  font-size: clamp(30px, 3.3vw, 46px);
  line-height: 1.35;
}


.hero-eyebrow {
  color: #edbd76;
  letter-spacing: 4px;
  font-size: 12px;
}

.location {
  margin-top: 28px;
  font-size: 16px;
  color: #b9d3e0;
}

.hero h1 {
  margin: 22px 0;
  font-size: clamp(32px, 4vw, 54px);
  line-height: 1.45;
  font-weight: 800;
}

.hero h1 span {
  display: block;
  color: #f0bd76;
}

/* 英文首页标题使用更紧凑的排版 */
.hero h1.hero-title-en {
  font-size: clamp(28px, 2.5vw, 36px);
  line-height: 1.28;
  letter-spacing: -0.6px;
}

.hero h1.hero-title-en span {
  margin-top: 12px;
}

@media (max-width: 600px) {
  .hero h1.hero-title-en {
    font-size: 29px;
    line-height: 1.3;
  }
}


.hero-description {
  max-width: 750px;
  line-height: 2;
  font-size: 16px;
  color: #d5e2eb;
}

.explore-button {
  margin-top: 36px;
  display: inline-flex;
  align-items: center;
  gap: 22px;
  padding: 15px 28px;
  background: #dda65d;
  color: #16334b;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 700;
}


/* 首页产业融合动态关系图 */
.hero-visual {
  position: relative;
  z-index: 2;
  flex: 0.85;
  min-width: 0;
}

.fusion-ecosystem {
  width: 100%;
  padding: 24px;
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 22px;
  background: rgba(255,255,255,0.035);
}

.ecosystem-heading {
  text-align: center;
}

.ecosystem-heading > span {
  color: #e9b777;
  font-size: 10px;
  letter-spacing: 2px;
}

.ecosystem-heading h3 {
  margin: 9px 0 0;
  color: white;
  font-size: 21px;
}

.orbit-stage {
  position: relative;
  width: 100%;
  aspect-ratio: 10 / 9;
  max-height: 360px;
  margin: 8px auto;
}

.orbit-lines {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  pointer-events: none;
}

.orbit-ring {
  fill: none;
  stroke: rgba(157,194,214,0.3);
  stroke-width: 1.5;
  stroke-dasharray: 4 8;
  transform-origin: 200px 180px;
  animation: ring-rotate 45s linear infinite;
}

.orbit-line {
  stroke: rgba(160,198,218,0.35);
  stroke-width: 1.5;
  stroke-dasharray: 4 6;
  transition: stroke 0.3s, stroke-width 0.3s;
}

.orbit-line.selected {
  stroke: #e9b777;
  stroke-width: 2.5;
  stroke-dasharray: none;
}

.orbit-core {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #144764;
  border: 2px solid #dca85e;
  box-shadow: 0 0 35px rgba(220,168,94,0.18);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  text-align: center;
  animation: core-glow 4s ease-in-out infinite;
}

.orbit-core strong {
  color: #fff;
  font-size: clamp(11px, 1.2vw, 16px);
}

.orbit-core span {
  color: #e9b777;
  font-size: 12px;
}

.orbit-core small {
  color: #a5c3d5;
  font-size: 9px;
  letter-spacing: 1px;
}

.orbit-node {
  position: absolute;
  width: 23%;
  min-height: 58px;
  padding: 9px 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border-radius: 12px;
  border: 1px solid rgba(159,194,212,0.35);
  background: #225472;
  color: #fff;
  cursor: pointer;
  transform: translate(-50%, -50%);
  transition: background 0.25s, border-color 0.25s,
    box-shadow 0.25s, scale 0.25s;
  font-family: inherit;
}

.orbit-node:hover {
  scale: 1.05;
  border-color: #edbd76;
}

.orbit-node.active {
  background: #dca85e;
  color: #123d5d;
  border-color: #f0d09c;
  box-shadow: 0 0 22px rgba(220,168,94,0.25);
}

.node-icon {
  font-size: 21px;
}

.node-name {
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
}

.node-0 { left: 50%; top: 10%; }
.node-1 { left: 82%; top: 28%; }
.node-2 { left: 72%; top: 80%; }
.node-3 { left: 28%; top: 80%; }
.node-4 { left: 18%; top: 28%; }

.ecosystem-description {
  display: flex;
  align-items: flex-start;
  gap: 17px;
  padding: 16px 19px;
  border-radius: 12px;
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.1);
  min-height: 91px;
}

.description-number {
  color: #e9b777;
  font-size: 12px;
  white-space: nowrap;
}

.ecosystem-description h4 {
  margin: 0 0 6px;
  color: #fff;
  font-size: 15px;
}

.ecosystem-description p {
  margin: 0;
  font-size: 12px;
  color: #d5e4ed;
  line-height: 1.7;
}

.ecosystem-hint {
  text-align: center;
  color: #aac4d4;
  font-size: 11px;
  margin: 13px 0 0;
}

@keyframes ring-rotate {
  to { transform: rotate(360deg); }
}

@keyframes core-glow {
  50% {
    box-shadow: 0 0 42px rgba(220,168,94,0.32);
  }
}

@media (max-width: 1100px) {
  .hero {
    flex-direction: column;
    align-items: stretch;
    gap: 35px;
  }

  .hero-content,
  .hero-visual {
    flex: none;
    width: 100%;
  }

  .hero h1 {
    font-size: clamp(30px, 4.5vw, 46px);
  }

  .hero-visual {
    max-width: 480px;
    margin: 0 auto;
  }
}

@media (max-width: 600px) {
  .hero {
    padding: 65px 6%;
  }

  .hero h1 {
    font-size: 30px;
  }

  .fusion-ecosystem {
    padding: 15px 10px;
  }

  .orbit-node {
    width: 25%;
    min-height: 52px;
  }

  .node-icon {
    font-size: 18px;
  }

  .node-name {
    font-size: 10px;
  }

  .orbit-core span {
    font-size: 10px;
  }

  .orbit-core small {
    font-size: 7px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .orbit-ring,
  .orbit-core {
    animation: none;
  }
}



.hero-decoration {
  position: absolute;
  left: 8%;
  right: auto;
  bottom: 48px;

  font-size: clamp(32px, 4vw, 56px);
  font-weight: 900;
  letter-spacing: 6px;
  white-space: nowrap;

  color: #ffffff;
  opacity: 0.035;

  pointer-events: none;
  user-select: none;
  z-index: 1;
}


.vision-section,
.modules-section {
  padding: 85px 8%;
}

.section-heading {
  text-align: center;
  margin-bottom: 48px;
}

.section-kicker {
  display: block;
  color: #bd8b43;
  font-size: 12px;
  letter-spacing: 3px;
  margin-bottom: 12px;
}

.section-heading h2 {
  font-size: 32px;
  color: #123d5d;
  margin-bottom: 14px;
}

.section-heading p {
  color: #7a8998;
}

.vision-grid,
.module-grid {
  display: grid;
  gap: 22px;
}

.vision-grid {
  grid-template-columns: repeat(4, 1fr);
}

.vision-item {
  background: white;
  padding: 34px 25px;
  border-radius: 12px;
  text-align: center;
}

.vision-icon {
  font-size: 36px;
}

.vision-item h3 {
  margin: 20px 0 12px;
  color: #123d5d;
}

.vision-item p {
  font-size: 14px;
  color: #718091;
  line-height: 1.8;
}

.modules-section {
  background: #edf2f6;
}

.module-grid {
  grid-template-columns: repeat(3, 1fr);
}

.module-card {
  background: #fff;
  border-radius: 12px;
  padding: 30px;
  border: 1px solid #e5eaf0;
  transition: 0.25s;
  text-decoration: none;
  color: inherit;
}

.module-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 14px 32px rgba(17, 61, 93, 0.1);
}

.module-top,
.module-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.module-number {
  font-size: 34px;
  color: #d6e1e9;
  font-weight: 800;
}

.module-icon {
  font-size: 30px;
}

.module-card h3 {
  font-size: 20px;
  color: #123d5d;
  margin: 25px 0 12px;
}

.module-card p {
  min-height: 54px;
  line-height: 1.8;
  color: #718091;
  font-size: 14px;
}

.module-footer {
  margin-top: 28px;
  padding-top: 18px;
  border-top: 1px solid #e8edf1;
  color: #b58a4f;
  font-size: 13px;
}

.site-footer {
  background: #09283f;
  color: #fff;
  text-align: center;
  padding: 40px 20px;
  line-height: 2;
}

.site-footer span {
  font-size: 12px;
  color: #9bb7c8;
}

@media (max-width: 900px) {
  .vision-grid,
  .module-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .site-header {
    padding: 0 5%;
  }

  .header-label {
    display: none;
  }

  .hero {
    min-height: 520px;
    padding: 70px 6%;
  }

  .vision-section,
  .modules-section {
    padding: 60px 6%;
  }

  .vision-grid,
  .module-grid {
    grid-template-columns: 1fr;
  }

  .hero-description {
    font-size: 14px;
  }

  .section-heading h2 {
    font-size: 26px;
  }
}


/* 首页六大专题顶部导航 */
.site-header {
  height: auto;
  min-height: 64px;
  padding: 10px 4%;
  gap: 20px;
}

.site-brand {
  flex-shrink: 0;
  font-size: 15px;
}

.header-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-width: 0;
  gap: 8px;
}

.header-nav a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 9px;
  border-radius: 6px;
  color: #123d5d;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
}

.header-nav a:hover {
  background: #123d5d;
  color: #ffffff;
}

.header-right {
  flex-shrink: 0;
}

/* 屏幕较窄时导航自动换到第二行 */
@media (max-width: 1500px) {
  .site-header {
    flex-wrap: wrap;
  }

  .header-nav {
    order: 3;
    flex: 0 0 100%;
    justify-content: center;
    overflow-x: auto;
  }
}

/* 手机端适配 */
@media (max-width: 700px) {
  .site-header {
    padding: 10px 5%;
    gap: 10px;
  }

  .site-brand {
    font-size: 13px;
  }

  .header-nav {
    justify-content: flex-start;
    gap: 4px;
  }

  .header-nav a {
    padding: 9px 10px;
    font-size: 12px;
  }
}

</style>
