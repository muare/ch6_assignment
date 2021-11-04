const app = Vue.createApp({
    data() {
        return {
            message: "hello world",
            tasks: ["pick up kids", "buy some food"],
            // task: null,
        }
    },

    computed: {
        tasks_num() {
            return this.tasks.length
        }
    },

    methods: {
        addNewTask(task) {
            this.tasks.push(task)
            // this.task = null
        }
    }
})

app.component('taskcompound', {
    emits: ['add_task'], 
    props: {
        tasks: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            task: null,
        }
    },
    template: `
    <input type="text" v-model="task" @keyup.enter="onEnter">
    <tasklist :tasks="tasks"></tasklist>
    `,
    methods: {
        onEnter() {
            this.$emit('add_task',this.task)
        }
    }
})

app.component('tasklist', {
    props: {
        tasks: {
            type: Object,
            required: true,
        }
    },
    template: `
    <div class="round_corner" v-for="(ltask,id) in tasks" :key="id">
    <p>{{ltask}}</p>
    </div>
    `
})

const appMount = app.mount("#app")