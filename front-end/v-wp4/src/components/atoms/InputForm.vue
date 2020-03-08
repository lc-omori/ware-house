<template>
  <div class="InputForm">
    <input class="InputForm__input" :placeholder="placeholder" @input="inputForm">
    <button type="button" class="InputForm__button" @click="clickButton">＋</button>
  </div>
</template>

<script>
import { Component, Emit, Vue } from 'vue-property-decorator';

@Component
export default class InputForm extends Vue {
  inputText = '';
  placeholder = 'example';

  inputForm = e => {
    this.inputText = e.target.value;
  };

  @Emit()
  clickButton = () => {
    return this.inputText;
  };
}
</script>

<style module lang="scss">
.InputForm {
  display: flex;

  &__input {
    border: 1px solid #d8d8d8;
    padding: 10px;
    font-size: 14px;
    color: #606e85;
    outline: none;
  }

  &__button {
    border: 1px solid #d8d8d8;
    border-left: none;
    height: 40px;
    color: #606e85;
    outline: none;
  }
}
</style>
