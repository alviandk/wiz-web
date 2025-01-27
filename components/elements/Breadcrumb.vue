<script lang="ts" setup>
import Breadcrumb from 'primevue/breadcrumb'

type Props = {
  class?: string
  home?: { label: string; route?: string }
  items?: { label: string; route?: string }[]
}
const prop = defineProps<Props>()
</script>

<template>
  <div>
    <Breadcrumb
      :home="prop.home"
      :model="prop.items"
      :pt="{
        root: `${prop.class} border-0 p-0 mb-4`,
      }"
    >
      <template #item="{ item, props }">
        <router-link v-if="item.route" v-slot="{ navigate }" :to="item.route" custom>
          <a v-bind="props.action" class="cursor-pointer" @click="navigate">
            <span :class="[item.icon, 'text-color']" />
            <span class="text-sm text-[#68788D] font-normal">{{ item.label }}</span>
          </a>
        </router-link>
        <a v-else :target="item.target" v-bind="props.action">
          <span class="text-sm text-[#28BCDC] font-semibold">{{ item.label }}</span>
        </a>
      </template>
    </Breadcrumb>
  </div>
</template>
