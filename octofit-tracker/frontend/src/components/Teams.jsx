import ResourcePage from './ResourcePage.jsx'

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'description', label: 'Description' },
  { key: 'memberIds', label: 'Member IDs' },
]

function Teams() {
  return (
    <ResourcePage
      title="Teams"
      description="Groups of athletes competing together and tracking their shared progress."
      resourceKey="teams"
      columns={columns}
      emptyMessage="No teams are available yet. Seed the backend or create a team through the API."
    />
  )
}

export default Teams