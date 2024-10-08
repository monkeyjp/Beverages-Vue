import { ref, watch, onMounted, computed } from "vue";
import { defineStore } from "pinia";
import { useBeveragesStore } from "./beverages";
import { useModalStore } from "./modal";
import { useNotificationStore } from "./notification";

export const useFavoritesStore = defineStore("favorites", () => {

    const beverages = useBeveragesStore()
    const modal = useModalStore()
    const notifications = useNotificationStore()

    const favorites = ref([])

    onMounted(() => {
        favorites.value = JSON.parse(localStorage.getItem("favorites")) ?? []
    })

    watch(favorites, () => {
        localStorageSync()
    }, {
        deep: true
    })

    function localStorageSync() {
        localStorage.setItem("favorites", JSON.stringify(favorites.value))
    }

    function isFavorite() {
        const localStorageFavorites = JSON.parse(localStorage.getItem("favorites")) ?? []
        return localStorageFavorites.some(favorite => favorite.idDrink == beverages.recipe.idDrink)
    }

    function deleteFavorite() {
        favorites.value = favorites.value.filter(favorite => favorite.idDrink !== beverages.recipe.idDrink)
        notifications.show = true
        notifications.text = "Item deleted from favorites"


    }

    function addFavorite() {
        favorites.value.push(beverages.recipe)
        notifications.show = true
        notifications.text = "Item added to favorites"


    }

    function handlClickFavorite() {
        if (isFavorite()) {
            deleteFavorite()
        } else {

            addFavorite()
        }
        modal.modal = false
    }

    const noFavorites = computed(() => favorites.value.length === 0)

    return {
        handlClickFavorite, favorites, isFavorite, noFavorites
    }
})