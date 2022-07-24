<template>
  <div></div>
</template>
<script lang="ts">
import { useMessage } from 'naive-ui';
import { defineComponent } from 'vue';

// content
export default defineComponent({
  setup() {
    window.$message = useMessage();
  },
});
</script>
