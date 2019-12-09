<template>
  <div>
    <q-toolbar class="text-white" :class="computeClasses" ref="navToolbar">
      <q-tabs
        ref="navTabs"
        v-model="tab"
        class="text-white full-width full-height"
        :class="computeBackground"
        :inline-label="!$q.screen.sm"
      >
        <q-route-tab
          v-for="page in pages"
          :key="page.name"
          :name="page.name"
          :icon="page.icon"
          :label="page.name"
          :to="page.route"
          :disable="page.disable"
        />
      </q-tabs>
    </q-toolbar>
    <div :style="spacerHeight"></div>
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
          icon: "calendar_today",
          disable: false
        },
        {
          route: "/",
          name: "Grades",
          icon: "spellcheck",
          disable: false
        },
        {
          route: "/tasks",
          name: "Tasks",
          icon: "account_circle",
          disable: false
        }
      ],
      tab: null
    };
  },
  computed: {
    computeClasses() {
      if (!!this.$q.screen.md || !!this.$q.screen.sm) {
        return {
          "nav-mobile": true,
          "bg-primary": true
        };
      } else {
        return {
          "nav-desktop": true,
          "bg-primary": true
        };
      }
    },
    computeBackground() {
      if (!!this.$q.screen.md || !!this.$q.screen.sm) {
        return {
          "bg-primary": true
        };
      } else {
        return {
          "bg-primary": true
        };
      }
    },
    spacerHeight() {
      if (
        (!!this.$q.screen.md || !!this.$q.screen.sm) &&
        this.$refs.navToolbar
      ) {
        let height = getComputedStyle(this.$refs.navToolbar.$el).height;
        return {
          "padding-bottom": height,
          "padding-top": height
        };
      } else {
        return {
          "padding-bottom": "0px"
        };
      }
    }
  },
  mounted() {
    this.$q.screen.setSizes({ sm: 300, md: 600, lg: 1000, xl: 2000 });
  }
};
</script>

<style lang="scss" scoped>
.nav-desktop {
  max-width: 50%;
  top: 0;
  left: 50%;
  position: fixed;
  transform: translateX(-50%);
  z-index: 10;
  padding: 0px;
}

.nav-mobile {
  position: fixed;
  bottom: 0;
  z-index: 10;
  padding: 0px;
}
</style>
