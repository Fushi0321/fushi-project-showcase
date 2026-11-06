
import { ref, computed } from 'vue'

export type Language = 'zh' | 'en'

// 全站共用的当前语言
const currentLanguage = ref<Language>('zh')

// 基础翻译词典
const messages = {
  zh: {
    home: '项目首页',
    projectTitle: '文体旅商住融合服务产业',
    projectSubtitle: '项目总体策划与发展愿景',
    explore: '探索项目总体规划',
    heroLocation: '湖北省 · 鄂州市花湖机场临空区',
    heroDescription:
    '以品质居住为基础，以体育运动为核心特色，以文化艺术与文旅体验为内涵，以商业服务、教育健康和智慧科技为支撑，探索具有长期运营价值的城市综合服务项目。',
    projectVision: '项目总体愿景',
    projectOverview: '项目六大核心专题',
    background: '项目背景与实施基础',
    vision: '总体定位与发展愿景',
    planning: '总体规划与空间体系',
    architecture: '建筑技术与设计创新',
    operations: '产业运营与商业模式',
    implementation: '合作实施与发展路径',
  },
  en: {
    home: 'Home',
    projectTitle: 'Culture, Sports, Tourism, Commerce & Living',
    projectSubtitle: 'Master Plan & Development Vision',
    explore: 'Explore the Master Plan',
    heroLocation: 'Huahu Airport Economic Zone · Ezhou, Hubei',
    heroDescription:
    'Built upon quality living, with sports as a distinctive focus, culture and tourism as key experiences, and commercial services, education, wellness and smart technologies as supporting elements, the project explores an integrated urban development model designed for long-term operations.',
    projectVision: 'Project Vision',
    projectOverview: 'Six Core Project Themes',
    background: 'Project Background & Foundations',
    vision: 'Positioning & Development Vision',
    planning: 'Master Planning & Spatial Framework',
    architecture: 'Architectural Technology & Innovation',
    operations: 'Industry Operations & Business Model',
    implementation: 'Cooperation & Implementation Roadmap',
  },
} as const

// 供 Vue 页面使用的语言切换函数
export function useLanguage() {
  const language = computed(() => currentLanguage.value)

  function setLanguage(value: Language) {
    currentLanguage.value = value
  }

  function toggleLanguage() {
    currentLanguage.value =
      currentLanguage.value === 'zh' ? 'en' : 'zh'
  }

  function t(key: keyof typeof messages.zh): string {
    return messages[currentLanguage.value][key]
  }

  return {
    language,
    setLanguage,
    toggleLanguage,
    t,
  }
}
