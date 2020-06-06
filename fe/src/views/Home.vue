<template>
  <div>
    <el-tree :data="tree" show-checkbox> </el-tree>
  </div>
</template>

<script>
import req from "@/req";

export default {
  name: "Home",
  data() {
    return {
      tree: [],
    };
  },
  mounted() {
    this.getConfig();
  },
  methods: {
    getConfig() {
      req.app
        .getConfig()
        .then((res) => {
          if (res.code !== 0) {
            req.err.show(res);
            return;
          }
          const tree = res.data.pages.map((p) => ({
            id: p,
            label: p,
          }));
          this.tree = tree;
        })
        .catch(req.err.show);
    },
  },
};
</script>
