type OriginalError = {
  code?: number
  message?: string
}

type ErrorSource = {
  errors: OriginalError[]
}

type RelayErrorCostructor = {
  message: string
  source: ErrorSource
}

export default class RelayError extends Error {
  constructor(error: RelayErrorCostructor) {
    super(error.message)

    this.source = error.source
  }

  readonly source: ErrorSource
}
