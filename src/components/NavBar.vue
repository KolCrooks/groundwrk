<template>
    <div class="bottombar">
        <div class="container" v-for="page in pages" :key="page.link" @click="$router.push(page.link)">
            <img :src="page.img">
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            pages: [
                {
                    link: '/',
                    img: require('../assets/profile.png')
                },
                {
                    link: '/calendar',
                    img: require('../assets/redCalendar.png')
                },
                {
                    link: '/grades',
                    img: require('../assets/jb.png') //change image
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.bottomBar{
    display: flexbox;
    flex-direction: row;
    height: 5%;
    width: 100%;
}
.container{
    flex-basis: 100%;
    max-height: 100%;
    & img {
        max-height: 100%;
    }
}
</style>

