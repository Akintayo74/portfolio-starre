// Direction A+B — "Editorial Mono with a Studio bar"
// A's typography (Helvetica grotesque), hero, and body — but B's flat, full-width
// hairline navbar with monospace uppercase links instead of A's floating pill.
(function () {
  const C = {
    ink: '#111110', paper: '#ffffff', soft: '#f4f3f1', mute: '#9b9893', line: '#e4e1dc',
  };
  const mono = 'ui-monospace, SFMono-Regular, Menlo, monospace';

  function Shot({ label, h = 300 }) {
    return (
      <div style={{
        height: h, borderRadius: 10, overflow: 'hidden', position: 'relative',
        background: 'repeating-linear-gradient(135deg,#e8e6e2,#e8e6e2 11px,#f2f0ed 11px,#f2f0ed 22px)',
        display: 'flex', alignItems: 'flex-end',
      }}>
        <span style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.04em', color: C.mute, background: '#fff', padding: '4px 8px', margin: 10, borderRadius: 5 }}>{label}</span>
      </div>
    );
  }

  const work = [
    { name: 'Hookline', kind: 'Newsletter tool', desc: 'Landing page redesign + build', tall: true },
    { name: 'Pagaroo', kind: 'Markdown notes app', desc: 'Marketing site from scratch in 3 weeks' },
    { name: 'Tally Drift', kind: 'Analytics dashboard', desc: 'Homepage + pricing rebuild' },
    { name: 'Orbit CLI', kind: 'Developer tool', desc: 'Docs + homepage, dark by default' },
  ];

  const exp = [
    { yr: '2024 — now', role: 'Independent — design & build for indie makers', note: 'Sites that ship in 2–4 weeks, fixed price' },
    { yr: '2021 — 2024', role: 'Senior Frontend Engineer at Loftwork', note: 'Design systems & marketing site' },
    { yr: '2019 — 2021', role: 'Frontend Engineer at Cohort', note: 'Built the early product UI end to end' },
  ];

  window.DirectionAB = function DirectionAB() {
    const pad = 96;
    return (
      <div style={{
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        background: C.paper, color: C.ink, width: '100%', letterSpacing: '-0.011em', lineHeight: 1.45,
      }}>
        {/* ---- B's flat hairline navbar, with A's word-mark ---- */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: `26px ${pad}px`, borderBottom: `1px solid ${C.line}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: C.ink, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 15 }}>E</div>
            <span style={{ fontFamily: mono, fontSize: 13, letterSpacing: '0.06em', fontWeight: 600 }}>ELI ROURKE</span>
          </div>
          <div style={{ display: 'flex', gap: 30, fontFamily: mono, fontSize: 12, letterSpacing: '0.06em', color: '#444' }}>
            <a style={lk}>WORK</a><a style={lk}>SERVICES</a><a style={lk}>ABOUT</a>
            <a style={{ ...lk, color: C.ink, fontWeight: 600 }}>CONTACT ↗</a>
          </div>
        </div>

        {/* ---- A's hero ---- */}
        <header style={{ padding: `100px ${pad}px 70px`, maxWidth: 1120 }}>
          <div style={eyebrow}>FRONTEND DEVELOPER · DESIGN + BUILD</div>
          <h1 style={{ margin: '24px 0 0', fontSize: 78, lineHeight: 0.99, letterSpacing: '-0.035em', fontWeight: 600, maxWidth: 980, textWrap: 'balance' }}>
            I design and build sites indie makers are <span style={{ color: C.mute }}>proud to ship.</span>
          </h1>
          <p style={{ margin: '34px 0 0', fontSize: 22, lineHeight: 1.5, color: '#3a3937', maxWidth: 620, letterSpacing: '-0.01em' }}>
            I take rough launch pages and turn them into fast, beautiful sites
            that actually convert. Fixed scope, 2–4 weeks, $2–5k.
          </p>
        </header>

        {/* ---- A's scattered thumbnail row ---- */}
        <section style={{ padding: `0 ${pad}px 110px` }}>
          <div style={{ display: 'flex', gap: 22, alignItems: 'center' }}>
            {[-2.5, 1.5, -1.5, 2].map((r, i) => (
              <div key={i} style={{ flex: 1, transform: `rotate(${r}deg)`, boxShadow: '0 18px 40px -22px rgba(0,0,0,0.4)', borderRadius: 12 }}>
                <Shot label={`site shot — ${work[i].name}`} h={188} />
              </div>
            ))}
          </div>
        </section>

        {/* ---- selected work (2-up) ---- */}
        <section style={{ padding: `0 ${pad}px 30px` }}>
          <SectionHead k="01" title="Selected work" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, marginTop: 44 }}>
            {work.map((w, i) => (
              <article key={i}>
                <div style={{ background: C.soft, borderRadius: 18, padding: 26 }}>
                  <Shot label={`site shot — ${w.name}`} h={w.tall ? 340 : 300} />
                </div>
                <h3 style={{ margin: '22px 0 0', fontSize: 27, fontWeight: 600, letterSpacing: '-0.02em' }}>{w.name}</h3>
                <p style={{ margin: '7px 0 0', fontSize: 17, color: C.mute }}>{w.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ---- experience ---- */}
        <section style={{ padding: `110px ${pad}px 30px` }}>
          <SectionHead k="02" title="Experience" />
          <div style={{ marginTop: 30 }}>
            {exp.map((e, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 30, padding: '30px 0', borderTop: `1px solid ${C.line}` }}>
                <div style={{ fontSize: 18, color: C.mute }}>{e.yr}</div>
                <div>
                  <div style={{ fontSize: 23, fontWeight: 600, letterSpacing: '-0.015em' }}>{e.role}</div>
                  <div style={{ fontSize: 17, color: C.mute, marginTop: 5 }}>{e.note}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---- contact ---- */}
        <footer style={{ padding: `120px ${pad}px 64px` }}>
          <h2 style={{ margin: 0, fontSize: 60, lineHeight: 1.02, letterSpacing: '-0.03em', fontWeight: 600, maxWidth: 820 }}>
            Have a site that deserves better?
          </h2>
          <a style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginTop: 34, fontSize: 22, fontWeight: 500, color: C.ink, borderBottom: `2px solid ${C.ink}`, paddingBottom: 3 }}>
            hello@elirourke.com
          </a>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 90, paddingTop: 26, borderTop: `1px solid ${C.line}` }}>
            <span style={{ fontFamily: mono, fontSize: 12, letterSpacing: '0.04em', color: C.mute }}>© 2026 ELI ROURKE</span>
            <div style={{ display: 'flex', gap: 26, fontFamily: mono, fontSize: 12, letterSpacing: '0.04em' }}>
              {['EMAIL', 'TWITTER', 'GITHUB'].map((s) => (
                <a key={s} style={{ color: C.ink }}>{s} <span style={{ color: C.mute }}>↗</span></a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    );
  };

  const lk = { textDecoration: 'none', cursor: 'pointer', color: 'inherit' };
  const eyebrow = { fontFamily: mono, fontSize: 12, letterSpacing: '0.12em', color: '#9b9893', textTransform: 'uppercase' };

  function SectionHead({ k, title }) {
    return (
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, borderBottom: '1px solid #e4e1dc', paddingBottom: 16 }}>
        <span style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', fontSize: 13, color: '#9b9893' }}>{k}</span>
        <h2 style={{ margin: 0, fontSize: 17, fontWeight: 600, letterSpacing: '0.01em', textTransform: 'uppercase' }}>{title}</h2>
      </div>
    );
  }
})();
