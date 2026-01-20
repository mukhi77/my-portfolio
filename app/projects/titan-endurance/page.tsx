export default function TitanEndurancePage() {
  return (
    <main style={{ maxWidth: 900 }}>
      <h1 style={{ fontSize: 36, fontWeight: 800 }}>Titan Endurance Project</h1>
      <p style={{ marginTop: 12 }}>
        Fully mechanical, energy-efficient vehicle design. Focused on design rationale,
        passive actuation, testing, and lessons learned.
      </p>

      <h2 style={{ marginTop: 28, fontSize: 24, fontWeight: 700 }}>What made it unique</h2>
      <ul style={{ marginTop: 12, paddingLeft: 18 }}>
        <li>Completely mechanically powered and actuated (no electronics).</li>
        <li>Efficiency-driven design: minimized friction and losses.</li>
        <li>Behavior controlled by geometry and mechanical design choices.</li>
      </ul>

      <h2 style={{ marginTop: 28, fontSize: 24, fontWeight: 700 }}>What went well</h2>
      <ul style={{ marginTop: 12, paddingLeft: 18 }}>
        <li>Reliable drivetrain performance under repeated runs.</li>
        <li>Clear system architecture and iterative improvement through testing.</li>
        <li>Competitive outcome (e.g., 2nd place), validating key design decisions.</li>
      </ul>

      <h2 style={{ marginTop: 28, fontSize: 24, fontWeight: 700 }}>What didn’t</h2>
      <ul style={{ marginTop: 12, paddingLeft: 18 }}>
        <li>Sensitivity to alignment/tolerances affecting performance.</li>
        <li>Limited adjustability due to purely mechanical constraints.</li>
        <li>Early underestimation of cumulative losses (rolling + transmission).</li>
      </ul>
    </main>
  );
}
