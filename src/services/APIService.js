import api from "@/lib/axios";



export default {
    getCategories() {
        return api("/list.php?c=list")
    },
    getRecipes({ category, name }) {
        return api(`/filter.php?c=${category}&i=${name}`)
    }

}