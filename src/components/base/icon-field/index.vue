<template>
    <IconField :pt="{ root: '!w-full' }">
        <template v-for="(slot, index) in Object.keys($slots) " :key="index" v-slot:[slot]="slotProps">
            <slot :key="index" :name="slot" v-bind="slotProps"></slot>
        </template>
    </IconField>
</template>
<script setup>
import IconField from 'primevue/iconfield';
</script>