<template>
  <div>
    <h4>test ?!</h4>
    parents : {{ parents }}
    childs : {{ childs }}
    current : {{ currentItem }}

    <button @click="test" class="btn btn-success">Submit</button>
  </div>
</template>

<script>
import Service from "../services/service";

export default {
  name: "item-list",
  data() {
    return {
      parents: [],
      childs: [],
      currentItem: null,
    };
  },
  methods: {
    test() {
      this.id++;
      this.retrieveItems();
    },

    retrieveItems() {
      if (this.id === undefined) {
        this.id = 1;
      }
      Service.get(this.id)
          .then(response => {
            this.currentItem = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      Service.getParents(this.id)
          .then(response => {
            this.parents = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });

      Service.getChilds(this.id)
          .then(response => {
            this.childs = response.data;
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
