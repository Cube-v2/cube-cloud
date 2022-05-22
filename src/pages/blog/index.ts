import {App} from 'vue'
import MatrixBlogCard from './component/card.vue'

export default {
    install(app: App) {
        app.component(MatrixBlogCard.name, MatrixBlogCard)
    }
}