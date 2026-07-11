import { useEffect, useState } from 'react'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()

const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api`
  : null

const fallbackMessage =
  'Set VITE_CODESPACE_NAME in your frontend environment to target the public backend API.'

const isPaginatedPayload = (value) =>
  value && typeof value === 'object' && Array.isArray(value.data)

const getCollectionFromPayload = (payload, resourceKey) => {
  if (Array.isArray(payload)) {
    return { items: payload, meta: {} }
  }

  if (!payload || typeof payload !== 'object') {
    return { items: [], meta: {} }
  }

  if (Array.isArray(payload[resourceKey])) {
    const { [resourceKey]: items, ...meta } = payload

    return { items, meta }
  }

  if (isPaginatedPayload(payload)) {
    const { data, ...meta } = payload

    return { items: data, meta }
  }

  return { items: [], meta: payload }
}

const formatValue = (value) => {
  if (Array.isArray(value)) {
    return value.length ? value.join(', ') : 'None'
  }

  if (typeof value === 'boolean') {
    return value ? 'Yes' : 'No'
  }

  if (value === null || value === undefined || value === '') {
    return 'Not provided'
  }

  return String(value)
}

function ResourcePage({ description, emptyMessage, resourceKey, title, columns }) {
  const [items, setItems] = useState([])
  const [meta, setMeta] = useState({})
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    const loadCollection = async () => {
      if (!apiBaseUrl) {
        if (isMounted) {
          setItems([])
          setMeta({})
          setError(fallbackMessage)
          setIsLoading(false)
        }

        return
      }

      setIsLoading(true)
      setError('')

      try {
        const response = await fetch(`${apiBaseUrl}/${resourceKey}/`, {
          headers: { Accept: 'application/json' },
        })

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }

        const payload = await response.json()
        const normalized = getCollectionFromPayload(payload, resourceKey)

        if (isMounted) {
          setItems(normalized.items)
          setMeta(normalized.meta)
        }
      } catch (requestError) {
        if (isMounted) {
          setItems([])
          setMeta({})
          setError(requestError instanceof Error ? requestError.message : 'Unable to load data.')
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    loadCollection()

    return () => {
      isMounted = false
    }
  }, [resourceKey])

  const hasMeta = Object.keys(meta).length > 0

  return (
    <section className="resource-page card border-0 shadow-sm rounded-4 overflow-hidden">
      <div className="card-body p-4 p-lg-5">
        <div className="d-flex flex-column flex-lg-row justify-content-between gap-3 align-items-lg-end mb-4">
          <div>
            <p className="text-uppercase small text-secondary mb-2">Collection</p>
            <h2 className="h1 mb-2">{title}</h2>
            <p className="text-secondary mb-0">{description}</p>
          </div>
          <div className="text-lg-end">
            <div className="small text-secondary">Endpoint</div>
            <code className="endpoint-label">/{resourceKey}/</code>
          </div>
        </div>

        {error ? <div className="alert alert-warning mb-4">{error}</div> : null}

        {isLoading ? (
          <div className="py-5 text-center text-secondary">Loading {title.toLowerCase()}...</div>
        ) : null}

        {!isLoading && !error && items.length === 0 ? (
          <div className="empty-state rounded-4 p-4 text-secondary">{emptyMessage}</div>
        ) : null}

        {!isLoading && items.length > 0 ? (
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead>
                <tr>
                  {columns.map((column) => (
                    <th key={column.key} scope="col">
                      {column.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item._id ?? `${resourceKey}-${columns.map((column) => item[column.key]).join('-')}`}>
                    {columns.map((column) => (
                      <td key={column.key}>{formatValue(item[column.key])}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}

        {!isLoading && !error && hasMeta ? (
          <div className="mt-4 small text-secondary">
            Response metadata: {JSON.stringify(meta)}
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default ResourcePage