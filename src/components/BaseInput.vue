<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <input
      :value="value"
      @input="updateValue"
      v-bind="$attrs"
      v-on="listeners"
    />
    <!-- which element will be inherited 'input' here -->
  </div>
</template>

<script>
import { formFieldMixin } from "@/mixin/formFieldMixin.js";

export default {
  mixins: [formFieldMixin],
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue
      };
    }
  }
};
</script>

<style lang="scss" scoped></style>
