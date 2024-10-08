import { ref, onMounted, reactive, computed } from "vue";
import { defineStore } from "pinia";
import APIService from "@/services/APIService";
import { useModalStore } from "./modal";

export const useBeveragesStore = defineStore("beverages", () => {
    const modal = useModalStore()
    const categories = ref([])
    const search = reactive({
        name: "",
        category: ""
    })

    const recipes = ref([])
    const recipe = ref({})

    onMounted(async function () {
        const { data: { drinks } } = await APIService.getCategories()
        categories.value = drinks
    })

    async function getRecipes(params) {
        const { data: { drinks } } = await APIService.getRecipes(search)
        recipes.value = drinks

    }

    async function selectBeverage(id) {
        const { data: { drinks } } = await APIService.getRecipe(id)
        recipe.value = drinks[0]
        modal.handleClickModal()

    }

    const noRecipes = computed(() => recipes.value.length === 0)
    return {
        categories, search, getRecipes, recipes, selectBeverage, recipe, noRecipes
    }
})