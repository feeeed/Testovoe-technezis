<template>
  <div class="main-screen">
    <div class="top-container-100">
      <tags-list
          :tags="tags"
      />
    </div>
    <div class="top-container-100">
      <tags-list
          :tags="tags"
          justify="justify-space-between"
      />
    </div>
    <div class="top-container-50">
      <tags-list
          :tags="tags"
      />

    </div>
    <div class="top-container-50">
      <tags-list
          :tags="tags"
          justify="justify-space-between"
      />

    </div>
  </div>
</template>

<script>
  import TagsList from "@/components/HelloWorld.vue";

  export default {
    name: 'home-view',

    components: {
      TagsList,
    },
    data: () => (
        {
          tags: [
            {
              text: 'Железные дороги',
            },
            {
              text: 'Автомобильные дороги',
              icon:'mdi-car'
            },
            {
              text: 'Сельхозтехника',
              icon:'mdi-tractor'
            },
            {
              text: 'Автозаправочные площадки',
              icon:'mdi-gas-station'
            },
            {
              text: 'Автосервисы',
            },
            {
              text: 'Автомобильные салоны',
            },
            {
              text: 'Автозаправочные станции',
              icon:'mdi-gas-station'
            },
          ],
          containerWidth: 0,
        }),
  }
</script>
<style lang="scss">
  $bg-color: #4e27e0;
 .top-container-50 {
   margin:10px;
   width: 50%;
   background-color:$bg-color;

 }
  .top-container-100{
    margin:10px;
    width: 100%;
    background-color:$bg-color;
  }

</style>
