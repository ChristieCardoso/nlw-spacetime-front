import { cookies } from 'next/headers'
import decode from 'jwt-decode'

interface User {
  sub: string
  name: string
  avatarUrl: string
}
export function getUser(): User {
  const token = cookies().get('token')?.value
  console.log('rol', token)
  if (!token) {
    throw new Error('Unauthenticated.')
  }

  const user: User = decode(token)
  console.log('user', user)
  return user
}
