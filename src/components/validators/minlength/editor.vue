<template>
  <div>
    <label class="uk-form-label">Minimum length</label>
    <div class="uk-form-controls">
      <input
        class="uk-input uk-form-small"
        ref="txtLength"
        name="txtMinLength"
        v-model="parameters.minLength"
        @input="updateInput"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "minLength",
  data: function () {
    return { parameters: this.value };
  },
  methods: {
    updateInput: function () {
      this.$emit("input", this.parameters);
    },
  },
  props: ["value"],
};
</script>
