import ResourcePage from './ResourcePage.jsx'

const columns = [
  { key: 'rank', label: 'Rank' },
  { key: 'points', label: 'Points' },
  { key: 'period', label: 'Period' },
  { key: 'userId', label: 'User ID' },
  { key: 'teamId', label: 'Team ID' },
]

function Leaderboard() {
  return (
    <ResourcePage
      title="Leaderboard"
      description="Current standings for competitive challenges and team-based fitness goals."
      resourceKey="leaderboard"
      columns={columns}
      emptyMessage="No leaderboard entries are available yet. Seed the backend or create scores first."
    />
  )
}

export default Leaderboard