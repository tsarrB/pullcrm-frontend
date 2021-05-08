/* eslint-disable @typescript-eslint/method-signature-style */
import * as dayjs from 'dayjs'

import 'dayjs/locale/ru'

const isToday = require('dayjs/plugin/isToday')
const isTomorrow = require('dayjs/plugin/isTomorrow')

dayjs.extend(isToday)
dayjs.extend(isTomorrow)

dayjs.locale('ru')

export default dayjs

declare module 'dayjs' {
  interface Dayjs {
    isToday(): boolean,
    isTomorrow(): boolean
  }
}