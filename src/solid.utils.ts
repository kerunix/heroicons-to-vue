import { formatComponentName } from './utils'

export const generateSolidIconComponent = (svg: Buffer, name: string) => {
  return `<template>
  ${svg.toString().replace('fill="currentColor"', ':class="`fill-current ${sizeClasses}`"')}
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import IconSizeMixin from '@/mixins/IconSizeMixin'

export default defineComponent({
  name: '${formatComponentName(name, 'Solid')}',
  mixins: [IconSizeMixin],
  setup(props) {
    const sizeClasses = computed(() => \`h-\${props.size} w-\${props.size}\`)
    return {
      sizeClasses
    }
  },
})
</script>
`
}