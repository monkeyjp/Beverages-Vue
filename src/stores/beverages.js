import { ref, onMounted } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useBeveragesStore = defineStore("beverages", () => {
    const categories = ref([])

    onMounted(async () => {
        const { data: { drinks } } = await axios("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
        categories.value = drinks
    })


    return {
        categories
    }
})