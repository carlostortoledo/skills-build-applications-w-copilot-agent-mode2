import ResourcePage from './ResourcePage.jsx'

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'teamId', label: 'Team ID' },
  { key: 'avatarUrl', label: 'Avatar URL' },
]

const resourceKey = 'users'

function Users() {
  return (
    <ResourcePage
      title="Users"
      description="Registered athletes, their emails, and their current team assignments."
      resourceKey={resourceKey}
      columns={columns}
      emptyMessage="No users are available yet. Seed the backend or create records through the API."
    />
  )
}

export default Users