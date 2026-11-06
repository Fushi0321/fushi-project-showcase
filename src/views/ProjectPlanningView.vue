
<script setup lang="ts">
import SectionSideNav from '../components/SectionSideNav.vue'
import { useLanguage } from '../i18n'

const { language } = useLanguage()


const sections = [
  { id: 'masterplan', title: '总体规划结构' },
  { id: 'functions', title: '功能分区与产业空间' },
  { id: 'vertical', title: '立体复合空间体系' },
  { id: 'sports', title: '体育场馆与公共空间' },
  { id: 'traffic', title: '道路交通与停车体系' },
  { id: 'phases', title: '分期组团与实施策略' },
]

const planningPrinciples = [
  {
    number: '01',
    title: '整体统筹',
    description: '统一考虑城市界面、建筑布局、交通系统、公共空间与产业功能。',
  },
  {
    number: '02',
    title: '功能复合',
    description: '研究居住、文体、商业及公共服务在不同空间中的合理配置。',
  },
  {
    number: '03',
    title: '运营前置',
    description: '在规划设计阶段同步研究各类空间的实际使用与长期运营需求。',
  },
  {
    number: '04',
    title: '分期实施',
    description: '结合规划条件、建设资金、市场需求和运营能力确定开发时序。',
  },
]

const functions = [
  { icon: '🏠', title: '品质居住', tag: '基础功能', description: '住宅产品、社区配套、智慧生活及品质居住服务。' },
  { icon: '🏆', title: '体育运动', tag: '核心特色', description: '全民健身、运动训练、体育培训及赛事配套。' },
  { icon: '🎨', title: '文化艺术', tag: '文化内涵', description: '文化展示、公共艺术、研学活动及文化体验。' },
  { icon: '🛍️', title: '商业服务', tag: '消费配套', description: '餐饮休闲、体育商业、生活服务及特色零售。' },
  { icon: '🌿', title: '公共空间', tag: '城市共享', description: '公共景观、运动空间、慢行系统及社区活动场所。' },
  { icon: '💡', title: '智慧系统', tag: '科技支撑', description: '智慧物业、停车管理、能源管理及数字化运营。' },
]

const verticalSpaces = [
  { level: '屋顶空间', title: '生态休闲与公共活动', description: '研究屋顶绿化、休闲活动、科普体验及适宜的小型运动空间。' },
  { level: '居住楼层', title: '品质居住与生活服务', description: '以依法批准的居住功能为基础，研究智慧住宅及社区生活服务。' },
  { level: '二层空间', title: '体育培训与文化商业', description: '研究运动训练、培训、文化活动及配套商业的复合使用。' },
  { level: '首层空间', title: '城市界面与公共服务', description: '重点研究开放入口、体育活动、商业服务及公共交流空间。' },
  { level: '地下空间', title: '停车设备与适宜的运动功能', description: '优先满足停车、人防、消防、设备和后勤要求，再研究其他合规功能。' },
]

const sportsSpaces = [
  { number: '01', title: '综合运动空间', description: '研究篮球、羽毛球、排球和乒乓球等运动的空间组合。' },
  { number: '02', title: '游泳与健身设施', description: '结合场馆设备、结构跨度、层高、机电及运营成本开展研究。' },
  { number: '03', title: '体育培训空间', description: '考虑青少年体育培训、日常训练和相关服务设施。' },
  { number: '04', title: '公共活动空间', description: '研究群众活动、文化展示、小型赛事与社区共享空间。' },
]

const trafficSystems = [
  { title: '机动车交通', description: '研究城市道路接入、出入口组织及机动车内部交通。' },
  { title: '慢行步行系统', description: '形成联系居住、商业、文化、体育与公共空间的步行网络。' },
  { title: '分类人流组织', description: '统筹居民、消费者、培训人员、赛事观众与后勤人员动线。' },
  { title: '停车与后勤', description: '结合日常使用和活动高峰需求，研究停车规模与分区管理。' },
]

const phasePrinciples = [
  { number: '01', title: '总体规划', description: '明确功能结构、基础设施与空间关系。' },
  { number: '02', title: '首期启动', description: '综合建设条件、市场需求及产业展示效果确定启动内容。' },
  { number: '03', title: '分期建设', description: '争取各期具备相对独立的施工、交通、消防和配套条件。' },
  { number: '04', title: '分期运营', description: '成熟一期、验收一期、运营一期，逐步建立整体服务体系。' },
]

const translations: Record<string, string> = {
  "专题内容导航": "Section Navigation",
  "总体规划结构": "Master Planning Structure",
  "功能分区与产业空间": "Functional Zoning & Industry Spaces",
  "立体复合空间体系": "Integrated Multi-Level Spaces",
  "体育场馆与公共空间": "Sports Venues & Public Spaces",
  "道路交通与停车体系": "Road Access, Mobility & Parking",
  "分期组团与实施策略": "Phased Development & Implementation Strategy",
  "整体统筹": "Integrated Coordination",
  "统一考虑城市界面、建筑布局、交通系统、公共空间与产业功能。": "Coordinate urban interfaces, building layouts, transport networks, public spaces and industry functions as a whole.",
  "功能复合": "Mixed-Use Integration",
  "研究居住、文体、商业及公共服务在不同空间中的合理配置。": "Study the appropriate allocation of residential, cultural, sports, commercial and public-service uses across different spaces.",
  "运营前置": "Operations-Led Planning",
  "在规划设计阶段同步研究各类空间的实际使用与长期运营需求。": "Address the practical use and long-term operational requirements of each space during planning and design.",
  "分期实施": "Phased Implementation",
  "结合规划条件、建设资金、市场需求和运营能力确定开发时序。": "Determine the development sequence based on planning conditions, funding, market demand and operating capacity.",
  "品质居住": "Quality Living",
  "基础功能": "Foundational Use",
  "住宅产品、社区配套、智慧生活及品质居住服务。": "Residential products, community amenities, smart living and quality housing services.",
  "体育运动": "Sports & Fitness",
  "核心特色": "Core Feature",
  "全民健身、运动训练、体育培训及赛事配套。": "Public fitness, sports training, coaching programs and event support facilities.",
  "文化艺术": "Culture & Arts",
  "文化内涵": "Cultural Identity",
  "文化展示、公共艺术、研学活动及文化体验。": "Cultural exhibitions, public art, educational activities and cultural experiences.",
  "商业服务": "Commercial Services",
  "消费配套": "Consumer Amenities",
  "餐饮休闲、体育商业、生活服务及特色零售。": "Dining and leisure, sports retail, lifestyle services and specialty retail.",
  "公共空间": "Public Spaces",
  "城市共享": "Shared Urban Space",
  "公共景观、运动空间、慢行系统及社区活动场所。": "Public landscapes, fitness areas, walking and cycling networks, and community activity spaces.",
  "智慧系统": "Smart Systems",
  "科技支撑": "Technology Enabler",
  "智慧物业、停车管理、能源管理及数字化运营。": "Smart property management, parking systems, energy management and digital operations.",
  "屋顶空间": "Rooftop",
  "生态休闲与公共活动": "Green Leisure & Public Activities",
  "研究屋顶绿化、休闲活动、科普体验及适宜的小型运动空间。": "Explore rooftop greenery, leisure activities, science education and suitable small-scale sports areas.",
  "居住楼层": "Residential Floors",
  "品质居住与生活服务": "Quality Living & Lifestyle Services",
  "以依法批准的居住功能为基础，研究智慧住宅及社区生活服务。": "Based on lawfully approved residential uses, explore smart housing and community lifestyle services.",
  "二层空间": "Second Floor",
  "体育培训与文化商业": "Sports Training, Culture & Commerce",
  "研究运动训练、培训、文化活动及配套商业的复合使用。": "Explore mixed uses combining sports coaching, training, cultural activities and supporting commerce.",
  "首层空间": "Ground Floor",
  "城市界面与公共服务": "Street Interface & Public Services",
  "重点研究开放入口、体育活动、商业服务及公共交流空间。": "Focus on accessible entrances, sports activities, commercial services and public gathering spaces.",
  "地下空间": "Basement Levels",
  "停车设备与适宜的运动功能": "Parking, Plant Rooms & Suitable Sports Uses",
  "优先满足停车、人防、消防、设备和后勤要求，再研究其他合规功能。": "Prioritize parking, civil-defense, fire-safety, plant-room and logistics requirements before exploring other compliant uses.",
  "综合运动空间": "Multi-Sport Spaces",
  "研究篮球、羽毛球、排球和乒乓球等运动的空间组合。": "Explore flexible spaces for basketball, badminton, volleyball, table tennis and other sports.",
  "游泳与健身设施": "Swimming & Fitness Facilities",
  "结合场馆设备、结构跨度、层高、机电及运营成本开展研究。": "Assess venue equipment, structural spans, floor heights, building services and operating costs.",
  "体育培训空间": "Sports Training Spaces",
  "考虑青少年体育培训、日常训练和相关服务设施。": "Allow for youth sports programs, routine training and supporting services.",
  "公共活动空间": "Public Activity Spaces",
  "研究群众活动、文化展示、小型赛事与社区共享空间。": "Explore community events, cultural displays, small competitions and shared neighborhood spaces.",
  "机动车交通": "Vehicular Access",
  "研究城市道路接入、出入口组织及机动车内部交通。": "Study connections to urban roads, access-point layouts and on-site vehicle circulation.",
  "慢行步行系统": "Walking & Cycling Network",
  "形成联系居住、商业、文化、体育与公共空间的步行网络。": "Create a pedestrian network linking residential, commercial, cultural, sports and public areas.",
  "分类人流组织": "User-Group Circulation",
  "统筹居民、消费者、培训人员、赛事观众与后勤人员动线。": "Coordinate circulation routes for residents, customers, trainees, spectators and service staff.",
  "停车与后勤": "Parking & Logistics",
  "结合日常使用和活动高峰需求，研究停车规模与分区管理。": "Study parking capacity and zoned management for everyday demand and event peaks.",
  "总体规划": "Master Planning",
  "明确功能结构、基础设施与空间关系。": "Define functional organization, infrastructure and spatial relationships.",
  "首期启动": "Initial Launch",
  "综合建设条件、市场需求及产业展示效果确定启动内容。": "Select initial works based on site readiness, market demand and the opportunity to demonstrate industry activities.",
  "分期建设": "Phased Construction",
  "争取各期具备相对独立的施工、交通、消防和配套条件。": "Aim to provide each phase with sufficiently independent construction access, transport, fire-safety and supporting facilities.",
  "分期运营": "Phased Operations",
  "成熟一期、验收一期、运营一期，逐步建立整体服务体系。": "Complete, inspect and operate each ready phase, gradually building the overall service system.",
  "总体规划与空间体系": "Master Planning & Spatial Framework",
  "以整体统筹、功能复合、运营前置和分期实施为原则，研究居住、体育、文化、商业与公共服务相融合的空间组织方式。": "Guided by integrated planning, mixed-use functions, operations-led design and phased delivery, the project studies spatial arrangements combining living, sports, culture, commerce and public services.",
  "整体规划": "Integrated Planning",
  "产业空间": "Industry Spaces",
  "立体复合": "Multi-Level Integration",
  "查看专题内容 ↗": "Explore Section ↗",
  "以项目整体策划为基础，研究统一协调的城市空间与产业组织体系。": "Using the overall project concept as a basis, explore a coordinated framework for urban spaces and industry functions.",
  "统一规划 · 功能协同 · 分期实施": "Unified Planning · Functional Synergy · Phased Delivery",
  "以花湖机场临空区项目为研究对象，结合实际土地边界、规划指标、周边道路和城市公共服务条件，统筹研究建筑空间、产业功能、景观体系、道路交通与建设时序。": "Taking the Huahu Airport Economic Zone project as the study area, consider verified land boundaries, planning parameters, surrounding roads and public-service conditions to coordinate building spaces, industry uses, landscapes, circulation and construction sequencing.",
  "具体建筑布局、开发强度、功能比例和建设规模，应以现行规划条件及依法批准的规划设计方案为准。": "Actual building layouts, development intensity, functional proportions and construction scale remain subject to current planning conditions and legally approved designs.",
  "文体商旅公共服务核心": "Culture, Sports, Commerce & Tourism Hub",
  "城市公共空间与交通": "Urban Public Spaces & Mobility",
  "功能关系概念示意 · 非实际总平面": "Conceptual functional diagram · Not an actual site plan",
  "以居住功能为基础，研究多类型服务空间的协同组织。": "Using residential uses as a foundation, explore coordination among multiple types of service spaces.",
  "注：以上为产业与空间功能策划方向。各类功能能否设置、对应土地用途及计容方式，须依法进行规划和技术论证。": "Note: These are preliminary industry and spatial programming concepts. Permitted uses, corresponding land-use classifications and floor-area calculations must be established through legally required planning and technical review.",
  "研究地下、地面、建筑楼层及屋顶空间的合理配置。": "Explore appropriate arrangements for underground, ground-level, upper-floor and rooftop spaces.",
  "建筑空间分层示意 · 不代表实际建筑层数": "Conceptual building-level diagram · Not an indication of the actual floor count",
  "以全民健身、体育培训和城市公共活动为核心研究方向。": "Focus the study on public fitness, sports training and urban community activities.",
  "让体育运动融入城市生活": "Bringing Sports into Urban Life",
  "根据运动项目的功能要求，综合研究场馆跨度、层高、出入口、观众组织、设备配置、日常维护和运营管理。通过体育设施与公共活动空间的合理结合，探索日常健身、培训和活动运营之间的协同关系。": "Based on the functional requirements of different sports, assess venue spans, floor heights, entrances, spectator flows, equipment, maintenance and operations. Explore synergies among everyday fitness, training and events through well-planned sports and public activity spaces.",
  "统筹居民、商业、体育活动和后勤交通需求。": "Coordinate the mobility needs of residents, businesses, sports activities and logistics.",
  "外部城市道路": "Surrounding Urban Roads",
  "项目入口与交通组织": "Site Entrances & Circulation",
  "居住交通": "Residential Traffic",
  "公共活动交通": "Public Event Traffic",
  "商业与后勤交通": "Commercial & Service Traffic",
  "交通组织逻辑示意 · 非实际道路设计": "Conceptual circulation diagram · Not an actual road design",
  "统一规划、分期建设、成熟一期、运营一期。": "Plan as one, build in phases, and operate each phase when ready.",
  "让空间建设与产业运营同步推进": "Aligning Spatial Development with Industry Operations",
  "通过总体规划、专项论证、分期实施与运营前置，研究项目建设和运营的协同机制，逐步形成兼顾建筑品质、产业特色与长期经营的实施路径。": "Through master planning, specialized feasibility studies, phased delivery and early operational input, explore a coordinated development and operating model that balances building quality, industry identity and long-term viability.",
  "鄂州市花湖机场临空区文体旅商住融合服务产业项目": "Ezhou Huahu Airport Economic Zone · Integrated Culture, Sports, Tourism, Commerce & Living Project",
}

function tr(text: string): string {
  return language.value === 'en' ? (translations[text] ?? text) : text
}

</script>

<template>
  <div class="planning-page">
    <SectionSideNav :sections="sections.map(item => ({ id: item.id, title: tr(item.title) }))" />
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">CHAPTER 03 / MASTER PLANNING</p>
        <h1>
{{ tr('总体规划与空间体系') }}
</h1>
        <p class="hero-description">
          {{ tr('以整体统筹、功能复合、运营前置和分期实施为原则，研究居住、体育、文化、商业与公共服务相融合的空间组织方式。') }}
        </p>
        <div class="hero-tags">
          <span>
{{ tr('整体规划') }}
</span>
          <span>
{{ tr('产业空间') }}
</span>
          <span>
{{ tr('立体复合') }}
</span>
          <span>
{{ tr('分期实施') }}
</span>
        </div>
      </div>
    </section>

    <main class="container">
      <nav class="section-navigation" :aria-label="tr('专题内容导航')">
        <a
          v-for="(item, index) in sections"
          :key="item.id"
          :href="`#${item.id}`"
          class="section-nav-card"
        >
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
          <strong>{{ tr(item.title) }}</strong>
          <small>
{{ tr('查看专题内容 ↗') }}
</small>
        </a>
      </nav>

      <!-- 第一部分：总体规划结构 -->
      <section id="masterplan" class="content-section">
        <div class="section-title">
          <span>01 / MASTER PLANNING STRUCTURE</span>
          <h2>
{{ tr('总体规划结构') }}
</h2>
          <p>
{{ tr('以项目整体策划为基础，研究统一协调的城市空间与产业组织体系。') }}
</p>
        </div>

        <div class="planning-overview">
          <div class="overview-main">
            <span class="small-label">OVERALL PLANNING CONCEPT</span>
            <h3>
{{ tr('统一规划 · 功能协同 · 分期实施') }}
</h3>
            <p>
              {{ tr('以花湖机场临空区项目为研究对象，结合实际土地边界、规划指标、周边道路和城市公共服务条件，统筹研究建筑空间、产业功能、景观体系、道路交通与建设时序。') }}
            </p>
            <p>
              {{ tr('具体建筑布局、开发强度、功能比例和建设规模，应以现行规划条件及依法批准的规划设计方案为准。') }}
            </p>
          </div>

          <div class="overview-diagram">
            <div class="diagram-box">
{{ tr('品质居住与生活服务') }}
</div>
            <div class="diagram-connector">↕</div>
            <div class="diagram-box featured">
{{ tr('文体商旅公共服务核心') }}
</div>
            <div class="diagram-connector">↕</div>
            <div class="diagram-box">
{{ tr('城市公共空间与交通') }}
</div>
            <small>
{{ tr('功能关系概念示意 · 非实际总平面') }}
</small>
          </div>
        </div>

        <div class="four-grid">
          <article
            v-for="item in planningPrinciples"
            :key="item.number"
            class="info-card"
          >
            <span class="card-number">{{ item.number }}</span>
            <h3>{{ tr(item.title) }}</h3>
            <p>{{ tr(item.description) }}</p>
          </article>
        </div>
      </section>

      <!-- 第二部分：功能分区 -->
      <section id="functions" class="content-section">
        <div class="section-title">
          <span>02 / FUNCTIONAL ZONING</span>
          <h2>
{{ tr('功能分区与产业空间') }}
</h2>
          <p>
{{ tr('以居住功能为基础，研究多类型服务空间的协同组织。') }}
</p>
        </div>

        <div class="function-grid">
          <article
            v-for="item in functions"
            :key="item.title"
            class="function-card"
          >
            <div class="function-top">
              <span class="function-icon">{{ item.icon }}</span>
              <span class="function-tag">{{ tr(item.tag) }}</span>
            </div>
            <h3>{{ tr(item.title) }}</h3>
            <p>{{ tr(item.description) }}</p>
          </article>
        </div>

        <p class="section-note">
          {{ tr('注：以上为产业与空间功能策划方向。各类功能能否设置、对应土地用途及计容方式，须依法进行规划和技术论证。') }}
        </p>
      </section>

      <!-- 第三部分：立体空间 -->
      <section id="vertical" class="content-section">
        <div class="section-title">
          <span>03 / VERTICAL SPACE SYSTEM</span>
          <h2>
{{ tr('立体复合空间体系') }}
</h2>
          <p>
{{ tr('研究地下、地面、建筑楼层及屋顶空间的合理配置。') }}
</p>
        </div>

        <div class="vertical-layout">
          <div class="vertical-diagram">
            <div
              v-for="(item, index) in verticalSpaces"
              :key="item.level"
              class="floor-row"
              :class="{ 'floor-special': index === 3 }"
            >
              <span class="floor-level">{{ tr(item.level) }}</span>
              <strong>{{ tr(item.title) }}</strong>
            </div>
            <small>
{{ tr('建筑空间分层示意 · 不代表实际建筑层数') }}
</small>
          </div>

          <div class="vertical-description">
            <article
              v-for="item in verticalSpaces"
              :key="item.level"
              class="floor-detail"
            >
              <h3>{{ tr(item.level) }}</h3>
              <p>{{ tr(item.description) }}</p>
            </article>
          </div>
        </div>
      </section>

      <!-- 第四部分：体育及公共空间 -->
      <section id="sports" class="content-section">
        <div class="section-title">
          <span>04 / SPORTS AND PUBLIC SPACE</span>
          <h2>
{{ tr('体育场馆与公共空间') }}
</h2>
          <p>
{{ tr('以全民健身、体育培训和城市公共活动为核心研究方向。') }}
</p>
        </div>

        <div class="sports-intro">
          <h3>
{{ tr('让体育运动融入城市生活') }}
</h3>
          <p>
            {{ tr('根据运动项目的功能要求，综合研究场馆跨度、层高、出入口、观众组织、设备配置、日常维护和运营管理。通过体育设施与公共活动空间的合理结合，探索日常健身、培训和活动运营之间的协同关系。') }}
          </p>
        </div>

        <div class="two-grid">
          <article
            v-for="item in sportsSpaces"
            :key="item.number"
            class="info-card"
          >
            <span class="card-number">{{ item.number }}</span>
            <h3>{{ tr(item.title) }}</h3>
            <p>{{ tr(item.description) }}</p>
          </article>
        </div>
      </section>

      <!-- 第五部分：交通停车 -->
      <section id="traffic" class="content-section">
        <div class="section-title">
          <span>05 / TRAFFIC AND PARKING</span>
          <h2>
{{ tr('道路交通与停车体系') }}
</h2>
          <p>
{{ tr('统筹居民、商业、体育活动和后勤交通需求。') }}
</p>
        </div>

        <div class="traffic-flow">
          <div class="traffic-node">
{{ tr('外部城市道路') }}
</div>
          <div class="traffic-arrow">↓</div>
          <div class="traffic-node featured">
{{ tr('项目入口与交通组织') }}
</div>
          <div class="traffic-arrow">↓</div>
          <div class="traffic-branches">
            <div>
{{ tr('居住交通') }}
</div>
            <div>
{{ tr('公共活动交通') }}
</div>
            <div>
{{ tr('商业与后勤交通') }}
</div>
          </div>
          <small>
{{ tr('交通组织逻辑示意 · 非实际道路设计') }}
</small>
        </div>

        <div class="two-grid">
          <article
            v-for="item in trafficSystems"
            :key="item.title"
            class="info-card"
          >
            <h3>{{ tr(item.title) }}</h3>
            <p>{{ tr(item.description) }}</p>
          </article>
        </div>
      </section>

      <!-- 第六部分：分期实施 -->
      <section id="phases" class="content-section">
        <div class="section-title">
          <span>06 / PHASED DEVELOPMENT</span>
          <h2>
{{ tr('分期组团与实施策略') }}
</h2>
          <p>
{{ tr('统一规划、分期建设、成熟一期、运营一期。') }}
</p>
        </div>

        <div class="phase-grid">
          <article
            v-for="item in phasePrinciples"
            :key="item.number"
            class="phase-card"
          >
            <span>{{ item.number }}</span>
            <h3>{{ tr(item.title) }}</h3>
            <p>{{ tr(item.description) }}</p>
          </article>
        </div>

        <div class="closing-card">
          <span>IMPLEMENTATION PRINCIPLE</span>
          <h3>
{{ tr('让空间建设与产业运营同步推进') }}
</h3>
          <p>
            {{ tr('通过总体规划、专项论证、分期实施与运营前置，研究项目建设和运营的协同机制，逐步形成兼顾建筑品质、产业特色与长期经营的实施路径。') }}
          </p>
        </div>
      </section>
    </main>

    <footer class="page-footer">
      {{ tr('鄂州市花湖机场临空区文体旅商住融合服务产业项目') }}
    </footer>
  </div>
</template>

<style scoped>
.planning-page {
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

.eyebrow,
.small-label {
  color: #edbd76;
  font-size: 12px;
  letter-spacing: 2px;
}

.page-hero h1 {
  margin: 22px 0;
  font-size: clamp(32px, 4vw, 52px);
}

.hero-description {
  max-width: 850px;
  line-height: 2;
  color: #d5e4ed;
  font-size: 17px;
}

.hero-tags {
  margin-top: 28px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.hero-tags span {
  padding: 8px 15px;
  border: 1px solid #65889e;
  border-radius: 22px;
  font-size: 13px;
}

.section-navigation {
  margin-top: 35px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
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
  font-size: 30px;
  color: #123d5d;
}

.section-title p {
  color: #748698;
  line-height: 1.8;
}

.planning-overview,
.vertical-layout {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 22px;
}

.overview-main,
.overview-diagram,
.vertical-diagram,
.vertical-description,
.sports-intro,
.traffic-flow {
  background: white;
  padding: 34px;
  border-radius: 12px;
}

.overview-main h3,
.sports-intro h3 {
  margin: 20px 0;
  font-size: 25px;
  color: #123d5d;
}

.overview-main p,
.sports-intro p {
  line-height: 2;
  color: #65798c;
  margin-top: 16px;
}

.overview-diagram {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.diagram-box {
  width: 100%;
  padding: 17px;
  background: #e8f0f5;
  color: #123d5d;
  text-align: center;
  border-radius: 8px;
  font-weight: 700;
}

.diagram-box.featured {
  background: #145779;
  color: white;
}

.diagram-connector,
.traffic-arrow {
  color: #d7a15a;
  font-size: 23px;
  padding: 7px;
}

.overview-diagram small,
.vertical-diagram small,
.traffic-flow small {
  margin-top: 20px;
  font-size: 11px;
  color: #8b9aa8;
  text-align: center;
}

.four-grid,
.two-grid,
.function-grid,
.phase-grid {
  display: grid;
  gap: 20px;
  margin-top: 24px;
}

.four-grid,
.phase-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.two-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.function-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.info-card,
.function-card,
.phase-card {
  background: white;
  border-radius: 12px;
  padding: 29px;
}

.card-number {
  font-size: 30px;
  font-weight: 800;
  color: #c6d8e5;
}

.info-card h3,
.function-card h3,
.phase-card h3 {
  margin: 18px 0 12px;
  color: #123d5d;
  font-size: 19px;
  line-height: 1.5;
}

.info-card p,
.function-card p,
.phase-card p {
  color: #687b8d;
  font-size: 14px;
  line-height: 1.9;
}

.function-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.function-icon {
  font-size: 32px;
}

.function-tag {
  color: #bb8c50;
  font-size: 12px;
}

.section-note {
  margin-top: 18px;
  font-size: 13px;
  color: #8796a4;
  line-height: 1.9;
}

.floor-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
  padding: 17px;
  margin-bottom: 8px;
  border-radius: 7px;
  background: #e7eff5;
}

.floor-row.floor-special {
  background: #145779;
  color: white;
}

.floor-level {
  font-size: 12px;
  color: #bc8b4b;
}

.floor-row strong {
  font-size: 15px;
}

.floor-detail {
  border-bottom: 1px solid #e8edf1;
  padding: 0 0 15px;
  margin-bottom: 18px;
}

.floor-detail:last-child {
  border-bottom: 0;
}

.floor-detail h3 {
  color: #123d5d;
  font-size: 16px;
  margin-bottom: 8px;
}

.floor-detail p {
  font-size: 13px;
  color: #718293;
  line-height: 1.85;
}

.sports-intro {
  background: linear-gradient(120deg, #eaf1f6, #ffffff);
  margin-bottom: 24px;
}

.traffic-flow {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.traffic-node {
  width: min(100%, 420px);
  background: #e8f0f5;
  color: #123d5d;
  border-radius: 8px;
  text-align: center;
  padding: 17px;
  font-weight: 700;
}

.traffic-node.featured {
  background: #145779;
  color: white;
}

.traffic-branches {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  width: 100%;
}

.traffic-branches > div {
  text-align: center;
  border: 1px solid #e2eaf0;
  border-radius: 8px;
  padding: 17px 8px;
  color: #123d5d;
  font-size: 13px;
}

.phase-card {
  border-top: 4px solid #d8a35d;
}

.phase-card > span {
  font-size: 30px;
  color: #c6d8e5;
  font-weight: 800;
}

.closing-card {
  margin: 28px 0 85px;
  border-radius: 14px;
  padding: 45px;
  background: linear-gradient(120deg, #09283f, #145675);
  color: white;
}

.closing-card span {
  color: #edbd76;
  font-size: 12px;
  letter-spacing: 2px;
}

.closing-card h3 {
  font-size: 28px;
  margin: 20px 0;
}

.closing-card p {
  color: #d1e2ed;
  line-height: 2;
  max-width: 850px;
}

.page-footer {
  background: #09283f;
  color: #d2e0e9;
  text-align: center;
  padding: 35px 15px;
  font-size: 13px;
}

@media (max-width: 900px) {
  .four-grid,
  .phase-grid,
  .function-grid,
  .section-navigation {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 700px) {
  .container {
    width: 90%;
  }

  .page-hero {
    padding: 65px 0;
  }

  .planning-overview,
  .vertical-layout {
    grid-template-columns: 1fr;
  }

  .four-grid,
  .two-grid,
  .function-grid,
  .phase-grid {
    grid-template-columns: 1fr;
  }

  .section-nav-card {
    padding: 17px 13px;
  }

  .section-nav-card strong {
    font-size: 13px;
  }

  .content-section {
    padding-top: 55px;
  }

  .overview-main,
  .overview-diagram,
  .vertical-diagram,
  .vertical-description,
  .sports-intro,
  .traffic-flow {
    padding: 23px;
  }

  .traffic-branches {
    grid-template-columns: 1fr;
  }

  .closing-card {
    padding: 30px 24px;
  }
}
</style>
