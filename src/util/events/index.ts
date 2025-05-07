import mitt from 'mitt'
import { EventBusType } from '../../types/EventBusType'

const emmiter = mitt<EventBusType>()


export const event = {
  $emit: function emit<Key extends keyof EventBusType>(type: Key, event?: EventBusType[Key]) {
    emmiter.emit(type, event)
  },
}