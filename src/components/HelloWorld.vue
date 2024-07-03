<template>
  <div class="tags-container">

    <v-row class="d-flex flex-row flex-nowrap" v-bind={class:justify}>
      <v-sheet class="d-flex flex-row" v-for="(tag,key) in visibleTags" :key="key">
        <v-icon :size="24">{{ tag.icon }}</v-icon>
        {{ tag.text }}

        <v-icon v-if="key<visibleTags.length-1" :size="24">mdi-circle-small</v-icon>
      </v-sheet>

    </v-row>


  </div>
</template>

<script>
import autoVisibleTags from "@/mixins/autoVisibleTags";
  export default {
    name: 'tags-list',
    props: {
      justify:{
        type: String,
        default: 'justify-start'

      },
      tags:{
        type: Array,
        required: true
      }
    },
    mixins: [autoVisibleTags]


  }
</script>
<style>
.tags-container{
  padding: 25px;

}
</style>