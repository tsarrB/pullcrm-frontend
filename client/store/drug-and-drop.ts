import { Module } from 'vuex/types'

import { getProceduresDuration } from '~/logics/appointment'

import { IState as IRootState } from '.'

export interface IState {
  time: string | null,
  isOvered: boolean,
  specialistId: number | null,
  appointmentId: number | null,
  specialistTimes: any
}

const DrugAndDropModule: Module<IState, IRootState> = {
  namespaced: true,

  state () {
    return {
      time: null,
      specialistId: null,
      appointmentId: null,

      isOvered: false,
      specialistTimes: {}
    }
  },

  actions: {
    async fetchTimes ({ state, commit, rootState, rootGetters }) {
      const appointment = rootGetters['appointments/appointmentById'](state.appointmentId)

      const specialistsIds = rootState.specialists.specialists.map(({ id }) => id)

      const list = specialistsIds.map(specialistId => {
        return this.$api.appointments.availableTime({
          date: rootState.schedule.date,
          excludeId: state.appointmentId,
          specialistId: specialistId,
          duration: getProceduresDuration(appointment)
        })
      })

      const times = await Promise.all(list) as any[]

      const specialistTimes = times.reduce((acc, item, index) => {
        return {
          ...acc,
          [specialistsIds[index]]: item
        }
      }, {})

      commit('SET_AVAILABLE_SPECIALISTS_TIMES', specialistTimes)
    }
  },

  mutations: {
    SET_TIME (state, time) {
      state.time = time
    },

    SET_APPOINTMENT_ID (state, appointmentId) {
      state.appointmentId = appointmentId
    },

    SET_SPECIALIST_ID (state, specialistId) {
      state.specialistId = specialistId
    },

    SET_OVERED (state, isOvered) {
      state.isOvered = isOvered
    },

    SET_AVAILABLE_SPECIALISTS_TIMES (state, specialistTimes) {
      state.specialistTimes = specialistTimes
    },

    RESET_DRAG (state) {
      state.time = null
      state.specialistId = null
      state.appointmentId = null

      state.isOvered = false
    }
  },

  getters: {
    totalDuration (state, _getters, _rootState, rootGetters): number {
      const appointment = rootGetters['appointments/appointmentById'](state.appointmentId)

      return getProceduresDuration(appointment)
    },

    getSlotByTime (state) {
      return (time, specialistId) => {
        const times = state.specialistTimes[specialistId] ?? []

        return times.includes(time)
      }
    }
  }
}

export default DrugAndDropModule