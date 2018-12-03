<template>
    <div>
        <!-- <div id="app"></div> -->
        <p>{{msg}}</p>
        <hr>
        <div>
            {{evn}}
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            evn: '',
            msg: 'web小白最牛逼!!! qq群: 213787432'
        }
    },
    created () {
        // <div id="app"></div>
        console.log(process.env.NODE_ENVV)
        this.evn = process.env.NODE_ENVV
    }
}
</script>

