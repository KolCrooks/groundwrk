<template>
  <div class="navbar">
    <q-toolbar class="fixed-bottom bg-primary text-white padding">
        <q-tabs
          ref="navTabs"
          v-model="tab"
          class="bg-primary text-white shadow-2 full-width"
          :inline-label="!$q.screen.sm"
        >
          <q-route-tab v-for="page in pages" :key="page.name"
          :name="page.name" :icon="page.icon"
            :label="page.name" :to="page.route" />
        </q-tabs>
    </q-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: [
        {
          route: "/calendar",
          name: "Calendar",
          icon: "calendar_today"
        },
        {
          route: "/grades",
          name: "Grades",
          icon: "spellcheck"
        },
        {
          route: "/",
          name: "Profile",
          icon: "account_circle",
        }
      ],
      tab: null,
    };
  },
  methods:{
    t(e){
      console.log(e)
    }
  },
  mounted(){
    this.$q.screen.setSizes({ sm: 300, md: 600, lg: 1000, xl: 2000 })
  }
};
</script>

<style lang="scss" scoped>

.container {
  width: 33%;
  max-height: 100%;
  display: flex;
  justify-content: center;
  vertical-align: middle;
  & img {
    max-height: 100%;
    height: 90%;
    margin-top: auto;
    margin-bottom: auto;
  }
}
</style>
