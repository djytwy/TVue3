import { defineComponent } from "vue";
import { ElButton, ElMessage } from "element-plus";

export default defineComponent({
  name: 'tsxCom',
  props: {
    tsxName: {
      type: String,
      required: true
    },
    tsxShow: {
      type: String,
      required: true
    }
  },
  setup (props) {

    const testTxs = () => {
      ElMessage('tsx中使用弹窗！')
    };

    return () =>
      <div style={{width: '400px', height: '40px'}}>
        {props.tsxName}--{props.tsxShow}
        <ElButton type='primary' onClick={testTxs}>
          TSX中使用elementUI组件
        </ElButton>
      </div>
  }
})