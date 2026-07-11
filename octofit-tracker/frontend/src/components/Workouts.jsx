import ResourcePage from './ResourcePage.jsx'

const columns = [
  { key: 'title', label: 'Title' },
  { key: 'focusArea', label: 'Focus Area' },
  { key: 'durationMinutes', label: 'Duration (min)' },
  { key: 'difficulty', label: 'Difficulty' },
  { key: 'equipment', label: 'Equipment' },
]

function Workouts() {
  return (
    <ResourcePage
      title="Workouts"
      description="Suggested training plans and exercise programs available to the app."
      resourceKey="workouts"
      columns={columns}
      emptyMessage="No workouts are available yet. Seed the backend or create workout templates first."
    />
  )
}

export default Workouts