const app = Vue.createApp({
    data() {
        return {
            message: "hello world",
            tasks: ["pick up kids", "buy some food"],
            task: null,
        }
    },

    computed: {
        tasks_num() {
            return this.tasks.length
        }
    },

    methods: {
        onEnter() {
            this.tasks.push(this.task)
            this.task = null
        }
    }
})

const appMount = app.mount("#app")