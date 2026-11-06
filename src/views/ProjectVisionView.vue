<script setup lang="ts">
import SectionSideNav from '../components/SectionSideNav.vue'
import { computed } from 'vue'
import { useLanguage } from '../i18n'

const { language } = useLanguage()
const bi = (zh: string, en: string): string => language.value === 'en' ? en : zh

const sections = computed(() => [
  { id: 'position', number: '01', title: bi('项目总体定位', 'Overall Project Positioning') },
  { id: 'industries', number: '02', title: bi('六大产业融合体系', 'Six-Industry Integrated Ecosystem') },
  { id: 'principles', number: '03', title: bi('项目核心发展理念', 'Core Development Principles') },
  { id: 'values', number: '04', title: bi('城市综合服务价值', 'Integrated Urban Service Value') },
  { id: 'future', number: '05', title: bi('项目总体发展愿景', 'Overall Development Vision') },
])

const industries = computed(() => [
  {
    icon: '🏆',
    name: bi('体育', 'Sports'),
    en: 'SPORTS',
    role: bi('核心特色', 'Distinctive Focus'),
    detail: bi('全民健身、体育赛事、体育培训、青少年运动与体育服务。', 'Public fitness, sports events, training, youth sports and related services.'),
  },
  {
    icon: '🎨',
    name: bi('文化', 'Culture'),
    en: 'CULTURE',
    role: bi('项目内涵', 'Cultural Identity'),
    detail: bi('文化艺术展示、公共艺术、文化研学与体育文化交流。', 'Art exhibitions, public art, cultural learning and sports-culture exchanges.'),
  },
  {
    icon: '🌏',
    name: bi('旅游', 'Tourism'),
    en: 'TOURISM',
    role: bi('体验延伸', 'Extended Experiences'),
    detail: bi('特色空间、休闲体验、文旅活动与区域游客服务。', 'Distinctive spaces, leisure experiences, cultural tourism activities and visitor services.'),
  },
  {
    icon: '🛍️',
    name: bi('商业', 'Commerce'),
    en: 'COMMERCE',
    role: bi('消费承接', 'Consumer Services'),
    detail: bi('体育商业、餐饮休闲、特色零售与综合生活服务。', 'Sports-related retail, dining, leisure, specialty shopping and everyday services.'),
  },
  {
    icon: '🏠',
    name: bi('居住', 'Living'),
    en: 'LIVING',
    role: bi('基础功能', 'Core Foundation'),
    detail: bi('品质居住、社区配套、智慧生活与长期生活服务。', 'Quality housing, community amenities, smart living and long-term residential services.'),
  },
  {
    icon: '💡',
    name: bi('智慧服务', 'Smart Services'),
    en: 'SMART SERVICE',
    role: bi('科技支撑', 'Technology Enabler'),
    detail: bi('智慧物业、数字运营、能源管理与综合服务平台。', 'Smart property management, digital operations, energy management and integrated service platforms.'),
  },
])

const principles = computed(() => [
  {
    number: '01',
    title: bi('从建设销售走向持续经营', 'From Development and Sales to Ongoing Operations'),
    text: bi('将传统房地产开发与体育、文化、商业和城市生活服务相结合，形成持续运营的综合项目。', 'Integrate traditional real estate development with sports, culture, commerce and urban lifestyle services to create a project capable of sustained operations.'),
  },
  {
    number: '02',
    title: bi('从单一功能走向产业融合', 'From Single-Use to Industry Integration'),
    text: bi('通过复合建筑空间和多元产业内容，推动不同业态之间的客群共享、服务协同与消费联动。', 'Combine mixed-use spaces and diverse industries to encourage shared audiences, coordinated services and connected consumer activity.'),
  },
  {
    number: '03',
    title: bi('从先建设走向运营前置', 'Plan for Operations Before Construction'),
    text: bi('在规划设计阶段同步考虑产业导入、空间使用、工程成本、专业运营与长期维护。', 'Consider industry participation, space use, construction costs, professional management and long-term maintenance from the planning and design stage.'),
  },
])

const cityValues = computed(() => [
  {
    title: bi('提升城市综合服务能力', 'Strengthen Integrated Urban Services'),
    text: bi('完善体育健身、文化活动、商业消费和社区生活等多元服务。', 'Expand fitness, cultural activities, commercial amenities and community services.'),
  },
  {
    title: bi('探索房地产转型路径', 'Explore Real Estate Transformation'),
    text: bi('研究房地产开发与长期运营服务产业相结合的新型发展方式。', 'Explore development models that connect real estate projects with long-term service operations.'),
  },
  {
    title: bi('促进产业资源协同', 'Coordinate Industry Resources'),
    text: bi('通过体育、文化、旅游、商业和生活服务的联动，拓展产业合作空间。', 'Promote opportunities for industry collaboration across sports, culture, tourism, commerce and lifestyle services.'),
  },
  {
    title: bi('创造长期运营价值', 'Create Long-Term Operating Value'),
    text: bi('重视项目建成后的持续使用、资产维护、经营管理和城市服务价值。', 'Prioritize continued use, asset maintenance, management and urban service value after completion.'),
  },
])
</script>

<template>
  <div class="vision-page" :class="{ 'is-english': language === 'en' }">
    
    <SectionSideNav :sections="sections" />



    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">CHAPTER 02 / DEVELOPMENT VISION</p>
        <h1>{{ bi('总体定位与发展愿景', 'Positioning & Development Vision') }}</h1>
        <p class="hero-description">
          {{ bi('以品质居住为基础，以体育运动为核心特色， 以文化艺术与文旅体验为内涵， 以商业服务、教育健康和智慧科技为多元支撑。', 'Built on quality living, with sports as a distinctive focus, culture and tourism as key experiences, and commerce, education, wellness and smart technologies as supporting services.') }}
        </p>
        <div class="hero-tags">
          <span>{{ bi('产业融合', 'Industry Integration') }}</span>
          <span>{{ bi('空间创新', 'Spatial Innovation') }}</span>
          <span>{{ bi('运营前置', 'Operations-Led Planning') }}</span>
          <span>{{ bi('长期价值', 'Long-Term Value') }}</span>
        </div>
      </div>
    </section>

    <main class="container">
      <!-- 专题内部导航 -->
      <nav class="section-navigation" :aria-label="bi('专题内容导航', 'Section Navigation')">
        <a
          v-for="item in sections"
          :key="item.id"
          :href="`#${item.id}`"
          class="nav-card"
        >
          <span>{{ item.number }}</span>
          <strong>{{ item.title }}</strong>
          <small>{{ bi('查看内容 ↗', 'Explore Section ↗') }}</small>
        </a>
      </nav>

      <!-- 一、总体定位 -->
      <section id="position" class="content-section">
        <div class="section-title">
          <span>01 / PROJECT POSITIONING</span>
          <h2>{{ bi('项目总体定位', 'Overall Project Positioning') }}</h2>
        </div>

        <div class="position-card">
          <p class="position-label">{{ bi('总体定位 / PROJECT POSITIONING', 'OVERALL POSITIONING / PROJECT POSITIONING') }}</p>
          <h3>
            {{ bi('文体旅商住融合型', 'Integrated Culture, Sports, Tourism, Commerce & Living') }}
            <em>{{ bi('城市综合服务项目', 'Urban Service Development') }}</em>
          </h3>
          <p>
            {{ bi('本项目拟以品质居住作为基础功能， 以体育运动与全民健身塑造特色， 以文化艺术和文旅体验丰富项目内涵， 以商业、教育、健康与智慧科技形成配套支撑。', 'The proposed project uses quality living as its foundation, sports and public fitness as distinctive features, cultural arts and tourism experiences as its identity, and commerce, education, wellness and smart technologies as supporting services.') }}
          </p>
          <p>
            {{ bi('通过规划设计、产业导入、工程建设和长期运营的协同， 探索具有持续经营能力与城市综合服务价值的项目发展模式。', 'By aligning planning, industry participation, construction and long-term operations, the project explores a development model with sustainable operating potential and integrated urban service value.') }}
          </p>
        </div>
      </section>

      <!-- 二、产业体系 -->
      <section id="industries" class="content-section">
        <div class="section-title">
          <span>02 / INDUSTRIAL ECOSYSTEM</span>
          <h2>{{ bi('六大产业融合体系', 'Six-Industry Integrated Ecosystem') }}</h2>
          <p>{{ bi('以多元功能协同形成复合型产业与生活服务生态。', 'Bring multiple functions together in an integrated industry and lifestyle services ecosystem.') }}</p>
        </div>

        <div class="industry-center">
          <span>{{ bi('产业融合发展体系', 'Integrated Industry Ecosystem') }}</span>
          <strong>{{ bi('文体旅商住', 'Culture · Sports · Tourism · Commerce · Living') }}</strong>
          <small>{{ bi('融合服务 · 协同运营', 'Integrated Services · Coordinated Operations') }}</small>
        </div>

        <div class="industry-grid">
          <article
            v-for="item in industries"
            :key="item.name"
            class="industry-card"
          >
            <div class="industry-top">
              <span class="industry-icon">{{ item.icon }}</span>
              <span class="industry-role">{{ item.role }}</span>
            </div>
            <h3>{{ item.name }}</h3>
            <small v-if="language !== 'en'">{{ item.en }}</small>
            <p>{{ item.detail }}</p>
          </article>
        </div>
      </section>

      <!-- 三、发展理念 -->
      <section id="principles" class="content-section">
        <div class="section-title">
          <span>03 / DEVELOPMENT PRINCIPLES</span>
          <h2>{{ bi('项目核心发展理念', 'Core Development Principles') }}</h2>
        </div>

        <div class="principle-grid">
          <article
            v-for="item in principles"
            :key="item.number"
            class="principle-card"
          >
            <span>{{ item.number }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </section>

      <!-- 四、城市价值 -->
      <section id="values" class="content-section">
        <div class="section-title">
          <span>04 / CITY VALUE</span>
          <h2>{{ bi('城市综合服务价值', 'Integrated Urban Service Value') }}</h2>
          <p>{{ bi('从空间建设延伸至产业发展与长期城市服务。', 'Extend beyond physical development to industry growth and long-term urban services.') }}</p>
        </div>

        <div class="value-grid">
          <article
            v-for="(item, index) in cityValues"
            :key="item.title"
            class="value-card"
          >
            <span>0{{ index + 1 }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </section>

      <!-- 五、发展愿景 -->
      <section id="future" class="content-section">
        <div class="section-title">
          <span>05 / FUTURE VISION</span>
          <h2>{{ bi('项目总体发展愿景', 'Overall Development Vision') }}</h2>
        </div>

        <div class="future-card">
          <p class="future-label">OUR VISION</p>
          <h3>
            {{ bi('让建筑空间服务产业发展，', 'Let Built Spaces Support Industry Development,') }}
            <br />
            {{ bi('让项目建设形成长期运营价值。', 'And Create Long-Term Value Through Operations.') }}
          </h3>
          <p>
            {{ bi('以居住为基础、体育为特色、文化为内涵、 文旅为延伸、商业为服务、智慧科技为工具， 探索建设具有产业协同能力和长期运营价值的 城市综合服务项目。', 'With living as the foundation, sports as a distinctive feature, culture as the identity, tourism as an extension, commerce as a service and smart technology as an enabler, the project explores an integrated urban service model built on industry synergy and long-term operating value.') }}
          </p>
        </div>
      </section>
    </main>

    <footer class="page-footer">
      {{ bi('鄂州市花湖机场临空区文体旅商住融合服务产业项目', 'Ezhou Huahu Airport Economic Zone · Integrated Culture, Sports, Tourism, Commerce & Living Project') }}
    </footer>
  </div>
</template>

<style scoped>
.vision-page {
  min-height: 100vh;
  background: #f5f7fa;
  color: #243648;
}

.container {
  width: min(1200px, 88%);
  margin: 0 auto;
}

.page-hero {
  background: linear-gradient(115deg, #09283f, #155675);
  padding: 95px 0 105px;
  color: white;
}

.eyebrow {
  font-size: 12px;
  color: #edbd76;
  letter-spacing: 3px;
}

.page-hero h1 {
  margin: 20px 0;
  font-size: clamp(32px, 4vw, 52px);
}

.hero-description {
  max-width: 820px;
  font-size: 17px;
  line-height: 2;
  color: #d5e4ed;
}

.hero-tags {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 30px;
}

.hero-tags span {
  padding: 8px 15px;
  border: 1px solid #65889e;
  border-radius: 24px;
  font-size: 13px;
  color: #e8f0f5;
}

.section-navigation {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 12px;
  margin-top: 35px;
}

.nav-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 22px 16px;
  background: white;
  border: 1px solid #e1e8ee;
  border-top: 4px solid #d8a35d;
  border-radius: 10px;
  text-decoration: none;
  color: #123d5d;
  transition: 0.25s;
}

.nav-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 28px #123d5d15;
}

.nav-card > span {
  font-size: 26px;
  font-weight: 800;
  color: #c6d6e1;
}

.nav-card strong {
  font-size: 15px;
  line-height: 1.5;
}

.nav-card small {
  color: #bb8c50;
  font-size: 11px;
}

.content-section {
  padding: 85px 0 10px;
  scroll-margin-top: 20px;
}

.section-title {
  margin-bottom: 30px;
}

.section-title > span {
  color: #bd8d4e;
  font-size: 12px;
  letter-spacing: 2px;
}

.section-title h2 {
  color: #123d5d;
  margin: 12px 0;
  font-size: 30px;
}

.section-title p {
  color: #748698;
  line-height: 1.8;
}

.position-card {
  padding: 50px;
  background: white;
  border-left: 5px solid #dca962;
  border-radius: 12px;
}

.position-label,
.future-label {
  letter-spacing: 2px;
  font-size: 12px;
  color: #bc8b4b;
}

.position-card h3 {
  font-size: clamp(25px, 3vw, 39px);
  line-height: 1.5;
  color: #123d5d;
  margin: 20px 0;
}

.position-card em {
  display: block;
  font-style: normal;
  color: #bd8b4b;
}

.position-card > p:not(.position-label) {
  line-height: 2;
  color: #667a8c;
  max-width: 950px;
  margin-top: 12px;
}

.industry-center {
  margin: 10px auto 25px;
  width: min(100%, 450px);
  padding: 32px 20px;
  background: linear-gradient(135deg, #103b5d, #1a6482);
  border-radius: 16px;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.industry-center span,
.industry-center small {
  font-size: 13px;
  color: #c8dce8;
}

.industry-center strong {
  font-size: 31px;
  color: #e7b36d;
}

.industry-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.industry-card,
.principle-card,
.value-card {
  background: white;
  border-radius: 12px;
  padding: 28px;
}

.industry-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.industry-icon {
  font-size: 32px;
}

.industry-role {
  color: #bd8b4b;
  font-size: 12px;
}

.industry-card h3 {
  font-size: 23px;
  margin: 20px 0 6px;
  color: #123d5d;
}

.industry-card small {
  color: #a2afba;
  letter-spacing: 1px;
}

.industry-card p,
.principle-card p,
.value-card p {
  color: #687b8d;
  line-height: 1.9;
  margin-top: 16px;
  font-size: 14px;
}

.principle-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.principle-card > span,
.value-card > span {
  color: #c8d8e4;
  font-weight: 800;
  font-size: 30px;
}

.principle-card h3,
.value-card h3 {
  color: #123d5d;
  margin-top: 18px;
  font-size: 19px;
  line-height: 1.5;
}

.value-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.value-card {
  border-left: 4px solid #d8a35d;
}

.future-card {
  background: linear-gradient(120deg, #09283f, #145675);
  border-radius: 16px;
  color: white;
  padding: 65px 55px;
  margin-bottom: 85px;
}

.future-card h3 {
  font-size: clamp(24px, 3vw, 38px);
  line-height: 1.6;
  margin: 22px 0;
  color: #f0bd76;
}

.future-card > p:last-child {
  max-width: 850px;
  color: #d4e3ed;
  line-height: 2;
}

.page-footer {
  background: #09283f;
  color: #d2e0e9;
  padding: 35px 15px;
  text-align: center;
  font-size: 13px;
}

@media (max-width: 1000px) {
  .section-navigation {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 800px) {
  .industry-grid,
  .principle-grid,
  .value-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .container {
    width: 90%;
  }

  .page-hero {
    padding: 65px 0;
  }

  .section-navigation {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .nav-card {
    padding: 16px 12px;
  }

  .nav-card strong {
    font-size: 13px;
  }

  .content-section {
    padding-top: 55px;
  }

  .position-card,
  .future-card {
    padding: 30px 22px;
  }

  .industry-grid,
  .principle-grid,
  .value-grid {
    grid-template-columns: 1fr;
  }

  .industry-center strong {
    font-size: 25px;
  }
}
/* Adjust longer English headings without changing the Chinese layout. */
.is-english .industry-center strong {
  font-size: clamp(18px, 2.1vw, 24px);
  line-height: 1.5;
  overflow-wrap: anywhere;
}

.is-english .position-card h3 {
  font-size: clamp(23px, 2.6vw, 33px);
  overflow-wrap: anywhere;
}

.is-english .industry-card h3 {
  font-size: 21px;
}
</style>
