<template>
    <div class="grid grid-cols-12 h-screen">
        <div class="col-span-3 border border-gray-600">
            <div class="p-3 border-b border-gray-600">
                <BaseIconField iconPosition="left">
                    <BaseInputIcon class="pi pi-search" />
                    <BaseInputText v-model="search" placeholder="Search" />
                </BaseIconField>
            </div>
            <div class="my-3">
                <div v-for="(ticket, index) in allTickets" :key="index">
                    <BaseListItem :ticket-info="ticket" class="cursor-pointer" :key="index"
                        :class="{ 'bg-zinc-800': ticket.ticketNumber === selected?.ticketNumber }"
                        @click="selected = ticket" />
                </div>
            </div>
        </div>
        <div class="col-span-9 border border-gray-600 border-l-0 h-screen">
            <div class="max-h-[calc(100vh-80px)] overflow-auto pb-4 h-screen">
                <TicketInfo :ticket-info="selected" />
                <TicketListingComments :events="selected?.events" />
            </div>
            <div class="p-5 pb-0 border-t border-gray-600">
                <BaseIconField>
                    <BaseInputIcon class="pi pi-send cursor-pointer" @click="sendMessage" />
                    <BaseInputText v-model="message" placeholder="Write a comment" @keyup.enter="sendMessage" />
                </BaseIconField>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { BaseListItem, BaseIconField, BaseInputText, BaseInputIcon } from "@/components/base"
import { TicketListingComments } from "@/components/ticket-listing"
import { onMounted } from "vue";
import { useTicketListing } from "./use-ticket-listing"

const { allTickets, message, selected, tickets, search, sendMessage } = useTicketListing()




onMounted(() => {
    if (JSON.parse(localStorage.getItem('tickets')!)?.length) {
        tickets.value = JSON.parse((localStorage.getItem('tickets')!))
        selected.value = tickets.value[0]
    }
})
</script>