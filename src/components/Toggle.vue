<template>
  <div class="ui form">
      <div class="grouped fields">
        <label>Show countries with :</label>
        <div class="field">
          <div class="ui slider checkbox">
            <input type="radio" checked="checked" value="1" v-model="toggle">
            <label>The highest number of airports</label>
          </div>
        </div>
        <div class="field">
          <div class="ui slider checkbox">
            <input type="radio" value="0" v-model="toggle">
            <label>The lowest number of airports</label>
          </div>
        </div>
      </div>
    </div>
</template>
<<script>
export default {
  data() {
    return {
      toggle: '1'
    }
  },
  watch: {
    toggle(val) {
      this.$emit('toggle',val)
    }
  }
}
</script>
