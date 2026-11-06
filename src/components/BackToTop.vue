
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// 控制返回顶部按钮是否显示
const isVisible = ref(false)

// 检测页面滚动位置
function handleScroll() {
  isVisible.value = window.scrollY > 400
}

// 点击按钮后返回页面顶部
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

// 组件加载时开始监听滚动
onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

// 组件卸载时清理监听，避免重复监听
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <Transition name="back-to-top">
    <button
      v-if="isVisible"
      class="back-to-top-button"
      type="button"
      aria-label="返回页面顶部"
      title="返回顶部"
      @click="scrollToTop"
    >
      <span class="top-arrow">↑</span>
      <span class="top-label">TOP</span>
    </button>
  </Transition>
</template>

<style scoped>
.back-to-top-button {
  position: fixed;
  right: 30px;
  bottom: 32px;
  z-index: 999;

  width: 58px;
  height: 58px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;

  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;

  background: #123d5d;
  color: #ffffff;

  box-shadow: 0 6px 22px rgba(12, 46, 70, 0.25);

  cursor: pointer;
  transition:
    background 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.back-to-top-button:hover {
  background: #1b6086;
  transform: translateY(-4px);
  box-shadow: 0 10px 26px rgba(12, 46, 70, 0.3);
}

.back-to-top-button:active {
  transform: translateY(-1px);
}

.top-arrow {
  font-size: 25px;
  font-weight: 500;
  line-height: 1;
}

.top-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
}

/* 按钮出现与消失的动画 */

.back-to-top-enter-active,
.back-to-top-leave-active {
  transition:
    opacity 0.25s ease,
    translate 0.25s ease;
}

.back-to-top-enter-from,
.back-to-top-leave-to {
  opacity: 0;
  translate: 0 12px;
}

/* 手机端适配 */

@media (max-width: 600px) {
  .back-to-top-button {
    right: 18px;
    bottom: 24px;
    width: 48px;
    height: 48px;
  }

  .top-arrow {
    font-size: 21px;
  }

  .top-label {
    font-size: 9px;
  }
}
</style>
