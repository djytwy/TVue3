import { defineComponent } from "vue";

export default defineComponent({
    name: 'bar',
    props: {
        nameShow: {
            type: String,
            required: true
        },
        name2: {
            type: String,
            required: true
        }
    },
    setup (props) {
        return () => <div>{props.nameShow}--{props.name2}</div>
    }
})