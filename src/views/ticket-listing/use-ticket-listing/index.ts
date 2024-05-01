import type { TicketInfo } from '@/types/ticket-listing.types'
import { computed, ref, type Ref } from 'vue'

export const useTicketListing = () => {
  const message: Ref<string> = ref('')
  const search: Ref<string> = ref('')

  const allTickets = computed(() => {
    return search.value
      ? tickets.value.filter((ticket) =>
          ticket.ticketNumber?.toLowerCase().includes(search.value.toLowerCase())
        )
      : tickets.value
  })

  const sendMessage = () => {
    tickets.value
      ?.find((ticket) => ticket.ticketNumber === selected.value?.ticketNumber)
      ?.events?.push({
        name: 'Mikel Wellsmore',
        time: new Date().getTime().toString(),
        message: message.value,
        image: null
      })
    localStorage.setItem('tickets', JSON.stringify(tickets.value))
    message.value = ''
  }

  const tickets: Ref<Array<TicketInfo>> = ref([
    {
      ticketNumber: 'TK-169234',
      issue: 'Issue with booking system',
      status: 'SOLVED',
      events: [
        {
          name: 'Johnny Rose',
          time: '10:30',
          message: 'Did you get this? I am still having issue.',
          image: null
        },
        {
          name: 'Mikel Wellsmore',
          time: '14:00',
          message: 'Hi mate! We are working on this now and I will let you know as things progress',
          image: null
        },
        {
          name: 'Johnny Rose',
          time: '16:15',
          message: 'Cheers--here is the latest',
          image:
            'https://static.vecteezy.com/system/resources/previews/016/026/432/original/user-not-found-account-not-register-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg'
        }
      ],
      motel: 'Rosebud Motel',
      receiver: 'Mikel Wellsmore',
      location: 'North Mackey',
      to: 'jrose@rosebud.com.au',
      cc: '-'
    },
    {
      ticketNumber: 'TK-169235',
      issue: 'Issue with data migration',
      status: 'SOLVED',
      events: [
        { name: 'Junaid Jahan', time: '10:30', message: 'Hi Mikel!', image: null },
        { name: 'Mikel Wellsmore', time: '14:00', message: 'Hi mate!', image: null },
        {
          name: 'Junaid Jahan',
          time: '16:15',
          message: 'I am facing issue with data migration',
          image: null
        }
      ],
      motel: 'Rosebud Motel',
      receiver: 'Mikel Wellsmore',
      location: 'North Mackey',
      to: 'junaidjahan32@gmail.com',
      cc: '-'
    }
  ])

  const selected: Ref<TicketInfo | null> = ref(tickets.value[0])

  return {
    search,
    tickets,
    allTickets,
    message,
    selected,
    sendMessage
  }
}
