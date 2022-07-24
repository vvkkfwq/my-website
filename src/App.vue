<script setup lang="ts">
import MessageApi from '@/components/MessageApi.vue';
import { NMessageProvider } from 'naive-ui';
</script>

<template>
  <router-view />
  <n-message-provider>
    <MessageApi />
  </n-message-provider>
</template>
<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
}
</style>
