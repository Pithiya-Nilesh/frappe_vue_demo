<template>
  <div>
    <router-view />
    <!-- <h2>My Friends</h2> -->
  </div>
</template>
<script>
// const app={
  // data(){
  //   return {
  //     friends: [
  //     {
  //       id: 1,
  //       name: "nilesh",
  //       age: 23
  //     },
  //     {
  //       id: 2,
  //       name: "jayesh",
  //       age: 24
  //     },
  //     {
  //       id: 3,
  //       name: "mahesh",
  //       age: 22
  //     }
  //   ]
  //   }
  // }
// }
export default {
  name: "App",
  setup() {
		const user = ref({})
		const viewportWidth = ref(
			Math.max(
				document.documentElement.clientWidth || 0,
				window.innerWidth || 0
			)
		)
		provide("user", user)
		provide("viewportWidth", viewportWidth)
		return { user }
	},
}

</script>