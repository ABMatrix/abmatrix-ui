import type { Route } from 'vue-router'

export function equalPath(route: Route, name: string) {
  const routeName = route.name?.split('__')[0].split('-')[0]
  return routeName === name
}
