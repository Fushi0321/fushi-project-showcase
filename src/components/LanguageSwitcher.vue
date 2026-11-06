
<script setup lang="ts">
import { useLanguage } from '../i18n'

const { language, setLanguage } = useLanguage()
</script>

<template>
  <div class="language-switcher" aria-label="网站语言切换">
    <button
      type="button"
      :class="{ active: language === 'zh' }"
      :aria-pressed="language === 'zh'"
      @click="setLanguage('zh')"
    >
      中文
    </button>

    <button
      type="button"
      :class="{ active: language === 'en' }"
      :aria-pressed="language === 'en'"
      @click="setLanguage('en')"
    >
      EN
    </button>
  </div>
</template>

<style scoped>
.language-switcher {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  padding: 3px;
  border: 1px solid #dce5ed;
  border-radius: 8px;
  background: #f2f5f8;
  flex-shrink: 0;
}

.language-switcher button {
  border: none;
  background: transparent;
  color: #718293;
  padding: 7px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-family: inherit;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  transition: background 0.2s, color 0.2s;
}

.language-switcher button:hover {
  color: #123d5d;
}

.language-switcher button.active {
  background: #123d5d;
  color: #ffffff;
  box-shadow: 0 2px 6px rgba(18, 61, 93, 0.12);
}

.language-switcher button:focus-visible {
  outline: 2px solid #d6a25b;
  outline-offset: 2px;
}

@media (max-width: 600px) {
  .language-switcher button {
    padding: 6px 9px;
    font-size: 11px;
  }
}
</style>
