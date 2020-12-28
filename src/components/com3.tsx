import { defineComponent } from "vue";

export default defineComponent({
    name: 'bar2',
    props: {
        name2Show: {
            type: String,
            required: true
        },
        name2: {
            type: String,
            required: true
        }
    },
    setup (props) {
        return () => <div>{props.name2Show}--{props.name2}</div>
    }
})