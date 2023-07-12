<script setup lang="ts" >
import { ref, reactive, toRaw } from 'vue';
import draggable from 'vuedraggable';
import { Form } from 'ant-design-vue';
import { DeleteOutlined, DragOutlined } from '@ant-design/icons-vue';
const useForm = Form.useForm;
let activeKey = ref('table');
let tableFormList = reactive([
  {
    id:0,
    name: '',
    type:[]
  }
]);
let dragging = ref(false);

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
const options = [...Array(25)].map((_, i) => ({ value: (i + 10000).toString(36) + (i + 1) })) ;

const { resetFields, validate, validateInfos } = useForm(tableFormList, rulesRef);
const onSubmit = () => {
  validate().then(()=> console.log(toRaw(tableFormList))).catch(err=>{console.log('error',err)})
}
const addItem = () => {
  let index = tableFormList.length;
  const defaultItem =  {
  name: '',
  type: [],
  id: index++
  }
  tableFormList.push(defaultItem)

}
const deleteItem = (index:number) => {
  tableFormList.splice(index, 1);
}
const checkMove = function (e: any) {
  console.log(e)
  const curIndex = e.draggedContext.index;
  const futureIndex = e.draggedContext.futureIndex;
  if (curIndex == futureIndex) {
    return;
  }
 
  const curItem = tableFormList.splice(curIndex,1)[0];// 删除当前元素
  const fIndex = futureIndex - 1 >= 0 ? futureIndex - 1: futureIndex;
  tableFormList.splice(fIndex, 1, curItem);
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
            <tr class="left-index">
              <td v-for="{},index in tableFormList"  :class="{'index-wrapper':tableFormList.length > 1}" >
                <div class="circle-index">
                  <div class="slot-box">{{ index+ 1 }}</div>
                </div>
              </td>
            </tr>
               <draggable  
               v-model="tableFormList" 
               item-key="id" 
               tag="tr" 
               handle=".handle">
                <template #item="{element,index}">
                  <td>
                    <a-form class="content-form">
                    <a-form-item  v-bind="validateInfos.name">
                      <div>
                        <span class="form-label">Activity name:</span><a-input v-model:value="element.name" style="width:300px"/>
                      </div>
                     <div style="margin-top:16px">
                      <span class="form-label">Activity type:</span><a-select
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
          <template #footer>
              <a-button type="primary" @click.prevent="addItem" class="add-button" ghost> add ({{ tableFormList.length }} / 8)</a-button>
          </template>
        </draggable>
            <tr class="right-action">
              <td v-for="{},index in tableFormList" @click.native="deleteItem(index)" :class="{'disabled':tableFormList.length < 2}">
                <DeleteOutlined /></td>
            </tr>
          </table>
          
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
$blue:#1890ff;

.draggable-table{
  writing-mode: vertical-lr;
}
.draggable-table td{
  padding-top:8px;
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

.circle-index{
  display: inline-block;
  width:30px;
  height:30px;
  position: relative;
 
 
}
.slot-box{
  position: absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  border-radius: 50%;
  border: 1px solid $blue;
  background-color: white;
  line-height:30px;
  text-align: center;
}
.index-wrapper{
 position: relative;
}
.left-index{
   counter-reset:mandy 0;//计数器名字为mandy 默认值为1
}
.counter{
  counter-increment: mandy;// 递增的值
  content:counter(mandy);
}
.left-index .index-wrapper::before{
  position: absolute;
  left:50%;
  right:0;
  top:0;
  bottom:0;
  width:1px;
  background-color:$blue;
  opacity: .4;
  content:'';

}
.left-index .index-wrapper:first-child::before{
  position: absolute;
  left:50%;
  right:0;
  top:calc(50% + 15px);
  bottom:0;
  width:1px;
  background-color:$blue;
  opacity: .4;
  content:'';
}
.left-index .index-wrapper:last-child::before{
  position: absolute;
  left:50%;
  right:0;
  top:0;
  bottom:calc(50% + 15px);;
  width:1px;
  background-color:$blue;
  opacity: .4;
  content:'';
}

.add-button{
  display: block;
  width:450px;
  margin-top:24px;
  margin-left:16px;
  writing-mode: horizontal-tb;
}
.form-label{
  width:100px;
  display: inline-block;
}
.disabled{
  cursor:not-allowed;
  opacity: .5;
  pointer-events: none;
}
</style>