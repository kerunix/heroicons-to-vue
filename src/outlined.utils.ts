import { formatComponentName } from './utils'

export const generateOutlinedIconComponent = (svg: Buffer, name: string) => {
  return `<template>
  ${svg.toString().replace('stroke="currentColor"', ':class="`stroke-current ${sizeClasses}`"')}
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import IconSizeMixin from '@/mixins/IconSizeMixin'
import { formatComponentName } from './strings.utils';

export default defineComponent({
  name: '${formatComponentName(name, 'Outline')}',
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