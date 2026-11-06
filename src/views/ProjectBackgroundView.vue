<script setup lang="ts">
import SectionSideNav from '../components/SectionSideNav.vue'
import { useLanguage } from '../i18n'

const { language } = useLanguage()

const sections = [
  { id: 'background', title: '项目合作与发展背景', enTitle: 'Project Background & Cooperation' },
  { id: 'location', title: '项目区位与土地基础', enTitle: 'Location & Land Foundations' },
  { id: 'indicators', title: '土地规划主要指标', enTitle: 'Planning Indicators' },
  { id: 'strategy', title: '项目发展方向', enTitle: 'Development Strategy' },
]

const indicators = [
  { value: '132,394.4', unit: '㎡', label: '历史规划总用地面积', enLabel: 'Historical Total Site Area' },
  { value: '105,721.6', unit: '㎡', label: '历史规划净用地面积', enLabel: 'Historical Net Site Area' },
  { value: '≤ 2.0', unit: '', label: '历史规划容积率', enLabel: 'Historical Floor Area Ratio' },
  { value: '≥ 35%', unit: '', label: '历史规划绿地率', enLabel: 'Historical Green Space Ratio' },
]

const developmentDirections = [
  {
    number: '01',
    title: '传统开发模式转型',
    enTitle: 'Transformation of the Development Model',
    content: '推动项目由单一房地产建设销售模式，向规划设计、开发建设、产业导入和长期运营相结合的综合开发模式转型。',
    enContent: 'Promote a transition from a conventional property construction-and-sales model to an integrated approach combining planning and design, construction, industry introduction, and long-term operations.',
  },
  {
    number: '02',
    title: '多元城市服务融合',
    enTitle: 'Integration of Urban Services',
    content: '研究品质居住、体育运动、文化艺术、休闲旅游、商业服务及智慧生活等功能的协同发展。',
    enContent: 'Explore synergies among quality living, sports, arts and culture, leisure tourism, commercial services, and smart living.',
  },
  {
    number: '03',
    title: '规划与运营协同',
    enTitle: 'Coordination of Planning and Operations',
    content: '在遵守土地用途和规划要求的前提下，将产业运营需求前置到总体规划和建筑设计阶段。',
    enContent: 'Subject to land-use and planning requirements, incorporate industry operation needs early in the master planning and architectural design stages.',
  },
]
</script>

<template>
  <div class="background-page">
    <SectionSideNav
      :sections="sections.map((item) => ({
        id: item.id,
        title: language === 'en' ? item.enTitle : item.title,
      }))"
    />

    <header class="page-header">
      <RouterLink to="/" class="back-link">
        {{ language === 'en' ? '← Back to Project Home' : '← 返回项目首页' }}
      </RouterLink>
      <span>PROJECT FOUNDATION</span>
    </header>

    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">
          {{ language === 'en' ? 'CHAPTER 01 / PROJECT THEME' : 'CHAPTER 01 / 项目专题' }}
        </p>
        <h1>{{ language === 'en' ? 'Project Background & Foundations' : '项目背景与实施基础' }}</h1>
        <p class="hero-description">
          {{ language === 'en'
            ? 'Building on the development context of Ezhou Huahu Airport Economic Zone, the project explores an integrated approach to urban renewal and development, with a focus on industry synergy and long-term operations.'
            : '立足鄂州市花湖机场临空区发展背景，以产业融合与长期运营为导向，探索城市更新与综合开发相结合的发展路径。' }}
        </p>
      </div>
    </section>

    <main class="container">
      <nav class="section-navigation">
        <a v-for="(item, index) in sections" :key="item.id" :href="`#${item.id}`" class="section-nav-card">
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
          <strong>{{ language === 'en' ? item.enTitle : item.title }}</strong>
          <small>{{ ['PROJECT BACKGROUND', 'LOCATION', 'PLANNING INDICATORS', 'DEVELOPMENT STRATEGY'][index] }} ↗</small>
        </a>
      </nav>

      <section id="background" class="content-section">
        <div class="section-title">
          <span>01 / PROJECT BACKGROUND</span>
          <h2>{{ language === 'en' ? 'Project Background & Cooperation' : '项目合作与发展背景' }}</h2>
        </div>
        <div class="intro-card">
          <h3>{{ language === 'en' ? 'Project Cooperation Foundations' : '项目合作基础' }}</h3>
          <p>
            {{ language === 'en'
              ? 'The land parcel has a background involving government cooperation, urban redevelopment and shantytown redevelopment. In response to changes in the real estate market, the project proposes a transition from conventional property development toward an integrated model that emphasizes industry development, professional operations and long-term value, exploring ways to coordinate urban renewal with industrial development.'
              : '该地块系政府合作、城改及棚改相关背景。结合房地产市场发展环境变化，项目拟从传统房地产开发向产业化、运营型、长期价值型综合项目转型，探索城市更新与产业发展协同的新路径。' }}
          </p>
        </div>
      </section>

      <section id="location" class="content-section">
        <div class="section-title">
          <span>02 / LOCATION</span>
          <h2>{{ language === 'en' ? 'Location & Land Foundations' : '项目区位与土地基础' }}</h2>
        </div>
        <div class="location-card">
          <div class="location-visual">
            <span class="map-icon">⌖</span>
            <h3>{{ language === 'en' ? 'Ezhou Huahu Airport Economic Zone' : '鄂州市花湖机场临空区' }}</h3>
            <p>{{ language === 'en' ? 'North of Wuchu Avenue · East of Wangchu Road' : '吴楚大道以北 · 望楚路以东' }}</p>
            <span class="visual-note">{{ language === 'en' ? 'Illustrative Project Location' : '项目区位示意区域' }}</span>
          </div>
          <div class="location-info">
            <h3>{{ language === 'en' ? 'Location Overview' : '区位概况' }}</h3>
            <p>
              {{ language === 'en'
                ? 'The preliminary study focuses on land parcel XM-10-20, situated north of Wuchu Avenue and east of Wangchu Road, as described in the historical planning and design requirements.'
                : '项目以 XM-10-20 地块为前期研究对象，位于历史规划设计要点所述的吴楚大道以北、望楚路以东区域。' }}
            </p>
            <p>
              {{ language === 'en'
                ? 'Further studies of the spatial layout and industry functions will follow verification of the official land boundary, urban roads, surrounding public facilities, and transport conditions.'
                : '未来将在核实正式用地红线、城市道路、周边公共设施及交通条件的基础上，进一步深化空间布局和产业功能研究。' }}
            </p>
          </div>
        </div>
      </section>

      <section id="indicators" class="content-section">
        <div class="section-title">
          <span>03 / PLANNING INDICATORS</span>
          <h2>{{ language === 'en' ? 'Key Historical Land Planning Indicators' : '土地规划主要指标' }}</h2>
          <p>
            {{ language === 'en'
              ? 'The following figures are drawn from the historical Planning and Design Requirements Notice (Echeng Gui She Zi [2017] No. 69).'
              : '以下数据依据鄂城规设字〔2017〕第69号历史规划设计要点整理。' }}
          </p>
        </div>
        <div class="indicator-grid">
          <div v-for="item in indicators" :key="item.label" class="indicator-card">
            <div class="indicator-value">
              {{ item.value }}
              <small>{{ item.unit }}</small>
            </div>
            <p>{{ language === 'en' ? item.enLabel : item.label }}</p>
          </div>
        </div>
        <div class="planning-details">
          <div>
            <span>{{ language === 'en' ? 'Planned Land Use' : '规划使用性质' }}</span>
            <strong>{{ language === 'en' ? 'Residential with Compatible Commercial Uses' : '居住兼容商业' }}</strong>
          </div>
          <div>
            <span>{{ language === 'en' ? 'Historical Commercial Area Share' : '历史规划商业面积占比' }}</span>
            <strong>8.2%</strong>
          </div>
          <div>
            <span>{{ language === 'en' ? 'Historical Residential Area Share' : '历史规划居住面积占比' }}</span>
            <strong>91.8%</strong>
          </div>
          <div>
            <span>{{ language === 'en' ? 'Historical Building Coverage Ratio' : '历史规划建筑密度' }}</span>
            <strong>≤ 20%</strong>
          </div>
        </div>
        <p class="planning-note">
          {{ language === 'en'
            ? 'Note: These planning and design requirements were issued in 2017, and the original notice specified a one-year validity period. The figures are provided solely for preliminary conceptual study. The applicable planning conditions and construction scale are subject to the latest confirmation by the competent authorities.'
            : '注：上述规划设计要点形成于2017年，原通知书载明有效期一年。相关指标仅供项目前期概念研究，实际规划条件及建设规模以主管部门最新核定为准。' }}
        </p>
      </section>

      <section id="strategy" class="content-section">
        <div class="section-title">
          <span>04 / DEVELOPMENT STRATEGY</span>
          <h2>{{ language === 'en' ? 'Project Development Strategy' : '项目发展方向' }}</h2>
        </div>
        <div class="direction-grid">
          <article v-for="item in developmentDirections" :key="item.number" class="direction-card">
            <span>{{ item.number }}</span>
            <h3>{{ language === 'en' ? item.enTitle : item.title }}</h3>
            <p>{{ language === 'en' ? item.enContent : item.content }}</p>
          </article>
        </div>
      </section>
    </main>

    <footer class="page-footer">
      {{ language === 'en'
        ? 'Ezhou Huahu Airport Economic Zone · Integrated Culture, Sports, Tourism, Commerce & Living Project'
        : '鄂州市花湖机场临空区文体旅商住融合服务产业项目' }}
    </footer>
  </div>
</template>

<style scoped>

/* 专题二级导航 */

html {
  scroll-behavior: smooth;
}

.section-navigation {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  margin-top: 35px;
  margin-bottom: 5px;
}

.section-nav-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 25px 18px;
  background: #ffffff;
  border: 1px solid #e4eaf0;
  border-top: 4px solid #d8a35d;
  border-radius: 10px;
  text-decoration: none;
  color: #123d5d;
  transition: 0.25s ease;
}

.section-nav-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 28px rgba(15, 59, 94, 0.12);
  border-top-color: #145779;
}

.section-nav-card span {
  color: #c6d5e1;
  font-size: 28px;
  font-weight: 800;
}

.section-nav-card strong {
  font-size: 16px;
  line-height: 1.5;
}

.section-nav-card small {
  color: #b58a4f;
  font-size: 10px;
  letter-spacing: 0.5px;
}

.content-section {
  scroll-margin-top: 24px;
}

@media (max-width: 900px) {
  .section-navigation {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .section-navigation {
    gap: 10px;
    margin-top: 25px;
  }

  .section-nav-card {
    padding: 18px 12px;
  }

  .section-nav-card strong {
    font-size: 13px;
  }

  .section-nav-card small {
    font-size: 9px;
  }
}


.background-page {
  min-height: 100vh;
  background: #f5f7fa;
  color: #243648;
}

.container {
  width: min(1200px, 88%);
  margin: 0 auto;
}

.page-header {
  height: 72px;
  padding: 0 6%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
}

.back-link {
  text-decoration: none;
  color: #123d5d;
  font-weight: 700;
}

.page-header > span {
  font-size: 12px;
  letter-spacing: 2px;
  color: #8393a3;
}

.page-hero {
  background: linear-gradient(120deg, #09283f, #145779);
  color: white;
  padding: 100px 0;
}

.eyebrow {
  color: #edbd76;
  letter-spacing: 3px;
  font-size: 12px;
}

.page-hero h1 {
  font-size: clamp(32px, 4vw, 52px);
  margin: 22px 0;
}

.hero-description {
  max-width: 750px;
  font-size: 17px;
  line-height: 2;
  color: #d7e5ee;
}

.content-section {
  padding: 75px 0 10px;
}

.section-title {
  margin-bottom: 30px;
}

.section-title > span {
  font-size: 12px;
  color: #bc8b4b;
  letter-spacing: 2px;
}

.section-title h2 {
  font-size: 30px;
  margin: 12px 0;
  color: #123d5d;
}

.section-title p {
  color: #78899a;
  line-height: 1.8;
}

.intro-card {
  background: white;
  padding: 38px;
  border-left: 5px solid #d9a45e;
  border-radius: 12px;
}

.intro-card h3 {
  color: #123d5d;
  margin-bottom: 18px;
}

.intro-card p,
.location-info p,
.direction-card p {
  line-height: 2;
  color: #647789;
}

.location-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: white;
  border-radius: 14px;
  overflow: hidden;
}

.location-visual {
  min-height: 320px;
  background: linear-gradient(135deg, #123d5d, #24718e);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 35px;
}

.map-icon {
  font-size: 48px;
  color: #e5b674;
}

.location-visual h3 {
  margin: 18px 0 8px;
}

.location-visual p {
  color: #d1e3eb;
}

.visual-note {
  margin-top: 28px;
  font-size: 12px;
  opacity: 0.5;
}

.location-info {
  padding: 45px;
}

.location-info h3 {
  color: #123d5d;
  margin-bottom: 20px;
}

.indicator-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.indicator-card {
  padding: 28px 15px;
  text-align: center;
  background: white;
  border-radius: 12px;
}

.indicator-value {
  color: #145779;
  font-size: 28px;
  font-weight: 800;
}

.indicator-value small {
  font-size: 14px;
}

.indicator-card p {
  margin-top: 12px;
  font-size: 13px;
  color: #718292;
}

.planning-details {
  margin-top: 22px;
  background: white;
  border-radius: 12px;
  padding: 15px 30px;
}

.planning-details > div {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 18px 0;
  border-bottom: 1px solid #edf0f3;
}

.planning-details > div:last-child {
  border-bottom: none;
}

.planning-details span {
  color: #6d7e8e;
}

.planning-details strong {
  color: #123d5d;
}

.planning-note {
  margin-top: 18px;
  color: #8896a4;
  line-height: 1.8;
  font-size: 13px;
}

.direction-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  margin-bottom: 80px;
}

.direction-card {
  background: white;
  padding: 32px;
  border-radius: 12px;
}

.direction-card > span {
  font-size: 30px;
  color: #d0dfe9;
  font-weight: 800;
}

.direction-card h3 {
  margin: 20px 0 12px;
  color: #123d5d;
}

.page-footer {
  background: #09283f;
  color: #d2e0e9;
  text-align: center;
  padding: 35px 15px;
  font-size: 13px;
}

@media (max-width: 900px) {
  .indicator-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .direction-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .location-card {
    grid-template-columns: 1fr;
  }

  .container {
    width: 90%;
  }

  .page-hero {
    padding: 65px 0;
  }

  .content-section {
    padding-top: 50px;
  }

  .indicator-value {
    font-size: 23px;
  }

  .location-info {
    padding: 28px;
  }
}
</style>
