import { createElement, useEffect } from 'react'
import Router from 'next/router'
import { useCurrentUser } from '~/hooks/use-current-user'
import { Role } from './utils'

function getRedirectTo() {
  if (typeof window !== 'undefined' && window.location) {
    return window.location
  }
  return null
}

export const withAuth = (WrappedComponent: any, role? : Role, own? : boolean) => {
  const Wrapper = props => {

    const { user, isLoading: loadingUser, error: userError } = useCurrentUser()

    useEffect(() => {
      const redir = getRedirectTo()
      if (loadingUser && userError) {
        Router.replace(`/login?r=${redir.pathname + encodeURIComponent(redir.search)}`, '/login', { shallow: true })
        return
      }
      if (!loadingUser && !user.status) {
        Router.push('/logout')
        return
      }
      if (role && !loadingUser) {
        if (own && role != user.roles.id-1 || role > user.roles.id-1) {
          Router.push('/dashboard')
        }
      }
    }, [loadingUser, userError])

    return createElement(WrappedComponent, props, null)
  }

  return Wrapper
}

export default withAuth