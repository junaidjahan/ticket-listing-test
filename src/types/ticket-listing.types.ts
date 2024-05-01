export interface Ticket {
  ticketInfo: Array<TicketInfo>
}
export interface TicketEvents {
  name: string
  time: string
  message: string
  image: string | null
}
export interface TicketInfo {
  ticketNumber: string
  issue: string
  status: string
  motel: string
  location: string
  receiver: string
  to: string
  cc: string
  events: Array<TicketEvents>
}
