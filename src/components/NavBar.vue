<template>
  <q-toolbar class="text-white padding" :class="computeClasses" ref="navToolbar">
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
          route: "/profile",
          name: "Profile",
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
          "bg-secondary": true
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
          "bg-secondary": true
        };
      }
    },
    spacerHeight() {
      if (
        (!!this.$q.screen.md || !!this.$q.screen.sm) &&
        this.$refs.navToolbar
      ) {
        return {
          "padding-bottom": getComputedStyle(this.$refs.navToolbar.$el).height
        };
      } else {
        return {
          "padding-bottom": "0px"
        };
      }
    }
  },
  methods: {
    t(e) {
      console.log(e);
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
}

.nav-mobile {
  position: sticky;
  bottom: 0;
  z-index: 10;
}
</style>
