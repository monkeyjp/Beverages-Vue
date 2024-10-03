import { ref, onMounted, reactive } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import APIService from "@/services/APIService";

export const useBeveragesStore = defineStore("beverages", () => {
    const categories = ref([])
    const search = reactive({
        name: "",
        category: ""
    })

    const recipes = ref([])

    onMounted(async function () {
        const { data: { drinks } } = await APIService.getCategories()
        categories.value = drinks
    })

    async function getRecipes(params) {
        const { data: { drinks } } = await APIService.getRecipes(search)
        recipes.value = drinks

    }


    return {
        categories, search, getRecipes
    }
})