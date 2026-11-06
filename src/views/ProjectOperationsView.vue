
<script setup lang="ts">
import SectionSideNav from '../components/SectionSideNav.vue'
import { useLanguage } from '../i18n'

const { language } = useLanguage()

const sections = [
  { id: 'position', title: '产业融合与运营定位',
    enTitle: 'Industry Integration & Positioning',
  },
  { id: 'culture', title: '体育文化旅游产业运营',
    enTitle: 'Sports, Culture & Tourism Operations',
  },
  { id: 'commerce', title: '商业消费与生活服务',
    enTitle: 'Commerce & Lifestyle Services',
  },
  { id: 'management', title: '专业化运营组织体系',
    enTitle: 'Professional Operations Management',
  },
  { id: 'revenue', title: '多元收入与商业模式',
    enTitle: 'Diversified Revenue & Business Models',
  },
  { id: 'implementation', title: '招商培育与运营实施',
    enTitle: 'Tenant Recruitment & Operations',
  },
]

const industryItems = [
  {
    icon: '🏆',
    title: '体育运动',
    description: '以全民健身、运动培训和体育活动形成持续使用需求。',
    enTitle: 'Sports & Fitness',
    enDescription: 'Build recurring demand through community fitness, sports training and activities.',
  },
  {
    icon: '🎨',
    title: '文化艺术',
    description: '通过文化展示、艺术活动和研学体验丰富项目内容。',
    enTitle: 'Culture & Arts',
    enDescription: 'Enrich project content through cultural exhibitions, artistic events and educational experiences.',
  },
  {
    icon: '🌍',
    title: '休闲旅游',
    description: '研究城市休闲、特色体验与周边客源联动。',
    enTitle: 'Leisure & Tourism',
    enDescription: 'Explore urban leisure, distinctive experiences and links with surrounding visitor markets.',
  },
  {
    icon: '🛍️',
    title: '商业消费',
    description: '通过特色零售、餐饮和配套服务承接活动消费。',
    enTitle: 'Commerce & Retail',
    enDescription: 'Support spending associated with activities through specialty retail, dining and related services.',
  },
  {
    icon: '🏠',
    title: '品质居住',
    description: '以社区生活和常住人口形成稳定的日常服务需求。',
    enTitle: 'Quality Living',
    enDescription: 'Create stable everyday service demand through community life and permanent residents.',
  },
]

const activityItems = [
  {
    number: '01',
    title: '体育培训与全民健身',
    description: '研究运动课程、场馆服务、社群活动及青少年体育培训。',
    enTitle: 'Sports Training & Public Fitness',
    enDescription: 'Explore sports classes, venue services, community activities and youth sports training.',
  },
  {
    number: '02',
    title: '赛事活动与运动体验',
    description: '结合场地条件探索群众赛事、体验活动与特色运动项目。',
    enTitle: 'Sports Events & Experiences',
    enDescription: 'Explore community competitions, experiential events and specialized sports, subject to site conditions.',
  },
  {
    number: '03',
    title: '文化展示与研学活动',
    description: '研究公共艺术、主题展览、文化交流与特色研学内容。',
    enTitle: 'Cultural Exhibitions & Learning',
    enDescription: 'Explore public art, themed exhibitions, cultural exchange and educational programs.',
  },
  {
    number: '04',
    title: '休闲旅游与消费联动',
    description: '探索运动、文化、休闲和商业之间的活动联动机制。',
    enTitle: 'Leisure, Tourism & Commerce',
    enDescription: 'Explore coordinated activities linking sports, culture, leisure and commerce.',
  },
]

const commerceItems = [
  {
    title: '体育主题商业',
    description: '运动装备、体育服务及相关特色消费。',
    enTitle: 'Sports-Themed Retail',
    enDescription: 'Sporting goods, sports services and related specialty consumption.',
  },
  {
    title: '餐饮休闲服务',
    description: '结合运动人群、居民及访客需求配置餐饮休闲功能。',
    enTitle: 'Dining & Leisure',
    enDescription: 'Provide dining and leisure offerings for sports participants, residents and visitors.',
  },
  {
    title: '社区生活服务',
    description: '围绕居住人口形成便民、品质生活与日常消费服务。',
    enTitle: 'Community Lifestyle Services',
    enDescription: 'Provide convenient, quality daily services and retail to local residents.',
  },
  {
    title: '文化体验商业',
    description: '研究文化创意、艺术体验和特色活动配套经营。',
    enTitle: 'Culture & Experience Commerce',
    enDescription: 'Explore creative cultural products, art experiences and commercial services supporting special events.',
  },
]

const managementItems = [
  {
    title: '项目综合管理',
    description: '负责总体运营计划、经营目标、资源协调和运营监督。',
    enTitle: 'Integrated Project Management',
    enDescription: 'Coordinate operational plans, business objectives, resources and performance oversight.',
  },
  {
    title: '产业招商管理',
    description: '负责产业资源对接、商户引入及合作伙伴服务。',
    enTitle: 'Industry & Tenant Recruitment',
    enDescription: 'Manage industry partnerships, tenant onboarding and partner services.',
  },
  {
    title: '活动内容运营',
    description: '负责体育、文化、研学和公共活动的策划执行。',
    enTitle: 'Events & Content Operations',
    enDescription: 'Plan and deliver sports, cultural, educational and public activities.',
  },
  {
    title: '商业与客户服务',
    description: '负责商业经营协同、客户服务、会员及社群运营。',
    enTitle: 'Commerce & Customer Service',
    enDescription: 'Coordinate commercial activities, customer service, memberships and community engagement.',
  },
  {
    title: '物业与设施管理',
    description: '负责建筑维护、设备运行、安全管理和基础服务。',
    enTitle: 'Property & Facilities Management',
    enDescription: 'Manage building upkeep, equipment, safety and essential property services.',
  },
  {
    title: '数字化与财务管理',
    description: '负责运营数据、经营分析、预算管理和成本控制。',
    enTitle: 'Digital & Financial Management',
    enDescription: 'Manage operating data, performance analysis, budgets and cost controls.',
  },
]

const revenueItems = [
  {
    number: '01',
    title: '空间租赁与经营',
    description: '适用于依法具备经营条件的商业和产业服务空间。',
    tag: '空间经营',
    enTitle: 'Space Leasing & Operations',
    enDescription: 'Applicable to commercial and industry-service spaces legally eligible for operation.',
    enTag: 'Space Operations',
  },
  {
    number: '02',
    title: '体育场馆与培训',
    description: '研究场馆使用、体育课程、培训服务等经营收入。',
    tag: '体育服务',
    enTitle: 'Sports Venues & Training',
    enDescription: 'Explore revenue from venue use, sports courses and training services.',
    enTag: 'Sports Services',
  },
  {
    number: '03',
    title: '活动赛事与配套',
    description: '研究活动承办、赛事服务及相关配套经营。',
    tag: '活动运营',
    enTitle: 'Events, Competitions & Support',
    enDescription: 'Explore event hosting, sports-event services and related supporting activities.',
    enTag: 'Event Operations',
  },
  {
    number: '04',
    title: '商业合作与品牌服务',
    description: '探索品牌合作、商业推广及配套服务收益。',
    tag: '商业合作',
    enTitle: 'Commercial Partnerships & Branding',
    enDescription: 'Explore brand partnerships, commercial promotions and related service income.',
    enTag: 'Commercial Partnerships',
  },
  {
    number: '05',
    title: '物业与综合服务',
    description: '依法依约开展物业管理及其他综合服务。',
    tag: '基础服务',
    enTitle: 'Property & Integrated Services',
    enDescription: 'Provide property management and other integrated services in accordance with law and contracts.',
    enTag: 'Essential Services',
  },
]

const implementationItems = [
  {
    number: '01',
    title: '市场调研',
    description: '研究人口结构、消费需求、客群来源及现有市场供给。',
    enTitle: 'Market Research',
    enDescription: 'Study demographics, consumer demand, customer origins and existing market supply.',
  },
  {
    number: '02',
    title: '运营定位',
    description: '明确目标客群、主力业态、场馆功能和服务标准。',
    enTitle: 'Operations Positioning',
    enDescription: 'Define target customers, anchor uses, venue functions and service standards.',
  },
  {
    number: '03',
    title: '招商对接',
    description: '开展体育机构、商业品牌及产业合作资源洽谈。',
    enTitle: 'Tenant & Partner Engagement',
    enDescription: 'Engage sports institutions, commercial brands and industry partners.',
  },
  {
    number: '04',
    title: '开业筹备',
    description: '组织人员招聘、系统调试、商户进场及活动筹备。',
    enTitle: 'Pre-Opening Preparation',
    enDescription: 'Coordinate recruitment, system commissioning, tenant move-in and event preparations.',
  },
  {
    number: '05',
    title: '持续运营',
    description: '根据经营数据、客户反馈和市场变化持续优化。',
    enTitle: 'Ongoing Operations',
    enDescription: 'Continuously optimize operations based on performance data, customer feedback and market changes.',
  },
]
</script>

<template>
  <div class="operations-page">
    <SectionSideNav
      :sections="sections.map(item => ({
        id: item.id,
        title: language === 'en' ? item.enTitle : item.title,
      }))"
    />

    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">
          CHAPTER 05 / INDUSTRY & OPERATIONS
        </p>
        <h1>
          {{ language === 'en' ? 'Industry Operations & Business Model' : '产业运营与商业模式' }}
        </h1>
        <p class="hero-description">
          {{ language === 'en' ? 'With industry development and long-term operations at its core, the project explores synergies among sports, culture, tourism, commerce and residential life, progressively developing an operating system integrating daily services, activities and consumer experiences.' : '以产业导入和长期运营为核心， 研究体育、文化、旅游、商业与居住生活之间的协同机制， 逐步形成集日常服务、活动体验与商业消费于一体的运营体系。' }}
        </p>

        <div class="hero-tags">
          <span>
          {{ language === 'en' ? 'Industry Integration' : '产业融合' }}
        </span>
          <span>
          {{ language === 'en' ? 'Content Operations' : '内容运营' }}
        </span>
          <span>
          {{ language === 'en' ? 'Commercial Services' : '商业消费' }}
        </span>
          <span>
          {{ language === 'en' ? 'Long-Term Operations' : '长期经营' }}
        </span>
        </div>
      </div>
    </section>

    <main class="container">
      <nav class="section-navigation">
        <a
          v-for="(item, index) in sections"
          :key="item.id"
          :href="`#${item.id}`"
          class="section-nav-card"
        >
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
          <strong>{{ language === 'en' ? item.enTitle : item.title }}</strong>
          <small>
          {{ language === 'en' ? 'Explore Section ↗' : '查看专题内容 ↗' }}
        </small>
        </a>
      </nav>

      <!-- 第一部分：产业融合 -->
      <section id="position" class="content-section">
        <div class="section-title">
          <span>01 / INDUSTRY POSITIONING</span>
          <h2>
          {{ language === 'en' ? 'Industry Integration & Positioning' : '产业融合与运营定位' }}
        </h2>
          <p>
          {{ language === 'en' ? 'Build an industry ecosystem in which residential life, cultural and sports activities, leisure experiences and commerce reinforce one another.' : '构建居住生活、文体活动、休闲体验与商业消费相互促进的产业生态。' }}
        </p>
        </div>

        <div class="concept-banner">
          <small>INTEGRATED INDUSTRY ECOSYSTEM</small>
          <h3>
          {{ language === 'en' ? 'From Traditional Property Development to Integrated Service Operations' : '从传统物业开发走向综合服务运营' }}
        </h3>
          <p>
          {{ language === 'en' ? 'By coordinating multiple industry functions, the project seeks to transform built spaces into an integrated urban-services platform that supports recurring community activity, consumer demand and business services.' : '项目拟通过多种产业功能的协同配置， 将建筑空间转化为能够持续产生社会活动、 消费需求和经营服务的城市综合服务载体。' }}
        </p>
        </div>

        <div class="ecosystem-diagram">
          <div class="ecosystem-center">
            <small>
          {{ language === 'en' ? 'Core Operations Platform' : '核心运营平台' }}
        </small>
            <strong>
          {{ language === 'en' ? 'Integrated Culture, Sports, Tourism, Commerce & Living' : '文体旅商住融合服务' }}
        </strong>
            <span>
          {{ language === 'en' ? 'Space · Content · Services · Consumption' : '空间 · 内容 · 服务 · 消费' }}
        </span>
          </div>
          <div class="ecosystem-grid">
            <div
              v-for="item in industryItems"
              :key="item.title"
              class="ecosystem-item"
            >
              <span>{{ item.icon }}</span>
              <h3>{{ language === 'en' ? item.enTitle : item.title }}</h3>
              <p>{{ language === 'en' ? item.enDescription : item.description }}</p>
            </div>
          </div>
          <p class="diagram-note">
          {{ language === 'en' ? 'Conceptual illustration of industry synergies; it does not represent signed agreements or operators already in place.' : '产业协同关系概念示意，不代表已经签约或实际入驻的经营主体。' }}
        </p>
        </div>
      </section>

      <!-- 第二部分：文体旅运营 -->
      <section id="culture" class="content-section">
        <div class="section-title">
          <span>02 / SPORTS CULTURE TOURISM</span>
          <h2>
          {{ language === 'en' ? 'Sports, Culture & Tourism Operations' : '体育文化旅游产业运营' }}
        </h2>
          <p>
          {{ language === 'en' ? 'Generate recurring footfall and programming through regular courses, themed events and distinctive experiences.' : '通过常态化课程、主题活动和特色体验形成持续的客流与内容供给。' }}
        </p>
        </div>

        <div class="activity-banner">
          <small>CONTENT-DRIVEN OPERATIONS</small>
          <h3>
          {{ language === 'en' ? 'Activate Spaces Through Events and Programming' : '以活动内容带动空间使用' }}
        </h3>
          <p>
          {{ language === 'en' ? 'Drawing on sports venues, public activity spaces and supporting facilities, explore sports services for all ages, cultural programs and urban leisure experiences, extending the project beyond space rental toward content-based operations and integrated services.' : '结合体育场馆、公共活动空间及相关配套设施， 研究全年龄段运动服务、文化活动与城市休闲体验， 推动项目由单纯空间出租向内容运营和综合服务延伸。' }}
        </p>
        </div>

        <div class="card-grid two">
          <article
            v-for="item in activityItems"
            :key="item.number"
            class="content-card"
          >
            <span class="card-number">{{ item.number }}</span>
            <h3>{{ language === 'en' ? item.enTitle : item.title }}</h3>
            <p>{{ language === 'en' ? item.enDescription : item.description }}</p>
          </article>
        </div>
      </section>

      <!-- 第三部分：商业消费 -->
      <section id="commerce" class="content-section">
        <div class="section-title">
          <span>03 / COMMERCIAL SERVICES</span>
          <h2>
          {{ language === 'en' ? 'Commerce & Lifestyle Services' : '商业消费与生活服务' }}
        </h2>
          <p>
          {{ language === 'en' ? 'Develop a multi-layered service offering for residents, sports participants and city visitors.' : '以居住人口、体育活动参与者及城市访客为主要研究客群， 形成多层次商业服务体系。' }}
        </p>
        </div>

        <div class="customer-flow">
          <h3>
          {{ language === 'en' ? 'Customer Engagement & Conversion Model' : '消费服务形成机制' }}
        </h3>
          <div class="flow-line">
            <div class="flow-node">
          {{ language === 'en' ? 'Customer Attraction' : '客群导入' }}
        </div>
            <span>→</span>
            <div class="flow-node">
          {{ language === 'en' ? 'Activity Participation' : '活动参与' }}
        </div>
            <span>→</span>
            <div class="flow-node active">
          {{ language === 'en' ? 'Conversion to Spending' : '消费转化' }}
        </div>
            <span>→</span>
            <div class="flow-node">
          {{ language === 'en' ? 'Ongoing Services' : '持续服务' }}
        </div>
          </div>
          <p class="diagram-note">
          {{ language === 'en' ? 'Illustrative operating logic; actual conversion performance must be validated through market research and operations.' : '经营逻辑示意，实际消费转化效果需通过市场调研和运营验证。' }}
        </p>
        </div>

        <div class="card-grid four">
          <article
            v-for="item in commerceItems"
            :key="item.title"
            class="content-card"
          >
            <h3>{{ language === 'en' ? item.enTitle : item.title }}</h3>
            <p>{{ language === 'en' ? item.enDescription : item.description }}</p>
          </article>
        </div>
      </section>

      <!-- 第四部分：运营组织 -->
      <section id="management" class="content-section">
        <div class="section-title">
          <span>04 / OPERATIONS MANAGEMENT</span>
          <h2>
          {{ language === 'en' ? 'Professional Operations Management' : '专业化运营组织体系' }}
        </h2>
          <p>
          {{ language === 'en' ? 'Explore an organizational model centered on integrated operations with coordinated specialist functions.' : '研究以综合运营管理为核心、各专业职能协同的组织管理模式。' }}
        </p>
        </div>

        <div class="management-diagram">
          <div class="management-core">
            <small>OPERATIONS CENTER</small>
            <h3>
          {{ language === 'en' ? 'Integrated Project Operations Platform' : '项目综合运营管理平台' }}
        </h3>
            <p>
          {{ language === 'en' ? 'Business Coordination · Resource Alignment · Service Management' : '经营统筹 · 资源协调 · 服务管理' }}
        </p>
          </div>

          <div class="management-grid">
            <article
              v-for="item in managementItems"
              :key="item.title"
              class="management-item"
            >
              <h3>{{ language === 'en' ? item.enTitle : item.title }}</h3>
              <p>{{ language === 'en' ? item.enDescription : item.description }}</p>
            </article>
          </div>
        </div>

        <p class="diagram-note">
          {{ language === 'en' ? 'The functional structure shown is conceptual and does not represent an organization already established.' : '上述为拟研究的运营职能架构，并非已经设立的组织机构。' }}
        </p>
      </section>

      <!-- 第五部分：商业模式 -->
      <section id="revenue" class="content-section">
        <div class="section-title">
          <span>05 / BUSINESS MODEL</span>
          <h2>
          {{ language === 'en' ? 'Diversified Revenue & Business Models' : '多元收入与商业模式' }}
        </h2>
          <p>
          {{ language === 'en' ? 'Explore revenue synergies across different businesses subject to lawful and compliant operations.' : '在依法合规经营的基础上，探索不同业务之间的收益协同。' }}
        </p>
        </div>

        <div class="revenue-intro">
          <div>
            <small>REVENUE MODEL</small>
            <h3>
          {{ language === 'en' ? 'Develop a Diversified Revenue Structure' : '形成多元化经营收入结构' }}
        </h3>
            <p>
          {{ language === 'en' ? 'Explore sustainable revenue sources including space leasing, sports services, events, commercial partnerships and integrated services, while enhancing long-term value through cost control and asset maintenance.' : '从空间租赁、体育服务、活动运营、 商业合作和综合服务等方向研究可持续的收入来源， 并通过经营成本控制和资产维护提升项目长期价值。' }}
        </p>
          </div>
        </div>

        <div class="revenue-list">
          <article
            v-for="item in revenueItems"
            :key="item.number"
            class="revenue-card"
          >
            <span class="card-number">{{ item.number }}</span>
            <div class="revenue-text">
              <h3>{{ language === 'en' ? item.enTitle : item.title }}</h3>
              <p>{{ language === 'en' ? item.enDescription : item.description }}</p>
            </div>
            <span class="revenue-tag">{{ language === 'en' ? item.enTag : item.tag }}</span>
          </article>
        </div>

        <div class="technical-note">
          {{ language === 'en' ? 'Note: These are potential revenue channels under study, not actual revenue figures or income guarantees. Revenue, costs, investment payback periods and cash flows require further market research, leasing assessment and operating forecasts.' : '说明：上述为拟研究的收入渠道，并非实际收入数据或收益承诺。 各项经营收入、成本、投资回收期和现金流， 后续需结合市场调查、招商条件及运营测算确定。' }}
        </div>
      </section>

      <!-- 第六部分：运营实施 -->
      <section id="implementation" class="content-section">
        <div class="section-title">
          <span>06 / OPERATIONS IMPLEMENTATION</span>
          <h2>
          {{ language === 'en' ? 'Tenant Recruitment & Operations' : '招商培育与运营实施' }}
        </h2>
          <p>
          {{ language === 'en' ? 'Bring operational requirements forward and align industry recruitment, spatial planning and construction delivery.' : '以运营前置为原则，推动产业招商、空间规划与建设交付相互衔接。' }}
        </p>
        </div>

        <div class="timeline">
          <article
            v-for="item in implementationItems"
            :key="item.number"
            class="timeline-item"
          >
            <div class="timeline-number">{{ item.number }}</div>
            <div class="timeline-content">
              <h3>{{ language === 'en' ? item.enTitle : item.title }}</h3>
              <p>{{ language === 'en' ? item.enDescription : item.description }}</p>
            </div>
          </article>
        </div>

        <div class="closing-card">
          <small>LONG-TERM OPERATION STRATEGY</small>
          <h3>
          {{ language === 'en' ? 'From Project Construction to Sustained Industry Operations' : '从项目建设走向产业持续运营' }}
        </h3>
          <p>
          {{ language === 'en' ? 'Through planning-operation coordination, professional management, industry resource development and innovative business mechanisms, explore an integrated operations model balancing public services, industry development and long-term business value.' : '通过规划与运营协同、专业化管理、产业资源导入和经营机制创新， 探索形成兼顾城市公共服务、产业发展与长期经营价值的综合运营体系。' }}
        </p>
        </div>
      </section>
    </main>

    <footer class="page-footer">
          {{ language === 'en' ? 'Ezhou Huahu Airport Economic Zone · Integrated Culture, Sports, Tourism, Commerce & Living Project' : '鄂州市花湖机场临空区文体旅商住融合服务产业项目' }}
        </footer>
  </div>
</template>

<style scoped>
.operations-page {
  min-height: 100vh;
  background: #f5f7fa;
  color: #243648;
}

.container {
  width: min(1200px, 88%);
  margin: 0 auto;
}

.page-hero {
  padding: 95px 0 105px;
  color: white;
  background: linear-gradient(115deg, #09283f, #155675);
}

.eyebrow {
  color: #edbd76;
  font-size: 12px;
  letter-spacing: 3px;
}

.page-hero h1 {
  margin: 22px 0;
  font-size: clamp(32px, 4vw, 52px);
}

.hero-description {
  max-width: 850px;
  font-size: 17px;
  line-height: 2;
  color: #d5e4ed;
}

.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.hero-tags span {
  padding: 8px 15px;
  border: 1px solid #65889e;
  border-radius: 24px;
  font-size: 13px;
}

.section-navigation {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-top: 35px;
}

.section-nav-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px;
  background: white;
  border: 1px solid #e4eaf0;
  border-top: 4px solid #d8a35d;
  border-radius: 10px;
  text-decoration: none;
  color: #123d5d;
  transition: 0.25s;
}

.section-nav-card:hover {
  border-top-color: #145779;
  box-shadow: 0 10px 28px #123d5d15;
}

.section-nav-card > span {
  font-size: 27px;
  color: #c6d5e1;
  font-weight: 800;
}

.section-nav-card strong {
  font-size: 17px;
  line-height: 1.5;
}

.section-nav-card small {
  color: #bb8c50;
  font-size: 11px;
}

.content-section {
  padding: 85px 0 10px;
  scroll-margin-top: 24px;
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
  margin: 12px 0;
  color: #123d5d;
  font-size: 30px;
}

.section-title p {
  color: #748698;
  line-height: 1.8;
}

.concept-banner,
.activity-banner,
.revenue-intro,
.closing-card {
  padding: 42px;
  border-radius: 14px;
  color: white;
  background: linear-gradient(120deg, #123d5d, #1a6482);
}

.concept-banner h3,
.activity-banner h3,
.revenue-intro h3,
.closing-card h3 {
  margin: 18px 0;
  font-size: 27px;
  line-height: 1.5;
}

.concept-banner p,
.activity-banner p,
.revenue-intro p,
.closing-card p {
  color: #d5e5ed;
  line-height: 2;
  max-width: 850px;
}

.concept-banner small,
.activity-banner small,
.revenue-intro small,
.closing-card small {
  color: #eabb79;
  letter-spacing: 2px;
}

.ecosystem-diagram,
.customer-flow,
.management-diagram {
  margin-top: 24px;
  padding: 35px;
  border-radius: 14px;
  background: white;
}

.ecosystem-center,
.management-core {
  max-width: 500px;
  margin: 0 auto 30px;
  padding: 28px;
  border-radius: 12px;
  background: #145779;
  text-align: center;
  color: white;
}

.ecosystem-center small,
.management-core small {
  display: block;
  color: #eabb79;
  margin-bottom: 12px;
}

.ecosystem-center strong {
  display: block;
  font-size: 23px;
  margin-bottom: 12px;
}

.ecosystem-center span,
.management-core p {
  color: #d5e5ed;
  font-size: 13px;
}

.ecosystem-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 12px;
}

.ecosystem-item,
.management-item {
  padding: 22px 15px;
  background: #f1f5f8;
  border-radius: 10px;
  text-align: center;
}

.ecosystem-item > span {
  font-size: 29px;
}

.ecosystem-item h3,
.management-item h3 {
  margin: 15px 0 10px;
  font-size: 16px;
  color: #123d5d;
}

.ecosystem-item p,
.management-item p {
  font-size: 12px;
  line-height: 1.85;
  color: #718293;
}

.diagram-note {
  margin-top: 20px;
  font-size: 12px;
  color: #8695a4;
  line-height: 1.8;
  text-align: center;
}

.card-grid {
  display: grid;
  gap: 20px;
  margin-top: 24px;
}

.card-grid.two {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.card-grid.four {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.content-card {
  padding: 29px;
  background: white;
  border-radius: 12px;
}

.card-number {
  color: #c6d8e5;
  font-size: 29px;
  font-weight: 800;
}

.content-card h3 {
  margin: 18px 0 12px;
  font-size: 18px;
  color: #123d5d;
}

.content-card p {
  color: #687b8d;
  font-size: 14px;
  line-height: 1.9;
}

.customer-flow h3 {
  margin-bottom: 25px;
  color: #123d5d;
  font-size: 22px;
}

.flow-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.flow-node {
  flex: 1;
  padding: 20px 10px;
  border-radius: 9px;
  background: #e9f0f5;
  color: #123d5d;
  text-align: center;
  font-weight: 700;
}

.flow-node.active {
  background: #145779;
  color: white;
}

.flow-line > span {
  color: #d6a25b;
  font-size: 23px;
}

.management-core h3 {
  font-size: 22px;
  margin-bottom: 12px;
}

.management-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.revenue-list {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.revenue-card {
  display: flex;
  align-items: center;
  gap: 25px;
  background: white;
  border-radius: 12px;
  padding: 23px 28px;
}

.revenue-text {
  flex: 1;
}

.revenue-text h3 {
  color: #123d5d;
  margin-bottom: 8px;
}

.revenue-text p {
  color: #687b8d;
  font-size: 13px;
  line-height: 1.8;
}

.revenue-tag {
  padding: 8px 12px;
  background: #edf3f7;
  border-radius: 18px;
  color: #145779;
  font-size: 12px;
}

.technical-note {
  margin-top: 18px;
  font-size: 12px;
  line-height: 1.9;
  color: #8393a1;
}

.timeline {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 14px;
}

.timeline-item {
  padding: 26px 19px;
  background: white;
  border-top: 4px solid #d8a35d;
  border-radius: 10px;
}

.timeline-number {
  font-size: 29px;
  color: #c6d8e5;
  font-weight: 800;
}

.timeline-content h3 {
  margin: 18px 0 12px;
  color: #123d5d;
  font-size: 17px;
}

.timeline-content p {
  color: #687b8d;
  font-size: 13px;
  line-height: 1.9;
}

.closing-card {
  margin: 32px 0 85px;
  background: linear-gradient(120deg, #09283f, #145675);
}

.page-footer {
  padding: 35px 15px;
  background: #09283f;
  color: #d2e0e9;
  text-align: center;
  font-size: 13px;
}

@media (max-width: 1000px) {
  .ecosystem-grid,
  .timeline {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .card-grid.four {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 800px) {
  .section-navigation,
  .management-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .flow-line {
    flex-wrap: wrap;
  }
}

@media (max-width: 600px) {
  .container {
    width: 90%;
  }

  .page-hero {
    padding: 65px 0;
  }

  .section-navigation,
  .ecosystem-grid,
  .management-grid,
  .timeline,
  .card-grid.two,
  .card-grid.four {
    grid-template-columns: 1fr;
  }

  .content-section {
    padding-top: 55px;
  }

  .section-nav-card {
    padding: 17px 13px;
  }

  .section-nav-card strong {
    font-size: 13px;
  }

  .ecosystem-diagram,
  .customer-flow,
  .management-diagram,
  .concept-banner,
  .activity-banner,
  .revenue-intro,
  .closing-card {
    padding: 26px 20px;
  }

  .flow-line {
    flex-direction: column;
  }

  .flow-node {
    width: 100%;
  }

  .flow-line > span {
    transform: rotate(90deg);
  }

  .revenue-card {
    flex-wrap: wrap;
    gap: 10px;
  }
}
</style>
