<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <select
      :value="value"
      @change="updateValue"
      v-bind="$attrs"
      v-on="$listeners"
      ><!-- inherits 'listeners' from parent scope -->
      <option
        v-for="option in options"
        :key="option"
        :value="option"
        :selected="option === value"
        >{{ option }}</option
      >
      <!-- ':selected' for if we want to edit this form, so the values are exist -->
    </select>
  </div>
</template>

<script>
import { formFieldMixin } from "@/mixin/formFieldMixin.js";

export default {
  mixins: [formFieldMixin],
  props: {
    options: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
