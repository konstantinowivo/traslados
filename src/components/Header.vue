<template>
  <header>
    <nav class="navbar">
      <div class="container">
        <div class="logo">
          <img src="/images/logo_traslados.png" alt="Traslados Misiones" class="logo-image">
        </div>
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
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const menuActive = ref(false);

const navItems = [
  { id: 1, text: 'Inicio', link: '#inicio' },
  { id: 2, text: 'Destinos', link: '#destinos' },
  { id: 3, text: 'Servicios', link: '#servicios' },
  { id: 4, text: 'Contacto', link: '#contacto' }
];

const toggleMenu = () => {
  menuActive.value = !menuActive.value;
};

const closeMenu = () => {
  menuActive.value = false;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-image {
  height: 90px;
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
}

.nav-menu a {
  color: #000;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.15rem;
  transition: color 0.3s ease;
}

.nav-menu a:hover {
  color: #4CAF50;
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

  .nav-menu {
    position: fixed;
    left: -100%;
    top: 106px;
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

  .navbar .container {
    flex-wrap: wrap;
  }
}
</style>
