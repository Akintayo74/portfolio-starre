// Direction C — "Night Studio"
// The road-not-taken: dark, with ONE restrained accent (chartreuse, used only
// on the status dot, primary CTA, and link arrows). Hanken Grotesk.
// Work as large full-width stage cards.
(function () {
  const C = {
    bg: '#0d0d0c', paper: '#0d0d0c', card: '#161614', cardEdge: '#262521',
    ink: '#f3f2ee', mid: '#b6b4ad', mute: '#6f6d67', line: '#222220',
    accent: '#ccee52', // single accent, used sparingly
  };
  const grot = '"Hanken Grotesk", "Helvetica Neue", Arial, sans-serif';
  const mono = 'ui-monospace, SFMono-Regular, Menlo, monospace';

  function Shot({ label, h = 360 }) {
    return (
      <div style={{
        height: h, borderRadius: 12, overflow: 'hidden', position: 'relative',
        background: 'repeating-linear-gradient(135deg,#1b1b19,#1b1b19 12px,#212120 12px,#212120 24px)',
        display: 'flex', alignItems: 'flex-end',
      }}>
        <span style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.04em', color: '#8a887f', background: '#000', padding: '4px 8px', margin: 12, borderRadius: 5 }}>{label}</span>
      </div>
    );
  }

  const work = [
    { name: 'Hookline', kind: 'Newsletter tool', desc: 'Landing page redesign + build — 3.1× signups' },
    { name: 'Orbit CLI', kind: 'Developer tool', desc: 'Docs + homepage, dark by default' },
    { name: 'Pagaroo', kind: 'Markdown notes app', desc: 'Marketing site, built in 3 weeks' },
    { name: 'Tally Drift', kind: 'Analytics dashboard', desc: 'Homepage + pricing rebuild' },
  ];

  window.DirectionC = function DirectionC() {
    const pad = 96;
    return (
      <div style={{ fontFamily: grot, background: C.bg, color: C.ink, width: '100%', lineHeight: 1.5 }}>
        {/* ---- floating pill nav ---- */}
        <div style={{ padding: `28px ${pad}px 0` }}>
          <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: `1px solid ${C.line}`, background: C.card, borderRadius: 999, padding: '11px 12px 11px 20px' }}>
            <span style={{ fontWeight: 700, fontSize: 15, letterSpacing: '-0.01em' }}>Eli Rourke</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <a style={lkD}>Work</a><a style={lkD}>About</a>
              <a style={{ ...lkD, background: C.accent, color: '#15140a', borderRadius: 999, padding: '9px 18px', fontWeight: 600 }}>Let’s talk</a>
              <span style={{ width: 38, height: 38, borderRadius: 999, background: '#000', border: `1px solid ${C.cardEdge}`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginLeft: 4, color: C.mid }}>☾</span>
            </div>
          </nav>
        </div>

        {/* ---- hero ---- */}
        <header style={{ padding: `104px ${pad}px 64px`, maxWidth: 1120 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: mono, fontSize: 12, letterSpacing: '0.1em', color: C.mute, textTransform: 'uppercase' }}>
            <span style={{ width: 8, height: 8, borderRadius: 9, background: C.accent, boxShadow: `0 0 12px ${C.accent}` }}></span>
            Frontend developer · booking July 2026
          </div>
          <h1 style={{ margin: '26px 0 0', fontSize: 80, lineHeight: 0.98, letterSpacing: '-0.035em', fontWeight: 700, maxWidth: 980 }}>
            I build sites indie makers are proud to&nbsp;ship.
          </h1>
          <p style={{ margin: '34px 0 0', fontSize: 21, color: C.mid, maxWidth: 600, lineHeight: 1.55 }}>
            Rough launch pages, turned into fast, beautiful sites that convert.
            Fixed scope, 2–4 weeks, $2–5k — design and build, all in.
          </p>
        </header>

        {/* ---- big stage cards ---- */}
        <section style={{ padding: `0 ${pad}px 30px` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1px solid ${C.line}`, paddingBottom: 16 }}>
            <h2 style={{ fontFamily: mono, fontSize: 13, letterSpacing: '0.08em', fontWeight: 600, margin: 0, color: C.mid }}>SELECTED WORK</h2>
            <span style={{ fontFamily: mono, fontSize: 12, color: C.mute }}>2024 — 2026</span>
          </div>
          {work.map((w, i) => (
            <article key={i} style={{ paddingTop: 40, paddingBottom: i < work.length - 1 ? 40 : 10 }}>
              <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 22, padding: 24 }}>
                <Shot label={`site shot — ${w.name}`} h={i % 2 === 0 ? 380 : 300} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 22 }}>
                <div>
                  <h3 style={{ margin: 0, fontSize: 30, fontWeight: 700, letterSpacing: '-0.02em' }}>{w.name}</h3>
                  <p style={{ margin: '8px 0 0', fontSize: 17, color: C.mute }}>{w.kind} — {w.desc}</p>
                </div>
                <a style={{ fontSize: 16, color: C.accent, whiteSpace: 'nowrap', fontWeight: 600 }}>View case ↗</a>
              </div>
            </article>
          ))}
        </section>

        {/* ---- offer band ---- */}
        <section style={{ padding: `70px ${pad}px` }}>
          <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 24, padding: '54px 56px', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 44 }}>
            {[
              ['2–4 wks', 'From first call to launch'],
              ['$2–5k', 'Fixed price, no hourly surprises'],
              ['100%', 'Hand-built — yours to keep'],
            ].map(([n, d], i) => (
              <div key={i} style={{ borderLeft: `2px solid ${C.accent}`, paddingLeft: 20 }}>
                <div style={{ fontSize: 46, fontWeight: 700, letterSpacing: '-0.02em' }}>{n}</div>
                <div style={{ fontSize: 16, color: C.mid, marginTop: 6 }}>{d}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ---- contact ---- */}
        <footer style={{ padding: `40px ${pad}px 60px` }}>
          <h2 style={{ margin: 0, fontSize: 62, lineHeight: 1.0, letterSpacing: '-0.03em', fontWeight: 700, maxWidth: 840 }}>
            Have a site that deserves <span style={{ color: C.accent }}>better?</span>
          </h2>
          <a style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginTop: 32, fontSize: 22, fontWeight: 600, color: C.ink, borderBottom: `2px solid ${C.accent}`, paddingBottom: 4 }}>hello@elirourke.com</a>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 84, paddingTop: 24, borderTop: `1px solid ${C.line}` }}>
            <span style={{ fontSize: 15, color: C.mute }}>built by Eli Rourke</span>
            <div style={{ display: 'flex', gap: 26 }}>
              {['Email', 'X / Twitter', 'GitHub'].map((s) => (
                <a key={s} style={{ fontSize: 15, color: C.mid, display: 'inline-flex', alignItems: 'center', gap: 4 }}>{s} <span style={{ color: C.accent }}>↗</span></a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    );
  };

  const lkD = { fontSize: 15, fontWeight: 500, color: '#cdccc6', padding: '9px 14px', textDecoration: 'none', cursor: 'pointer' };
})();
