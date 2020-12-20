import { Environment, Network, RecordSource, Store } from 'relay-runtime'

async function fetchQuery(operation: any, variables: any): Promise<any> {
  return fetch('http://localhost:8000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
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
