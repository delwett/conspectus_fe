import RelayError from '@/api/errors/relay-error'

export default function isRelayError(error: unknown): error is RelayError {
  const isInstanceLike = error instanceof RelayError
  const hasSourceErrors = Array.isArray(error && (error as any).source?.errors)

  return isInstanceLike || hasSourceErrors
}
