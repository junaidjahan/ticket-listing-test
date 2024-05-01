<template>
    <div class="bg-zinc-800 p-5 font-medium">
        <div class="flex justify-between items-center">
            <div class=" bg-zinc-800 px-6 flex items-center gap-x-3">
                <i class="pi pi-globe"></i>
                <div>
                    <p class="text-xs text-zinc-300">
                        {{ ticketInfo.ticketNumber }}
                    </p>
                </div>
                <p>
                    |
                </p>
                <p class="text-teal-300 text-xs">
                    {{ ticketInfo.issue }}
                </p>
            </div>
            <BaseChip class="[&_.pi]:!text-xs h-fit" icon="pi pi-wave-pulse" :label="ticketInfo.status" />
        </div>
        <div class="pl-12 mt-4 flex justify-between items-center">
            <div class="flex items-center gap-x-8 w-full">
                <div class="flex items-center gap-x-2 pl-0.5">
                    <i class="pi pi-building"></i>
                    <div>
                        <p class="text-xs text-zinc-300">
                            {{ ticketInfo.motel }}
                        </p>
                    </div>
                </div>
                <div class="flex items-center gap-x-2 pl-0.5">
                    <i class="pi pi-map-marker"></i>
                    <div>
                        <p class="text-xs text-zinc-300">
                            {{ ticketInfo.location }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex items-center gap-x-2 pl-0.5 min-w-max">
                <i class="pi pi-crown"></i>
                <div>
                    <p class="text-xs text-zinc-300">
                        {{ ticketInfo.receiver }}
                    </p>
                </div>
            </div>
        </div>
        <div class="pl-12 mt-6 flex justify-between items-center">
            <div class="pl-1">
                <p class="text-xs">
                    To <span class="border ml-2 px-2 py-1 rounded-full border-zinc-700 font-normal">{{ ticketInfo.to
                        }}</span>
                </p>
                <p class="text-xs mt-6">
                    CC <span class="border ml-2 px-2 py-1 rounded-full border-zinc-700 font-normal">{{ ticketInfo.cc
                        }}</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    ticketInfo: TicketInfo
}
import { BaseChip } from "@/components/base"
import { type TicketInfo } from "@/types/ticket-listing.types"
defineProps<Props>()
</script>