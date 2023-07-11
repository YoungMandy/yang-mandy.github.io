<script setup lang="ts" >
import { ref, reactive, toRaw } from 'vue';
import draggable from 'vuedraggable';
import { Form } from 'ant-design-vue';
import { DeleteOutlined, DragOutlined } from '@ant-design/icons-vue';
const useForm = Form.useForm;
let activeKey = ref('table');
let tableFormList = reactive([
  {
  name: '',
  region: undefined,
  type:[]
  }
]);

const modelRef = reactive({
  name: '',
  region: undefined,
  type:[]
})
const rulesRef = reactive({
  name: [
    {
      required: true,
      message:'Please input name',
    }
  ],
  type: [
    {
      required: true,
      message: 'Please select type',
      type:'array'
    }
  ]
})
const options = [...Array(25)].map((_, i) => ({ value: (i + 10).toString(36) + (i + 1) })) ;

const { resetFields, validate, validateInfos } = useForm(modelRef, rulesRef);
const onSubmit = () => {
  validate().then(()=> console.log(toRaw(modelRef))).catch(err=>{console.log('error',err)})
}
const addItem = () => {
  const defaultItem =  {
  name: '',
  region: undefined,
  type:[]
  }
  tableFormList.push(defaultItem)

}
const deleteItem = () => {
  
}
</script>
<template>
  <section class="component__css-layout">
    <h1 class="page-title">css布局</h1>
    <p class="page-description">
      <ul>
        布局方式主要有下面四种
        <li>table布局(很少用，但是在等高布局的时候很有效)</li>
        <li>div + float布局</li>
        <li>flex布局</li>
        <li>grid布局</li>
      </ul>
    </p>
      <a-collapse v-model:activeKey="activeKey">
        <a-collapse-panel key="table" header="table布局" >
          table布局在等高拖拽的时候有妙用,此处拖拽用到了
          <a 
          link="https://github.com/SortableJS/vue.draggable.next"
          >vuedraggable</a>
          <table class="draggable-table">
            <thead class="left-index">
              <td v-for="{},index in tableFormList" class="index-wrapper">
                <div class="circle-index">{{ index }}</div>
              </td>
            </thead>
               <draggable  v-model="tableFormList" item-key="id" tag="tr" handle=".handle">
                <template #item="{element}">
                  <td>
                    <a-form class="content-form">
                    <a-form-item label="Activity name" v-bind="validateInfos.name">
                      <div>
                         <a-input v-model:value="element.name" style="width:300px"/>
                      </div>
                     <div style="margin-top:16px">
                      <a-select
                        v-model:value="element.type"
                        :options="options"
                        mode="tags"
                        placeholder="Please select"
                        style="width:300px"
                      >
                      </a-select>
                     </div>
                      
                    </a-form-item>
                    <span class="handle"><DragOutlined /></span>
                  </a-form> 
                </td>
           
          </template>
        </draggable>
            <tfoot class="right-action">
              <td v-for="index in tableFormList"><DeleteOutlined /></td>
            </tfoot>
          </table>
          
         

         <a-button type="primary" @click.prevent="addItem">add</a-button>
              <a-button style="margin-left: 10px" @click="deleteItem">delete</a-button>
        
          插件
            
        </a-collapse-panel>
        <a-collapse-panel key="float" header="div + float布局" :forceRender="true">
          div+ float布局
        </a-collapse-panel>
        <a-collapse-panel key="flex" header="flex布局">
          flex是目前最常用的布局
        </a-collapse-panel>
        <a-collapse-panel key="grid" header="grid布局">
          grid布局是三维布局
        </a-collapse-panel>
      </a-collapse>
  </section>

</template>
<style lang="scss" scoped>

.draggable-table{
  writing-mode: vertical-lr;
}
.draggable-table td{
  writing-mode: horizontal-tb;
}
.draggable-table {
  .handle{
    margin-left:4px;
  }
  .ant-form-item{
    margin-top:16px ;
    margin-bottom: 16px;
  }
}

.flex-box{
  display: flex;
  flex-direction: column;
}
.content-form{
  margin-left:16px;
  display: flex;
  align-items: center;
  border: 1px solid #eee;
  padding:8px;
}
.left-index{
  counter-reset:mandy 1;//计数器名字为mandy 默认值为1
  counter-increment: mandy;// 递增的值
  content:counter(mandy);
}
.circle-index{
  display: inline-block;
  border: 1px solid blue;
  border-radius: 50%;
  width:30px;
  height:30px;
  text-align: center;
  line-height:30px;
  background-color: white;
 
}
.index-wrapper{
 position: relative;
}
.left-index  :not(:last-child).index-wrapper::before{
  position: absolute;
  left:50%;
  right:0;
  height:calc(100% - 32px);
  margin-top:31px;
  margin-bottom: 1px;
  width:1px;
  background-color:red;
  content:'';
}
</style>