// button.tsx
import { defineComponent, PropType } from 'vue';

interface ButtonProps {
  mytype: string
}
const Button = defineComponent({
  name: 'Button',
  props: {
    obj: Object as PropType<ButtonProps>
  },
  setup (props, { slots }) {
    return () => (
      <button class={`btn-${props.obj.mytype}`}>
        {slots.default()}
      </button>
    )
  }
})

export default Button;