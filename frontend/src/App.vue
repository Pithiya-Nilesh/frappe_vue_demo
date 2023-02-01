<template>
  <div>
    <!-- <router-view /> -->
    <h2>My Friends</h2>
  </div>
</template>
<script>
const app={
  data(){
    return {
      friends: [
      {
        id: 1,
        name: "nilesh",
        age: 23
      },
      {
        id: 2,
        name: "jayesh",
        age: 24
      },
      {
        id: 3,
        name: "mahesh",
        age: 22
      }
    ]
    }
  }

}
</script>