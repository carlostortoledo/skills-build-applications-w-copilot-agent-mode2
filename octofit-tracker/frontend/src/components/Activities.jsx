import ResourcePage from './ResourcePage.jsx'

const columns = [
  { key: 'type', label: 'Type' },
  { key: 'durationMinutes', label: 'Duration (min)' },
  { key: 'caloriesBurned', label: 'Calories' },
  { key: 'occurredAt', label: 'Occurred At' },
  { key: 'notes', label: 'Notes' },
]

const resourceKey = 'activities'

function Activities() {
  return (
    <ResourcePage
      title="Activities"
      description="Recent logged workouts and movement sessions across your teams."
      resourceKey={resourceKey}
      columns={columns}
      emptyMessage="No activities are available yet. Seed the backend or post a new activity."
    />
  )
}

export default Activities