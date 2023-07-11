<script setup lang="ts">
import appStore from '@/store/modules/appStore';
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
import SvgIcon from '@/components/SvgIcon/index.vue';

const sizeOptions = ref([
  { label: '默认', value: 'default' },
  { label: '大型', value: 'large' },
  { label: '小型', value: 'small' },
]);

function handleSizeChange(size: string) {
  appStore.changeSize(size);
  ElMessage.success('切换布局大小成功');
}
</script>

<template>
  <el-dropdown trigger="click" @command="handleSizeChange">
    <div>
      <SvgIcon name="basic-size" />
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="item of sizeOptions" :key="item.value" :disabled="appStore.size == item.value" :command="item.value">
          {{ item.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
