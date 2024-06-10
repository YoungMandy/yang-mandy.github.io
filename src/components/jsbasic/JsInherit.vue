<script setup lang="ts">

import {
  prototypeChainInheritString,
  constructorFunctionInheritString,
  combinationInheritString,
  prototypicalInheritanceString,
  parasiticInheritanceString,
  classInheritString
} from '@/components/jsbasic/js/inherit.js'
</script>
<template>
  <section>
    <page-header 
      title="JS的继承" 
      description="网上的普遍分类,JS有六种继承方式">
    </page-header>
  
    <h2>1.原型链继承</h2>
     <CopyWrapper :msg="prototypeChainInheritString">
      <highlightjs
      language="javascript"
      :code="prototypeChainInheritString"
    />
    </CopyWrapper>
    
  
    <h2>2.构造函数继承</h2>
    <CopyWrapper :msg="constructorFunctionInheritString">
      <highlightjs
        language="javascript"
        :code="constructorFunctionInheritString"
      />
    </CopyWrapper>
      
    <h2>3.组合(原型链+ 构造)继承</h2>
      <p> 这个也称作经典继承</p>
      <CopyWrapper :msg="combinationInheritString">
        <highlightjs
          language="javascript"
          :code="combinationInheritString"
        />
      </CopyWrapper>
      

    <h2>4.原型式继承</h2>
    <CopyWrapper :msg="prototypicalInheritanceString">
        <highlightjs
        language="javascript"
        :code="prototypicalInheritanceString"
      />
    </CopyWrapper>
      

    <h2>5.寄生式继承</h2>
    <CopyWrapper :msg="parasiticInheritanceString">
      <highlightjs
        language="javascript"
        :code="parasiticInheritanceString"
      />
    </CopyWrapper>
      

    <h2>6.ES6的class继承</h2>
    <CopyWrapper :msg="classInheritString">
      <highlightjs
        language="javascript"
        :code="classInheritString"
      />
    </CopyWrapper>
      
  </section>
</template>
<style>
</style>