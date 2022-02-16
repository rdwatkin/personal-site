import _ from 'lodash'

const call = (method, endpoint, options ={}) => {
  const { pp = '', headers = {}, formData = new FormData() } = options
  const fetchObj = {
    method,
    credentials: 'same-origin',
  }

  let modifiedEndpoint = pp + endpoint

  if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(method)) {
    fetchObj.headers = {
      'content-Type': 'application/json'
    }
    fetchObj.body = JSON.stringify(formData)
  } else {
    fetchObj.headers = headers
    if (_.keys(formData).length > 0) {
      const queryValues = _.map(formData, (val, key) => {
        if (val instanceof Array) {
          return _.map(val, v => `${encodeURIComponent(key)}=${encodeURIComponent(v)}`).join('&')
        }
        return `${encodeURIComponent(key)}=${encodeURIComponent(val)}`
      }).join('&')
      modifiedEndpoint += queryValues
    }
  }

  const makeCall = () => fetch(`${modifiedEndpoint}`, fetchObj).then(
    handleResponse,
    (cause) => Promise.reject(new Error(`Failed to make ${method} request to ${modifiedEndpoint} with cause: ${cause}`))
  )

  return Promise.resolve().then(makeCall)
}

const handleResponse = (response) => {
  switch (response.status) {
    case 204:
      return Promise.resolve()
    case 404:
      return Promise.reject(new Error('NOT FOUND (404)'))
    case 503:
      return Promise.reject(new Error('SERVICE UNAVAILABLE (503)'))
    default:
      return response.json().then(
        (data) => {
          if (200 <= response.status && response.status < 400) {
            return data
          }

          return Promise.reject(new Error(`${data.detail}`))
        },
        (cause) => Promise.reject(new Error(`Server responded with status ${response.status} and a non-JSON body. Cause: ${cause}`))
      )
  }
}

export default call
