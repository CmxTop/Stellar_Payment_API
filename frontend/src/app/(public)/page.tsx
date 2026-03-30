"use client";

import GuestGuard from "@/components/GuestGuard";
import SystemStatus from "@/components/SystemStatus";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

function Section({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function IconXLM() {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none">
      <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="1.2" opacity="0.25" />
      <path
        d="M10 13l6-4 6 4M10 19l6 4 6-4M10 16h12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconWebhook() {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none">
      <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="1.2" opacity="0.25" />
      <path
        d="M12 20a4 4 0 1 1 3-6.5M20 20a4 4 0 1 0-3-6.5M11 14h10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconFees() {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none">
      <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="1.2" opacity="0.25" />
      <path
        d="M16 10v12M12 14l4-4 4 4M20 18l-4 4-4-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconArrow() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg className="h-4 w-4 shrink-0 text-emerald-400" viewBox="0 0 16 16" fill="none">
      <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}


const FEATURES = [
  {
    icon: <IconXLM />,
    title: "XLM & USDC Native",
    description:
      "Accept both tokens out of the box. Automatic asset routing, real-time exchange rates, and multi-currency settlement in a single integration.",
    tag: "Multi-Asset",
  },
  {
    icon: <IconWebhook />,
    title: "Bulletproof Webhooks",
    description:
      "Signed payloads, automatic retries with exponential back-off, and a full event log. Never miss a payment confirmation again.",
    tag: "Reliability",
  },
  {
    icon: <IconFees />,
    title: "Near-Zero Fees",
    description:
      "Stellar\u2019s base fee is a fraction of a cent. No monthly minimums, no gateway surcharges\u00a0\u2014 keep more of every transaction.",
    tag: "Cost",
  },
];

const CODE_REQUEST = `curl -X POST https://api.stellarpay.io/v1/create-payment \\
  -H "Authorization: Bearer sk_live_4eC39HqLyjWDarjtT1z..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": "25.00",
    "asset": "USDC",
    "memo": "order-8842",
    "webhook_url": "https://shop.example/hooks/stellar",
    "redirect_url": "https://shop.example/thanks"
  }'`;

const CODE_RESPONSE = `{
  "id": "pay_9xKp2mVbQw",
  "status": "pending",
  "amount": "25.00",
  "asset": "USDC",
  "payment_url": "https://stellarpay.io/pay/pay_9xKp2mVbQw",
  "expires_at": "2025-08-15T12:30:00Z"
}`;

function HeroSection() {
  return (
    <Section className="relative flex flex-col items-center px-6 pb-24 pt-28 text-center sm:pt-36 lg:pt-44">
      {/* Animated Gradient Orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-secondary/[0.08] blur-[120px] animate-pulse" />
      <div className="pointer-events-none absolute top-1/4 -right-20 h-[400px] w-[400px] rounded-full bg-accent/[0.05] blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex flex-col items-center gap-6"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          The Future of Payments is Decentralized
        </span>

        <h1 className="max-w-4xl font-heading text-5xl font-bold leading-[1.08] tracking-tight text-white sm:text-7xl lg:text-8xl">
          Redefining{" "}
          <span className="bg-gradient-to-r from-secondary via-blue-500 to-accent bg-clip-text text-transparent">
            Web3 Payments
          </span>
        </h1>

        <p className="max-w-2xl font-body text-base leading-relaxed text-slate-400 sm:text-xl">
          Build high-performance payment experiences on the Stellar network. 
          Collect XLM & USDC with near-zero fees and instant settlement.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className="relative z-10 mt-10 flex flex-col items-center gap-4 sm:flex-row"
      >
        <Link
          href="/register"
          className="group relative inline-flex items-center gap-2 rounded-full bg-accent px-10 py-5 text-base font-bold text-night transition-all hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(0,245,212,0.3)] active:scale-[0.98]"
        >
          Get Started
          <IconArrow />
          <div className="absolute inset-0 -z-10 rounded-full bg-accent/40 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
        </Link>

        <Link
          href="/login"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-10 py-5 text-base font-medium text-white backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/[0.08]"
        >
          Sign In to Dashboard
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-medium text-slate-500"
      >
        {["Non-custodial", "5-minute integration", "Testnet sandbox included"].map(
          (t) => (
            <span key={t} className="flex items-center gap-2">
              <IconCheck />
              {t}
            </span>
          )
        )}
      </motion.div>
    </Section>
  );
}

function FeaturesSection() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
      <Section className="mb-16 text-center">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
          Unrivaled Infrastructure
        </p>
        <h2 className="mx-auto max-w-2xl font-heading text-4xl font-bold leading-tight text-white sm:text-5xl">
          Everything you need to scale Web3&nbsp;&mdash; nothing you don&apos;t
        </h2>
      </Section>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <FadeUp key={f.title} delay={i * 0.1}>
            <div className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-white/[0.06] bg-tide/5 p-8 backdrop-blur-md transition-all duration-300 hover:border-accent/30 hover:bg-white/[0.05] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              {/* accent line */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex items-center justify-between">
                <div className="text-secondary">{f.icon}</div>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-slate-400">
                  {f.tag}
                </span>
              </div>

              <h3 className="font-heading text-xl font-bold text-white">{f.title}</h3>
              <p className="font-body text-sm leading-relaxed text-slate-400">
                {f.description}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  );
}

function CodeSnippetSection() {
  const [tab, setTab] = useState<"request" | "response">("request");

  return (
    <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Section>
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
            Developer Experience
          </p>
          <h2 className="mb-5 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl">
            One endpoint.
            <br />
            Infinite possibilities.
          </h2>
          <p className="mb-8 max-w-md font-body text-sm leading-relaxed text-slate-400">
            Create a payment link with a single POST request. We handle the
            Stellar transaction lifecycle, memo matching, and webhook delivery
            so you can focus on building your vision.
          </p>
          <ul className="flex flex-col gap-4">
            {[
              "Atomic transactions \u2014 instant finality",
              "HMAC-SHA256 signed webhooks",
              "Customizable metadata & TTLs",
              "Scalable for high-volume dApps",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 font-body text-sm text-slate-300"
              >
                <IconCheck />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        {/* code block */}
        <Section delay={0.1}>
          <div className="overflow-hidden rounded-3xl border border-white/[0.08] bg-primary shadow-2xl shadow-black/60">
            {/* tabs */}
            <div className="flex items-center border-b border-white/[0.06] bg-white/[0.02]">
              {(["request", "response"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`relative px-6 py-4 font-mono text-xs uppercase tracking-wider transition-colors ${
                    tab === t
                      ? "text-accent"
                      : "text-slate-500 hover:text-slate-300"
                  }`}
                >
                  {t}
                  {tab === t && (
                    <motion.div
                      layoutId="code-tab"
                      className="absolute inset-x-0 bottom-0 h-0.5 bg-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
              <div className="ml-auto flex items-center gap-2 pr-6">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500/40" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/40" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-500/40" />
              </div>
            </div>

            {/* code */}
            <div className="overflow-x-auto p-8">
              <pre className="font-mono text-[13px] leading-relaxed text-slate-300">
                <code>{tab === "request" ? CODE_REQUEST : CODE_RESPONSE}</code>
              </pre>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}

function PayWithLinkDemo() {
  const [paid, setPaid] = useState(false);

  return (
    <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
      <Section className="mb-16 text-center">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-secondary">
          Interactive Experience
        </p>
        <h2 className="mx-auto max-w-2xl font-heading text-4xl font-bold leading-tight text-white sm:text-5xl">
          See what your customers experience
        </h2>
        <p className="mx-auto mt-6 max-w-lg font-body text-base text-slate-400">
          A sleek, branded checkout experience generated instantly through the API.
        </p>
      </Section>

      <FadeUp className="flex justify-center">
        <div className="relative w-full max-w-sm px-4">
          {/* glow behind card */}
          <div className="absolute -inset-8 rounded-[3rem] bg-secondary/[0.08] blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-gradient-to-b from-[#0e1525] to-primary p-10 shadow-2xl shadow-black/80 backdrop-blur-xl">
            {/* header */}
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.884l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.116l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm-2 5V6a2 2 0 114 0v1H8z" />
                  </svg>
                </div>
                <div>
                  <p className="font-heading text-sm font-semibold text-white">Acme Store</p>
                  <p className="font-mono text-[10px] text-slate-500 uppercase tracking-tight">Order #8842</p>
                </div>
              </div>
              <span className="font-mono text-[10px] text-slate-600">
                stellarpay.io
              </span>
            </div>

            {/* amount */}
            <div className="mb-10 text-center">
              <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                Amount Due
              </p>
              <p className="mt-2 font-heading text-5xl font-bold text-white">
                25.00{" "}
                <span className="text-xl font-normal text-secondary">
                  USDC
                </span>
              </p>
            </div>

            {/* payment details */}
            <div className="mb-10 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
              <div className="flex items-center justify-between text-xs font-medium">
                <span className="text-slate-500">Network</span>
                <span className="flex items-center gap-2 text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                  Stellar Mainnet
                </span>
              </div>
              <div className="my-4 h-px bg-white/[0.04]" />
              <div className="flex items-center justify-between text-xs font-medium">
                <span className="text-slate-500">Expires In</span>
                <span className="text-slate-300">29m 42s</span>
              </div>
              <div className="my-4 h-px bg-white/[0.04]" />
              <div className="flex items-center justify-between text-xs font-medium">
                <span className="text-slate-500">Fee</span>
                <span className="text-secondary">0.00001 XLM</span>
              </div>
            </div>

            {/* pay button */}
            {!paid ? (
              <button
                onClick={() => setPaid(true)}
                className="group relative w-full rounded-2xl bg-gradient-to-r from-secondary to-blue-600 py-5 font-heading text-base font-bold text-white transition-all hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(108,92,231,0.4)] active:scale-[0.98]"
              >
                Pay 25.00 USDC
              </button>
            ) : (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex flex-col items-center gap-4 rounded-2xl border border-accent/20 bg-accent/[0.04] py-6"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.15 }}
                >
                  <svg className="h-12 w-12 text-accent" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M13 20.5l5 5 9.5-10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.div>
                <p className="font-heading text-lg font-semibold text-accent">
                  Transaction Confirmed
                </p>
                <button
                  onClick={() => setPaid(false)}
                  className="mt-1 text-xs text-slate-500 underline decoration-slate-700 underline-offset-4 transition-colors hover:text-slate-300"
                >
                  Reset demo
                </button>
              </motion.div>
            )}

            {/* footer */}
            <p className="mt-8 text-center text-[10px] uppercase tracking-widest text-slate-600">
              Secured by Stellar &middot; Web3 Ready
            </p>
          </div>
        </div>
      </FadeUp>
    </div>
  );
}

function HowItWorksSection() {
  const steps = [
    { title: "Connect", description: "Authenticate your platform with secure API keys." },
    { title: "Configure", description: "Set up webhooks to receive real-time payment events." },
    { title: "Integrate", description: "Use our single endpoint to generate payment links." },
    { title: "Settle", description: "Funds settle instantly to your Stellar wallet." },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
      <Section className="mb-16 text-center">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
          Simple Workflow
        </p>
        <h2 className="mx-auto max-w-2xl font-heading text-4xl font-bold leading-tight text-white sm:text-5xl">
          Four steps to Web3 dominance
        </h2>
      </Section>

      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <FadeUp key={step.title} delay={i * 0.1}>
            <div className="relative flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/[0.08] bg-secondary/10 font-heading text-2xl font-bold text-secondary">
                0{i + 1}
              </div>
              <h3 className="mb-3 font-heading text-xl font-bold text-white">{step.title}</h3>
              <p className="font-body text-sm leading-relaxed text-slate-400">
                {step.description}
              </p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%+1.5rem)] w-12 h-px bg-white/[0.06]" />
              )}
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  );
}

function FAQSection() {
  const faqs = [
    { q: "What assets are supported?", a: "We currently support XLM and USDC natively on the Stellar network." },
    { q: "Are there any monthly fees?", a: "No. Stellar Pay is pay-as-you-go with near-zero transaction fees." },
    { q: "Is it non-custodial?", a: "Yes. Funds are settled directly to your own Stellar wallet address." },
    { q: "How fast is settlement?", a: "Stellar transactions finalize in 3-5 seconds, providing instant settlement." },
  ];

  return (
    <div className="mx-auto max-w-4xl px-6 py-24 lg:py-32">
      <Section className="mb-16 text-center">
        <h2 className="font-heading text-4xl font-bold text-white">Frequently Asked Questions</h2>
      </Section>
      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <FadeUp key={i} delay={i * 0.05}>
            <div className="rounded-2xl border border-white/[0.06] bg-tide/5 p-8 backdrop-blur-md">
              <h3 className="mb-3 font-heading text-lg font-semibold text-white">{faq.q}</h3>
              <p className="font-body text-sm text-slate-400">{faq.a}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  );
}

function CTASection() {
  return (
    <div className="relative mx-auto max-w-6xl px-6 py-24 lg:py-32">
      {/* glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[400px] w-[600px] rounded-full bg-secondary/[0.04] blur-[100px]" />
      </div>

      <Section className="relative z-10 flex flex-col items-center text-center">
        <h2 className="mx-auto max-w-3xl font-heading text-4xl font-bold leading-tight text-white sm:text-6xl">
          Deploy your Stellar integration today
        </h2>
        <p className="mx-auto mt-6 max-w-lg font-body text-lg text-slate-400">
          Join the next generation of decentralized commerce. No contracts, no minimums, pure speed.
        </p>
        <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row">
          <Link
            href="/register"
            className="group relative inline-flex items-center gap-2 rounded-full bg-accent px-10 py-5 text-base font-bold text-night transition-all hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(0,245,212,0.3)] active:scale-[0.98]"
          >
            Create Free Account
            <IconArrow />
            <div className="absolute inset-0 -z-10 rounded-full bg-accent/40 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
          </Link>
          <Link
            href="/login"
            className="font-body text-sm font-medium text-slate-400 transition-colors hover:text-white underline-offset-8 hover:underline"
          >
            Already have an account? Sign in &rarr;
          </Link>
        </div>
      </Section>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-primary/50 py-12 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="flex items-center gap-6">
          <span className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-white/80">
            Stellar Pay
          </span>
          <SystemStatus />
        </div>
        <div className="flex gap-8 font-body text-xs text-slate-500">
          <Link href="/login" className="transition-colors hover:text-accent">
            Login
          </Link>
          <Link href="/register" className="transition-colors hover:text-accent">
            Register
          </Link>
          <Link href="/dashboard" className="transition-colors hover:text-accent">
            Dashboard
          </Link>
        </div>
      </div>
    </footer>
  );
}


export default function Home() {
  return (
    <GuestGuard>
    <main className="relative min-h-screen overflow-x-hidden scroll-smooth">
      {/* subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CodeSnippetSection />
        <PayWithLinkDemo />
        <FAQSection />
        <CTASection />
        <Footer />
      </div>
    </main>
    </GuestGuard>
  );
}
