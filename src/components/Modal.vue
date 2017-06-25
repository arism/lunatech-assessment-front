<template>
  <div class="ui modal">
    <i class="close icon"></i>
    <div class="header">
      Runways types of {{modalData.country}} airports
    </div>
    <div class="content">
      <div class="description" v-for="runwaytype in modalData.runwaysType">
        <div>
          {{runwaytype}}
        </div>
      </div>
    </div>
    <div class="actions">
      <div class="ui button" @click="close">OK</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['modalData'],
  methods: {
    close(){
      $('.ui.modal').modal("hide")
    }
  }
}
</script>

