<script setup lang="ts">
import { ref } from 'vue';
import { Github, Envelope, Heart } from '@vicons/fa';
import useClipboard from 'vue-clipboard3';

const { toClipboard } = useClipboard();
const likeNum = ref(0);
const likeShow = ref(false);

// 点赞
const addLike = () => {
  likeNum.value += 1;
  likeShow.value = true;
};

// 跳转至我的github
const toMyGithub = () => {
  window.open('https://github.com/vvkkfwq', '_blank');
};

// 复制
const copy = async () => {
  try {
    await toClipboard('vvkkfwq@sina.com');
    window.$message.success('复制成功！');
  } catch (e) {
    window.$message.error('复制失败，请重试！');
  }
};
</script>
<template>
  <div class="home w-screen h-screen flex flex-col justify-center">
    <div class="main-box w-full flex items-center justify-around">
      <div class="introduction-box text-white text-3xl mt-24">
        <p>
          你好👋<br />
          我是VickeyFeng<br />
          一名前端开发工程师<br />
          欢迎来到我的主页👏
        </p>
        <p>
          Hello<br />
          I am VickeyFeng<br />
          A front-end development engineer<br />
          Welcome to my home page
        </p>
        <div class="context-box mt-12 relative">
          <lottie-player
            v-if="likeShow"
            id="hearts"
            src="https://assets6.lottiefiles.com/packages/lf20_0jzfcjkp.json"
            background="transparent"
            speed="1"
            class="w-16 h-16 absolute -top-5 -left-3.5"
            autoplay
          ></lottie-player>
          <n-space :size="32">
            <n-popover placement="bottom" trigger="hover">
              <template #trigger>
                <n-badge :value="likeNum" type="info">
                  <n-button
                    :circle="true"
                    :bordered="false"
                    type="info"
                    :ghost="true"
                    @click="addLike"
                  >
                    <template #icon>
                      <n-icon size="24" color="white">
                        <Heart />
                      </n-icon>
                    </template>
                  </n-button>
                </n-badge>
              </template>
              <span>为我的网页点个赞吧～</span>
            </n-popover>
            <n-popover trigger="hover">
              <template #trigger>
                <n-button
                  :circle="true"
                  :bordered="false"
                  type="info"
                  :ghost="true"
                  @click="toMyGithub"
                >
                  <template #icon>
                    <n-icon size="24" color="white">
                      <Github />
                    </n-icon>
                  </template>
                </n-button>
              </template>
              <span>点击访问我的Github</span>
            </n-popover>
            <n-popover trigger="hover">
              <template #trigger>
                <n-button
                  :circle="true"
                  :bordered="false"
                  type="info"
                  :ghost="true"
                  @click="copy"
                >
                  <template #icon>
                    <n-icon size="24" color="white">
                      <Envelope />
                    </n-icon>
                  </template>
                </n-button>
              </template>
              <span>点击复制我的邮箱地址</span>
            </n-popover>
          </n-space>
        </div>
      </div>
      <div class="image-box">
        <lottie-player
          src="https://assets1.lottiefiles.com/packages/lf20_tfqe4zxy.json"
          background="transparent"
          speed="1"
          class="w-auto h-auto"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  </div>
</template>

<style>
.home {
  background: linear-gradient(90deg, #5433ff 0%, #20bdff 50%, #a5fecb 100%);
}

.introduction-box {
  line-height: 120px;
}

.introduction-box p:last-of-type {
  margin-top: -440px;
}
</style>
