<script setup lang="ts" >
import { ref, reactive, toRaw } from 'vue';
import draggable from 'vuedraggable';
import { DeleteOutlined, DragOutlined } from '@ant-design/icons-vue';

// ==== table 布局====
const MAX_LENGTH = 8;
let activeKey = ref('table');
let tableFormList = reactive([
  {
    id:0,
    name: '',
    type:[]
  }
]);

const rulesRef = reactive({
  name: [
    {
      required: true,
      message: 'Please input name',
      trigger: 'blur',
    }
  ],
  type: [
    {
      required: true,
      message: 'Please select type',
      type: 'array',
      trigger: 'blur',
    }
  ]
})
const options = [...Array(25)].map((_, i) => ({ value: (i + 10000).toString(10) + (i + 10000000) })) ;

const addItem = () => {
  let index = tableFormList.length;
  if (index >= MAX_LENGTH) {
    return;
  }
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
               :list="tableFormList" 
               item-key="id" 
               tag="tr" 
               handle=".handle">
                <template #item="{element,index}">
                  <td >
                    <div class="form-wrapper"> 
                      <a-form class="content-form" :model="tableFormList[index]" :rules="rulesRef" >
                        <a-form-item label="Activity name:" name="name" >
                          <a-input v-model:value="tableFormList[index].name"
                            style="width:300px"/>
                        </a-form-item>
                        <a-form-item label="Activity type:" name="type" >
                          <a-select
                            v-model:value="tableFormList[index].type"
                            :options="options"
                            mode="tags"
                            placeholder="Please select"
                            style="width:300px"
                          >
                          </a-select>
                        </a-form-item>
                      </a-form> 
                      <span class="handle"><DragOutlined /></span>
                    </div>
                </td>
           
          </template>
          <template #footer>
              <a-button type="primary" @click.prevent="addItem" :disabled="tableFormList.length == MAX_LENGTH" class="add-button" ghost> add ({{ tableFormList.length }} / {{ MAX_LENGTH }})</a-button>
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

}

.flex-box{
  display: flex;
  flex-direction: column;
}
.content-form{
  padding-top:16px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.form-wrapper{
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