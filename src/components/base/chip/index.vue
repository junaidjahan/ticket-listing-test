<template>
    <Chip label="Microsoft" :pt="{ root: [color, '!rounded !text-xs !py-0.5 !font-medium'] }" />
</template>

<script setup>

defineProps({
    color: {
        type: String,
        default: '!bg-green-500'
    }
})

</script>