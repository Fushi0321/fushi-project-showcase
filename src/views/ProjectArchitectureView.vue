
<script setup lang="ts">
import SectionSideNav from '../components/SectionSideNav.vue'
import { useLanguage } from '../i18n'

const { language } = useLanguage()

const bilingualText: Record<string, string> = {
  '百年建筑与高耐久体系': 'Long-Life Buildings & Durability',
  '大跨度与可变建筑空间': 'Long-Span & Flexible Spaces',
  '建筑结构与立体承载体系': 'Structural Systems & Spatial Load Capacity',
  '建筑艺术与空间一体化': 'Integrated Architecture & Art',
  '绿色低碳与节能技术': 'Green & Low-Carbon Technologies',
  '智慧建筑与数字化运营': 'Smart Buildings & Digital Operations',
  '高耐久结构体系': 'Durable Structural Systems',
  '研究建筑主体结构耐久性能、关键构件防护与长期安全维护。': 'Study structural durability, protection of critical components, and long-term safety maintenance.',
  '建筑全寿命周期': 'Building Life Cycle',
  '统筹设计、建造、使用、维护、更新等全生命周期环节。': 'Coordinate design, construction, use, maintenance, and renewal throughout the building life cycle.',
  '高品质材料应用': 'High-Quality Materials',
  '研究适宜的结构材料、外围护系统与耐久性建筑构造。': 'Evaluate suitable structural materials, building envelopes, and durable construction details.',
  '长期维护与更新': 'Long-Term Maintenance & Renewal',
  '兼顾后期检修、设备更换、功能改造及建筑持续使用。': 'Allow for inspections, equipment replacement, functional upgrades, and continued building use.',
  '灵活空间组合': 'Flexible Space Configurations',
  '研究不同运动及公共活动空间的组合方式与空间转换需求。': 'Study adaptable arrangements for sports and public activities and their space-conversion requirements.',
  '大跨度空间研究': 'Long-Span Space Studies',
  '根据体育活动、公共展演等功能，研究减少内部柱网干扰的结构方案。': 'Explore structural solutions with fewer interior columns for sports and public performance spaces.',
  '模块化功能配置': 'Modular Functional Layouts',
  '探索可调整的室内分隔、设备接口和功能转换方式。': 'Explore adjustable partitions, equipment interfaces, and flexible uses.',
  '主体结构体系': 'Primary Structural Systems',
  '根据建筑高度、跨度、使用荷载及场地条件开展结构体系比选。': 'Compare structural systems based on building height, spans, live loads, and site conditions.',
  '空间承载能力': 'Spatial Load-Bearing Capacity',
  '重点研究体育设施、观众集散、设备布置与公共活动的荷载需求。': 'Evaluate load requirements for sports facilities, spectator circulation, equipment, and public activities.',
  '抗震与消防安全': 'Seismic & Fire Safety',
  '满足现行工程建设标准，落实抗震设防、消防救援和人员疏散要求。': 'Address applicable engineering standards for seismic resistance, firefighting access, and evacuation.',
  '结构与机电协同': 'Structural & MEP Coordination',
  '同步考虑梁网、机电管线、建筑净高、设备维护与空间利用。': 'Coordinate beam grids, MEP services, clear heights, equipment maintenance, and space efficiency.',
  '建筑形态与城市形象': 'Architectural Form & City Identity',
  '研究具有辨识度的建筑形态、立面语言和城市展示界面。': 'Explore recognizable building forms, facade language, and urban frontages.',
  '建筑与公共艺术融合': 'Architecture & Public Art',
  '将文化展示、艺术装置和公共活动融入建筑与景观空间。': 'Integrate cultural exhibitions, art installations, and public activities into architecture and landscaping.',
  '室内外空间协同': 'Indoor-Outdoor Integration',
  '统筹建筑入口、公共广场、商业街区和慢行景观系统。': 'Coordinate entrances, public squares, retail streets, and landscaped pedestrian routes.',
  '绿色建筑': 'Green Buildings',
  '研究节能围护结构、自然采光、通风及适宜的绿色建筑技术。': 'Study energy-efficient envelopes, daylighting, ventilation, and appropriate green-building technologies.',
  '清洁能源利用': 'Clean Energy Use',
  '结合项目条件研究太阳能、建筑能源管理及设备节能技术。': 'Evaluate solar energy, building energy management, and efficient equipment based on site conditions.',
  '水资源利用': 'Water Resource Management',
  '研究节水器具、雨水管理、海绵设施及景观用水优化。': 'Explore water-efficient fixtures, stormwater management, sponge-city measures, and landscape water efficiency.',
  '低碳建造': 'Low-Carbon Construction',
  '研究材料节约、建造效率、施工废弃物管理及生命周期碳排放。': 'Study material efficiency, construction productivity, waste management, and life-cycle carbon emissions.',
  '智慧物业': 'Smart Property Management',
  '统筹设施巡检、工单管理、设备维护与物业服务。': 'Integrate facility inspections, work orders, equipment maintenance, and property services.',
  '智慧停车': 'Smart Parking',
  '研究车位管理、停车引导、分区出入及活动高峰调度。': 'Study space management, parking guidance, zone-based access, and event-peak coordination.',
  '智慧能源': 'Smart Energy',
  '研究能耗监测、设备运行优化与节能管理。': 'Explore energy monitoring, equipment optimization, and energy-saving management.',
  '数字化运营': 'Digital Operations',
  '探索产业空间、活动预约、商户服务与运营数据管理。': 'Explore management of industry spaces, event bookings, merchant services, and operational data.',
  '返回项目首页': 'Back to Home',
  '建筑技术与设计创新': 'Architectural Technology & Design Innovation',
  '以长期使用价值为导向，研究高耐久建筑结构、 灵活可变的复合空间、建筑艺术一体化、 绿色低碳与智慧运营相结合的建筑技术体系。': 'Focused on long-term value, this chapter explores durable structures, adaptable mixed-use spaces, integrated architectural art, green technologies, and intelligent operations.',
  '高耐久': 'Durability',
  '大跨度': 'Long Spans',
  '空间创新': 'Spatial Innovation',
  '绿色低碳': 'Low Carbon',
  '智慧建筑': 'Smart Buildings',
  '查看专题内容 ↗': 'Explore Section ↗',
  '以长期使用、结构耐久和可持续维护为目标， 研究建筑全寿命周期技术体系。': 'Study whole-life building technologies with an emphasis on longevity, structural durability, and sustainable maintenance.',
  '以百年建筑为长期品质目标': 'Long-Life Buildings as a Quality Aspiration',
  '通过建筑结构、材料性能、维护更新与运营管理的协同， 探索具有长期使用价值的高品质建筑体系。': 'Explore high-quality buildings of lasting value by coordinating structural design, material performance, upkeep, renewal, and operations.',
  '技术说明：“百年建筑”为项目长期品质目标， 不等同于已确定具体结构设计使用年限。 实际设计使用年限及耐久性要求应依法依规确定。': 'Technical note: “100-year building” is a long-term quality aspiration, not a confirmed structural design service life. The actual design life and durability requirements must be determined in accordance with applicable rules and standards.',
  '围绕体育运动、公共活动及产业运营需求研究灵活的建筑空间。': 'Explore adaptable spaces suited to sports, public events, and industry operations.',
  '大跨度空间概念示意': 'Conceptual Long-Span Space Diagram',
  '灵活开放的活动空间': 'Flexible Open Activity Space',
  '减少内部柱网干扰 · 提升空间适应性': 'Fewer Interior Columns · Greater Adaptability',
  '仅展示空间构想，不代表实际结构计算、 构件尺寸、最大跨度或工程设计方案。': 'Concept illustration only; it does not represent structural calculations, member dimensions, maximum spans, or an engineering design.',
  '研究结构安全、建筑功能、机电系统与空间利用的协同关系。': 'Explore the coordination of structural safety, building functions, MEP systems, and spatial efficiency.',
  '建筑结构技术研究框架': 'Structural Technology Research Framework',
  '以功能需求与工程安全为基础开展方案论证': 'Evaluate design options based on functional requirements and engineering safety.',
  '建筑结构与空间承载体系': 'Structural & Spatial Load-Bearing System',
  '结构体系比选': 'Structural System Options',
  '荷载与变形控制': 'Load & Deflection Control',
  '抗震及消防设计': 'Seismic & Fire Design',
  '机电与净高协调': 'MEP & Clear-Height Coordination',
  '技术研究框架示意': 'Conceptual Technical Framework',
  '让建筑形态、城市界面、文化艺术和公共空间形成整体设计语言。': 'Unify architectural form, urban frontage, culture, art, and public space through an integrated design language.',
  '让建筑成为具有文化表达能力的城市空间': 'Architecture as a Space for Cultural Expression',
  '探索建筑美学与公共艺术融合， 通过特色立面、景观空间、艺术装置与活动场景， 提升城市空间的文化体验和辨识度。': 'Combine architectural aesthetics with public art, using distinctive facades, landscapes, installations, and activity spaces to enrich cultural experiences and place identity.',
  '以资源节约、节能运行和环境品质为方向， 探索建筑全生命周期绿色低碳技术。': 'Explore life-cycle low-carbon technologies that conserve resources, reduce operating energy use, and improve environmental quality.',
  '以数字化技术连接建筑设备、物业服务、 能源管理和项目长期运营。': 'Use digital technologies to connect building systems, property services, energy management, and long-term operations.',
  '建筑数字化运营平台': 'Digital Building Operations Platform',
  '数据协同 · 设施管理 · 综合服务': 'Data Integration · Facility Management · Integrated Services',
  '以技术创新提升建筑长期使用价值': 'Enhancing Long-Term Building Value Through Innovation',
  '将建筑结构、空间组织、艺术设计、绿色低碳与智慧运营协同研究， 形成兼顾建筑安全、空间品质、功能适应性和长期经营的综合技术路径。': 'Coordinate structural engineering, spatial planning, artistic design, green technologies, and smart operations to support safety, spatial quality, adaptability, and long-term performance.',
  '鄂州市花湖机场临空区文体旅商住融合服务产业项目': 'Ezhou Huahu Airport Economic Zone · Integrated Culture, Sports, Tourism, Commerce & Living Project',
}

function tr(text: string): string {
  return language.value === 'en' ? (bilingualText[text] ?? text) : text
}


const sections = [
  { id: 'durability', title: '百年建筑与高耐久体系' },
  { id: 'flexible', title: '大跨度与可变建筑空间' },
  { id: 'structure', title: '建筑结构与立体承载体系' },
  { id: 'art', title: '建筑艺术与空间一体化' },
  { id: 'green', title: '绿色低碳与节能技术' },
  { id: 'smart', title: '智慧建筑与数字化运营' },
]

const durabilityItems = [
  {
    title: '高耐久结构体系',
    content: '研究建筑主体结构耐久性能、关键构件防护与长期安全维护。',
  },
  {
    title: '建筑全寿命周期',
    content: '统筹设计、建造、使用、维护、更新等全生命周期环节。',
  },
  {
    title: '高品质材料应用',
    content: '研究适宜的结构材料、外围护系统与耐久性建筑构造。',
  },
  {
    title: '长期维护与更新',
    content: '兼顾后期检修、设备更换、功能改造及建筑持续使用。',
  },
]

const flexibleItems = [
  {
    number: '01',
    title: '灵活空间组合',
    content: '研究不同运动及公共活动空间的组合方式与空间转换需求。',
  },
  {
    number: '02',
    title: '大跨度空间研究',
    content: '根据体育活动、公共展演等功能，研究减少内部柱网干扰的结构方案。',
  },
  {
    number: '03',
    title: '模块化功能配置',
    content: '探索可调整的室内分隔、设备接口和功能转换方式。',
  },
]

const structuralItems = [
  {
    title: '主体结构体系',
    content: '根据建筑高度、跨度、使用荷载及场地条件开展结构体系比选。',
  },
  {
    title: '空间承载能力',
    content: '重点研究体育设施、观众集散、设备布置与公共活动的荷载需求。',
  },
  {
    title: '抗震与消防安全',
    content: '满足现行工程建设标准，落实抗震设防、消防救援和人员疏散要求。',
  },
  {
    title: '结构与机电协同',
    content: '同步考虑梁网、机电管线、建筑净高、设备维护与空间利用。',
  },
]

const artItems = [
  {
    number: '01',
    title: '建筑形态与城市形象',
    content: '研究具有辨识度的建筑形态、立面语言和城市展示界面。',
  },
  {
    number: '02',
    title: '建筑与公共艺术融合',
    content: '将文化展示、艺术装置和公共活动融入建筑与景观空间。',
  },
  {
    number: '03',
    title: '室内外空间协同',
    content: '统筹建筑入口、公共广场、商业街区和慢行景观系统。',
  },
]

const greenItems = [
  {
    icon: '🌿',
    title: '绿色建筑',
    content: '研究节能围护结构、自然采光、通风及适宜的绿色建筑技术。',
  },
  {
    icon: '☀️',
    title: '清洁能源利用',
    content: '结合项目条件研究太阳能、建筑能源管理及设备节能技术。',
  },
  {
    icon: '💧',
    title: '水资源利用',
    content: '研究节水器具、雨水管理、海绵设施及景观用水优化。',
  },
  {
    icon: '♻️',
    title: '低碳建造',
    content: '研究材料节约、建造效率、施工废弃物管理及生命周期碳排放。',
  },
]

const smartItems = [
  {
    title: '智慧物业',
    content: '统筹设施巡检、工单管理、设备维护与物业服务。',
  },
  {
    title: '智慧停车',
    content: '研究车位管理、停车引导、分区出入及活动高峰调度。',
  },
  {
    title: '智慧能源',
    content: '研究能耗监测、设备运行优化与节能管理。',
  },
  {
    title: '数字化运营',
    content: '探索产业空间、活动预约、商户服务与运营数据管理。',
  },
]
</script>

<template>
  <div class="architecture-page">
    <SectionSideNav :sections="sections.map(item => ({ id: item.id, title: tr(item.title) }))" />

    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">
          CHAPTER 04 / ARCHITECTURAL INNOVATION
        </p>
        <h1>
          {{ tr('建筑技术与设计创新') }}
        </h1>
        <p class="hero-description">
          {{ tr('以长期使用价值为导向，研究高耐久建筑结构、 灵活可变的复合空间、建筑艺术一体化、 绿色低碳与智慧运营相结合的建筑技术体系。') }}
        </p>
        <div class="hero-tags">
          <span>
          {{ tr('高耐久') }}
        </span>
          <span>
          {{ tr('大跨度') }}
        </span>
          <span>
          {{ tr('空间创新') }}
        </span>
          <span>
          {{ tr('绿色低碳') }}
        </span>
          <span>
          {{ tr('智慧建筑') }}
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
          <strong>{{ tr(item.title) }}</strong>
          <small>
          {{ tr('查看专题内容 ↗') }}
        </small>
        </a>
      </nav>

      <!-- 01 高耐久体系 -->
      <section id="durability" class="content-section">
        <div class="section-title">
          <span>01 / BUILDING DURABILITY</span>
          <h2>
          {{ tr('百年建筑与高耐久体系') }}
        </h2>
          <p>
          {{ tr('以长期使用、结构耐久和可持续维护为目标， 研究建筑全寿命周期技术体系。') }}
        </p>
        </div>

        <div class="feature-banner">
          <div>
            <small>LONG-LIFE BUILDING CONCEPT</small>
            <h3>
          {{ tr('以百年建筑为长期品质目标') }}
        </h3>
            <p>
          {{ tr('通过建筑结构、材料性能、维护更新与运营管理的协同， 探索具有长期使用价值的高品质建筑体系。') }}
        </p>
          </div>
          <div class="feature-symbol">100<span>YEARS</span></div>
        </div>

        <div class="card-grid four">
          <article
            v-for="item in durabilityItems"
            :key="item.title"
            class="content-card"
          >
            <h3>{{ tr(item.title) }}</h3>
            <p>{{ tr(item.content) }}</p>
          </article>
        </div>

        <p class="technical-note">
          {{ tr('技术说明：“百年建筑”为项目长期品质目标， 不等同于已确定具体结构设计使用年限。 实际设计使用年限及耐久性要求应依法依规确定。') }}
        </p>
      </section>

      <!-- 02 大跨度空间 -->
      <section id="flexible" class="content-section">
        <div class="section-title">
          <span>02 / FLEXIBLE SPACE</span>
          <h2>
          {{ tr('大跨度与可变建筑空间') }}
        </h2>
          <p>
          {{ tr('围绕体育运动、公共活动及产业运营需求研究灵活的建筑空间。') }}
        </p>
        </div>

        <div class="concept-panel">
          <h3>
          {{ tr('大跨度空间概念示意') }}
        </h3>
          <div class="span-diagram">
            <div class="roof-beam"></div>
            <div class="span-space">
              <span class="column"></span>
              <div class="span-center">
                <strong>
          {{ tr('灵活开放的活动空间') }}
        </strong>
                <small>
          {{ tr('减少内部柱网干扰 · 提升空间适应性') }}
        </small>
              </div>
              <span class="column"></span>
            </div>
            <div class="floor-base"></div>
          </div>
          <p class="diagram-note">
          {{ tr('仅展示空间构想，不代表实际结构计算、 构件尺寸、最大跨度或工程设计方案。') }}
        </p>
        </div>

        <div class="card-grid three">
          <article
            v-for="item in flexibleItems"
            :key="item.number"
            class="content-card"
          >
            <span class="card-number">{{ item.number }}</span>
            <h3>{{ tr(item.title) }}</h3>
            <p>{{ tr(item.content) }}</p>
          </article>
        </div>
      </section>

      <!-- 03 建筑结构 -->
      <section id="structure" class="content-section">
        <div class="section-title">
          <span>03 / STRUCTURAL SYSTEM</span>
          <h2>
          {{ tr('建筑结构与立体承载体系') }}
        </h2>
          <p>
          {{ tr('研究结构安全、建筑功能、机电系统与空间利用的协同关系。') }}
        </p>
        </div>

        <div class="structural-diagram">
          <div class="structure-title">
            <h3>
          {{ tr('建筑结构技术研究框架') }}
        </h3>
            <p>
          {{ tr('以功能需求与工程安全为基础开展方案论证') }}
        </p>
          </div>

          <div class="structure-core">
          {{ tr('建筑结构与空间承载体系') }}
        </div>

          <div class="structure-grid">
            <div>
          {{ tr('结构体系比选') }}
        </div>
            <div>
          {{ tr('荷载与变形控制') }}
        </div>
            <div>
          {{ tr('抗震及消防设计') }}
        </div>
            <div>
          {{ tr('机电与净高协调') }}
        </div>
          </div>

          <small>
          {{ tr('技术研究框架示意') }}
        </small>
        </div>

        <div class="card-grid two">
          <article
            v-for="item in structuralItems"
            :key="item.title"
            class="content-card"
          >
            <h3>{{ tr(item.title) }}</h3>
            <p>{{ tr(item.content) }}</p>
          </article>
        </div>
      </section>

      <!-- 04 艺术建筑 -->
      <section id="art" class="content-section">
        <div class="section-title">
          <span>04 / ARCHITECTURE AND ART</span>
          <h2>
          {{ tr('建筑艺术与空间一体化') }}
        </h2>
          <p>
          {{ tr('让建筑形态、城市界面、文化艺术和公共空间形成整体设计语言。') }}
        </p>
        </div>

        <div class="art-banner">
          <div>
            <small>ARCHITECTURE × ART × PUBLIC SPACE</small>
            <h3>
          {{ tr('让建筑成为具有文化表达能力的城市空间') }}
        </h3>
            <p>
          {{ tr('探索建筑美学与公共艺术融合， 通过特色立面、景观空间、艺术装置与活动场景， 提升城市空间的文化体验和辨识度。') }}
        </p>
          </div>
        </div>

        <div class="card-grid three">
          <article
            v-for="item in artItems"
            :key="item.number"
            class="content-card"
          >
            <span class="card-number">{{ item.number }}</span>
            <h3>{{ tr(item.title) }}</h3>
            <p>{{ tr(item.content) }}</p>
          </article>
        </div>
      </section>

      <!-- 05 绿色建筑 -->
      <section id="green" class="content-section">
        <div class="section-title">
          <span>05 / GREEN BUILDING</span>
          <h2>
          {{ tr('绿色低碳与节能技术') }}
        </h2>
          <p>
          {{ tr('以资源节约、节能运行和环境品质为方向， 探索建筑全生命周期绿色低碳技术。') }}
        </p>
        </div>

        <div class="card-grid four">
          <article
            v-for="item in greenItems"
            :key="item.title"
            class="content-card"
          >
            <span class="item-icon">{{ item.icon }}</span>
            <h3>{{ tr(item.title) }}</h3>
            <p>{{ tr(item.content) }}</p>
          </article>
        </div>
      </section>

      <!-- 06 智慧建筑 -->
      <section id="smart" class="content-section">
        <div class="section-title">
          <span>06 / SMART BUILDING</span>
          <h2>
          {{ tr('智慧建筑与数字化运营') }}
        </h2>
          <p>
          {{ tr('以数字化技术连接建筑设备、物业服务、 能源管理和项目长期运营。') }}
        </p>
        </div>

        <div class="smart-framework">
          <div class="smart-center">
            <small>SMART BUILDING PLATFORM</small>
            <h3>
          {{ tr('建筑数字化运营平台') }}
        </h3>
            <p>
          {{ tr('数据协同 · 设施管理 · 综合服务') }}
        </p>
          </div>

          <div class="card-grid four">
            <article
              v-for="item in smartItems"
              :key="item.title"
              class="smart-item"
            >
              <h3>{{ tr(item.title) }}</h3>
              <p>{{ tr(item.content) }}</p>
            </article>
          </div>
        </div>

        <div class="closing-card">
          <small>INTEGRATED ARCHITECTURAL INNOVATION</small>
          <h3>
          {{ tr('以技术创新提升建筑长期使用价值') }}
        </h3>
          <p>
          {{ tr('将建筑结构、空间组织、艺术设计、绿色低碳与智慧运营协同研究， 形成兼顾建筑安全、空间品质、功能适应性和长期经营的综合技术路径。') }}
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
.architecture-page {
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
  justify-content: space-between;
  align-items: center;
  background: #fff;
}

.back-link {
  color: #123d5d;
  text-decoration: none;
  font-weight: 700;
}

.page-header > span {
  font-size: 12px;
  letter-spacing: 2px;
  color: #8192a1;
}

.page-hero {
  background: linear-gradient(115deg, #09283f, #155675);
  padding: 95px 0 105px;
  color: #fff;
}

.eyebrow {
  color: #edbd76;
  font-size: 12px;
  letter-spacing: 3px;
}

.page-hero h1 {
  font-size: clamp(32px, 4vw, 52px);
  margin: 22px 0;
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
  background: #fff;
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
  font-size: 11px;
  color: #bb8c50;
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
  color: #123d5d;
  font-size: 30px;
  margin: 12px 0;
}

.section-title p {
  color: #748698;
  line-height: 1.8;
}

.feature-banner,
.art-banner {
  padding: 42px;
  background: linear-gradient(120deg, #123d5d, #1a6482);
  color: white;
  border-radius: 14px;
}

.feature-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.feature-banner h3,
.art-banner h3 {
  font-size: 28px;
  margin: 18px 0;
  line-height: 1.5;
}

.feature-banner p,
.art-banner p {
  color: #d2e3ec;
  line-height: 2;
}

.feature-banner small,
.art-banner small {
  color: #e9b777;
  letter-spacing: 2px;
}

.feature-symbol {
  font-size: 68px;
  font-weight: 900;
  color: #efbd78;
  white-space: nowrap;
}

.feature-symbol span {
  display: block;
  font-size: 14px;
  text-align: center;
  letter-spacing: 3px;
}

.card-grid {
  display: grid;
  gap: 20px;
  margin-top: 24px;
}

.card-grid.four {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.card-grid.three {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.card-grid.two {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.content-card {
  padding: 29px;
  background: white;
  border-radius: 12px;
}

.content-card h3 {
  font-size: 18px;
  color: #123d5d;
  margin-bottom: 14px;
  line-height: 1.5;
}

.content-card p,
.smart-item p {
  font-size: 14px;
  line-height: 1.9;
  color: #687b8d;
}

.card-number {
  display: inline-block;
  font-size: 30px;
  font-weight: 800;
  color: #c7d7e3;
  margin-bottom: 18px;
}

.item-icon {
  display: block;
  font-size: 30px;
  margin-bottom: 20px;
}

.technical-note,
.diagram-note {
  font-size: 12px;
  line-height: 1.9;
  color: #8393a1;
  margin-top: 18px;
}

.concept-panel,
.structural-diagram {
  background: white;
  border-radius: 12px;
  padding: 38px;
}

.concept-panel > h3,
.structure-title h3 {
  color: #123d5d;
  font-size: 22px;
  margin-bottom: 20px;
}

.span-diagram {
  margin-top: 40px;
}

.roof-beam {
  height: 17px;
  background: #145779;
  border-radius: 6px;
  margin: 0 20px;
}

.span-space {
  display: flex;
  justify-content: space-between;
  min-height: 210px;
  margin: 0 30px;
}

.column {
  width: 18px;
  background: #467e9a;
}

.span-center {
  flex: 1;
  align-self: center;
  padding: 20px;
  text-align: center;
  color: #123d5d;
}

.span-center strong {
  display: block;
  font-size: 20px;
  margin-bottom: 15px;
}

.span-center small {
  color: #74889a;
}

.floor-base {
  height: 18px;
  background: #d6a25b;
  border-radius: 4px;
  margin: 0 20px;
}

.structure-title {
  text-align: center;
  margin-bottom: 28px;
}

.structure-title p {
  color: #7d8d9c;
}

.structure-core {
  background: #145779;
  color: #fff;
  text-align: center;
  padding: 23px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 700;
}

.structure-grid {
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.structure-grid > div {
  background: #e8f0f5;
  color: #123d5d;
  padding: 20px 10px;
  text-align: center;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
}

.structural-diagram > small {
  display: block;
  text-align: center;
  color: #92a0ad;
}

.art-banner {
  margin-bottom: 24px;
}

.smart-framework {
  background: #eaf1f5;
  border-radius: 14px;
  padding: 35px;
}

.smart-center {
  max-width: 530px;
  margin: 0 auto 30px;
  border-radius: 12px;
  padding: 32px;
  text-align: center;
  color: white;
  background: #145779;
}

.smart-center small {
  color: #eabb79;
}

.smart-center h3 {
  font-size: 25px;
  margin: 15px 0;
}

.smart-center p {
  color: #d4e4ed;
}

.smart-item {
  padding: 22px;
  background: white;
  border-radius: 10px;
}

.smart-item h3 {
  color: #123d5d;
  margin-bottom: 12px;
}

.closing-card {
  margin: 30px 0 85px;
  padding: 48px;
  border-radius: 14px;
  color: white;
  background: linear-gradient(120deg, #09283f, #145675);
}

.closing-card small {
  color: #eabb79;
  letter-spacing: 2px;
}

.closing-card h3 {
  font-size: 28px;
  margin: 22px 0;
}

.closing-card p {
  color: #d5e5ed;
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

@media (max-width: 1000px) {
  .card-grid.four,
  .structure-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 800px) {
  .section-navigation,
  .card-grid.three {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .feature-banner {
    flex-direction: column;
    align-items: flex-start;
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
  .card-grid.two,
  .card-grid.three,
  .card-grid.four,
  .structure-grid {
    grid-template-columns: 1fr;
  }

  .section-nav-card {
    padding: 17px;
  }

  .content-section {
    padding-top: 55px;
  }

  .feature-banner,
  .art-banner,
  .concept-panel,
  .structural-diagram,
  .smart-framework,
  .closing-card {
    padding: 26px 20px;
  }

  .feature-symbol {
    font-size: 48px;
  }

  .span-center strong {
    font-size: 15px;
  }

  .span-space {
    min-height: 160px;
  }

  .structure-core {
    font-size: 16px;
  }
}
</style>
