<template>

    <section>
        <div class="columns">
            <div class="column is-9" style="height: 100vh">
                <no-ssr>
                   <l-map
                        :zoom="zoom"
                        :center="center"
                    >
                        <l-tile-layer :url="url"></l-tile-layer>
                        <l-marker :lat-lng="marker"></l-marker>
                    </l-map>
                </no-ssr>
            </div>
            <div class="column is-3" style="height: 100vh">
                <div class="button" v-on:click="buttonclick">locate me</div>
                <br>
                {{marker}}
            </div>
        </div>
        
    </section>

</template>

<script>

 export default {
  data () {
    return {
      url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png',
      zoom: 3,
      center: [48.137154, 11.576124],
      marker: [35.234532, 10.123413],
      bounds: null
    }
  },
  methods: {
    buttonclick() {
        if (navigator.geolocation) {
            console.log("yes")
        /* geolocation is available */
        navigator.geolocation.getCurrentPosition(this.displayLocationInfo, this.handleLocationError, {enableHighAccuracy: true});
        
        } else {
        /* geolocation IS NOT available  */
        console.log('geolocation IS NOT available on your browser');
        }
    },
    displayLocationInfo(position) { 
        this.center = [position.coords.latitude, position.coords.longitude],
        this.marker = [position.coords.latitude, position.coords.longitude],
        this.zoom = 13
    }
  }
}
</script>