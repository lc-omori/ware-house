<template>
  <Content :title=title>
    <InputForm @clickButton="hei" />
  </Content>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import Content from '../templates/Content';
import InputForm from '../atoms/InputForm';

@Component({
  components: {
    Content,
    InputForm,
  },
})
export default class Todo extends Vue {
  title = 'TODOリスト';

  hei = txt => {
    console.log(txt);
  };
}
</script>

<style lang="scss" scoped>
</style>
