<template>
  <div class="navbar">
    <div class="bottomBar">
      <div
        class="container"
        v-for="page in pages"
        :key="page.link"
        @click="$router.push(page.link)"
      >
        <img :src="page.img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: [
        {
          link: "/",
          img: require("../assets/profile.png")
        },
        {
          link: "/calendar",
          img: require("../assets/redCalendar.png")
        },
        {
          link: "/grades",
          img: require("../assets/jb.png") //change image
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.bottomBar {
  max-height: 10%;
  width: 100%;
  margin: 0;
  padding: 0;
  height: auto;
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  background: rgba(1, 1, 1, 0.5);
}

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
