import { ref } from "vue";
import { defineStore } from "pinia";

export const useNotificationStore = defineStore("notification", () => {
    const text = ref("")
    const error = ref(false)
    const show = ref(false)


    return {
        text, error, show
    }
})