<template>
  <div class="main-container">
    <img src="./../assets/welcome.jpeg"/>
  </div>
</template>

<script>
//import { httpService } from "../httpservice";

export default {
  name: "Home",
  props: {
    msg: String,
  },
  data: function () {
    return {
      
    };
  },
  mounted: function () {
    
  },
  methods: {

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.main-container {
  position: fixed;
  top: -100px;
  width: 100%;
  bottom: 0px;
  overflow: hidden;
  justify-content: center;
  display: flex;
  flex-direction: row;
}
img{
  height: 65%;
}

</style>
