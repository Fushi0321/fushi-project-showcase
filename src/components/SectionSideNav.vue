
<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

interface SectionItem {
  id: string
  title: string
}

const props = defineProps<{
  sections: SectionItem[]
}>()

const activeId = ref('')
const isVisible = ref(false)

function updateActiveSection() {
  const scrollPosition = window.scrollY
  isVisible.value = scrollPosition > 300

  // 检测当前阅读位置对应的模块
  let currentId = props.sections[0]?.id ?? ''

  for (const section of props.sections) {
    const element = document.getElementById(section.id)

    if (element) {
      const top = element.getBoundingClientRect().top

      if (top <= window.innerHeight * 0.35) {
        currentId = section.id
      }
    }
  }

  activeId.value = currentId
}

// 点击横杠，滚动到对应模块
function goToSection(id: string) {
  const element = document.getElementById(id)

  if (!element) return

  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })

  activeId.value = id
}

onMounted(async () => {
  await nextTick()

  updateActiveSection()

  window.addEventListener('scroll', updateActiveSection, {
    passive: true,
  })

  window.addEventListener('resize', updateActiveSection)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
  window.removeEventListener('resize', updateActiveSection)
})
</script>

<template>
  <Transition name="side-nav">
    <nav
      v-if="isVisible"
      class="section-side-nav"
      aria-label="当前专题章节导航"
    >
      <button
        v-for="(section, index) in sections"
        :key="section.id"
        type="button"
        class="side-nav-item"
        :class="{ active: activeId === section.id }"
        :aria-label="`跳转到${section.title}`"
        :aria-current="activeId === section.id ? 'location' : undefined"
        :title="section.title"
        @click="goToSection(section.id)"
      >
        <span class="side-nav-line"></span>
        <span class="side-nav-tooltip">
          {{ String(index + 1).padStart(2, '0') }}
          {{ section.title }}
        </span>
      </button>
    </nav>
  </Transition>
</template>

<style scoped>
.section-side-nav {
  position: fixed;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 900;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;

  padding: 0;
  border: none;
  border-radius: 0;

  background: transparent;
  box-shadow: none;
  backdrop-filter: none;
}


.side-nav-item {
  position: relative;
  display: flex;
  align-items: center;
  width: 35px;
  height: 16px;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
}

.side-nav-line {
  display: block;
  width: 15px;
  height: 3px;
  border-radius: 5px;
  background: #9aabba;

  transition:
    width 0.25s ease,
    background 0.25s ease;
}

.side-nav-item:hover .side-nav-line {
  width: 25px;
  background: #1b6086;
}

.side-nav-item.active .side-nav-line {
  width: 32px;
  height: 4px;
  background: #d7a15a;
}

.side-nav-tooltip {
  position: absolute;
  left: 48px;
  top: 50%;
  transform: translateY(-50%);
  white-space: nowrap;

  padding: 9px 14px;
  border-radius: 7px;

  background: #123d5d;
  color: #fff;
  font-size: 12px;

  opacity: 0;
  visibility: hidden;
  pointer-events: none;

  transition:
    opacity 0.2s ease,
    visibility 0.2s ease;
}

.side-nav-item:hover .side-nav-tooltip,
.side-nav-item:focus-visible .side-nav-tooltip {
  opacity: 1;
  visibility: visible;
}

.side-nav-enter-active,
.side-nav-leave-active {
  transition: opacity 0.25s ease;
}

.side-nav-enter-from,
.side-nav-leave-to {
  opacity: 0;
}

@media (max-width: 600px) {
  .section-side-nav {
    left: 8px;
    padding: 0;
    gap: 12px;
  }

  .side-nav-item {
    width: 26px;
  }

  .side-nav-line {
    width: 10px;
  }

  .side-nav-item.active .side-nav-line {
    width: 22px;
  }

  .side-nav-tooltip {
    left: 35px;
    font-size: 11px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .side-nav-line,
  .side-nav-tooltip,
  .side-nav-enter-active,
  .side-nav-leave-active {
    transition: none;
  }
}
</style>
