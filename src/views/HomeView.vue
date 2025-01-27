<script setup>
import ProductCard from "@/components/ProductCard.vue";

const products = [
  {
    name: "Whiteboard pen",
    code: "[CONS_0001]",
    price: "1.20",
    image: "/images/whiteboard_pen.png",
  },
  {
    name: "Simple pen",
    code: "[CONS_0002]",
    price: "1.20",
    image: "/images/pen.jpg",
  },
  {
    name: "Screw",
    code: "[CONS_25630]",
    price: "0.20",
    image: "/images/screw.jpg",
  },
  {
    name: "Bolt",
    code: "[CONS_89957]",
    price: "0.50",
    image: "/images/bolt.jpg",
  },
  {
    name: "Customizable Desk",
    code: "[DESK0005]",
    price: "750.00",
    attributes: {
      color: {
        text: "White",
        color_code: "bg-[#8DDED5]",
      },
      legs: {
        text: "Custom",
        color_code: "bg-[#B9E9BF]",
      },
    },
    image: "/images/desk.png",
  },
  {
    name: "Customizable Desk",
    code: "[DESK0006]",
    attributes: {
      color: {
        text: "Black",
        color_code: "bg-[#E5DCF9]",
      },
      legs: {
        text: "Custom",
        color_code: "bg-[#B9E9BF]",
      },
    },
    price: "750.00",
    image: "/images/desk.png",
  },
  {
    name: "Stool",
    code: "[D_0045_B]",
    attributes: {
      color: {
        text: "Dark Blue",
        color_code: "bg-[#8DDED5]",
      },
    },
    price: "500.00",
  },
  {
    name: "Stool",
    code: "[D_0045_G]",
    attributes: {
      color: {
        text: "Green",
        color_code: "bg-[#E5DCF9]",
      },
    },
    price: "500.00",
  },
  {
    name: "Stool",
    code: "[D_0045_GR]",
    attributes: {
      color: "Grey",
    },
    price: "500.00",
  },
  {
    name: "Corner Desk Right Sit",
    code: "[E-COM06]",
    price: "147.00",
    image: "/images/corner_desk.jpg",
  },
  {
    name: "Large Cabinet",
    code: "[E-COM07]",
    price: "320.00",
    image: "/images/large_cabinet.jpg",
  },
  {
    name: "Storage Box",
    code: "[E-COM08]",
    price: "15.80",
    image: "/images/storage_box.jpg",
  },
  {
    name: "Large Desk",
    code: "[E-COM09]",
    price: "1,799.00",
    image: "/images/customizable_desk.png",
  },
  {
    name: "Pedal Bin",
    code: "[E-COM10]",
    price: "47.00",
    image: "/images/pedal_bin.jpg",
  },
  {
    name: "Cabinet with Doors",
    code: "[E-COM11]",
    price: "140.00",
    image: "/images/cabinet_with_doors.jpg",
  },
  {
    name: "Conference Chair",
    code: "[E-COM12]",
    attributes: {
      legs: {
        text: "Steel",
        color_code: "bg-[#BFD7F4]",
      },
    },
    price: "33.00",
    image: "/images/conference_chair.jpg",
  },
  {
    name: "Conference Chair",
    code: "[E-COM13]",
    attributes: {
      legs: {
        text: "Aluminum",
        color_code: "bg-[#98A5EF]",
      },
    },
    price: "39.40",
    image: "/images/conference_chair.jpg",
  },
  {
    name: "Customized Cabinet (Metric)",
    code: "[E-COM98]",
    price: "210.00",
    image: "/images/cabinet_with_doors.jpg",
  },
  {
    name: "Customized Cabinet (USA)",
    code: "[E-COM99]",
    price: "200.00",
    image: "/images/cabinet_with_doors.jpg",
  },
  {
    name: "Expenses",
    code: "[EXP_GEN]",
    price: "1.00",
    image: "/images/expenses.png",
  },
  {
    name: "Desk Organizer",
    code: "[FURN_0001]",
    price: "5.10",
    image: "/images/desk_organizer.jpg",
  },
  {
    name: "Desk Pad",
    code: "[FURN_0002]",
    price: "1.98",
    image: "/images/desk_pad.jpg",
  },
  {
    name: "LED Lamp",
    code: "[FURN_0003]",
    price: "0.90",
    image: "/images/led_lamp.jpg",
  },
  {
    name: "Letter Tray",
    code: "[FURN_0004]",
    price: "4.80",
    image: "/images/letter_tray.jpg",
  },
  {
    name: "Magnetic Board",
    code: "[FURN_0005]",
    price: "1.98",
    image: "/images/magnetic_board.jpg",
  },
  {
    name: "Monitor Stand",
    code: "[FURN_0006]",
    price: "3.19",
    image: "/images/monitor_stand.jpg",
  },
  {
    name: "Newspaper Rack",
    code: "[FURN_0007]",
    price: "1.28",
    image: "/images/newspaper_rack.jpg",
  },
  {
    name: "Small Shelf",
    code: "[FURN_0008]",
    price: "2.83",
    image: "/images/small_shelf.jpg",
  },
];
</script>

<template>
  <main class="p-4">
    <div class="grid grid-cols-12 gap-x-4 gap-y-2">
      <ProductCard
        class="col-span-12 md:col-span-6 lg:col-span-3"
        v-for="product in products"
        :name="product.name"
        :code="product.code"
        :price="product.price"
        :image="product.image"
        :attributes="product.attributes"
      />
    </div>
  </main>
</template>
