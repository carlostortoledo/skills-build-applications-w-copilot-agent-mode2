import ResourcePage from './ResourcePage.jsx'

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'description', label: 'Description' },
  { key: 'memberIds', label: 'Member IDs' },
]

const resourceKey = 'teams'

function Teams() {
  return (
    <ResourcePage
      title="Teams"
      description="Groups of athletes competing together and tracking their shared progress."
      resourceKey={resourceKey}
      columns={columns}
      emptyMessage="No teams are available yet. Seed the backend or create a team through the API."
    />
  )
}

export default Teams