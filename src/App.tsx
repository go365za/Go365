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

function ScreenHeading({
  eyebrow,
  title,
  action,
}: {
  eyebrow: string;
  title: string;
  action?: string;
}) {
  return (
    <div className="screen-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
      </div>
      {action && <AppButton className="profile-edit">{action}</AppButton>}
    </div>
  );
}

function ExploreScreen({ onBook }: { onBook: (type: string) => void }) {
  const [filter, setFilter] = useState("All");
  const routes = [
    {
      icon: "bus" as IconName,
      name: "Randburg → Sandton",
      time: "06:30 · Weekdays",
      detail: "4 pickup points · 45 min",
      price: "R48",
      seats: "4 seats",
      pass: true,
    },
    {
      icon: "car" as IconName,
      name: "Midrand → Rosebank",
      time: "07:00 · Weekdays",
      detail: "Direct ride · 35 min",
      price: "R62",
      seats: "2 seats",
      pass: true,
    },
    {
      icon: "bus" as IconName,
      name: "Soweto → JHB CBD",
      time: "05:50 · Mon–Sat",
      detail: "6 pickup points · 55 min",
      price: "R42",
      seats: "7 seats",
      pass: false,
    },
  ];

  return (
    <div className="screen-page">
      <ScreenHeading eyebrow="EXPLORE TRANSPORT" title="Find your route" action="Map" />
      <AppButton className="search-bar page-search">
        <span className="search-icon"><Icon name="search" size={19} /></span>
        <span className="search-copy">Search area, office or route</span>
        <span className="filter-chip"><Icon name="route" size={16} /></span>
      </AppButton>

      <div className="filter-row">
        {["All", "Staff", "School", "Group"].map((item) => (
          <AppButton
            className={`filter-button ${filter === item ? "active" : ""}`}
            key={item}
            onClick={() => setFilter(item)}
          >
            {item}
          </AppButton>
        ))}
      </div>

      <section className="nearby-banner">
        <span className="nearby-icon"><Icon name="pin" size={20} /></span>
        <span><strong>12 routes near you</strong><small>Based on your Randburg location</small></span>
        <Icon name="chevron" size={17} />
      </section>

      <div className="section-heading page-section-heading">
        <div><p className="eyebrow">AVAILABLE THIS WEEK</p><h2>Popular routes</h2></div>
        <AppButton className="text-button">Sort by</AppButton>
      </div>
      <div className="route-card-list">
        {routes.map((route) => (
          <AppButton className="explore-route-card" key={route.name} onClick={() => onBook("Staff ride")}>
            <span className="route-vehicle"><Icon name={route.icon} size={22} /></span>
            <span className="explore-route-info">
              <strong>{route.name}</strong>
              <small><Icon name="clock" size={11} /> {route.time}</small>
              <small><Icon name="route" size={11} /> {route.detail}</small>
              <span className="route-tags">
                <i>{route.seats}</i>
                {route.pass && <i className="pass-tag">Pass −20%</i>}
              </span>
            </span>
            <span className="route-price"><strong>{route.price}</strong><small>/ ride</small></span>
          </AppButton>
        ))}
      </div>

      <AppButton className="custom-route-card" onClick={() => onBook("Plan a route")}>
        <span><Icon name="route" size={22} /></span>
        <span><strong>Can&apos;t find your route?</strong><small>Request a new pickup and destination.</small></span>
        <Icon name="chevron" size={18} />
      </AppButton>
    </div>
  );
}

function RidesScreen() {
  const [rideView, setRideView] = useState("Upcoming");
  const rides = rideView === "Upcoming"
    ? [
        { date: "18", day: "TUE", time: "06:30", route: "Randburg → Sandton", status: "Driver assigned", icon: "bus" as IconName },
        { date: "18", day: "TUE", time: "17:15", route: "Sandton → Randburg", status: "Scheduled", icon: "car" as IconName },
        { date: "19", day: "WED", time: "06:30", route: "Randburg → Sandton", status: "Recurring", icon: "bus" as IconName },
      ]
    : [
        { date: "17", day: "MON", time: "17:10", route: "Sandton → Randburg", status: "Completed", icon: "car" as IconName },
        { date: "17", day: "MON", time: "06:32", route: "Randburg → Sandton", status: "Completed", icon: "bus" as IconName },
      ];

  return (
    <div className="screen-page">
      <ScreenHeading eyebrow="YOUR TRANSPORT" title="My rides" action="Calendar" />
      <div className="segmented-control">
        {["Upcoming", "Past"].map((item) => (
          <AppButton
            className={rideView === item ? "active" : ""}
            key={item}
            onClick={() => setRideView(item)}
          >
            {item}
          </AppButton>
        ))}
      </div>

      {rideView === "Upcoming" && (
        <section className="ride-summary-strip">
          <div><strong>6</strong><small>rides this week</small></div>
          <i />
          <div><strong>R288</strong><small>weekly total</small></div>
          <i />
          <div><strong>R72</strong><small>Pass savings</small></div>
        </section>
      )}

      <div className="timeline-list">
        {rides.map((ride, index) => (
          <div className="timeline-item" key={`${ride.date}-${ride.time}`}>
            <div className="timeline-date"><small>{ride.day}</small><strong>{ride.date}</strong></div>
            <div className="timeline-marker"><i />{index < rides.length - 1 && <span />}</div>
            <AppButton className="ride-schedule-card">
              <span className="schedule-icon"><Icon name={ride.icon} size={19} /></span>
              <span className="schedule-info">
                <strong>{ride.time} · {ride.route}</strong>
                <small>{ride.status}</small>
              </span>
              <Icon name="chevron" size={16} />
            </AppButton>
          </div>
        ))}
      </div>

      {rideView === "Upcoming" && (
        <section className="morning-card">
          <span><Icon name="bell" size={20} /></span>
          <div><strong>Morning assistant is on</strong><small>Wake-up at 05:45 · Pickup reminder at 06:00</small></div>
          <AppButton className="mini-action">Edit</AppButton>
        </section>
      )}
    </div>
  );
}

function RoutesScreen({ onBook }: { onBook: (type: string) => void }) {
  const [activeSchedule, setActiveSchedule] = useState(true);

  return (
    <div className="screen-page">
      <ScreenHeading eyebrow="RECURRING TRANSPORT" title="My routes" action="Add route" />

      <section className="route-plan-card">
        <div className="plan-card-head">
          <span className="schedule-icon dark"><Icon name="repeat" size={19} /></span>
          <span><strong>Work commute</strong><small>Monday – Friday</small></span>
          <AppButton
            className={`switch ${activeSchedule ? "on" : ""}`}
            onClick={() => setActiveSchedule(!activeSchedule)}
          ><i /></AppButton>
        </div>
        <div className="route-plan-line">
          <span className="route-track light"><i /><i /></span>
          <div>
            <strong>06:30 · Home, Randburg</strong><small>Morning pickup</small>
            <strong>17:15 · Sandton Office</strong><small>Return pickup</small>
          </div>
        </div>
        <div className="route-plan-footer">
          <span><Icon name="calendar" size={14} /> Next: Tomorrow</span>
          <strong>R960 <small>/ month</small></strong>
        </div>
      </section>

      <div className="mini-card-grid">
        <div className="info-mini-card"><span><Icon name="bus" size={18} /></span><strong>Quantum</strong><small>Preferred vehicle</small></div>
        <div className="info-mini-card"><span><Icon name="pin" size={18} /></span><strong>4 stops</strong><small>On your route</small></div>
        <div className="info-mini-card"><span><Icon name="user" size={18} /></span><strong>8 riders</strong><small>Regular group</small></div>
      </div>

      <section className="profile-section">
        <div className="section-heading">
          <div><p className="eyebrow">SUGGESTED FOR YOU</p><h2>Other schedules</h2></div>
        </div>
        <div className="suggested-list">
          {[
            { title: "Late shift return", detail: "Sandton → Randburg", time: "20:30", price: "R58" },
            { title: "Friday express", detail: "Sandton → Rosebank → Randburg", time: "16:30", price: "R52" },
          ].map((route) => (
            <AppButton className="suggested-card" key={route.title} onClick={() => onBook("Staff ride")}>
              <span className="schedule-icon"><Icon name="car" size={18} /></span>
              <span><strong>{route.title}</strong><small>{route.time} · {route.detail}</small></span>
              <strong>{route.price}</strong>
            </AppButton>
          ))}
        </div>
      </section>

      <AppButton className="primary-button" onClick={() => onBook("Plan a route")}>
        Create another schedule <Icon name="arrow" size={18} />
      </AppButton>
    </div>
  );
}

function AlertsScreen() {
  return (
    <div className="screen-page">
      <ScreenHeading eyebrow="STAY ON TIME" title="Notifications" action="Read all" />
      <div className="alert-list">
        {[
          { icon: "bus" as IconName, title: "Your driver is assigned", note: "Thabo will pick you up tomorrow at 06:30.", time: "2 min", fresh: true },
          { icon: "bell" as IconName, title: "Morning alarm confirmed", note: "Your wake-up is set for 05:45.", time: "1 hr", fresh: true },
          { icon: "repeat" as IconName, title: "Weekly route renewed", note: "Your weekday seat is reserved for next week.", time: "Yesterday", fresh: false },
          { icon: "shield" as IconName, title: "Go365 Pass saving", note: "You saved R72 on rides this week.", time: "Mon", fresh: false },
        ].map((alert) => (
          <AppButton className={`alert-card ${alert.fresh ? "fresh" : ""}`} key={alert.title}>
            <span className="alert-icon"><Icon name={alert.icon} size={19} /></span>
            <span><strong>{alert.title}</strong><small>{alert.note}</small></span>
            <time>{alert.time}</time>
          </AppButton>
        ))}
      </div>
    </div>
  );
}

function DriverScreen({ onExit }: { onExit: () => void }) {
  const [online, setOnline] = useState(true);
  const [tripStage, setTripStage] = useState(0);
  const stages = ["Request", "Pickup", "On trip", "Complete"];
  const stageContent = [
    {
      eyebrow: "INCOMING REQUEST",
      title: "New scheduled ride",
      note: "Passenger is ready",
      action: "Accept trip",
    },
    {
      eyebrow: "EN ROUTE TO PICKUP",
      title: "12 Oak Avenue",
      note: "12 min away · 4.2 km",
      action: "Arrived at pickup",
    },
    {
      eyebrow: "TRIP IN PROGRESS",
      title: "Sandton Office Park",
      note: "ETA 07:14 · 8.3 km",
      action: "Complete trip",
    },
    {
      eyebrow: "TRIP COMPLETED",
      title: "Great drive, Thabo!",
      note: "R48.00 added to earnings",
      action: "Back to dashboard",
    },
  ][tripStage];

  return (
    <div className="screen-page driver-screen">
      <div className="driver-welcome">
        <div>
          <p className="eyebrow">DRIVER DASHBOARD</p>
          <h1>Good morning, Thabo.</h1>
        </div>
        <AppButton className="passenger-return" onClick={onExit}>
          <Icon name="user" size={15} /> Passenger app
        </AppButton>
      </div>

      <section className="online-card">
        <span className="driver-avatar large">TM</span>
        <span><strong>You&apos;re {online ? "online" : "offline"}</strong><small>{online ? "Ready for scheduled trips" : "Go online to receive trips"}</small></span>
        <AppButton className={`switch ${online ? "on" : ""}`} onClick={() => setOnline(!online)}><i /></AppButton>
      </section>

      <div className="driver-stat-grid">
        <div><span><Icon name="car" size={16} /></span><strong>4</strong><small>Trips today</small></div>
        <div><span><Icon name="briefcase" size={16} /></span><strong>R540</strong><small>Earnings</small></div>
        <div><span><Icon name="star" size={16} /></span><strong>4.8</strong><small>Rating</small></div>
      </div>

      <div className="driver-stage-row">
        {stages.map((stage, index) => (
          <AppButton
            className={`${index === tripStage ? "active" : ""} ${index < tripStage ? "done" : ""}`}
            key={stage}
            onClick={() => setTripStage(index)}
          >
            <i>{index < tripStage ? "✓" : index + 1}</i>
            <span>{stage}</span>
          </AppButton>
        ))}
      </div>

      <section className={`driver-trip-card stage-${tripStage}`}>
        <div className="driver-trip-head">
          <div>
            <p className="eyebrow">{stageContent.eyebrow}</p>
            <h2>{stageContent.title}</h2>
            <span>{stageContent.note}</span>
          </div>
          {tripStage < 3 ? <span className="distance-pill">{tripStage === 0 ? "18 min" : "Live"}</span> : <span className="complete-mark">✓</span>}
        </div>

        {tripStage < 3 && (
          <div className="route-preview">
            <span className="map-road road-one" />
            <span className="map-road road-two" />
            <span className="map-road road-three" />
            <span className="map-route route-one" />
            <span className="map-route route-two" />
            <span className="map-pin pickup"><Icon name="pin" size={17} /></span>
            <span className="map-pin destination"><Icon name="pin" size={17} /></span>
            <span className="map-car"><Icon name="car" size={18} /></span>
          </div>
        )}

        {tripStage === 3 ? (
          <div className="trip-complete-summary">
            <div><span>Total fare</span><strong>R48.00</strong></div>
            <i />
            <div><span>Today&apos;s total</span><strong>R588.00</strong></div>
          </div>
        ) : (
          <div className="driver-route-detail">
            <span className="route-track driver-track"><i /><i /></span>
            <div>
              <strong>Greenstone Mall pickup</strong>
              <small>Passenger: Lerato M. · Ready</small>
              <strong>Sandton Office Park</strong>
              <small>12.5 km · Company ride</small>
            </div>
          </div>
        )}

        <AppButton
          className="driver-primary"
          onClick={() => setTripStage(tripStage === 3 ? 0 : tripStage + 1)}
        >
          {stageContent.action} <Icon name="arrow" size={17} />
        </AppButton>
      </section>

      <section className="driver-bottom-grid">
        <AppButton><span><Icon name="briefcase" size={18} /></span><strong>Earnings</strong><small>R3,840 this week</small></AppButton>
        <AppButton><span><Icon name="bus" size={18} /></span><strong>Vehicle</strong><small>Toyota Quantum</small></AppButton>
        <AppButton><span><Icon name="shield" size={18} /></span><strong>Documents</strong><small>All verified</small></AppButton>
        <AppButton><span><Icon name="clock" size={18} /></span><strong>Trip history</strong><small>128 completed</small></AppButton>
      </section>
    </div>
  );
}

export default function App() {
  const [activeRide, setActiveRide] = useState("Staff ride");
  const [activeTab, setActiveTab] = useState("Home");
  const [appMode, setAppMode] = useState<"passenger" | "driver">("passenger");
  const [showRequest, setShowRequest] = useState(false);
  const [isReady, setIsReady] = useState(false);

  return (
    <main className="app-stage">
      <section className="phone-shell" aria-label="Go365 transport">
        <header className="topbar">
          <div className="brand">
            <span className="brand-name">
              go<span className="brand-pin"><Icon name="pin" size={15} /></span>365
            </span>
            <span className="brand-tagline">
              {appMode === "driver" ? "Driver partner" : "Every day. Every journey."}
            </span>
          </div>
          <AppButton className="icon-button" onClick={() => setActiveTab("Alerts")}>
            <Icon name="bell" />
            <span className="notification-dot" />
          </AppButton>
        </header>

        <div className="content">
          {appMode === "driver" ? (
            <DriverScreen
              onExit={() => {
                setAppMode("passenger");
                setActiveTab("Profile");
              }}
            />
          ) : activeTab === "Profile" ? (
            <div className="profile-screen">
              <div className="profile-heading">
                <div className="profile-photo">LM</div>
                <div>
                  <p className="eyebrow">PASSENGER PROFILE</p>
                  <h1>Lerato Mokoena</h1>
                  <span>lerato.mokoena@email.com</span>
                </div>
                <AppButton className="profile-edit">Edit</AppButton>
              </div>

              <section className="pass-card">
                <div className="pass-brand">
                  <span className="brand-name">go365</span>
                  <span>PASS</span>
                </div>
                <span className="pass-crown"><Icon name="star" size={19} /></span>
                <div className="pass-status">
                  <span>Ride more. Save more.</span>
                  <strong>R149 <small>/ month</small></strong>
                </div>
              </section>

              <div className="benefit-grid">
                {[
                  { icon: "car" as IconName, value: "20%", label: "Off rides" },
                  { icon: "shield" as IconName, value: "R0", label: "Extra fees" },
                  { icon: "calendar" as IconName, value: "1st", label: "Priority booking" },
                  { icon: "repeat" as IconName, value: "30", label: "Days valid" },
                ].map((benefit) => (
                  <div className="benefit-card" key={benefit.label}>
                    <span><Icon name={benefit.icon} size={17} /></span>
                    <strong>{benefit.value}</strong>
                    <small>{benefit.label}</small>
                  </div>
                ))}
              </div>

              <section className="profile-section">
                <div className="section-heading">
                  <h2>Choose your pass</h2>
                  <AppButton className="text-button">Compare</AppButton>
                </div>
                <div className="plan-row">
                  <AppButton className="plan-card">
                    <span>Basic</span>
                    <strong>R99</strong>
                    <small>5% off</small>
                  </AppButton>
                  <AppButton className="plan-card selected">
                    <span>MOST POPULAR</span>
                    <strong>R149</strong>
                    <small>20% off</small>
                  </AppButton>
                  <AppButton className="plan-card">
                    <span>Premium</span>
                    <strong>R249</strong>
                    <small>Family benefits</small>
                  </AppButton>
                </div>
                <AppButton className="primary-button pass-button">Get your Go365 Pass</AppButton>
              </section>

              <section className="profile-section">
                <h2>Account</h2>
                <div className="settings-list">
                  {[
                    { icon: "pin" as IconName, title: "Saved places", note: "Home and work" },
                    { icon: "bell" as IconName, title: "Morning alerts", note: "Wake-up set for 05:45" },
                    { icon: "shield" as IconName, title: "Safety & support", note: "Trusted contacts" },
                  ].map((item) => (
                    <AppButton className="setting-row" key={item.title}>
                      <span className="setting-icon"><Icon name={item.icon} size={18} /></span>
                      <span><strong>{item.title}</strong><small>{item.note}</small></span>
                      <Icon name="chevron" size={17} />
                    </AppButton>
                  ))}
                  <AppButton
                    className="setting-row driver-app-row"
                    onClick={() => setAppMode("driver")}
                  >
                    <span className="setting-icon"><Icon name="car" size={18} /></span>
                    <span><strong>Switch to Driver App</strong><small>Trips, earnings and vehicle tools</small></span>
                    <span className="driver-app-label">DRIVER</span>
                    <Icon name="chevron" size={17} />
                  </AppButton>
                </div>
              </section>
            </div>
          ) : activeTab === "Explore" ? (
            <ExploreScreen
              onBook={(type) => {
                setActiveRide(type);
                setShowRequest(true);
              }}
            />
          ) : activeTab === "Rides" ? (
            <RidesScreen />
          ) : activeTab === "Routes" ? (
            <RoutesScreen
              onBook={(type) => {
                setActiveRide(type);
                setShowRequest(true);
              }}
            />
          ) : activeTab === "Alerts" ? (
            <AlertsScreen />
          ) : (
          <>
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

          <div className="summary-grid">
            <AppButton className="summary-card">
              <span>RIDES THIS MONTH</span>
              <strong>18</strong>
              <small><Icon name="repeat" size={12} /> 12 recurring</small>
            </AppButton>
            <AppButton className="summary-card pass-summary" onClick={() => setActiveTab("Profile")}>
              <span>GO365 PASS</span>
              <strong>Save 20%</strong>
              <small>Explore membership <Icon name="chevron" size={12} /></small>
            </AppButton>
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
          </>
          )}
        </div>

        {appMode === "driver" ? (
          <nav className="bottom-nav driver-nav" aria-label="Driver navigation">
            <AppButton className="nav-item active"><Icon name="home" size={21} /><span>Home</span></AppButton>
            <AppButton className="nav-item"><Icon name="calendar" size={21} /><span>Trips</span></AppButton>
            <div className="home-slot">
              <AppButton className="home-button"><Icon name="car" size={24} /></AppButton>
              <span>Drive</span>
            </div>
            <AppButton className="nav-item"><Icon name="briefcase" size={21} /><span>Earnings</span></AppButton>
            <AppButton className="nav-item" onClick={() => setAppMode("passenger")}><Icon name="user" size={21} /><span>Passenger</span></AppButton>
          </nav>
        ) : (
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
        )}

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
