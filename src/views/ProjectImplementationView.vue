<script setup lang="ts">
import SectionSideNav from '../components/SectionSideNav.vue'
import { useLanguage } from '../i18n'

const { language } = useLanguage()

const sections = [
  { id: 'foundation', title: '项目实施主体与合作基础' },
  { id: 'coordination', title: '政府与企业协同机制' },
  { id: 'epco', title: 'EPC+O 建设运营协同模式' },
  { id: 'investment', title: '投资建设与资源整合路径' },
  { id: 'timeline', title: '项目实施阶段与工作计划' },
  { id: 'support', title: '重点协调事项与发展展望' },
]

const foundationItems = [
  {
    number: '01',
    title: '项目基础梳理',
    description:
      '梳理土地取得、历史规划、项目合作及前期开发资料，明确现阶段项目基础。',
  },
  {
    number: '02',
    title: '主体与权属核实',
    description:
      '核实土地使用权、项目实施主体、相关合同及建设开发条件。',
  },
  {
    number: '03',
    title: '产业方案研究',
    description:
      '结合文体旅商住融合定位，进一步完善规划、建筑技术与产业运营方案。',
  },
  {
    number: '04',
    title: '合作资源对接',
    description:
      '研究设计、建设、金融、产业招商及运营机构的协同参与方式。',
  },
]

const coordinationItems = [
  {
    title: '规划条件衔接',
    description:
      '依法核实土地用途、规划设计条件、建设指标及相关审批要求。',
  },
  {
    title: '建设条件协调',
    description:
      '结合实际情况研究土地交付、道路接入、市政配套及建设实施条件。',
  },
  {
    title: '产业发展协同',
    description:
      '围绕公共服务、体育文化和产业融合方向开展资源对接与政策研究。',
  },
  {
    title: '项目程序推进',
    description:
      '依法依规衔接相关审批、设计审查、建设管理和竣工验收程序。',
  },
]

const epcoItems = [
  {
    letter: 'E',
    title: 'Engineering',
    subtitle: '设计统筹',
    description:
      '在合法合规的前提下，统筹建筑、结构、机电、景观与运营需求。',
  },
  {
    letter: 'P',
    title: 'Procurement',
    subtitle: '采购管理',
    description:
      '研究设备材料选型、采购组织、成本管理和全生命周期使用需求。',
  },
  {
    letter: 'C',
    title: 'Construction',
    subtitle: '工程建设',
    description:
      '组织工程施工、质量控制、安全管理及项目建设交付。',
  },
  {
    letter: 'O',
    title: 'Operation',
    subtitle: '长期运营',
    description:
      '将产业招商、场馆管理、商业服务和物业运维与建设过程衔接。',
  },
]

const investmentItems = [
  {
    number: '01',
    title: '开发条件核实',
    description:
      '以权属资料、规划条件、建设许可及相关政策要求为基础。',
  },
  {
    number: '02',
    title: '投资与成本测算',
    description:
      '结合建设规模、工程方案、融资条件和运营需求研究投资安排。',
  },
  {
    number: '03',
    title: '建设资源整合',
    description:
      '对接具备相应能力的规划设计、施工建设及专业技术机构。',
  },
  {
    number: '04',
    title: '产业资源导入',
    description:
      '结合功能定位逐步开展体育、文化、商业与运营资源对接。',
  },
]

const implementationSteps = [
  {
    number: '01',
    title: '前期基础核实',
    stage: '基础阶段',
    description:
      '核实土地权属、现行规划条件、交付状态和项目实施主体。',
  },
  {
    number: '02',
    title: '方案深化论证',
    stage: '研究阶段',
    description:
      '完成项目定位、规划设计、结构技术、产业运营和投资可行性研究。',
  },
  {
    number: '03',
    title: '合作机制确定',
    stage: '合作阶段',
    description:
      '明确各参与主体的权利义务、建设组织、资金安排和运营责任。',
  },
  {
    number: '04',
    title: '依法审批建设',
    stage: '建设阶段',
    description:
      '依法办理相关手续，根据批准方案组织工程建设与质量安全管理。',
  },
  {
    number: '05',
    title: '验收交付运营',
    stage: '运营阶段',
    description:
      '依照验收及投入使用要求，开展招商开业和持续运营管理。',
  },
]

const supportItems = [
  {
    title: '土地及规划条件',
    description:
      '核实正式用地范围、土地现状和现行规划设计要求。',
  },
  {
    title: '道路与市政配套',
    description:
      '研究项目周边道路、出入口、市政管线及公共基础设施衔接。',
  },
  {
    title: '产业政策与资源',
    description:
      '研究符合条件的体育文化、公共服务及产业发展的政策与资源。',
  },
  {
    title: '建设程序与实施机制',
    description:
      '依法协调相关行政审批、工程管理和项目推进程序。',
  },
]

const translations: Record<string, string> = {
  "项目实施主体与合作基础": "Project Implementing Entity & Cooperation Foundations",
  "政府与企业协同机制": "Government–Enterprise Coordination Mechanism",
  "EPC+O 建设运营协同模式": "EPC+O Integrated Delivery & Operations Model",
  "投资建设与资源整合路径": "Investment, Construction & Resource Integration",
  "项目实施阶段与工作计划": "Implementation Stages & Work Plan",
  "重点协调事项与发展展望": "Key Coordination Priorities & Outlook",
  "项目基础梳理": "Review of Project Foundations",
  "梳理土地取得、历史规划、项目合作及前期开发资料，明确现阶段项目基础。": "Review land acquisition, historical planning, project cooperation and preliminary development records to establish the current project baseline.",
  "主体与权属核实": "Verification of Entities & Rights",
  "核实土地使用权、项目实施主体、相关合同及建设开发条件。": "Verify land-use rights, the implementing entity, relevant contracts and development conditions.",
  "产业方案研究": "Industry Planning Study",
  "结合文体旅商住融合定位，进一步完善规划、建筑技术与产业运营方案。": "Refine planning, architectural technology and industry operations proposals in line with the integrated culture, sports, tourism, commerce and living vision.",
  "合作资源对接": "Cooperation & Resource Engagement",
  "研究设计、建设、金融、产业招商及运营机构的协同参与方式。": "Explore how design, construction, financing, industry recruitment and operating organizations could collaborate.",
  "规划条件衔接": "Alignment with Planning Conditions",
  "依法核实土地用途、规划设计条件、建设指标及相关审批要求。": "Verify land uses, planning conditions, development parameters and applicable approvals in accordance with law.",
  "建设条件协调": "Coordination of Development Conditions",
  "结合实际情况研究土地交付、道路接入、市政配套及建设实施条件。": "Examine land handover, road access, municipal utilities and construction readiness based on actual circumstances.",
  "产业发展协同": "Industry Development Coordination",
  "围绕公共服务、体育文化和产业融合方向开展资源对接与政策研究。": "Coordinate resources and study relevant policies for public services, sports, culture and integrated industries.",
  "项目程序推进": "Advancement of Project Procedures",
  "依法依规衔接相关审批、设计审查、建设管理和竣工验收程序。": "Coordinate approvals, design reviews, construction management and completion acceptance procedures in compliance with applicable requirements.",
  "设计统筹": "Integrated Design Coordination",
  "在合法合规的前提下，统筹建筑、结构、机电、景观与运营需求。": "Coordinate architecture, structural engineering, building services, landscape and operational needs in accordance with applicable laws.",
  "采购管理": "Procurement Management",
  "研究设备材料选型、采购组织、成本管理和全生命周期使用需求。": "Study equipment and material selection, procurement organization, cost control and life-cycle requirements.",
  "工程建设": "Construction Delivery",
  "组织工程施工、质量控制、安全管理及项目建设交付。": "Organize construction, quality control, safety management and project delivery.",
  "长期运营": "Long-Term Operations",
  "将产业招商、场馆管理、商业服务和物业运维与建设过程衔接。": "Align industry tenant recruitment, venue management, commercial services and property operations with project delivery.",
  "开发条件核实": "Verification of Development Conditions",
  "以权属资料、规划条件、建设许可及相关政策要求为基础。": "Base the assessment on property-rights records, planning conditions, construction permits and applicable policies.",
  "投资与成本测算": "Investment & Cost Assessment",
  "结合建设规模、工程方案、融资条件和运营需求研究投资安排。": "Assess investment arrangements in light of project scale, engineering solutions, financing conditions and operational needs.",
  "建设资源整合": "Construction Resource Integration",
  "对接具备相应能力的规划设计、施工建设及专业技术机构。": "Engage qualified planning, design, construction and specialist technical organizations.",
  "产业资源导入": "Industry Resource Introduction",
  "结合功能定位逐步开展体育、文化、商业与运营资源对接。": "Gradually engage sports, cultural, commercial and operational partners in line with the functional positioning.",
  "前期基础核实": "Preliminary Due Diligence",
  "基础阶段": "Foundation Stage",
  "核实土地权属、现行规划条件、交付状态和项目实施主体。": "Verify land rights, current planning conditions, handover status and the implementing entity.",
  "方案深化论证": "Detailed Proposal Assessment",
  "研究阶段": "Study Stage",
  "完成项目定位、规划设计、结构技术、产业运营和投资可行性研究。": "Conduct project positioning, planning, structural technology, industry operations and investment feasibility studies.",
  "合作机制确定": "Establish Cooperation Arrangements",
  "合作阶段": "Cooperation Stage",
  "明确各参与主体的权利义务、建设组织、资金安排和运营责任。": "Define the rights and obligations of participants, construction organization, funding arrangements and operational responsibilities.",
  "依法审批建设": "Permitting & Lawful Construction",
  "建设阶段": "Construction Stage",
  "依法办理相关手续，根据批准方案组织工程建设与质量安全管理。": "Complete required statutory procedures and carry out construction and quality and safety management in accordance with approved plans.",
  "验收交付运营": "Acceptance, Handover & Operations",
  "运营阶段": "Operations Stage",
  "依照验收及投入使用要求，开展招商开业和持续运营管理。": "Following applicable acceptance and occupancy requirements, commence leasing, opening and ongoing operations.",
  "土地及规划条件": "Land & Planning Conditions",
  "核实正式用地范围、土地现状和现行规划设计要求。": "Verify the official land boundary, current site conditions and prevailing planning requirements.",
  "道路与市政配套": "Roads & Municipal Infrastructure",
  "研究项目周边道路、出入口、市政管线及公共基础设施衔接。": "Examine connections to surrounding roads, entrances, municipal utility networks and public infrastructure.",
  "产业政策与资源": "Industry Policies & Resources",
  "研究符合条件的体育文化、公共服务及产业发展的政策与资源。": "Study eligible policies and resources supporting sports, culture, public services and industry development.",
  "建设程序与实施机制": "Construction Procedures & Delivery Mechanism",
  "依法协调相关行政审批、工程管理和项目推进程序。": "Coordinate statutory administrative approvals, construction management and project advancement procedures.",
  "返回项目首页": "Back to Project Home",
  "合作实施与发展路径": "Cooperation & Implementation Roadmap",
  "立足项目现有基础，以依法合规、规划统筹、资源整合和长期运营为原则，研究政府与企业协同、建设运营一体化及项目分阶段实施的可行路径。": "Building on the existing project foundations, this study explores feasible approaches to government–enterprise coordination, integrated construction and operations, and phased implementation, guided by legal compliance, coordinated planning, resource integration and long-term operations.",
  "合作基础": "Cooperation Foundations",
  "政企协同": "Public–Private Coordination",
  "资源整合": "Resource Integration",
  "分期实施": "Phased Implementation",
  "查看专题内容 ↗": "Explore Section ↗",
  "以现有土地、规划、合作及开发资料为基础，开展项目实施条件和参与主体的系统梳理。": "Systematically review project delivery conditions and participating entities using existing land, planning, cooperation and development records.",
  "以权属清晰、条件明确、合作合规为实施前提": "Clear Rights, Defined Conditions & Lawful Cooperation",
  "项目拟在梳理土地历史资料、相关合同及规划设计条件的基础上，进一步确认具备相应权利和资格的实施主体，形成可供深化规划、产业策划和合作洽谈的工作基础。": "The project proposes to review historical land records, relevant contracts and planning requirements, verify the rights and qualifications of the implementing entity, and establish a basis for further planning, industry programming and cooperation discussions.",
  "说明：本页面仅展示拟研究的实施思路。项目具体权属、实施主体及合作权利义务，应以有效法律文件和实际核实结果为准。": "Note: This page presents proposed approaches for further study only. Specific property rights, implementing entities, and cooperation rights and obligations are subject to valid legal documents and verified facts.",
  "在各方依法履职、自主决策和明确责任边界的基础上，研究项目建设与产业发展的协调机制。": "Explore a coordination mechanism for construction and industry development, with each party acting lawfully, making independent decisions and maintaining clear responsibilities.",
  "项目协同推进关系示意": "Illustrative Project Coordination Framework",
  "政府相关部门": "Relevant Government Departments",
  "项目实施主体": "Project Implementing Entity",
  "规划建设协调": "Planning & Construction Coordination",
  "产业资源对接": "Industry Partner Engagement",
  "工程实施管理": "Construction Management",
  "运营服务组织": "Operations & Services",
  "为拟研究的工作协同关系示意，不代表已建立正式政企合作机制或取得相关行政承诺。": "This diagram illustrates a proposed working relationship for study; it does not indicate that a formal government–enterprise cooperation mechanism exists or that administrative commitments have been obtained.",
  "探索设计、采购、施工和长期运营需求相互衔接的实施机制。": "Explore an implementation mechanism that aligns engineering, procurement and construction with long-term operational requirements.",
  "从建设交付导向，走向建设与运营协同": "From Construction Handover to Integrated Delivery & Operations",
  "在规划与设计阶段前置运营需求，在工程建设阶段同步考虑设备使用、空间管理和产业招商，在项目交付后建立持续运营与维护机制。": "Embed operational requirements at the planning and design stage; consider equipment usage, space management and tenant recruitment during construction; and establish ongoing operations and maintenance after handover.",
  "运营需求前置": "Early Operational Input",
  "设计建设协同": "Coordinated Design & Construction",
  "交付运营衔接": "Handover & Operations Alignment",
  "EPC+O 为拟研究的协同思路，不代表已确定承包方式。后续应结合项目性质、资金来源、法定采购要求及主体资格，依法明确合同安排、责任分工与运营机制。": "EPC+O is a proposed coordination concept, not a confirmed contracting arrangement. The contract structure, allocation of responsibilities and operating mechanism must be determined lawfully, considering the project type, funding sources, statutory procurement requirements and entity qualifications.",
  "以建设条件与投资可行性为基础，研究资金、工程技术和产业运营资源的统筹组织。": "Assess coordinated funding, technical and operational resources on the basis of construction conditions and investment feasibility.",
  "项目投资与资源整合": "Project Investment & Resource Integration",
  "土地条件 · 资金安排 · 工程建设 · 产业运营": "Land Conditions · Funding · Construction · Operations",
  "具体投资总额、融资方案、资金来源和收益预测，应在进一步明确规划条件与投资测算后另行论证。": "The total investment, financing plan, funding sources and financial projections require separate assessment after planning conditions and investment estimates are clarified.",
  "按照“核实基础—深化方案—确定合作—依法建设—交付运营”的逻辑研究项目推进安排。": "Study project advancement through the sequence of due diligence, proposal development, cooperation arrangements, lawful construction and operational handover.",
  "实施时序说明": "Implementation Schedule Note",
  "上述为项目推进阶段的建议顺序，并非已经批准的建设时间表。各阶段启动条件和实际工期，应根据前置手续、土地条件、设计审批、资金安排等因素确定。": "The above is a suggested sequence of project phases, not an approved construction schedule. Commencement conditions and actual durations depend on prior procedures, land readiness, design approvals, funding arrangements and other relevant factors.",
  "围绕项目具备进一步深化研究和依法推进的条件，梳理需要核实、协调与衔接的重点工作。": "Identify key matters requiring verification, coordination and follow-up before the project can advance to further study and lawful implementation.",
  "以建设与运营协同，探索城市综合服务新模式": "Exploring a New Urban Services Model through Integrated Delivery & Operations",
  "项目拟通过依法合规推进、产业融合发展、建筑技术创新和专业化运营，探索建设集品质居住、体育活动、文化体验、休闲商业及城市公共服务于一体的综合项目，为区域城市功能完善与产业发展提供新的研究方向。": "Through lawful project advancement, integrated industry development, architectural innovation and professional operations, the proposal explores a comprehensive project combining quality living, sports, cultural experiences, leisure commerce and urban public services, offering a potential direction for improving regional urban functions and industry development.",
  "鄂州市花湖机场临空区文体旅商住融合服务产业项目": "Ezhou Huahu Airport Economic Zone · Integrated Culture, Sports, Tourism, Commerce & Living Project",
  "专题导航": "Section Navigation",
}
const tr = (text: string): string => language.value === 'en' ? (translations[text] ?? text) : text
</script>

<template>
  <div class="implementation-page">
    <SectionSideNav :sections="sections.map(item => ({ id: item.id, title: tr(item.title) }))" />

    <header class="page-header">
      <RouterLink to="/" class="back-link">
        ← {{ tr("返回项目首页") }}
      </RouterLink>
      <span>COOPERATION & IMPLEMENTATION</span>
    </header>

    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">
          CHAPTER 06 / COOPERATION & IMPLEMENTATION
        </p>
        <h1>{{ tr("合作实施与发展路径") }}</h1>
        <p class="hero-description">
          {{ tr("立足项目现有基础，以依法合规、规划统筹、资源整合和长期运营为原则，研究政府与企业协同、建设运营一体化及项目分阶段实施的可行路径。") }}
        </p>

        <div class="hero-tags">
          <span>{{ tr("合作基础") }}</span>
          <span>{{ tr("政企协同") }}</span>
          <span>EPC+O</span>
          <span>{{ tr("资源整合") }}</span>
          <span>{{ tr("分期实施") }}</span>
        </div>
      </div>
    </section>

    <main class="container">      
      <nav class="section-navigation" :aria-label="tr('专题导航')">
        <RouterLink
          v-for="(item, index) in sections"
          :key="item.id"
          :to="{ hash: `#${item.id}` }"
          class="section-nav-card"
        >
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
          <strong>{{ tr(item.title) }}</strong>
          <small>{{ tr("查看专题内容 ↗") }}</small>
        </RouterLink>
      </nav>


      <!-- 第一部分：实施基础 -->
      <section id="foundation" class="content-section">
        <div class="section-title">
          <span>01 / IMPLEMENTATION FOUNDATION</span>
          <h2>{{ tr("项目实施主体与合作基础") }}</h2>
          <p>
            {{ tr("以现有土地、规划、合作及开发资料为基础，开展项目实施条件和参与主体的系统梳理。") }}
          </p>
        </div>

        <div class="feature-banner">
          <small>PROJECT IMPLEMENTATION FOUNDATION</small>
          <h3>{{ tr("以权属清晰、条件明确、合作合规为实施前提") }}</h3>
          <p>
            {{ tr("项目拟在梳理土地历史资料、相关合同及规划设计条件的基础上，进一步确认具备相应权利和资格的实施主体，形成可供深化规划、产业策划和合作洽谈的工作基础。") }}
          </p>
        </div>

        <div class="card-grid four">
          <article
            v-for="item in foundationItems"
            :key="item.number"
            class="content-card"
          >
            <span class="card-number">{{ item.number }}</span>
            <h3>{{ tr(item.title) }}</h3>
            <p>{{ tr(item.description) }}</p>
          </article>
        </div>

        <p class="technical-note">
          {{ tr("说明：本页面仅展示拟研究的实施思路。项目具体权属、实施主体及合作权利义务，应以有效法律文件和实际核实结果为准。") }}
        </p>
      </section>

      <!-- 第二部分：政府与企业协同 -->
      <section id="coordination" class="content-section">
        <div class="section-title">
          <span>02 / GOVERNMENT & ENTERPRISE COORDINATION</span>
          <h2>{{ tr("政府与企业协同机制") }}</h2>
          <p>
            {{ tr("在各方依法履职、自主决策和明确责任边界的基础上，研究项目建设与产业发展的协调机制。") }}
          </p>
        </div>

        <div class="coordination-diagram">
          <h3>{{ tr("项目协同推进关系示意") }}</h3>

          <div class="coordination-top">
            <div class="coordination-node">{{ tr("政府相关部门") }}</div>
            <div class="coordination-symbol">↔</div>
            <div class="coordination-node featured">{{ tr("项目实施主体") }}</div>
          </div>

          <div class="coordination-arrow">↓</div>

          <div class="coordination-bottom">
            <div>{{ tr("规划建设协调") }}</div>
            <div>{{ tr("产业资源对接") }}</div>
            <div>{{ tr("工程实施管理") }}</div>
            <div>{{ tr("运营服务组织") }}</div>
          </div>

          <p class="diagram-note">
            {{ tr("为拟研究的工作协同关系示意，不代表已建立正式政企合作机制或取得相关行政承诺。") }}
          </p>
        </div>

        <div class="card-grid two">
          <article
            v-for="item in coordinationItems"
            :key="item.title"
            class="content-card"
          >
            <h3>{{ tr(item.title) }}</h3>
            <p>{{ tr(item.description) }}</p>
          </article>
        </div>
      </section>

      <!-- 第三部分：EPC+O -->
      <section id="epco" class="content-section">
        <div class="section-title">
          <span>03 / EPC + OPERATION</span>
          <h2>{{ tr("EPC+O 建设运营协同模式") }}</h2>
          <p>
            {{ tr("探索设计、采购、施工和长期运营需求相互衔接的实施机制。") }}
          </p>
        </div>

        <div class="epco-banner">
          <small>ENGINEERING · PROCUREMENT · CONSTRUCTION · OPERATION</small>
          <h3>{{ tr("从建设交付导向，走向建设与运营协同") }}</h3>
          <p>
            {{ tr("在规划与设计阶段前置运营需求，在工程建设阶段同步考虑设备使用、空间管理和产业招商，在项目交付后建立持续运营与维护机制。") }}
          </p>
        </div>

        <div class="epco-flow">
          <article
            v-for="item in epcoItems"
            :key="item.letter"
            class="epco-item"
          >
            <span class="epco-letter">{{ item.letter }}</span>
            <small>{{ tr(item.title) }}</small>
            <h3>{{ tr(item.subtitle) }}</h3>
            <p>{{ tr(item.description) }}</p>
          </article>
        </div>

        <div class="epco-logic">
          <span>{{ tr("运营需求前置") }}</span>
          <span>→</span>
          <span>{{ tr("设计建设协同") }}</span>
          <span>→</span>
          <span>{{ tr("交付运营衔接") }}</span>
        </div>

        <p class="technical-note">
          {{ tr("EPC+O 为拟研究的协同思路，不代表已确定承包方式。后续应结合项目性质、资金来源、法定采购要求及主体资格，依法明确合同安排、责任分工与运营机制。") }}
        </p>
      </section>

      <!-- 第四部分：投资建设 -->
      <section id="investment" class="content-section">
        <div class="section-title">
          <span>04 / INVESTMENT & RESOURCE INTEGRATION</span>
          <h2>{{ tr("投资建设与资源整合路径") }}</h2>
          <p>
            {{ tr("以建设条件与投资可行性为基础，研究资金、工程技术和产业运营资源的统筹组织。") }}
          </p>
        </div>

        <div class="investment-framework">
          <div class="framework-center">
            <small>RESOURCE INTEGRATION</small>
            <h3>{{ tr("项目投资与资源整合") }}</h3>
            <p>{{ tr("土地条件 · 资金安排 · 工程建设 · 产业运营") }}</p>
          </div>

          <div class="card-grid four">
            <article
              v-for="item in investmentItems"
              :key="item.number"
              class="framework-card"
            >
              <span class="card-number">{{ item.number }}</span>
              <h3>{{ tr(item.title) }}</h3>
              <p>{{ tr(item.description) }}</p>
            </article>
          </div>
        </div>

        <p class="technical-note">
          {{ tr("具体投资总额、融资方案、资金来源和收益预测，应在进一步明确规划条件与投资测算后另行论证。") }}
        </p>
      </section>

      <!-- 第五部分：实施计划 -->
      <section id="timeline" class="content-section">
        <div class="section-title">
          <span>05 / IMPLEMENTATION ROADMAP</span>
          <h2>{{ tr("项目实施阶段与工作计划") }}</h2>
          <p>
            {{ tr("按照“核实基础—深化方案—确定合作—依法建设—交付运营”的逻辑研究项目推进安排。") }}
          </p>
        </div>

        <div class="timeline-grid">
          <article
            v-for="item in implementationSteps"
            :key="item.number"
            class="timeline-card"
          >
            <span class="timeline-number">{{ item.number }}</span>
            <small>{{ tr(item.stage) }}</small>
            <h3>{{ tr(item.title) }}</h3>
            <p>{{ tr(item.description) }}</p>
          </article>
        </div>

        <div class="timeline-note">
          <strong>{{ tr("实施时序说明") }}</strong>
          <p>
            {{ tr("上述为项目推进阶段的建议顺序，并非已经批准的建设时间表。各阶段启动条件和实际工期，应根据前置手续、土地条件、设计审批、资金安排等因素确定。") }}
          </p>
        </div>
      </section>

      <!-- 第六部分：协调事项 -->
      <section id="support" class="content-section">
        <div class="section-title">
          <span>06 / COORDINATION & OUTLOOK</span>
          <h2>{{ tr("重点协调事项与发展展望") }}</h2>
          <p>
            {{ tr("围绕项目具备进一步深化研究和依法推进的条件，梳理需要核实、协调与衔接的重点工作。") }}
          </p>
        </div>

        <div class="card-grid two">
          <article
            v-for="item in supportItems"
            :key="item.title"
            class="content-card"
          >
            <h3>{{ tr(item.title) }}</h3>
            <p>{{ tr(item.description) }}</p>
          </article>
        </div>

        <div class="closing-card">
          <small>PROJECT DEVELOPMENT OUTLOOK</small>
          <h3>{{ tr("以建设与运营协同，探索城市综合服务新模式") }}</h3>
          <p>
            {{ tr("项目拟通过依法合规推进、产业融合发展、建筑技术创新和专业化运营，探索建设集品质居住、体育活动、文化体验、休闲商业及城市公共服务于一体的综合项目，为区域城市功能完善与产业发展提供新的研究方向。") }}
          </p>
        </div>
      </section>
    </main>

    <footer class="page-footer">
      {{ tr("鄂州市花湖机场临空区文体旅商住融合服务产业项目") }}
    </footer>
  </div>
</template>

<style scoped>
.implementation-page {
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
  padding: 95px 0 105px;
  background: linear-gradient(115deg, #09283f, #155675);
  color: #fff;
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
  font-size: 30px;
  color: #123d5d;
}

.section-title p {
  color: #748698;
  line-height: 1.8;
}

.feature-banner,
.epco-banner,
.closing-card {
  padding: 42px;
  background: linear-gradient(120deg, #123d5d, #1a6482);
  border-radius: 14px;
  color: white;
}

.feature-banner small,
.epco-banner small,
.closing-card small {
  color: #eabb79;
  letter-spacing: 2px;
}

.feature-banner h3,
.epco-banner h3,
.closing-card h3 {
  margin: 18px 0;
  font-size: 27px;
  line-height: 1.5;
}

.feature-banner p,
.epco-banner p,
.closing-card p {
  color: #d5e5ed;
  line-height: 2;
  max-width: 850px;
}

.card-grid {
  display: grid;
  gap: 20px;
  margin-top: 24px;
}

.card-grid.four {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.card-grid.two {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.content-card,
.framework-card {
  padding: 29px;
  background: white;
  border-radius: 12px;
}

.card-number {
  font-size: 29px;
  font-weight: 800;
  color: #c6d8e5;
}

.content-card h3,
.framework-card h3 {
  margin: 18px 0 12px;
  color: #123d5d;
  font-size: 18px;
  line-height: 1.5;
}

.content-card p,
.framework-card p {
  color: #687b8d;
  font-size: 14px;
  line-height: 1.9;
}

.technical-note,
.diagram-note {
  color: #8393a1;
  font-size: 12px;
  line-height: 1.9;
  margin-top: 18px;
}

.coordination-diagram {
  padding: 35px;
  background: white;
  border-radius: 14px;
  text-align: center;
}

.coordination-diagram > h3 {
  color: #123d5d;
  font-size: 23px;
  margin-bottom: 28px;
}

.coordination-top {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
}

.coordination-node {
  width: min(100%, 330px);
  padding: 23px 15px;
  background: #e8f0f5;
  border-radius: 9px;
  color: #123d5d;
  font-weight: 700;
}

.coordination-node.featured {
  background: #145779;
  color: white;
}

.coordination-symbol,
.coordination-arrow {
  color: #d5a05b;
  font-size: 28px;
}

.coordination-arrow {
  margin: 15px 0;
}

.coordination-bottom {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
}

.coordination-bottom div {
  padding: 18px 10px;
  background: #f1f5f8;
  border-radius: 8px;
  color: #123d5d;
  font-size: 14px;
}

.diagram-note {
  text-align: center;
}

.epco-flow {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  margin-top: 24px;
}

.epco-item {
  padding: 30px 23px;
  background: white;
  border-top: 4px solid #d8a35d;
  border-radius: 11px;
}

.epco-letter {
  display: block;
  font-size: 54px;
  font-weight: 800;
  color: #145779;
}

.epco-item small {
  color: #ba8b51;
  font-size: 11px;
}

.epco-item h3 {
  margin: 18px 0 12px;
  color: #123d5d;
  font-size: 20px;
}

.epco-item p {
  color: #687b8d;
  font-size: 13px;
  line-height: 1.9;
}

.epco-logic {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 24px;
  background: #e8f0f5;
  border-radius: 10px;
  padding: 24px;
  color: #123d5d;
  font-weight: 700;
}

.epco-logic > span:nth-child(even) {
  color: #bd8d4e;
  font-size: 22px;
}

.investment-framework {
  padding: 34px;
  background: #eaf1f5;
  border-radius: 14px;
}

.framework-center {
  margin: 0 auto 30px;
  padding: 32px;
  max-width: 530px;
  text-align: center;
  border-radius: 12px;
  color: white;
  background: #145779;
}

.framework-center small {
  color: #eabb79;
}

.framework-center h3 {
  font-size: 23px;
  margin: 16px 0;
}

.framework-center p {
  color: #d5e5ed;
  font-size: 13px;
}

.investment-framework .card-grid {
  margin-top: 0;
}

.timeline-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 14px;
}

.timeline-card {
  padding: 26px 19px;
  background: white;
  border-top: 4px solid #d8a35d;
  border-radius: 10px;
}

.timeline-number {
  display: block;
  font-size: 30px;
  color: #c6d8e5;
  font-weight: 800;
}

.timeline-card small {
  display: inline-block;
  margin-top: 13px;
  color: #bc8b4b;
}

.timeline-card h3 {
  margin: 14px 0 12px;
  color: #123d5d;
  font-size: 17px;
}

.timeline-card p {
  color: #687b8d;
  line-height: 1.9;
  font-size: 13px;
}

.timeline-note {
  margin-top: 24px;
  padding: 25px 30px;
  background: white;
  border-radius: 10px;
}

.timeline-note strong {
  color: #123d5d;
}

.timeline-note p {
  margin-top: 12px;
  color: #718293;
  line-height: 1.9;
}

.closing-card {
  margin: 30px 0 85px;
  background: linear-gradient(120deg, #09283f, #145675);
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
  .epco-flow,
  .coordination-bottom,
  .timeline-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 800px) {
  .section-navigation {
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

  .section-navigation,
  .card-grid.two,
  .card-grid.four,
  .epco-flow,
  .coordination-bottom,
  .timeline-grid {
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

  .feature-banner,
  .epco-banner,
  .closing-card,
  .coordination-diagram,
  .investment-framework {
    padding: 26px 20px;
  }

  .coordination-top {
    flex-direction: column;
  }

  .coordination-symbol {
    transform: rotate(90deg);
  }

  .epco-logic {
    gap: 10px;
    font-size: 13px;
  }
}
</style>
