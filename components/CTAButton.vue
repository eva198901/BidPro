<template>
  <button
    :class="[
      'px-6 py-2 rounded-md transition',
      variant === 'primary' ? 'bg-primary text-white hover:bg-opacity-90' : '',
      variant === 'accent' ? 'bg-accent text-white hover:bg-opacity-90' : '',
      variant === 'outline' ? 'border-2 border-primary text-primary hover:bg-primary hover:text-white' : '',
      size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : '',
    ]"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'accent', 'outline'].includes(value)
  },
  size: {
    type: String,
    default: 'base',
    validator: (value) => ['sm', 'base', 'lg'].includes(value)
  }
})

defineEmits(['click'])
</script> 