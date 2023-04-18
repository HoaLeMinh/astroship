<script lang="ts">

export default {
  props: ['id', 'images'],
  data () {
    return {
      carouselId: this.id,
      items: this.images
    }
  }
}

</script>

<template>
  <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows="hover"
    id="carouselId" 
  >
    <v-carousel-item
      v-for="(item,i) in items"
        :key="i"
        :src="item"
      cover
    >
    </v-carousel-item>
  </v-carousel>
</template>