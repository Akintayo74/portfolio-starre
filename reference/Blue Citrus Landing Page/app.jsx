/* Blue Citrus — landing page app */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "headlineWeight": 500,
  "denseCopy": false,
  "showPlaceholder": true,
  "previewState": "idle"
}/*EDITMODE-END*/;

const EXAMPLES = [
  "Save 10% of every income, automatically.",
  "Split rent between flatmates on the 1st.",
  "Send school fees to three children's schools each term.",
  "Pay your team on the 25th.",
  "Set aside tithe before you spend.",
];

/* ——— Illustration placeholder ———
   A marked slot for Akintayo's hand-drawn SVG. Suggested composition is
   noted inline so the intent travels with the file. Aspect ratio matches
   what the layout reserves (360×140-ish).
*/
function IllustrationSlot({ visible = true }) {
  return (
    <div className={"illo-slot" + (visible ? "" : " is-hidden")} aria-hidden="true">
      <div className="illo-slot__frame">
        <div className="illo-slot__label">
          <span className="illo-slot__tag">illustration</span>
          <span className="illo-slot__hint">
            source &nbsp;→&nbsp; rule &nbsp;→&nbsp; destination
          </span>
        </div>
      </div>
    </div>
  );
}

/* ——— Rotating examples ——— */
function RotatingExamples() {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => {
      setI((n) => (n + 1) % EXAMPLES.length);
    }, 3400);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="examples" aria-live="polite">
      {EXAMPLES.map((text, idx) => (
        <div
          key={idx}
          className={"example" + (idx === i ? " is-visible" : "")}
        >
          {text}
        </div>
      ))}
    </div>
  );
}

/* ——— Waitlist form ——— */
/* ——— Waitlist form ———
   States: idle → submitting → done | error
   - done: input + button collapse, replaced by a calm confirmation
   - error: rule turns red, message below, button becomes "Try again"
*/
function Waitlist({ cta = "Sign up", reassure = "No marketing. One email when we're ready.", forceState = null, forceEmail = null }) {
  const [email, setEmail] = React.useState("");
  const [state, setState] = React.useState("idle");
  const [errorKind, setErrorKind] = React.useState(null); // "invalid" | "network"

  // Allow the Tweaks panel to preview each state without typing.
  const effectiveState = forceState || state;
  const effectiveEmail = forceEmail || email;
  const isDone = effectiveState === "done";
  const isError = effectiveState === "error";
  const isSubmitting = effectiveState === "submitting";

  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  function onSubmit(e) {
    e.preventDefault();
    if (state !== "idle" && state !== "error") return;
    if (!valid) {
      setState("error");
      setErrorKind("invalid");
      return;
    }
    setState("submitting");
    setErrorKind(null);
    setTimeout(() => setState("done"), 700);
  }

  function reset() {
    setState("idle");
    setErrorKind(null);
  }

  // Compose displayed error copy.
  const errorMsg = (() => {
    if (forceState === "error") return "That doesn't look like a valid email.";
    if (errorKind === "invalid") return "That doesn't look like a valid email.";
    if (errorKind === "network") return "Something went wrong. Try again.";
    return null;
  })();

  return (
    <div className={"waitlist-block" + (isDone ? " is-done" : "") + (isError ? " is-error" : "")}>
      {/* The form layer — always rendered; collapses on success */}
      <form
        className="waitlist"
        onSubmit={onSubmit}
        noValidate
        aria-hidden={isDone ? "true" : "false"}
      >
        <input
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (state === "error") reset();
          }}
          disabled={isSubmitting || isDone}
          aria-label="Email address"
          aria-invalid={isError ? "true" : "false"}
        />
        <button
          type="submit"
          disabled={isSubmitting || isDone || (state === "idle" && !valid)}
        >
          {isSubmitting ? "…" : isError ? "Try again" : cta}
          {!isSubmitting && !isError && <span className="arrow">→</span>}
        </button>
      </form>

      {/* Reassurance / error message */}
      {!isDone && (
        <div
          className={"reassure" + (isError ? " is-error" : "")}
          role={isError ? "alert" : undefined}
        >
          {isError ? errorMsg : reassure}
        </div>
      )}

      {/* Success layer — overlays the form area, crossfades in */}
      <div
        className={"waitlist-done" + (isDone ? " is-visible" : "")}
        aria-hidden={isDone ? "false" : "true"}
      >
        <div className="waitlist-done__row">
          <svg
            className="waitlist-done__check"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="1" />
            <path
              d="M7 12.5 L10.5 16 L17 9"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="waitlist-done__tick"
            />
          </svg>
          <div className="waitlist-done__text">
            <div className="waitlist-done__headline">You're on the list.</div>
            {effectiveEmail && (
              <div className="waitlist-done__email">
                We'll write to <span>{effectiveEmail}</span> when we open up.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ——— Quiet hero pointer ———
   Replaces the hero waitlist form. A single, calm cue that there's more
   below — and where to act.
*/
function HeroPointer() {
  function onClick(e) {
    e.preventDefault();
    const el = document.querySelector('section.final');
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth',
      });
    }
  }
  return (
    <a href="#waitlist" className="hero-pointer" onClick={onClick}>
      <span className="hero-pointer__label">Join the waitlist</span>
      <span className="hero-pointer__rule" aria-hidden="true"></span>
    </a>
  );
}

/* ——— Page ——— */
function App() {
  const [tweaks, setTweak] = (typeof window !== "undefined" && window.useTweaks)
    ? window.useTweaks(TWEAK_DEFAULTS)
    : [TWEAK_DEFAULTS, () => {}];

  React.useEffect(() => {
    document.querySelectorAll('h1.headline, .final h2').forEach((el) => {
      el.style.fontWeight = tweaks.headlineWeight;
    });
  }, [tweaks.headlineWeight]);

  const TweaksPanel = window.TweaksPanel;
  const TweakSection = window.TweakSection;
  const TweakRadio = window.TweakRadio;
  const TweakToggle = window.TweakToggle;

  return (
    <React.Fragment>
      {/* HERO — no form here. Just type and a single pointer down the page. */}
      <section className="hero" data-screen-label="01 Hero">
        <h1 className="headline">Money that moves the way you decide.</h1>
        <p className="subhead">
          Define how money flows in and out of your life. Blue Citrus does the rest.
        </p>
        <HeroPointer />
      </section>

      {/* DEMONSTRATION */}
      <section className="demo" data-screen-label="02 Demonstration">
        {tweaks.showPlaceholder && (
          <div className="illo-wrap">
            <IllustrationSlot />
          </div>
        )}
        <RotatingExamples />
      </section>

      {/* HOW IT WORKS */}
      <section className="how" data-screen-label="03 How it works">
        <p>
          Most money management is manual. You remember the dates. You
          calculate the amounts. You move the money.
        </p>
        <p>
          Blue Citrus changes the shape of the work — you describe what should
          happen once, in your own terms, and the system does it from then on.
        </p>
        <p>
          Wallets hold money. Rules decide where it moves. Triggers set them
          off. The arrangement is yours; the execution stops being your problem.
        </p>
        {tweaks.denseCopy && (
          <p className="how__more">
            The primitives are small and few — wallets to hold money, recipients
            to send it to, rules that say when and how much, triggers that set
            them off. You compose them the way you compose a sentence: a payday
            trigger that splits an amount across a savings wallet and a tithe
            wallet; a monthly trigger that sends school fees to three different
            schools; a webhook that pays a contractor when a deliverable is
            marked done. None of it is a template. All of it is yours to shape.
          </p>
        )}
      </section>

      {/* FINAL CTA — the only waitlist on the page */}
      <section className="final" data-screen-label="04 Final CTA" id="waitlist">
        <h2>Be early.</h2>
        <p className="lead">Sign up to use Blue Citrus when we open it up.</p>
        <Waitlist
          cta="Sign up"
          reassure="No marketing. One email when we're ready."
          forceState={tweaks.previewState !== "idle" ? tweaks.previewState : null}
          forceEmail={tweaks.previewState === "done" ? "you@example.com" : null}
        />
      </section>

      {/* FOOTER */}
      <footer className="foot">
        <span>Blue Citrus</span>
        <span className="sep">·</span>
        <span>2026</span>
        <span className="sep">·</span>
        <a href="mailto:hello@bluecitrus.co">hello@bluecitrus.co</a>
      </footer>

      {/* TWEAKS */}
      {TweaksPanel && (
        <TweaksPanel title="Tweaks">
          <TweakSection label="Type">
            <TweakRadio
              label="Headline weight"
              value={tweaks.headlineWeight}
              onChange={(v) => setTweak('headlineWeight', v)}
              options={[
                { value: 400, label: 'Regular' },
                { value: 500, label: 'Medium' },
                { value: 600, label: 'Semi' },
              ]}
            />
          </TweakSection>
          <TweakSection label="Copy">
            <TweakToggle
              label="Add a fuller paragraph"
              value={tweaks.denseCopy}
              onChange={(v) => setTweak('denseCopy', v)}
            />
          </TweakSection>
          <TweakSection label="Illustration">
            <TweakToggle
              label="Show placeholder slot"
              value={tweaks.showPlaceholder}
              onChange={(v) => setTweak('showPlaceholder', v)}
            />
          </TweakSection>
          <TweakSection label="Waitlist preview">
            <TweakRadio
              label="Form state"
              value={tweaks.previewState}
              onChange={(v) => setTweak('previewState', v)}
              options={[
                { value: "idle", label: "Idle" },
                { value: "error", label: "Error" },
                { value: "done", label: "Done" },
              ]}
            />
          </TweakSection>
        </TweaksPanel>
      )}
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
