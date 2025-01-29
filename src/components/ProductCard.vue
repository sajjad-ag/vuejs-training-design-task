<template>
  <div
    :class="
      cn(
        'p-2 grid grid-cols-12 md:border-[1px] border-t-[1px]  border-[#dcdee1]  bg-white',
        product.class
      )
    "
  >
    <div class="col-span-10 pe-2">
      <div class="flex items-center gap-1">
        <button class="cursor-pointer" @click="markFavorite(product)">
          <Star
            class="w-4 h-4 hover:fill-amber-300 hover:text-amber-300"
            :class="
              product.favorite
                ? 'text-amber-300 fill-amber-300'
                : 'text-[#b7bbc1]'
            "
          />
        </button>
        <span class="text-[0.9625rem]">
          {{ product.name }}
        </span>
      </div>
      <span class="text-[0.9625rem]">{{ product.code }}</span>
      <div v-if="product.attributes" class="flex gap-1 flex-wrap">
        <span
          v-if="product.attributes.legs"
          :key="key"
          :class="
            cn(
              'px-[0.82rem] py-[0.25rem] rounded-[50rem] max-h-[17.8667px] inline-flex items-center leading-3 relative max-w-full whitespace-nowrap overflow-hidden overflow-ellipsis min-w-[2.7ch]',
              product.attributes.legs.color_code
            )
          "
        >
          <div
            class="text-[0.75rem] font-[500] truncate inline-block whitespace-nowrap overflow-ellipsis max-w-full"
          >
            Legs: {{ product.attributes.legs.text }}
          </div>
        </span>
        <span
          v-if="product.attributes.color"
          :key="key"
          :class="
            cn(
              'px-[0.82rem] py-[0.25rem] rounded-[50rem] max-h-[17.8667px]  inline-flex items-center leading-3 relative max-w-full whitespace-nowrap overflow-hidden overflow-ellipsis min-w-[2.7ch]',
              product.attributes.color.color_code
            )
          "
        >
          <div
            class="text-[0.75rem] font-[500] truncate inline-block whitespace-nowrap overflow-ellipsis max-w-full"
          >
            Color: {{ product.attributes.color.text }}
          </div>
        </span>
      </div>
      <div v-else></div>

      <span class="text-[0.9625rem]">Price: {{ product.price }}</span>
    </div>
    <div class="col-span-2 max-w-full h-fit">
      <div class="h-full w-fit">
        <img
          :src="product.image ? product.image : './images/placeholder.png'"
          alt="Product Image"
          class="w-16 h-16"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { cn } from "@/lib/utils";
import { useProductsStore } from "@/stores/products";
import { CameraOff, Star } from "lucide-vue-next";
import { BiCameraFill } from "oh-vue-icons/icons";
import { CoStar } from "oh-vue-icons/icons";
const props = defineProps({
  product: Object,
});

const { markFavorite } = useProductsStore();
</script>
