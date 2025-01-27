<script setup lang="ts">
import {
  AlignEndHorizontal,
  AlignJustify,
  AlignStartHorizontal,
  ChevronLeft,
  ChevronRight,
  Clock,
  Filter,
  Settings,
  ChevronDown,
} from "lucide-vue-next";
import { Search } from "lucide-vue-next";
</script>

<template>
  <nav class="bg-white p-4 shadow-md">
    <div class="flex justify-between flex-wrap gap-4">
      <div class="flex items-center gap-2">
        <span class="rounded-sm text-white bg-[#6D4B65] px-2 py-1">New</span>
        <div class="flex items-end gap-2">
          <span> Product Variants </span>
          <img
            src="/gear-fill-svgrepo-com.svg"
            class="w-[13px] h-[13px] my-auto"
          />
        </div>
      </div>
      <div class="relative">
        <Search
          class="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
        />
        <button
          class="absolute top-1/2 left-10 transform -translate-y-1/2 bg-[#6D4B65] px-2 py-1 rounded-sm hover:bg-[#6D4B65]/80 cursor-pointer"
        >
          <Filter class="w-4 h-4 text-white" />
        </button>
        <input
          type="text"
          placeholder="Search..."
          class="border border-gray-300 rounded-md p-1 pl-20 pr-8 w-full"
        />
        <button
          class="absolute right-0 top-1/2 transform -translate-y-1/2 border border-l-[#F8F7F8] border-r-0 border-t-0 border-b-0 h-full w-6 rounded-r-sm cursor-pointer flex justify-center items-center"
        >
          <ChevronDown class="w-4 h-4 text-[#ABACAF] pointer-events-none" />
        </button>
      </div>
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-1">
          <button
            class="bg-[#E7E8EC] p-2 rounded-sm hover:bg-gray-400 cursor-pointer"
          >
            <ChevronLeft class="w-4 h-4" />
          </button>
          <button
            class="bg-[#E7E8EC] p-2 rounded-sm hover:bg-gray-400 cursor-pointer"
          >
            <ChevronRight class="w-4 h-4" />
          </button>
        </div>
        <div class="flex items-center">
          <button
            class="bg-[#E7E8EC] p-2 rounded-l-sm hover:bg-gray-400 cursor-pointer"
          >
            <AlignJustify class="w-4 h-4" />
          </button>
          <button class="bg-[#E7E8EC] p-2 hover:bg-gray-400 cursor-pointer">
            <AlignStartHorizontal class="w-4 h-4" />
          </button>
          <button
            class="bg-[#E7E8EC] p-2 rounded-r-sm hover:bg-gray-400 cursor-pointer"
          >
            <Clock class="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
