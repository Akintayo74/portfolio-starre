// Direction B — "Studio Grid"
// More structured & asymmetric. Schibsted Grotesk display + mono labels.
// Work as a gallery grid. Light, strictly monochrome. Hairline-driven layout.
(function () {
  const C = { ink: '#15140f', paper: '#fbfaf8', soft: '#f1efea', mute: '#a4a09a', line: '#e3e0da' };
  const mono = 'ui-monospace, SFMono-Regular, Menlo, monospace';
  const grot = '"Schibsted Grotesk", "Helvetica Neue", Arial, sans-serif';

  function Shot({ label, h = 260 }) {
    return (
      <div style={{
        height: h, borderRadius: 4, overflow: 'hidden', position: 'relative',
        background: 'repeating-linear-gradient(135deg,#e7e4df,#e7e4df 11px,#f1efea 11px,#f1efea 22px)',
        display: 'flex', alignItems: 'flex-end',
      }}>
        <span style={{ fontFamily: mono, fontSize: 10.5, letterSpacing: '0.04em', color: C.mute, background: '#fff', padding: '4px 7px', margin: 9, borderRadius: 3 }}>{label}</span>
      </div>
    );
  }

  const work = [
    { n: '01', name: 'Hookline', kind: 'NEWSLETTER TOOL', desc: 'Landing redesign + build', h: 320 },
    { n: '02', name: 'Pagaroo', kind: 'NOTES APP', desc: 'Marketing site, 3 weeks', h: 230 },
    { n: '03', name: 'Tally Drift', kind: 'ANALYTICS', desc: 'Homepage + pricing', h: 250 },
    { n: '04', name: 'Orbit CLI', kind: 'DEV TOOL', desc: 'Docs + homepage', h: 300 },
    { n: '05', name: 'Fran’s Bakery', kind: 'LOCAL BRAND', desc: 'Full site + ordering', h: 240 },
    { n: '06', name: 'Mossy', kind: 'PLANT CARE APP', desc: 'Store page + waitlist', h: 290 },
  ];

  window.DirectionB = function DirectionB() {
    const pad = 80;
    return (
      <div style={{ fontFamily: grot, background: C.paper, color: C.ink, width: '100%', lineHeight: 1.5 }}>
        {/* ---- top bar ---- */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: `26px ${pad}px`, borderBottom: `1px solid ${C.line}` }}>
          <span style={{ fontFamily: mono, fontSize: 13, letterSpacing: '0.06em', fontWeight: 600 }}>ELI ROURKE</span>
          <div style={{ display: 'flex', gap: 30, fontFamily: mono, fontSize: 12, letterSpacing: '0.06em', color: '#444' }}>
            <a style={lk}>WORK</a><a style={lk}>SERVICES</a><a style={lk}>ABOUT</a>
            <a style={{ ...lk, color: C.ink, fontWeight: 600 }}>CONTACT ↗</a>
          </div>
        </div>

        {/* ---- hero: asymmetric ---- */}
        <header style={{ display: 'grid', gridTemplateColumns: '1fr 320px', borderBottom: `1px solid ${C.line}` }}>
          <div style={{ padding: `78px ${pad}px 70px`, borderRight: `1px solid ${C.line}` }}>
            <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: '0.1em', color: C.mute }}>FRONTEND DEVELOPER — DESIGN + BUILD</div>
            <h1 style={{ margin: '30px 0 0', fontSize: 72, lineHeight: 0.98, letterSpacing: '-0.03em', fontWeight: 700, maxWidth: 760 }}>
              Better sites for makers who deserve them.
            </h1>
            <p style={{ margin: '32px 0 0', fontSize: 20, color: '#46443f', maxWidth: 560, lineHeight: 1.5 }}>
              You built the product. I’ll build the site it deserves — fast,
              responsive, and designed to convert. Fixed scope, 2–4 weeks.
            </p>
          </div>
          <aside style={{ padding: `78px ${pad / 2}px 70px ${pad / 2}px`, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.08em', color: C.mute }}>STATUS</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginTop: 12 }}>
                <span style={{ width: 8, height: 8, borderRadius: 9, background: C.ink }}></span>
                <span style={{ fontSize: 16, fontWeight: 600 }}>Booking July 2026</span>
              </div>
            </div>
            <div style={{ marginTop: 40 }}>
              <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.08em', color: C.mute }}>FROM</div>
              <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-0.02em', marginTop: 6 }}>$2,000</div>
              <div style={{ fontSize: 14, color: C.mute }}>design + build, all in</div>
            </div>
          </aside>
        </header>

        {/* ---- work gallery ---- */}
        <section style={{ padding: `60px ${pad}px 30px` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <h2 style={{ fontFamily: mono, fontSize: 13, letterSpacing: '0.08em', fontWeight: 600, margin: 0 }}>SELECTED WORK</h2>
            <span style={{ fontFamily: mono, fontSize: 12, color: C.mute }}>06 PROJECTS</span>
          </div>
          <div style={{ columnCount: 3, columnGap: 28, marginTop: 40 }}>
            {work.map((w) => (
              <article key={w.n} style={{ breakInside: 'avoid', marginBottom: 28 }}>
                <Shot label={`site shot — ${w.name}`} h={w.h} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 14 }}>
                  <h3 style={{ margin: 0, fontSize: 21, fontWeight: 600, letterSpacing: '-0.015em' }}>{w.name}</h3>
                  <span style={{ fontFamily: mono, fontSize: 11, color: C.mute }}>{w.n}</span>
                </div>
                <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.06em', color: C.mute, marginTop: 4 }}>{w.kind}</div>
                <p style={{ margin: '6px 0 0', fontSize: 15.5, color: '#56544f' }}>{w.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ---- services strip ---- */}
        <section style={{ marginTop: 50, borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}` }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
            {[
              ['Design', 'Layout, type & motion that fit your product — not a template.'],
              ['Build', 'Hand-built, fast, responsive. Deployed and yours to keep.'],
              ['Fixed price', 'One quote, one timeline. $2–5k depending on scope.'],
            ].map(([t, d], i) => (
              <div key={i} style={{ padding: `46px ${pad / 1.6}px`, borderRight: i < 2 ? `1px solid ${C.line}` : 'none' }}>
                <div style={{ fontFamily: mono, fontSize: 11, color: C.mute }}>{`0${i + 1}`}</div>
                <h4 style={{ margin: '14px 0 0', fontSize: 24, fontWeight: 700, letterSpacing: '-0.02em' }}>{t}</h4>
                <p style={{ margin: '10px 0 0', fontSize: 15.5, color: '#56544f', lineHeight: 1.55 }}>{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---- contact ---- */}
        <footer style={{ padding: `90px ${pad}px 56px` }}>
          <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: '0.08em', color: C.mute }}>LET’S WORK TOGETHER</div>
          <h2 style={{ margin: '20px 0 0', fontSize: 64, lineHeight: 1.0, letterSpacing: '-0.03em', fontWeight: 700, maxWidth: 860 }}>
            Tell me about your project.
          </h2>
          <a style={{ display: 'inline-block', marginTop: 30, fontFamily: mono, fontSize: 18, color: C.ink, borderBottom: `2px solid ${C.ink}`, paddingBottom: 3 }}>hello@elirourke.com ↗</a>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 80, paddingTop: 24, borderTop: `1px solid ${C.line}`, fontFamily: mono, fontSize: 12, color: C.mute, letterSpacing: '0.04em' }}>
            <span>© 2026 ELI ROURKE</span>
            <div style={{ display: 'flex', gap: 26 }}><a style={{ color: C.ink }}>EMAIL</a><a style={{ color: C.ink }}>TWITTER</a><a style={{ color: C.ink }}>GITHUB</a></div>
          </div>
        </footer>
      </div>
    );
  };

  const lk = { textDecoration: 'none', cursor: 'pointer', color: 'inherit' };
})();
