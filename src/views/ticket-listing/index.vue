<template>
    <div class="grid grid-cols-12 h-screen">
        <div class="col-span-3 border border-gray-600">
            <div class="p-3 border-b border-gray-600">
                <BaseIconField iconPosition="left">
                    <BaseInputIcon class="pi pi-search" />
                    <BaseInputText placeholder="Search" />
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
import { type TicketInfo } from "@/types/ticket-listing.types.ts"
import type { Ref } from "vue";
import { computed } from "vue";
import { onMounted } from "vue";
import { ref } from "vue";

const message: Ref<string> = ref('')

const tickets: Ref<Array<TicketInfo>> = ref([
    {
        ticketNumber: 'TK-169234',
        issue: 'Issue with booking system',
        status: 'SOLVED',
        events: [
            { name: 'Johnny Rose', time: '10:30', message: 'Did you get this? I am still having issue.', image: null },
            { name: 'Mikel Wellsmore', time: '14:00', message: 'Hi mate! We are working on this now and I will let you know as things progress', image: null },
            { name: 'Johnny Rose', time: '16:15', message: 'Cheers--here is the latest', image: 'https://static.vecteezy.com/system/resources/previews/016/026/432/original/user-not-found-account-not-register-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg', image: null },
        ],
        motel: 'Rosebud Motel',
        receiver: 'Mikel Wellsmore',
        location: 'North Mackey',
        to: 'jrose@rosebud.com.au',
        cc: '-',
    },
    {
        ticketNumber: 'TK-169235',
        issue: 'Issue with data migration',
        status: 'SOLVED',
        events: [
            { name: 'Junaid Jahan', time: '10:30', message: 'Hi Mikel!', image: null },
            { name: 'Mikel Wellsmore', time: '14:00', message: 'Hi mate!', image: null },
            { name: 'Junaid Jahan', time: '16:15', message: 'I am facing issue with data migration', image: 'https://static.vecteezy.com/system/resources/previews/016/026/432/original/user-not-found-account-not-register-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg', image: null },
        ],
        motel: 'Rosebud Motel',
        receiver: 'Mikel Wellsmore',
        location: 'North Mackey',
        to: 'junaidjahan32@gmail.com',
        cc: '-',
    },
])

const allTickets = computed(() => {
    return tickets.value
})

const selected: Ref<TicketInfo | null> = ref(tickets.value[0])

const sendMessage = () => {
    tickets.value?.find(ticket => ticket.ticketNumber === selected.value?.ticketNumber)?.events?.push({
        name: 'Mikel Wellsmore',
        time: new Date().getTime().toString(),
        message: message.value,
        image: null
    })
    localStorage.setItem('tickets', JSON.stringify(tickets.value))
    message.value = ''
}

onMounted(() => {
    if (JSON.parse(localStorage.getItem('tickets')!)?.length) {
        tickets.value = JSON.parse((localStorage.getItem('tickets')!))
        selected.value = tickets.value[0]
    }
})
</script>