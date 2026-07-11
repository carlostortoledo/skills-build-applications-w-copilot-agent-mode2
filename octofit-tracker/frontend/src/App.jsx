import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import './App.css'

const navigationItems = [
  { to: '/users', label: 'Users' },
  { to: '/activities', label: 'Activities' },
  { to: '/teams', label: 'Teams' },
  { to: '/leaderboard', label: 'Leaderboard' },
  { to: '/workouts', label: 'Workouts' },
]

function App() {
  return (
    <div className="app-shell bg-body-tertiary min-vh-100">
      <header className="border-bottom bg-white shadow-sm">
        <div className="container py-4">
          <div className="row g-4 align-items-end">
            <div className="col-lg-7">
              <span className="eyebrow text-uppercase">Octofit Tracker</span>
              <h1 className="display-5 fw-semibold mb-3">Presentation tier for your fitness data</h1>
              <p className="lead mb-0 text-secondary">
                Browse users, activities, teams, leaderboard standings, and workouts from the
                Express API running on port 8000.
              </p>
            </div>
            <div className="col-lg-5">
              <div className="status-card rounded-4 p-3 p-md-4">
                <div className="small text-uppercase text-secondary mb-2">API target</div>
                <div className="fw-semibold">Codespaces-aware routing via import.meta.env</div>
                <div className="small text-secondary mt-2">
                  Define <code>VITE_CODESPACE_NAME</code> to target the public backend URL.
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container py-4 py-lg-5">
        <nav aria-label="Primary" className="mb-4">
          <ul className="nav nav-pills gap-2 app-nav">
            {navigationItems.map((item) => (
              <li key={item.to} className="nav-item">
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `nav-link rounded-pill px-3 ${isActive ? 'active' : 'text-secondary'}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Navigate to="/users" replace />} />
          <Route path="/users" element={<Users />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
