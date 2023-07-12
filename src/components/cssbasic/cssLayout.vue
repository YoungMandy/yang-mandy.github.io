<script setup lang="ts" >
import { ref, reactive, toRaw } from 'vue';
import draggable from 'vuedraggable';
import { DeleteOutlined, DragOutlined } from '@ant-design/icons-vue';
import { ChildProcess } from 'child_process';

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
// ==== float布局 ====
const float = reactive({
  display:'inline-block'
})

// ==== flex布局 ====
const flex = reactive({
  parent: {
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  child: {
    left: {
      width:200,
      order: 0,
      flexGrow: 0,
      flexShrink: 1,
      flexBasis: 'auto',
      alignSelf:'auto'
    },
    center: {
      width:'auto',
      order: 0,
      flexGrow: 0,
      flexShrink: 1,
      flexBasis: 'auto',
      alignSelf:'auto'
    },
    right: {
      width:200,
      order: 0,
      flexGrow: 0,
      flexShrink: 1,
      flexBasis: 'auto',
      alignSelf:'auto'
    }
  }
})
const flexParentStyle:any = reactive({
  'justify-content':flex.parent.justifyContent ,
  'align-items':flex.parent.alignItems,
  'flex-direction':flex.parent.flexDirection,
  'flex-wrap':flex.parent.flexWrap,
})
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
          <ul>
            <li> div+ float布局一般用在某个按钮需要居右,左边内容区占完的情况,在flex布局出现之前蛮常用的</li>
            <li>默认情况下(没有使用flex或者grid布局),块状元素独占行,即使是宽度不满整行</li>
          </ul>
         
          <a-form class="control-form" layout="inline" >
            <a-form-item label="内容区域的display值:">
              <a-radio-group v-model:value="float.display" button-style="solid">
                <a-radio-button value="inline-block">inline-block</a-radio-button>
                <a-radio-button value="block">block</a-radio-button>
              </a-radio-group>
            </a-form-item>
          </a-form>

          <div class="layout__float">
            <div class="layout__float-content" :style="{display:float.display}">内容块1</div>
            <div class="layout__float-content" :style="{display:float.display}">内容块2</div>
            <a-button class="layout__float-button">我是浮动在右侧的按钮</a-button>
          </div>
        </a-collapse-panel>

        <a-collapse-panel key="flex" header="flex布局">
          flex是目前最常用的布局(最初是在2009年由W3C提出)
          flex布局通过对父盒子设置
          <code>display:flex</code>或者
          <code>display:inline-flex</code>
          开启,
          <ol class="code-ol">
            可以在父盒子上设置的css样式有
            <li>flex-direction: row (默认值) | row-reverse | column | column-reverse</li>
            <li>flex-warp: nowrap(默认值,不换行) | wrap | warp-reverse </li>
            <li>flex-flow: flex-direction和flex-wrap的缩写,默认值是row nowrap </li>
            <li>justify-content: flex-start(默认值) | flex-end | center | space-between | space-around </li>
            <li>align-items: stretch(默认值,如果项目未设置高度或者高度为auto,将占满整个容器) | flex-start | flex-end | center | baseline </li>
            <li>align-content: stretch(默认值) | flex-start | flex-end | center | space-between | space-around</li>
          </ol>
          <ol class="code-ol">
            可以在子项目上设置的css样式有
            <li>align-self:auto(默认值,表示继承父元素的align-items属性) | flex-start |flex-end | center | baseline | stretch</li>
            <li>flex-grow:0 (默认值,即使有剩余空间,也不放大) ,如果有项目<code>flex-grow</code>为2,其他项目都为1,那么前者占据的<code>剩余空间</code>比其他的多一倍</li>
            <li>flex-shrink:1(默认值),当空间不足时,都将等比例缩小</li>
            <li>flex-basis:auto(默认值，项目本来的大小)</li>
            <li>order: 0 (默认值),数值越大项目越靠前</li>
            <li>flex 是flex-grow flex-shrink flex-basis的缩写</li>
          </ol>

          <div class="layout__flex-control">
         
            <!-- left项目的样式控制 -->
            <a-form class="control-form" layout="inline" >
              <a-form-item label="左边项目的width:">
                <a-input
                  v-model:value="flex.child.left.width"
                  type="text"
                  placeholder="左边盒子的宽度"
                />
              </a-form-item>
              <a-form-item label="左边项目的order:">
                <a-input
                  v-model:value="flex.child.left.order"
                  type="text"
                  placeholder="左边盒子的order"
                />
              </a-form-item> 
              <a-form-item label="左边项目的flex-grow:">
                <a-input
                  v-model:value="flex.child.left.flexGrow"
                  type="text"
                  placeholder="左边盒子的flex-grow"
                />
              </a-form-item>
              <a-form-item label="左边项目的flex-shrink:">
                <a-input
                  v-model:value="flex.child.left.flexShrink"
                  type="text"
                  placeholder="左边盒子的flex-shrink"
                />
              </a-form-item> 
              <a-form-item label="左边项目的flex-basis:">
                <a-input
                  v-model:value="flex.child.left.flexBasis"
                  type="text"
                  placeholder="左边盒子的flex-basis"
                />
              </a-form-item>
              <a-form-item label="左边盒子的align-self:">
                <a-radio-group v-model:value="flex.child.left.alignSelf" button-style="solid">
                  <a-radio-button value="auto">auto</a-radio-button>
                  <a-radio-button value="stretch">stretch</a-radio-button>
                  <a-radio-button value="flex-start">flex-start</a-radio-button>
                  <a-radio-button value="flex-end">flex-end</a-radio-button>
                  <a-radio-button value="center">center</a-radio-button>
                </a-radio-group>
              </a-form-item>
            </a-form>   
            
            <!-- 中间项目的样式控制 -->
            <a-form class="control-form" layout="inline" >
              <a-form-item label="中间项目的width:">
                <a-input
                  v-model:value="flex.child.center.width"
                  type="text"
                  placeholder="中间盒子的宽度"
                />
              </a-form-item>
              <a-form-item label="中间项目的order:">
                <a-input
                  v-model:value="flex.child.center.order"
                  type="text"
                  placeholder="中间盒子的order"
                />
              </a-form-item> 
              <a-form-item label="中间项目的flex-grow:">
                <a-input
                  v-model:value="flex.child.center.flexGrow"
                  type="text"
                  placeholder="中间盒子的flex-grow"
                />
              </a-form-item>
              <a-form-item label="中间项目的flex-shrink:">
                <a-input
                  v-model:value="flex.child.center.flexShrink"
                  type="text"
                  placeholder="中间盒子的flex-shrink"
                />
              </a-form-item> 
              <a-form-item label="中间项目的flex-basis:">
                <a-input
                  v-model:value="flex.child.center.flexBasis"
                  type="text"
                  placeholder="中间盒子的flex-basis"
                />
              </a-form-item>
              <a-form-item label="中间盒子的align-self:">
                <a-radio-group v-model:value="flex.child.center.alignSelf" button-style="solid">
                  <a-radio-button value="auto">auto</a-radio-button>
                  <a-radio-button value="stretch">stretch</a-radio-button>
                  <a-radio-button value="flex-start">flex-start</a-radio-button>
                  <a-radio-button value="flex-end">flex-end</a-radio-button>
                  <a-radio-button value="center">center</a-radio-button>
                </a-radio-group>
              </a-form-item>
            </a-form>    
            
            <!-- 右边项目的样式控制 -->
            <a-form class="control-form" layout="inline" >
              <a-form-item label="右边项目的width:">
                <a-input
                  v-model:value="flex.child.right.width"
                  type="text"
                  placeholder="右边盒子的宽度"
                />
              </a-form-item>
              <a-form-item label="右边项目的order:">
                <a-input
                  v-model:value="flex.child.right.order"
                  type="text"
                  placeholder="右边盒子的order"
                />
              </a-form-item> 
              <a-form-item label="右边项目的flex-grow:">
                <a-input
                  v-model:value="flex.child.right.flexGrow"
                  type="text"
                  placeholder="右边盒子的flex-grow"
                />
              </a-form-item>
              <a-form-item label="中间项目的flex-shrink:">
                <a-input
                  v-model:value="flex.child.right.flexShrink"
                  type="text"
                  placeholder="右边盒子的flex-shrink"
                />
              </a-form-item> 
              <a-form-item label="右边项目的flex-basis:">
                <a-input
                  v-model:value="flex.child.right.flexBasis"
                  type="text"
                  placeholder="右边盒子的flex-basis"
                />
              </a-form-item>
              <a-form-item label="右边盒子的align-self:">
                <a-radio-group v-model:value="flex.child.right.alignSelf" button-style="solid">
                  <a-radio-button value="auto">auto</a-radio-button>
                  <a-radio-button value="stretch">stretch</a-radio-button>
                  <a-radio-button value="flex-start">flex-start</a-radio-button>
                  <a-radio-button value="flex-end">flex-end</a-radio-button>
                  <a-radio-button value="center">center</a-radio-button>
                </a-radio-group>
              </a-form-item>
            </a-form>

               <!-- 父容器的样式控制 -->
            <a-form class="control-form" layout="inline" >
              <a-form-item label="父容器的justify-content:">
                <a-radio-group v-model:value="flex.parent.justifyContent" button-style="solid">
                  <a-radio-button value="flex-start">flex-start</a-radio-button>
                  <a-radio-button value="flex-end">flex-end</a-radio-button>
                  <a-radio-button value="center">center</a-radio-button>
                  <a-radio-button value="space-between">space-between</a-radio-button>
                  <a-radio-button value="space-around">space-around</a-radio-button>
                </a-radio-group>
              </a-form-item>
              <a-form-item label="父容器的align-items:">
                <a-radio-group v-model:value="flex.parent.alignItems" button-style="solid">
                  <a-radio-button value="stretch">stretch</a-radio-button>
                  <a-radio-button value="flex-start">flex-start</a-radio-button>
                  <a-radio-button value="flex-end">flex-end</a-radio-button>
                  <a-radio-button value="center">center</a-radio-button>
                  <a-radio-button value="baseline">base-line</a-radio-button>
                </a-radio-group>
              </a-form-item>
              <a-form-item label="父容器的flex-direction:">
                <a-radio-group v-model:value="flex.parent.flexDirection" button-style="solid">
                  <a-radio-button value="row">row</a-radio-button>
                  <a-radio-button value="row-reverse">row-reverse</a-radio-button>
                  <a-radio-button value="column">column</a-radio-button>
                  <a-radio-button value="column-reverse">column-reverse</a-radio-button>
                </a-radio-group>
              </a-form-item>
              <a-form-item label="父容器的flex-wrap:">
                <a-radio-group v-model:value="flex.parent.flexWrap" button-style="solid">
                  <a-radio-button value="nowrap">nowrap</a-radio-button>
                  <a-radio-button value="wrap">wrap</a-radio-button>
                  <a-radio-button value="wrap-reverse">wrap-reverse</a-radio-button>
                </a-radio-group>
              </a-form-item>
            </a-form>

          </div>

          <!-- @ts-ignore -->
          <div class="layout__flex" :style="flexParentStyle">
            <div class="flex-item left-item"
            :style="{
              order: flex.child.left.order,
              width:flex.child.left.width+'px',
              'flex-grow': flex.child.left.flexGrow,
              'flex-shrink': flex.child.left.flexShrink,
              'flex-basis': flex.child.left.flexBasis+'px',
              'align-self':flex.child.left.alignSelf
            }"
            >
              <p>左边盒子</p>
              <p>order:{{ flex.child.left.order }}</p>
              <p>width:{{ flex.child.left.width }}</p>
              <p>flex-grow:{{ flex.child.left.flexGrow }}</p>
              <p>flex-shrink:{{ flex.child.left.flexShrink }}</p>
              <p>flex-basis:{{ flex.child.left.flexBasis }}</p>
              <p>align-self:{{ flex.child.left.alignSelf }}</p>
            </div>
            <div class="flex-item center-item"
             :style="{
              order: flex.child.center.order,
               width: flex.child.center.width+'px',
              'flex-grow': flex.child.center.flexGrow,
              'flex-shrink': flex.child.center.flexShrink,
              'flex-basis': flex.child.center.flexBasis+'px',
              'align-self':flex.child.center.alignSelf
            }">
              <p>中间盒子</p>
              <p>order:{{ flex.child.center.order }}</p>
              <p>width:{{ flex.child.center.width }}</p>
              <p>flex-grow:{{ flex.child.center.flexGrow }}</p>
              <p>flex-shrink:{{ flex.child.center.flexShrink }}</p>
              <p>flex-basis:{{ flex.child.center.flexBasis }}</p>
              <p>align-self:{{ flex.child.center.alignSelf }}</p>
            </div>
            <div class="flex-item right-item"
             :style="{
              order: flex.child.right.order,
              width: flex.child.right.width+'px',
              'flex-grow': flex.child.right.flexGrow,
              'flex-shrink': flex.child.right.flexShrink,
              'flex-basis': flex.child.right.flexBasis+'px',
              'align-self':flex.child.right.alignSelf
            }">
              <p>右边盒子</p>
              <p>order:{{ flex.child.right.order }}</p>
              <p>width:{{ flex.child.right.width }}</p>
              <p>flex-grow:{{ flex.child.right.flexGrow }}</p>
              <p>flex-shrink:{{ flex.child.right.flexShrink }}</p>
              <p>flex-basis:{{ flex.child.right.flexBasis }}</p>
              <p>align-self:{{ flex.child.right.alignSelf }}</p>
          </div>
          </div>
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

// float布局
.layout__float{
  min-height:180px;
  padding:10px;
  background-color: blanchedalmond;
  &-content{
    height: 60px;
    background:gainsboro;
    display: inline-block;
    border:1px solid greenyellow;
    width:200px;
  }
  &-button{
    float:right;
  }
}

// flex布局
.code-ol{
  display: flex;
  flex-direction: column;;
  width:900px;
  li{
    background-color: #eee;
    margin-top:4px;
    line-height: 30px;
  }
}
.layout__flex{
  display: flex;
  flex-wrap: wrap;
  min-height:300px;
  background-color: #d8e1ed;
  .flex-item{
    background-color: antiquewhite;
    border:1px solid white;
    text-align: center;

  }
  &-control{
    display: flex;
    flex-wrap: wrap;
  }
  .left-item {
  
  }
  .right-item {
  
  }
}
</style>