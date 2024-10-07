import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useFavoritesStore } from "./favorites";
import { useBeveragesStore } from "./beverages";

export const useModalStore = defineStore("modal", () => {
    const favorites = useFavoritesStore()
    const beverages = useBeveragesStore()
    const modal = ref(false)

    function handleClickModal() {
        modal.value = !modal.value
    }

    const buttonText = computed(() => {
        return favorites.isFavorite(beverages.recipe.idDrink) ? "Delete Favorite" : "Add to Favorites"
    })

    return {
        modal, handleClickModal, buttonText
    }
})