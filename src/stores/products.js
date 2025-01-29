import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", () => {
  const products = ref([
    {
      name: "Whiteboard pen",
      code: "[CONS_0001]",
      price: "1.20",
      image: "./images/whiteboard_pen.png",
      favorite: false,
    },
    {
      name: "Simple pen",
      code: "[CONS_0002]",
      price: "1.20",
      image: "./images/pen.jpg",
      favorite: false,
    },
    {
      name: "Screw",
      code: "[CONS_25630]",
      price: "0.20",
      image: "./images/screw.jpg",
      favorite: false,
    },
    {
      name: "Bolt",
      code: "[CONS_89957]",
      price: "0.50",
      image: "./images/bolt.jpg",
      favorite: false,
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
      image: "./images/customizable_desk.png",
      favorite: false,
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
      image: "./images/customizable_desk.png",
      favorite: false,
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
      favorite: false,
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
      favorite: false,
    },
    {
      name: "Stool",
      code: "[D_0045_GR]",
      attributes: {
        color: {
          text: "Grey",
          color_code: "bg-[#E5DCF9]",
        },
      },
      price: "500.00",
      favorite: false,
    },
    {
      name: "Corner Desk Right Sit",
      code: "[E-COM06]",
      price: "147.00",
      image: "./images/corner_desk.jpg",
      favorite: false,
    },
    {
      name: "Large Cabinet",
      code: "[E-COM07]",
      price: "320.00",
      image: "./images/large_cabinet.jpg",
      favorite: false,
    },
    {
      name: "Storage Box",
      code: "[E-COM08]",
      price: "15.80",
      image: "./images/storage_box.jpg",
      favorite: false,
    },
    {
      name: "Large Desk",
      code: "[E-COM09]",
      price: "1,799.00",
      image: "./images/desk.png",
      favorite: false,
    },
    {
      name: "Pedal Bin",
      code: "[E-COM10]",
      price: "47.00",
      image: "./images/pedal_bin.jpg",
      favorite: false,
    },
    {
      name: "Cabinet with Doors",
      code: "[E-COM11]",
      price: "140.00",
      image: "./images/cabinet_with_doors.jpg",
      favorite: false,
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
      image: "./images/conference_chair.jpg",
      favorite: false,
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
      image: "./images/conference_chair.jpg",
      favorite: false,
    },
    {
      name: "Customized Cabinet (Metric)",
      code: "[E-COM98]",
      price: "210.00",
      image: "./images/cabinet_with_doors.jpg",
      favorite: false,
    },
    {
      name: "Customized Cabinet (USA)",
      code: "[E-COM99]",
      price: "200.00",
      image: "./images/cabinet_with_doors.jpg",
      favorite: false,
    },
    {
      name: "Expenses",
      code: "[EXP_GEN]",
      price: "1.00",
      image: "./images/expenses.svg",
      favorite: false,
    },
    {
      name: "Desk Organizer",
      code: "[FURN_0001]",
      price: "5.10",
      image: "./images/desk_organizer.jpg",
      favorite: false,
    },
    {
      name: "Desk Pad",
      code: "[FURN_0002]",
      price: "1.98",
      image: "./images/desk_pad.jpg",
      favorite: false,
    },
    {
      name: "LED Lamp",
      code: "[FURN_0003]",
      price: "0.90",
      image: "./images/led_lamp.jpg",
      favorite: false,
    },
    {
      name: "Letter Tray",
      code: "[FURN_0004]",
      price: "4.80",
      image: "./images/letter_tray.jpg",
      favorite: false,
    },
    {
      name: "Magnetic Board",
      code: "[FURN_0005]",
      price: "1.98",
      image: "./images/magnetic_board.jpg",
      favorite: false,
    },
    {
      name: "Monitor Stand",
      code: "[FURN_0006]",
      price: "3.19",
      image: "./images/monitor_stand.jpg",
      favorite: false,
    },
    {
      name: "Newspaper Rack",
      code: "[FURN_0007]",
      price: "1.28",
      image: "./images/newspaper_rack.jpg",
      favorite: false,
    },
    {
      name: "Small Shelf",
      code: "[FURN_0008]",
      price: "2.83",
      image: "./images/small_shelf.jpg",
      favorite: false,
    },
  ]);

  const markFavorite = (product) => {
    product.favorite = !product.favorite;
  };

  return { markFavorite, products };
});
