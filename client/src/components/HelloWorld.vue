<template>
  <div>
    <h4>test ?!</h4>
    {{ items }}
  </div>
</template>

<script>
import Service from "../services/service";

export default {
  name: "item-list",
  data() {
    return {
      items: [1],
      currentItem: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveItems() {
      Service.getAll()
          .then(response => {
            this.items = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }
  },
  mounted() {
    this.retrieveItems();
  }
}

</script>
