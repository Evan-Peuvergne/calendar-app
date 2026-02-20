import { Navigation } from "@shared/navigation"

const fakeContent = (
  <div
    style={{
      maxWidth: 800,
      margin: "0 auto",
      padding: "48px 32px",
      display: "flex",
      flexDirection: "column",
      gap: 64,
    }}
  >
    {/* Hero */}
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div
        style={{
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--c-fill-action)",
        }}
      >
        Q1 2026
      </div>
      <h1
        style={{
          font: "var(--f-base)",
          fontSize: 28,
          fontWeight: 700,
          lineHeight: "1.2",
          color: "var(--c-text-base)",
        }}
      >
        Product Overview
      </h1>
      <p
        style={{
          font: "var(--f-base)",
          color: "var(--c-text-light)",
          maxWidth: 480,
        }}
      >
        Track progress across all initiatives, monitor team velocity, and review
        upcoming milestones for this quarter.
      </p>
      <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
        <button
          style={{
            padding: "8px 16px",
            borderRadius: "var(--r-control)",
            background: "var(--c-fill-action)",
            color: "white",
            font: "var(--f-label)",
            fontSize: 14,
            cursor: "pointer",
          }}
        >
          New project
        </button>
        <button
          style={{
            padding: "8px 16px",
            borderRadius: "var(--r-control)",
            background: "var(--c-opacify-base)",
            color: "var(--c-text-base)",
            font: "var(--f-label)",
            fontSize: 14,
            cursor: "pointer",
          }}
        >
          Export
        </button>
      </div>
    </div>

    {/* Metrics */}
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <h2
        style={{
          font: "var(--f-label)",
          fontSize: 13,
          fontWeight: 600,
          color: "var(--c-text-light)",
          letterSpacing: "0.04em",
          textTransform: "uppercase",
        }}
      >
        Metrics
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
        {[
          { label: "Active projects", value: "24", accent: "var(--c-fill-action)" },
          { label: "Tasks completed", value: "381", accent: "hsla(142, 60%, 40%)" },
          { label: "Overdue", value: "7", accent: "var(--c-fill-danger)" },
          { label: "Team members", value: "12", accent: "var(--c-text-light)" },
        ].map(({ label, value, accent }) => (
          <div
            key={label}
            style={{
              background: "var(--c-fill-base)",
              border: "1px solid var(--c-stroke-base)",
              borderRadius: "var(--r-container)",
              padding: "20px 20px 16px",
              display: "flex",
              flexDirection: "column",
              gap: 6,
              boxShadow: "var(--s-block)",
            }}
          >
            <span
              style={{ fontSize: 28, fontWeight: 700, color: accent, lineHeight: 1 }}
            >
              {value}
            </span>
            <span style={{ font: "var(--f-base)", fontSize: 13, color: "var(--c-text-light)" }}>
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* Overview cards */}
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <h2
        style={{
          font: "var(--f-label)",
          fontSize: 13,
          fontWeight: 600,
          color: "var(--c-text-light)",
          letterSpacing: "0.04em",
          textTransform: "uppercase",
        }}
      >
        Projects
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
        {[
          {
            title: "Mobile redesign",
            desc: "Updating the iOS and Android apps to match the new design system.",
            badge: "In progress",
            badgeColor: "var(--c-fill-action)",
          },
          {
            title: "API v3 migration",
            desc: "Deprecate legacy endpoints and migrate all clients to the new REST API.",
            badge: "At risk",
            badgeColor: "var(--c-fill-danger)",
          },
          {
            title: "Onboarding flow",
            desc: "Simplify the user onboarding journey to reduce time-to-value.",
            badge: "Completed",
            badgeColor: "hsla(142, 60%, 40%)",
          },
          {
            title: "Analytics dashboard",
            desc: "Build real-time reporting views for product and growth teams.",
            badge: "In progress",
            badgeColor: "var(--c-fill-action)",
          },
          {
            title: "Infra scaling",
            desc: "Upgrade database clusters and prepare for 10× traffic growth.",
            badge: "Planned",
            badgeColor: "var(--c-text-disabled)",
          },
          {
            title: "Docs rewrite",
            desc: "Rewrite the developer documentation with interactive examples.",
            badge: "Planned",
            badgeColor: "var(--c-text-disabled)",
          },
        ].map(({ title, desc, badge, badgeColor }) => (
          <div
            key={title}
            style={{
              background: "var(--c-fill-base)",
              border: "1px solid var(--c-stroke-base)",
              borderRadius: "var(--r-container)",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              boxShadow: "var(--s-block)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <span style={{ font: "var(--f-label)", fontSize: 14, color: "var(--c-text-base)", fontWeight: 600 }}>
                {title}
              </span>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: badgeColor,
                  background: `color-mix(in srgb, ${badgeColor} 12%, transparent)`,
                  padding: "2px 8px",
                  borderRadius: 99,
                  whiteSpace: "nowrap",
                }}
              >
                {badge}
              </span>
            </div>
            <p style={{ font: "var(--f-base)", fontSize: 13, color: "var(--c-text-light)", lineHeight: "1.5" }}>
              {desc}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* Activity */}
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <h2
        style={{
          font: "var(--f-label)",
          fontSize: 13,
          fontWeight: 600,
          color: "var(--c-text-light)",
          letterSpacing: "0.04em",
          textTransform: "uppercase",
        }}
      >
        Recent activity
      </h2>
      <div
        style={{
          background: "var(--c-fill-base)",
          border: "1px solid var(--c-stroke-base)",
          borderRadius: "var(--r-container)",
          boxShadow: "var(--s-block)",
          overflow: "hidden",
        }}
      >
        {[
          { name: "Léa Moreau", action: "closed issue #412 — Auth token expiry", time: "2 min ago", color: "hsla(142, 60%, 40%)" },
          { name: "Tom Rivet", action: "opened PR #88 — Add rate limiting middleware", time: "14 min ago", color: "var(--c-fill-action)" },
          { name: "Sara Kim", action: "commented on Onboarding flow spec", time: "1h ago", color: "hsla(270, 60%, 55%)" },
          { name: "Alex Dumas", action: "merged PR #85 — Fix session race condition", time: "3h ago", color: "var(--c-fill-action)" },
          { name: "Léa Moreau", action: "flagged Mobile redesign as at risk", time: "Yesterday", color: "var(--c-fill-danger)" },
        ].map(({ name, action, time, color }, i, arr) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "14px 20px",
              borderBottom: i < arr.length - 1 ? "1px solid var(--c-stroke-base)" : "none",
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: color,
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 12,
                fontWeight: 700,
                color: "white",
              }}
            >
              {name[0]}
            </div>
            <div style={{ flex: 1 }}>
              <span style={{ font: "var(--f-label)", fontSize: 13, color: "var(--c-text-base)", fontWeight: 600 }}>
                {name}
              </span>
              <span style={{ font: "var(--f-base)", fontSize: 13, color: "var(--c-text-light)" }}>
                {" "}
                {action}
              </span>
            </div>
            <span style={{ font: "var(--f-base)", fontSize: 12, color: "var(--c-text-disabled)", whiteSpace: "nowrap" }}>
              {time}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* Bottom spacer */}
    <div style={{ height: 80 }} />
  </div>
)

export const Home = () => {
  return (
    <>
      <Navigation />
      {fakeContent}
    </>
  )
}
