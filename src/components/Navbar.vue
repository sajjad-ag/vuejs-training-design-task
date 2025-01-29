<template>
  <nav class="flex flex-col gap-3 px-3 pt-2 pb-3 bg-white">
    <div class="flex flex-wrap justify-between items-lg-start lg:gap-3 grow">
      <!-- Left Section (Breadcrumbs) -->
      <div class="flex items-center gap-1 h-lg-100 order-0">
        <div class="flex gap-1">
          <button
            class="btn-primary px-3 py-1.5 rounded-sm text-white bg-[#6D4B65] hover:bg-[#5d3d55]"
          >
            New
          </button>
        </div>
        <div class="flex gap-1 truncate">
          <div class="text-[1.05rem] items-center min-w-0 hidden md:flex">
            <span class="min-w-0 truncate">Product Variants</span>
          </div>
          <div class="inline-flex">
            <button
              class="md:p-0 md:border-0 md:hover:bg-gray-100 md:rounded-full md:bg-transparent p-2 h-[37.6px] w-[37.6px] bg-[#e7e9ed] hover:bg-gray-200 cursor-pointer border-[1px] rounded-l-sm border-[#e7e9ed]"
            >
              <img
                src="/gear-fill-svgrepo-com.svg"
                class="w-[18px] h-[14px]"
                alt="Settings"
              />
            </button>
          </div>
        </div>
        <div class="me-auto"></div>
      </div>

      <!-- Right Navigation -->
      <div class="flex flex-wrap justify-end gap-1 lg:gap-3 order-1 lg:order-2">
        <!-- Pagination -->
        <div class="flex items-center gap-2">
          <div class="hidden md:flex">
            <span class="text-sm">1-80 / 126</span>
          </div>
          <div class="flex rounded-sm overflow-hidden gap-[1px]">
            <button
              class="p-2 bg-[#e7e9ed] hover:bg-gray-200 cursor-pointer border-[1px] rounded-l-sm border-[#e7e9ed]"
            >
              <ChevronLeft class="w-5 h-5" />
            </button>
            <button
              class="p-2 bg-[#e7e9ed] hover:bg-gray-200 cursor-pointer border-[1px] rounded-r-sm border-[#e7e9ed]"
            >
              <ChevronRight class="w-5 h-5" />
            </button>
          </div>
        </div>

        <!-- View Switcher -->
        <div class="flex rounded-sm overflow-hidden gap-1 md:gap-[1px]">
          <button
            class="p-2 bg-[#e7e9ed] hover:bg-gray-200 hidden md:flex cursor-pointer rounded-l-sm border-[1px] border-[#e7e9ed]"
          >
            <AlignJustify class="w-4 h-4" />
          </button>
          <button
            class="p-2 md:bg-[#e6f2f3] bg-[#e7e9ed] hover:bg-gray-200 cursor-pointer border-[1px] rounded-sm md:rounded-r-sm md:rounded-none border-[#e7e9ed] md:border-[#56a9ad]"
          >
            <AlignStartHorizontal class="w-4 h-4 fill-black" />
          </button>
          <button
            @click="toggleSearch()"
            class="p-2 bg-[#e7e9ed] hover:bg-gray-200 border-[1px] border-[#e7e9ed] rounded-sm flex md:hidden cursor-pointer"
          >
            <Search class="w-4 h-4" />
          </button>
        </div>
      </div>

      <!-- Search Section -->
      <div
        :class="{ hidden: !showSearch, 'md:flex': true }"
        class="w-full order-2 lg:order-1 mt-1 lg:mt-0 lg:max-w-[470px] h-[32.6px] search-section"
      >
        <div
          class="relative flex items-center border border-gray-300 rounded-md w-full"
        >
          <Search class="absolute left-2 w-[14px] h-[14px]" />
          <input
            type="text"
            placeholder="Search..."
            class="w-full pl-8 pr-7 py-1.5 focus:outline-none h-[32.6px]"
          />
          <button
            class="absolute right-0 px-[0.625rem] border-l border-l-[#d8dadd] py-[0.3125rem] flex justify-center items-center hover:bg-[#e7e9ed] rounded-r-sm h-full w-[30px] bg-transparent"
          >
            <ChevronDown class="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import {
  ChevronLeft,
  ChevronRight,
  AlignJustify,
  AlignStartHorizontal,
  ChevronDown,
  Search,
} from "lucide-vue-next";
import { ref, onMounted, onUnmounted } from "vue";

const showSearch = ref(false);

const toggleSearch = () => {
  showSearch.value = !showSearch.value;
};

const handleResize = () => {
  if (window.innerWidth >= 768) {
    showSearch.value = true;
  } else {
    showSearch.value = false;
  }
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
  handleResize();
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped>
.btn-primary {
  cursor: pointer;
  background-color: #6d4b65;
  transition: background-color 0.2s;
}

.btn-primary:hover {
  background-color: #5d3d55;
}

.search-section {
  transition: opacity 0.2s, max-height 0.2s;
}
</style>
