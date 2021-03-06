import { capitalize } from 'lodash'

export const formatComponentName = (name: string, type: 'Solid' | 'Outline') => {
  const array = name.split('-').map(part => capitalize(part))
  return `${type}${array.join().replace(/,/g, '')}`
}

export const generateComponent = (svg: Buffer, name: string, type: 'Solid' | 'Outline') => {

  const template = type === 'Outline'
  ? svg.toString().replace('stroke="currentColor"', ':class="`stroke-current ${sizeClasses}`"')
  : svg.toString().replace('fill="currentColor"', ':class="`fill-current ${sizeClasses}`"')

  return `<template>
  ${template}
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