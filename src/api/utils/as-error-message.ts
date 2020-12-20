import isRelayError from '@/api/utils/is-relay-error'

export default function asErrorMessage(error: unknown): string {
  if (isRelayError(error)) return error.source.errors.map(error => error.message).join('. ')
  if (error instanceof Error) return error.message
  if (typeof error === 'string') return error

  return 'System error'
}
