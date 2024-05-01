<template>
    <div class="h-16 hover:bg-zinc-800 px-6 py-3">
        <div class="flex justify-between items-center">
            <p class="text-sm text-zinc-300">
                {{ ticketInfo.ticketNumber }}
            </p>
            <BaseChip class="[&_.pi]:!text-xs" icon="pi pi-wave-pulse" :label="ticketInfo.status" />
        </div>
        <p class="text-teal-300 text-xs">
            {{ ticketInfo.issue }}
        </p>
    </div>
</template>

<script setup lang="ts">
interface Props {
    ticketInfo: Partial<TicketInfo>
}
import { BaseChip } from "@/components/base"
import { type TicketInfo } from "@/types/ticket-listing.types.ts"

defineProps<Props>()
</script>