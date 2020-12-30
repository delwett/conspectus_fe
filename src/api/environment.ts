import { Environment, Network, RecordSource, Store } from 'relay-runtime'
import { getToken } from '@/utils/auth-tokens'
import { apiEndpoint } from '@/config'

async function fetchQuery(operation: any, variables: any): Promise<any> {
  return fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      auth: getToken() ?? ''
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(async response =>
    response.json().then(result => {
      if (result?.errors) {
        return { data: null, errors: result.errors }
      }
      return result
    })
  )
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
})

export default environment
