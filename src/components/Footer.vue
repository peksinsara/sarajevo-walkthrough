<template>
<div class="footer">
    &copy;SarajevoWalkthrough.com | Designed by Dream Team
</div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    msg: String,
  },
  }
</script>

<style>
.footer{
  background:rgb(49, 49, 49);
  color: rgb(218, 218, 218);
  position:sticky;
  text-align:center;
  height:50px;
  width:100%;
  left:0px;
  padding-top:10px;
  font-style:italic;
}

</style>