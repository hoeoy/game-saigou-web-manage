<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagess',
  data() {
			return {
			}
		},
		mounted:function(){
			this.ffffn()
		},
		methods:{
			ffffn(){
			this.$router.push({
				path:"buttons"
			})
		}
			}
}
</script>
