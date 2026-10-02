import { useState, type ReactNode } from "react";

type IconName =
  | "arrow"
  | "bell"
  | "briefcase"
  | "calendar"
  | "chevron"
  | "clock"
  | "grid"
  | "hammer"
  | "home"
  | "paint"
  | "pin"
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
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
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

const categories: { label: string; icon: IconName }[] = [
  { label: "Cleaning", icon: "sparkles" },
  { label: "Repairs", icon: "wrench" },
  { label: "Moving", icon: "briefcase" },
  { label: "Painting", icon: "paint" },
];

const workers = [
  {
    initials: "TK",
    name: "Thabo K.",
    role: "Handyman",
    rating: "4.9",
    jobs: "128 jobs",
    tone: "sage",
  },
  {
    initials: "NM",
    name: "Naledi M.",
    role: "Home cleaner",
    rating: "4.8",
    jobs: "96 jobs",
    tone: "sand",
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
  const [activeCategory, setActiveCategory] = useState("Cleaning");
  const [activeTab, setActiveTab] = useState("Home");
  const [showRequest, setShowRequest] = useState(false);

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
              <h1>What needs doing?</h1>
            </div>
            <div className="avatar">LM</div>
          </div>

          <AppButton className="search-bar" onClick={() => setShowRequest(true)}>
            <span className="search-icon">
              <Icon name="search" size={19} />
            </span>
            <span className="search-copy">Describe the job you need</span>
            <span className="search-action">
              <Icon name="arrow" size={18} />
            </span>
          </AppButton>

          <div className="location-row">
            <Icon name="pin" size={16} />
            <span>Sandton, Johannesburg</span>
            <AppButton className="text-button">Change</AppButton>
          </div>

          <section className="section-block">
            <div className="section-heading">
              <h2>Popular services</h2>
              <AppButton className="text-button">See all</AppButton>
            </div>
            <div className="category-grid">
              {categories.map((category) => (
                <AppButton
                  className={`category-card ${activeCategory === category.label ? "active" : ""}`}
                  key={category.label}
                  onClick={() => setActiveCategory(category.label)}
                >
                  <span className="category-icon">
                    <Icon name={category.icon} size={22} />
                  </span>
                  <span>{category.label}</span>
                </AppButton>
              ))}
            </div>
          </section>

          <AppButton className="promo-card" onClick={() => setShowRequest(true)}>
            <span className="promo-icon">
              <Icon name="shield" size={25} />
            </span>
            <span className="promo-copy">
              <strong>Help, right when you need it</strong>
              <span>Post a job and get matched in minutes.</span>
            </span>
            <span className="round-arrow">
              <Icon name="chevron" size={17} />
            </span>
          </AppButton>

          <section className="section-block workers-section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">READY NEAR YOU</p>
                <h2>Top-rated workers</h2>
              </div>
              <AppButton className="text-button">View map</AppButton>
            </div>
            <div className="worker-list">
              {workers.map((worker) => (
                <AppButton className="worker-card" key={worker.name}>
                  <span className={`worker-avatar ${worker.tone}`}>{worker.initials}</span>
                  <span className="worker-info">
                    <strong>{worker.name}</strong>
                    <span>{worker.role}</span>
                    <small>
                      <Icon name="star" size={12} />
                      {worker.rating} <i /> {worker.jobs}
                    </small>
                  </span>
                  <span className="availability">
                    <i /> Available
                  </span>
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
            { label: "Bookings", icon: "calendar" as IconName },
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
                setShowRequest(true);
              }}
            >
              <Icon name="home" size={24} />
            </AppButton>
            <span>Home</span>
          </div>
          {[
            { label: "Jobs", icon: "briefcase" as IconName },
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
              aria-label="Create a job request"
              className="request-sheet"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="sheet-handle" />
              <div className="sheet-icon">
                <Icon name="hammer" size={26} />
              </div>
              <h2>Let&apos;s get it done</h2>
              <p>Tell us what you need and we&apos;ll find the right worker nearby.</p>
              <label>
                Job type
                <select
                  onChange={(event) => setActiveCategory(event.target.value)}
                  value={activeCategory}
                >
                  {categories.map((category) => (
                    <option key={category.label}>{category.label}</option>
                  ))}
                </select>
              </label>
              <label>
                When do you need help?
                <select defaultValue="Today">
                  <option>Today</option>
                  <option>Tomorrow</option>
                  <option>This week</option>
                </select>
              </label>
              <AppButton className="primary-button" onClick={() => setShowRequest(false)}>
                Find a worker
                <Icon name="arrow" size={18} />
              </AppButton>
            </section>
          </div>
        )}
      </section>
    </main>
  );
}
