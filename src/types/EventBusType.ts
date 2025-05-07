import { EventType } from 'mitt'


export interface EventBusType extends Record<EventType, unknown> {
  openDialog:any
  updateExpiration: number
  expireUser: void
  forbiddenUser: void
  onCloseWindow: void
}