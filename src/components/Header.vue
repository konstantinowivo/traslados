<template>
  <header>
    <nav class="navbar">
      <div class="container">
        <a href="#" class="logo" @click.prevent="scrollToTop">
          <img src="/images/logo_traslados.png" alt="Traslados Misiones" class="logo-image">
        </a>
        <button
          class="hamburger"
          :class="{ active: menuActive }"
          @click="toggleMenu"
        >
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
        <ul class="nav-menu" :class="{ active: menuActive }">
          <li v-for="item in navItems" :key="item.id">
            <a
              :href="item.link"
              class="nav-link"
              @click="closeMenu"
            >
              {{ item.text }}
            </a>
          </li>
        </ul>
        <div class="language-switch" @click="toggleLanguage">
          <span class="lang-label" :class="{ active: currentLanguage === 'es' }">ES</span>
          <div class="switch-toggle">
            <div class="switch-slider" :class="{ active: currentLanguage === 'en' }"></div>
          </div>
          <span class="lang-label" :class="{ active: currentLanguage === 'en' }">EN</span>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useI18n } from '../composables/useI18n';

const { currentLanguage, t, toggleLanguage } = useI18n();

const menuActive = ref(false);

const navItems = computed(() => [
  { id: 1, text: t.value.nav.home, link: '#inicio' },
  { id: 2, text: t.value.nav.destinations, link: '#destinos' },
  { id: 3, text: t.value.nav.services, link: '#servicios' },
  { id: 4, text: t.value.nav.contact, link: '#contacto' }
]);

const toggleMenu = () => {
  menuActive.value = !menuActive.value;
};

const closeMenu = () => {
  menuActive.value = false;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const handleClickOutside = (e) => {
  const nav = document.querySelector('.nav-menu');
  const hamburger = document.querySelector('.hamburger');

  if (nav && hamburger && !hamburger.contains(e.target) && !nav.contains(e.target)) {
    menuActive.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
header {
  background-color: #f9f9f9;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar {
  padding: 1rem 0;
}

.navbar .container {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 2rem;
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.02);
}

.logo-image {
  height: 99px;
  width: auto;
  object-fit: contain;
}

.logo h1 {
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
  justify-content: center;
}

.nav-menu a {
  color: #000;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.27rem;
  transition: color 0.3s ease;
}

.nav-menu a:hover {
  color: #4CAF50;
}

.language-switch {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  user-select: none;
}

.lang-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: #999;
  transition: color 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.lang-label.active {
  color: #4CAF50;
}

.switch-toggle {
  position: relative;
  width: 44px;
  height: 24px;
  background-color: #ddd;
  border-radius: 12px;
  transition: background-color 0.3s ease;
}

.switch-slider {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 18px;
  height: 18px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.switch-slider.active {
  transform: translateX(20px);
  background-color: #4CAF50;
}

.language-switch:hover .switch-toggle {
  background-color: #ccc;
}

.hamburger {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 101;
}

.hamburger .bar {
  width: 25px;
  height: 3px;
  background-color: #000;
  margin: 3px 0;
  transition: all 0.3s ease;
  border-radius: 3px;
}

.hamburger.active .bar:nth-child(1) {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.hamburger.active .bar:nth-child(2) {
  opacity: 0;
}

.hamburger.active .bar:nth-child(3) {
  transform: rotate(45deg) translate(-5px, -6px);
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .navbar .container {
    grid-template-columns: auto 1fr;
  }

  .nav-menu {
    position: fixed;
    left: -100%;
    top: 115px;
    flex-direction: column;
    background-color: #f9f9f9;
    width: 100%;
    text-align: center;
    transition: left 0.3s ease;
    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.1);
    padding: 2rem 0;
    gap: 0;
    z-index: 99;
  }

  .nav-menu.active {
    left: 0;
  }

  .nav-menu li {
    padding: 1rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .nav-menu li:last-child {
    border-bottom: none;
  }

  .nav-menu a {
    font-size: 1.1rem;
    display: block;
    width: 100%;
  }

  .language-switch {
    grid-column: 2;
    justify-self: end;
  }
}
</style>
