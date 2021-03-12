import { SPECIALIST } from '@/constants/roles'

export default async function roleRedirect ({ to, next, store }) {
  if (!store.state.auth.accessToken) {
    return
  }

  const role = store.getters['position/role']
  const specialistId = store.getters['position/currentId']

  if (role.name === SPECIALIST) {
    if (
      /\/specialist\//.test(to.path) &&
      Number(to.params.specialistId) === specialistId
    ) return

    next({
      name: 'specialistInfo',
      params: { specialistId }
    })
  }
}