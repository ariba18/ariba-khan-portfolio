import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Cloud,
  Cpu,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Server,
  Code2,
  Boxes,
  Terminal,
  GitBranch,
  Package,
  Layers,
  ShieldCheck,
  Workflow,
  Sparkles,
  BookOpen,
  Monitor,
} from "lucide-react";

import { useState } from "react";
import type { ComponentType, SVGProps } from "react";
import { Reveal } from "@/components/portfolio/Reveal";

import aribaPhoto from "@/assets/ariba.jpg";


export const Route = createFileRoute("/")({
  component: PortfolioPage,
  head: () => ({
    meta: [
      { title: "Ariba Khan — Cloud Support & AWS DevOps Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Ariba Khan — aspiring Cloud Support / AWS / DevOps engineer. Projects, certifications, and cloud journey.",
      },
    ],
  }),
});

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

const NAV = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

const SKILLS: { name: string; Icon: Icon }[] = [
  { name: "AWS", Icon: Cloud },
  { name: "Linux", Icon: Terminal },
  { name: "Terraform", Icon: Layers },
  { name: "Docker", Icon: Package },
  { name: "Kubernetes", Icon: Boxes },
  { name: "Git", Icon: GitBranch },
  { name: "GitHub", Icon: Github },
  { name: "Python", Icon: Code2 },
  { name: "Java", Icon: Code2 },
  { name: "HTML", Icon: Code2 },
  { name: "CSS", Icon: Code2 },
  { name: "JavaScript", Icon: Code2 },
];

const PROJECTS = [
  {
    name: "WhereToPark",
    desc: "Full-stack app that helps drivers find available parking spots in real time.",
    stack: ["Node.js", "React", "MongoDB", "AWS"],
    url: "https://github.com/ariba18/WhereToPark",
  },
  {
    name: "Cafe Deployment Pipeline",
    desc: "CI/CD pipeline that automates build, test, and deploy of a cafe web app.",
    stack: ["AWS CodePipeline", "CodeBuild", "S3", "EC2"],
    url: "https://github.com/ariba18/Cafe-Deployment-Pipeline",
  },
  {
    name: "AWS High Availability Infrastructure",
    desc: "Multi-AZ VPC with load balancing and auto scaling for resilient workloads.",
    stack: ["VPC", "ALB", "ASG", "Terraform"],
    url: "https://github.com/ariba18/aws-ha-infrastructure",
  },
  {
    name: "AWS Serverless Todo API",
    desc: "Event-driven REST API built with Lambda, API Gateway, and DynamoDB.",
    stack: ["Lambda", "API Gateway", "DynamoDB", "IAM"],
    url: "https://github.com/ariba18/aws-serverless-todo-api",
  },
  {
    name: "Prometheus Grafana Monitoring",
    desc: "Observability stack for Kubernetes workloads with dashboards and alerts.",
    stack: ["Prometheus", "Grafana", "Kubernetes", "Helm"],
    url: "https://github.com/ariba18/prometheus-grafana-monitoring",
  },
];
const CERTS: {
  name: string;
  status: string;
  Icon: Icon;
  url: string | null;
}[] = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    status: "AWS Certified",
    Icon: ShieldCheck,
    url: "/certificates/aws-solutions-architect-associate.pdf",
  },
  {
    name: "AWS Cloud Practitioner Essentials",
    status: "Completed",
    Icon: Cloud,
    url: "/certificates/aws-cloud-practitioner-essentials.pdf",
  },
  {
    name: "AWS Cloud Technical Essentials",
    status: "Completed",
    Icon: Server,
    url: "/certificates/aws-cloud-technical-essentials.pdf",
  },
  {
    name: "AWS Networking Basics",
    status: "Completed",
    Icon: Workflow,
    url: "/certificates/aws-networking-basics.pdf",
  },
  {
    name: "AWS Educate Security Fundamentals",
    status: "Completed",
    Icon: ShieldCheck,
    url: "/certificates/aws-security-fundamentals.pdf",
  },
  {
    name: "Advanced Certification in Cloud & DevOps",
    status: "Completed",
    Icon: Cpu,
    url: "/certificates/advanced-cloud-devops.pdf",
  },
  {
    name: "Linux Essentials",
    status: "Completed",
    Icon: Monitor,
    url: "/certificates/linux-essentials.pdf",
  },
  {
    name: "Linux Unhatched",
    status: "Completed",
    Icon: Terminal,
    url: "/certificates/linux-unhatched.pdf",
  },
];

const JOURNEY: { title: string; desc: string; Icon: Icon }[] = [
  { title: "Linux", desc: "Shell, file systems, users, and services.", Icon: Terminal },
  { title: "AWS Cloud", desc: "Core services: EC2, S3, IAM, VPC.", Icon: Cloud },
  { title: "DevOps", desc: "CI/CD, automation, and Git workflows.", Icon: Workflow },
  { title: "Terraform", desc: "Infrastructure as Code across environments.", Icon: Layers },
  { title: "Kubernetes", desc: "Containers, deployments, and services.", Icon: Boxes },
  { title: "Cloud Projects", desc: "Building real, resilient architectures.", Icon: Server },
  { title: "Continuous Learning", desc: "Always shipping, always studying.", Icon: BookOpen },
];

function PortfolioPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Ambient background — soft clouds + stars */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        
        <div
          className="cloud-blob"
          style={{
            top: "-10%",
            left: "-10%",
            width: "520px",
            height: "520px",
            background:
              "radial-gradient(circle at 30% 30%, rgba(56,189,248,0.35), transparent 60%)",
          }}
        />
        <div
          className="cloud-blob"
          style={{
            top: "40%",
            right: "-15%",
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle at 50% 50%, rgba(56,189,248,0.18), transparent 60%)",
            animationDelay: "3s",
          }}
        />
        <div
          className="cloud-blob"
          style={{
            bottom: "-20%",
            left: "20%",
            width: "700px",
            height: "700px",
            background:
              "radial-gradient(circle at 50% 50%, rgba(99,102,241,0.15), transparent 65%)",
            animationDelay: "6s",
          }}
        />
      </div>

      <Nav />

      <main className="mx-auto max-w-6xl px-6">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Journey />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

/* ------------------------------ Nav ------------------------------ */

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="group flex items-center gap-2 text-sm font-medium tracking-tight">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent text-sm font-bold text-accent-foreground">
            AK
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-foreground">Ariba Khan</span>
            <span className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground">
              CLOUD &amp; DEVOPS
            </span>
          </span>
        </a>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#contact"
          className="hidden rounded-md border border-border bg-secondary px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent md:inline-flex"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}

/* ------------------------------ Hero ------------------------------ */

function Hero() {
  return (
    <section id="top" className="relative pt-16 pb-12 md:pt-24 md:pb-16">
      {/* soft blue glow behind hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 -z-0 h-[380px] w-[720px] max-w-[95vw] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(56,189,248,0.22), rgba(56,189,248,0.06) 40%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      <div className="relative grid items-center gap-12 md:grid-cols-[1fr_auto] md:gap-16">
        <div className="min-w-0">
          <div className="fade-up inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Available for Cloud Support & DevOps opportunities
          </div>

          <h1
  className="fade-up mt-6 max-w-4xl leading-[1.05] tracking-tight"
  style={{ animationDelay: "80ms" }}
>
  <span className="block text-lg font-medium text-muted-foreground md:text-xl">
    Hey, I'm
  </span>

  <span className="mt-2 block text-6xl font-bold tracking-tighter text-foreground md:text-8xl">
    Ariba Khan<span className="text-accent">.</span>
  </span>

</h1>

          <p
            className="fade-up mt-8 text-base tracking-wide text-muted-foreground"
            style={{ animationDelay: "220ms" }}
          >
            Cloud Support <span className="text-border">•</span> AWS{" "}
            <span className="text-border">•</span> Linux{" "}
            <span className="text-border">•</span> Terraform{" "}
            <span className="text-border">•</span> DevOps
          </p>

          <div
            className="fade-up mt-10 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "300ms" }}
          >
            <a
              href="/resume.pdf"
              download="Ariba Khan resume.pdf"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-accent-foreground shadow-[0_0_40px_-10px_rgba(56,189,248,0.6)] transition-transform hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" />
              Download Resume
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/70 px-5 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-accent/50 hover:text-accent"
            >
              Projects
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

<div
  className="fade-up mt-6 flex items-center gap-4"
  style={{ animationDelay: "260ms" }}
>
  <a
    href="https://github.com/ariba18"
    target="_blank"
    rel="noreferrer"
    className="grid h-12 w-12 place-items-center rounded-full border border-border bg-card transition hover:border-accent hover:text-accent hover:-translate-y-1"
  >
    <Github className="h-5 w-5" />
  </a>

  <a
    href="https://www.linkedin.com/in/ariba-khan-598935302/"
    target="_blank"
    rel="noreferrer"
    className="grid h-12 w-12 place-items-center rounded-full border border-border bg-card transition hover:border-accent hover:text-accent hover:-translate-y-1"
  >
    <Linkedin className="h-5 w-5" />
  </a>

  <a
    href="mailto:aribaakhan18@gmail.com"
    className="grid h-12 w-12 place-items-center rounded-full border border-border bg-card transition hover:border-accent hover:text-accent hover:-translate-y-1"
  >
    <Mail className="h-5 w-5" />
  </a>

  <a
    href="https://leetcode.com/u/AribaKhan18/"
    target="_blank"
    rel="noreferrer"
    className="grid h-12 w-12 place-items-center rounded-full border border-border bg-card transition hover:border-accent hover:text-accent hover:-translate-y-1"
  >
    <Code2 className="h-5 w-5" />
  </a>
</div>
        </div>

        {/* Circular portrait */}
        <div
          className="fade-up relative mx-auto md:mx-0 md:mt-2"
          style={{ animationDelay: "120ms" }}
        >
          <div
            aria-hidden
            className="absolute inset-0 -z-10 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(56,189,248,0.45), transparent 65%)",
              filter: "blur(28px)",
              transform: "scale(1.15)",
            }}
          />
          <div className="relative h-56 w-56 overflow-hidden rounded-full ring-1 ring-border md:h-80 md:w-80">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-accent/30"
            />
            <img
              src={aribaPhoto}
              alt="Portrait of Ariba Khan"
              width={816}
              height={816}
              className="h-full w-full object-cover object-center scale-115"
            />
          </div>
        </div>
      </div>

    </section>
  );
}

/* ------------------------------ Section helpers ------------------------------ */

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title?: string;
  desc?: string;
}) {
  return (
    <Reveal>
      <div className="mb-10 max-w-2xl">
        <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent"><span className="h-px w-7 bg-accent" />{eyebrow}</p>
<h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
          {title ?? eyebrow}
        </h2>
        
      </div>
    </Reveal>
  );
}

/* ------------------------------ About ------------------------------ */

function About() {
  return (
    <section id="about" className="scroll-mt-24 py-14 md:py-16">
      <SectionHeading eyebrow="About" title="Turning Infrastructure into Code." />
      <div className="grid gap-6">
        <Reveal>
          <div className="hairline lift rounded-2xl bg-card p-8">
            <p className="text-base leading-relaxed text-muted-foreground">
              I turn messy infrastructure into clean, automated systems, one Terraform
              module at a time. If I click the same button in the AWS console twice, the
              third time I write code instead.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              So far that&apos;s meant a serverless API on 19 AWS resources, a multi-AZ
              setup built to keep serving traffic when one zone has a bad day, and
              Prometheus and Grafana dashboards that show me what my apps are up to. I
              break things in my own AWS account so nobody else&apos;s has to, because
              &quot;it works on my machine&quot; was never good enough for me.
            </p>
          </div>
        </Reveal>
        
      </div>
    </section>
  );
}

/* ------------------------------ Skills ------------------------------ */

function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-14 md:py-16">
      <SectionHeading
        eyebrow="Skills"
        title="Tools I use to build in the cloud"
        desc="The tools I use to build, ship and monitor infrastructure."
      />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {SKILLS.map((s, i) => (
          <Reveal key={s.name} delay={i * 40}>
            <div className="hairline lift group flex h-full items-center gap-3 rounded-xl bg-card p-4">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-secondary ring-1 ring-border transition-colors group-hover:ring-accent/40">
                <s.Icon className="h-4 w-4 text-accent" />
              </span>
              <span className="text-sm font-medium text-foreground">{s.name}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ Projects ------------------------------ */

const PROJECT_CATS: Record<string, string> = {
  "WhereToPark": "Full-stack",
  "Cafe Deployment Pipeline": "CI/CD",
  "AWS High Availability Infrastructure": "Infrastructure as Code",
  "AWS Serverless Todo API": "Serverless",
  "Prometheus Grafana Monitoring": "Observability",
};

function Projects() {
  const [active, setActive] = useState("All");
  const cats = ["All", ...Array.from(new Set(PROJECTS.map((p) => PROJECT_CATS[p.name])))];
  const count = (c: string) =>
    c === "All" ? PROJECTS.length : PROJECTS.filter((p) => PROJECT_CATS[p.name] === c).length;
  const shown = PROJECTS.filter((p) => active === "All" || PROJECT_CATS[p.name] === active);

  return (
    <section id="projects" className="scroll-mt-24 py-14 md:py-16">
      <SectionHeading
        eyebrow="Projects"
        title="Selected cloud & DevOps work"
        desc="Small, focused builds â€” each one a step deeper into production-grade infrastructure."
      />

      <div className="mb-8 flex flex-wrap gap-2">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-xs transition-colors ${
              active === c
                ? "border-accent bg-accent text-accent-foreground"
                : "border-border text-muted-foreground hover:border-accent/50 hover:text-foreground"
            }`}
          >
            {c}
            <span className="opacity-60">{count(c)}</span>
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {shown.map((p, i) => (
          <Reveal key={p.name} delay={i * 60}>
            <article className="hairline lift group relative flex h-full flex-col rounded-2xl bg-card p-6">
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  {PROJECT_CATS[p.name]}
                </span>
                <span className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-accent">
                  Code
                </span>
              </div>

              <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground">
                {p.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-secondary px-2 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-background/60 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <Github className="h-3.5 w-3.5" />
                  GitHub
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
/* ------------------------------ Certifications ------------------------------ */

function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-24 py-14 md:py-16">
      <SectionHeading
        eyebrow="Certifications"
        title="Credentials behind the work"
        desc="Structured learning to back the hands-on work."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {CERTS.map((c, i) => (
          <Reveal key={c.name} delay={i * 60}>
            <div className={`hairline lift flex h-full flex-col gap-4 rounded-2xl bg-card p-5 sm:flex-row sm:items-center sm:justify-between ${i === 0 ? "ring-1 ring-accent/50" : ""}`}>
              <div className="flex items-center gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-secondary ring-1 ring-border">
                  <c.Icon className="h-5 w-5 text-accent" />
                </span>
                <div className="min-w-0">
  <div className="text-sm font-medium text-foreground">
    {c.name}
  </div>
</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full border border-border bg-secondary px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
  {c.status}
</span>
                {c.url ? (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background/60 px-2.5 py-1 text-[11px] font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent"
                  >
                    <ExternalLink className="h-3 w-3" />
                    View certificate
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-dashed border-border px-2.5 py-1 text-[11px] text-muted-foreground">
                    Coming soon
                  </span>
                )}
              </div>
            </div>
          </Reveal>

        ))}
      </div>
    </section>
  );
}

/* ------------------------------ Journey ------------------------------ */

function Journey() {
  return (
    <section id="journey" className="scroll-mt-24 py-14 md:py-16">
      <SectionHeading
        eyebrow="Cloud Journey"
        title="From the shell to the cluster"
        desc="The path I&apos;m walking — one deployment at a time."
      />
      <ol className="relative border-l border-border pl-6 md:pl-8">
        {JOURNEY.map((j, i) => (
          <Reveal as="li" key={j.title} delay={i * 60} className="relative pb-8 last:pb-0">
            <span className="absolute -left-[33px] top-1 grid h-6 w-6 place-items-center rounded-full border border-border bg-card md:-left-[41px]">
              <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_rgba(56,189,248,0.9)]" />
            </span>
            <div className="hairline lift rounded-xl bg-card p-5">
              <div className="flex items-center gap-3">
                <j.Icon className="h-4 w-4 text-accent" />
                <h3 className="text-sm font-semibold tracking-tight text-foreground">
                  {j.title}
                </h3>
                <span className="ml-auto font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  Step {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{j.desc}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

/* ------------------------------ Contact ------------------------------ */

const LINKS = [
  { label: "GitHub", href: "https://github.com/ariba18", Icon: Github, handle: "@ariba18" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ariba-khan-598935302",
    Icon: Linkedin,
    handle: "in/ariba-khan-598935302",
  },
  { label: "Email", href: "mailto:aribaakhan18@gmail.com", Icon: Mail, handle: "aribaakhan18@gmail.com" },
  { label: "LeetCode", href: "https://leetcode.com/u/AribaKhan18/", Icon: Code2, handle: "/AribaKhan18" },
];

function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-14 md:py-16">
      <SectionHeading
        eyebrow="Contact"
        title="Let&apos;s build something reliable"
        desc="Best for internships, junior Cloud Support or DevOps roles, and collaboration on cloud projects."
      />
      <div className="grid gap-3 sm:grid-cols-2">
        {LINKS.map((l, i) => (
          <Reveal key={l.label} delay={i * 60}>
            <a
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="hairline lift group flex items-center justify-between rounded-2xl bg-card p-5"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-secondary ring-1 ring-border transition-colors group-hover:ring-accent/40">
                  <l.Icon className="h-4 w-4 text-accent" />
                </span>
                <div>
                  <div className="text-sm font-medium text-foreground">{l.label}</div>
                  <div className="text-xs text-muted-foreground">{l.handle}</div>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-accent" />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ Footer ------------------------------ */

function Footer() {
  return (
    <footer className="relative mt-8 border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 md:flex-row md:items-center">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Cloud className="h-4 w-4 text-accent" />
          Thanks for stopping by. See you in the cloud. ☁
        </div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ariba Khan · Built with care.
        </div>
      </div>
    </footer>
  );
}
