import { useState, type ReactNode } from "react";

type IconName =
  | "arrow"
  | "bell"
  | "briefcase"
  | "bus"
  | "calendar"
  | "car"
  | "chevron"
  | "clock"
  | "grid"
  | "hammer"
  | "home"
  | "paint"
  | "pin"
  | "repeat"
  | "route"
  | "search"
  | "shield"
  | "sparkles"
  | "star"
  | "user"
  | "wrench";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <path d="m9 18 6-6-6-6" />,
    bell: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
        <path d="M10 21h4" />
      </>
    ),
    briefcase: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" />
      </>
    ),
    bus: (
      <>
        <rect x="4" y="3" width="16" height="16" rx="3" />
        <path d="M4 11h16M8 19v2M16 19v2M8 7h8" />
        <circle cx="8" cy="15" r="1" />
        <circle cx="16" cy="15" r="1" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
      </>
    ),
    car: (
      <>
        <path d="m5 11 2-5h10l2 5M3 13a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5H3z" />
        <path d="M5 18v2M19 18v2M7 15h.01M17 15h.01" />
      </>
    ),
    chevron: <path d="m9 18 6-6-6-6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    grid: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </>
    ),
    hammer: (
      <>
        <path d="m14 5 5 5M12 7l5 5M4 21l8.5-8.5-5-5L3 12l2 2-2 2 5 5 2-2" />
        <path d="m13 4 2-2 7 7-2 2" />
      </>
    ),
    home: (
      <>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v11h14V10M9 21v-7h6v7" />
      </>
    ),
    paint: (
      <>
        <path d="M14.5 4.5 19 9l-9.5 9.5a3.2 3.2 0 0 1-4.5 0 3.2 3.2 0 0 1 0-4.5z" />
        <path d="m12 7 5 5M3 21h8" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    repeat: (
      <>
        <path d="m17 2 4 4-4 4" />
        <path d="M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4" />
        <path d="M21 13v2a3 3 0 0 1-3 3H3" />
      </>
    ),
    route: (
      <>
        <circle cx="6" cy="19" r="2" />
        <circle cx="18" cy="5" r="2" />
        <path d="M8 19h3a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-1a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h6" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    sparkles: (
      <>
        <path d="m12 3 1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2z" />
        <path d="m19 14 .7 2.3L22 17l-2.3.7L19 20l-.7-2.3L16 17l2.3-.7zM5 15l.8 2.2L8 18l-2.2.8L5 21l-.8-2.2L2 18l2.2-.8z" />
      </>
    ),
    star: <path d="m12 2 3 6.2 6.8 1-4.9 4.8 1.2 6.8-6.1-3.2-6.1 3.2 1.2-6.8-4.9-4.8 6.8-1z" />,
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),
    wrench: <path d="M21 3a6 6 0 0 1-7.7 7.7L6 18l-3 3-2-2 3-3 7.3-7.3A6 6 0 0 1 19 1l-4 4 4 4z" />,
  };

  return (
    <svg
      aria-hidden="true"
      className="icon"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      {paths[name]}
    </svg>
  );
}

const rideTypes: { label: string; icon: IconName }[] = [
  { label: "Staff ride", icon: "briefcase" },
  { label: "School run", icon: "bus" },
  { label: "Group trip", icon: "user" },
  { label: "Plan a route", icon: "route" },
];

const scheduledRides = [
  {
    day: "TUE",
    date: "18",
    time: "06:30",
    route: "Home → Sandton Office",
    detail: "Toyota Quantum · 4 seats left",
    status: "Confirmed",
  },
  {
    day: "WED",
    date: "19",
    time: "06:30",
    route: "Home → Sandton Office",
    detail: "Recurring weekday ride",
    status: "Scheduled",
  },
];

function AppButton({
  children,
  className = "",
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button className={className} onClick={onClick} type="button">
      {children}
    </button>
  );
}

export default function App() {
  const [activeRide, setActiveRide] = useState("Staff ride");
  const [activeTab, setActiveTab] = useState("Home");
  const [showRequest, setShowRequest] = useState(false);
  const [isReady, setIsReady] = useState(false);

  return (
    <main className="app-stage">
      <section className="phone-shell" aria-label="Workly home">
        <header className="topbar">
          <div className="brand">
            <span className="brand-name">
              go<span className="brand-pin"><Icon name="pin" size={15} /></span>365
            </span>
            <span className="brand-tagline">Every day. Every journey.</span>
          </div>
          <AppButton className="icon-button" onClick={() => setActiveTab("Alerts")}>
            <Icon name="bell" />
            <span className="notification-dot" />
          </AppButton>
        </header>

        <div className="content">
          <div className="greeting-row">
            <div>
              <p className="eyebrow">GOOD MORNING</p>
              <h1>Your day, on schedule.</h1>
            </div>
            <div className="avatar">LM</div>
          </div>

          <AppButton className="search-bar" onClick={() => setShowRequest(true)}>
            <span className="search-icon">
              <Icon name="search" size={19} />
            </span>
            <span className="search-copy">Where do you need to go?</span>
            <span className="search-action">
              <Icon name="arrow" size={18} />
            </span>
          </AppButton>

          <div className="location-row">
            <Icon name="pin" size={16} />
            <span>Home · Randburg, Johannesburg</span>
            <AppButton className="text-button">Change</AppButton>
          </div>

          <section className="next-ride-card">
            <div className="ride-card-top">
              <span className="live-pill"><i /> NEXT PICKUP</span>
              <span className="ride-countdown"><Icon name="clock" size={14} /> In 38 min</span>
            </div>
            <div className="ride-time-row">
              <div>
                <span className="ride-time">06:30</span>
                <span className="ride-date">Today, 18 June</span>
              </div>
              <span className="vehicle-chip"><Icon name="bus" size={22} /></span>
            </div>
            <div className="route-line">
              <span className="route-track"><i /><i /></span>
              <div>
                <strong>Home pickup</strong>
                <small>12 Oak Avenue, Randburg</small>
                <strong>Sandton Office</strong>
                <small>90 Rivonia Road · ETA 07:15</small>
              </div>
            </div>
            <div className="driver-row">
              <span className="driver-avatar">TM</span>
              <span>
                <strong>Thabo M.</strong>
                <small>Toyota Quantum · JH 42 LM GP</small>
              </span>
              <span className="driver-rating"><Icon name="star" size={12} /> 4.9</span>
            </div>
            <AppButton
              className={`ready-button ${isReady ? "confirmed" : ""}`}
              onClick={() => setIsReady(!isReady)}
            >
              {isReady ? "You're ready — driver notified" : "I'm ready"}
              <Icon name={isReady ? "shield" : "arrow"} size={18} />
            </AppButton>
          </section>

          <section className="section-block">
            <div className="section-heading">
              <h2>Plan your transport</h2>
              <AppButton className="text-button" onClick={() => setShowRequest(true)}>View routes</AppButton>
            </div>
            <div className="category-grid">
              {rideTypes.map((ride) => (
                <AppButton
                  className={`category-card ${activeRide === ride.label ? "active" : ""}`}
                  key={ride.label}
                  onClick={() => {
                    setActiveRide(ride.label);
                    setShowRequest(true);
                  }}
                >
                  <span className="category-icon">
                    <Icon name={ride.icon} size={22} />
                  </span>
                  <span>{ride.label}</span>
                </AppButton>
              ))}
            </div>
          </section>

          <AppButton className="promo-card" onClick={() => setShowRequest(true)}>
            <span className="promo-icon">
              <Icon name="repeat" size={25} />
            </span>
            <span className="promo-copy">
              <strong>Make this your weekday route</strong>
              <span>Reserve your seat once. Ride every workday.</span>
            </span>
            <span className="round-arrow">
              <Icon name="chevron" size={17} />
            </span>
          </AppButton>

          <section className="section-block workers-section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">YOUR WEEK</p>
                <h2>Scheduled rides</h2>
              </div>
              <AppButton className="text-button">See calendar</AppButton>
            </div>
            <div className="worker-list">
              {scheduledRides.map((ride) => (
                <AppButton className="worker-card" key={`${ride.day}-${ride.date}`}>
                  <span className="date-tile">
                    <small>{ride.day}</small>
                    <strong>{ride.date}</strong>
                  </span>
                  <span className="worker-info ride-info">
                    <strong>{ride.time} · {ride.route}</strong>
                    <span>{ride.detail}</span>
                  </span>
                  <span className="availability"><i /> {ride.status}</span>
                  <span className="worker-arrow">
                    <Icon name="chevron" size={17} />
                  </span>
                </AppButton>
              ))}
            </div>
          </section>
        </div>

        <nav className="bottom-nav" aria-label="Main navigation">
          {[
            { label: "Explore", icon: "grid" as IconName },
            { label: "Rides", icon: "calendar" as IconName },
          ].map((item) => (
            <AppButton
              className={`nav-item ${activeTab === item.label ? "active" : ""}`}
              key={item.label}
              onClick={() => setActiveTab(item.label)}
            >
              <Icon name={item.icon} size={21} />
              <span>{item.label}</span>
            </AppButton>
          ))}
          <div className="home-slot">
            <AppButton
              className="home-button"
              onClick={() => {
                setActiveTab("Home");
              }}
            >
              <Icon name="home" size={24} />
            </AppButton>
            <span>Home</span>
          </div>
          {[
            { label: "Routes", icon: "route" as IconName },
            { label: "Profile", icon: "user" as IconName },
          ].map((item) => (
            <AppButton
              className={`nav-item ${activeTab === item.label ? "active" : ""}`}
              key={item.label}
              onClick={() => setActiveTab(item.label)}
            >
              <Icon name={item.icon} size={21} />
              <span>{item.label}</span>
            </AppButton>
          ))}
        </nav>

        {showRequest && (
          <div className="sheet-backdrop" onClick={() => setShowRequest(false)}>
            <section
              aria-label="Schedule a ride"
              className="request-sheet"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="sheet-handle" />
              <div className="sheet-icon">
                <Icon name="car" size={26} />
              </div>
              <h2>Schedule your ride</h2>
              <p>Reserve a seat for one trip or make it your recurring work route.</p>
              <label>
                Transport type
                <select
                  onChange={(event) => setActiveRide(event.target.value)}
                  value={activeRide}
                >
                  {rideTypes.map((ride) => (
                    <option key={ride.label}>{ride.label}</option>
                  ))}
                </select>
              </label>
              <label>
                Pickup route
                <select defaultValue="Randburg to Sandton">
                  <option>Randburg to Sandton</option>
                  <option>Soweto to Johannesburg CBD</option>
                  <option>Midrand to Rosebank</option>
                </select>
              </label>
              <div className="sheet-options">
                <label>
                  Pickup time
                  <select defaultValue="06:30">
                    <option>06:30</option>
                    <option>07:00</option>
                    <option>07:30</option>
                  </select>
                </label>
                <label>
                  Frequency
                  <select defaultValue="Weekdays">
                    <option>Weekdays</option>
                    <option>Once-off</option>
                    <option>Custom days</option>
                  </select>
                </label>
              </div>
              <AppButton className="primary-button" onClick={() => setShowRequest(false)}>
                Find available seats
                <Icon name="arrow" size={18} />
              </AppButton>
            </section>
          </div>
        )}
      </section>
    </main>
  );
}
