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
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { Reveal } from "@/components/portfolio/Reveal";
import { Starfield } from "@/components/portfolio/Starfield";
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
    url: "https://github.com/aribakhan/wheretopark",
  },
  {
    name: "Cafe Deployment Pipeline",
    desc: "CI/CD pipeline that automates build, test, and deploy of a cafe web app.",
    stack: ["AWS CodePipeline", "CodeBuild", "S3", "EC2"],
    url: "https://github.com/aribakhan/cafe-deployment-pipeline",
  },
  {
    name: "AWS High Availability Infrastructure",
    desc: "Multi-AZ VPC with load balancing and auto scaling for resilient workloads.",
    stack: ["VPC", "ALB", "ASG", "Terraform"],
    url: "https://github.com/aribakhan/aws-high-availability-infra",
  },
  {
    name: "AWS Serverless Todo API",
    desc: "Event-driven REST API built with Lambda, API Gateway, and DynamoDB.",
    stack: ["Lambda", "API Gateway", "DynamoDB", "IAM"],
    url: "https://github.com/aribakhan/aws-serverless-todo-api",
  },
  {
    name: "Prometheus Grafana Monitoring",
    desc: "Observability stack for Kubernetes workloads with dashboards and alerts.",
    stack: ["Prometheus", "Grafana", "Kubernetes", "Helm"],
    url: "https://github.com/aribakhan/prometheus-grafana-monitoring",
  },
];


const CERTS: {
  name: string;
  status: string;
  Icon: Icon;
  url: string | null;
}[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    status: "In progress",
    Icon: Cloud,
    url: "https://www.credly.com/users/aribakhan",
  },
  {
    name: "AWS Solutions Architect – Associate",
    status: "Studying",
    Icon: ShieldCheck,
    url: null,
  },
  {
    name: "HashiCorp Terraform Associate",
    status: "Planned",
    Icon: Layers,
    url: null,
  },
  {
    name: "CKA — Certified Kubernetes Administrator",
    status: "Planned",
    Icon: Boxes,
    url: null,
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
        <Starfield count={45} />
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
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-card ring-1 ring-border">
            <Cloud className="h-4 w-4 text-accent" />
          </span>
          <span className="text-foreground">Ariba Khan</span>
          <span className="text-muted-foreground">/ Cloud</span>
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
    <section id="top" className="relative pt-24 pb-28 md:pt-32 md:pb-36">
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

      <div className="relative grid items-start gap-12 md:grid-cols-[1fr_auto] md:gap-16">
        <div className="min-w-0">
          <div className="fade-up inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Available for Cloud Support & DevOps opportunities
          </div>

          <h1
            className="fade-up mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl"
            style={{ animationDelay: "80ms" }}
          >
            Hey, I&apos;m Ariba Khan.
            <br />
            <span className="text-muted-foreground">Learning today.</span>{" "}
            <span className="text-foreground">Building for tomorrow.</span>
          </h1>

          <p
            className="fade-up mt-6 flex items-center gap-2 text-lg text-muted-foreground"
            style={{ animationDelay: "160ms" }}
          >
            Building in the Cloud
            <Cloud className="h-5 w-5 text-accent" />
          </p>

          <p
            className="fade-up mt-3 text-sm tracking-wide text-muted-foreground"
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
              href="/Ariba_Khan_Resume.pdf"
              download="Ariba_Khan_Resume.pdf"
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

          {/* dashboard-style stat cards */}
          <div
            className="fade-up mt-16 grid grid-cols-2 gap-3 md:grid-cols-4"
            style={{ animationDelay: "380ms" }}
          >
            {[
              { k: "Region", v: "ca-central-1" },
              { k: "Uptime", v: "99.99%" },
              { k: "Deploys", v: "IaC" },
              { k: "Status", v: "Shipping" },
            ].map((s) => (
              <div
                key={s.k}
                className="hairline rounded-xl bg-card/60 p-4 backdrop-blur"
              >
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                  {s.k}
                </div>
                <div className="mt-1 flex items-center gap-2 text-sm text-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
                  {s.v}
                </div>
              </div>
            ))}
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
          <div className="relative h-44 w-44 overflow-hidden rounded-full ring-1 ring-border md:h-56 md:w-56">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-accent/30"
            />
            <img
              src={aribaPhoto}
              alt="Portrait of Ariba Khan"
              width={816}
              height={816}
              className="h-full w-full object-cover"
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
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <Reveal>
      <div className="mb-10 max-w-2xl">
        <div className="text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</div>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          {title}
        </h2>
        {desc && <p className="mt-3 text-sm text-muted-foreground md:text-base">{desc}</p>}
      </div>
    </Reveal>
  );
}

/* ------------------------------ About ------------------------------ */

function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20">
      <SectionHeading eyebrow="About" title="Cloud-curious. Support-minded. Always shipping." />
      <div className="grid gap-6 md:grid-cols-3">
        <Reveal className="md:col-span-2">
          <div className="hairline lift rounded-2xl bg-card p-8">
            <p className="text-base leading-relaxed text-muted-foreground">
              I&apos;m an aspiring{" "}
              <span className="text-foreground">Cloud Support / AWS / DevOps engineer</span>{" "}
              focused on building reliable, well-observed infrastructure. I enjoy turning messy
              systems into clean, automated ones — writing Terraform, wiring up pipelines, and
              helping teams ship with confidence.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Right now I&apos;m deep in AWS, Linux, and Kubernetes. Every project is a chance to
              practice production-grade thinking: high availability, least privilege, cost
              awareness, and clear runbooks.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="hairline lift flex h-full flex-col justify-between rounded-2xl bg-card p-8">
            <div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Sparkles className="h-4 w-4 text-accent" />
                Currently
              </div>
              <ul className="mt-4 space-y-3 text-sm text-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                  Studying for AWS Cloud Practitioner
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                  Building IaC labs with Terraform
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                  Exploring Kubernetes observability
                </li>
              </ul>
            </div>
            <div className="mt-6 border-t border-border pt-4 text-xs text-muted-foreground">
              Based remotely · Open to internships & junior roles
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ Skills ------------------------------ */

function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20">
      <SectionHeading
        eyebrow="Skills"
        title="Tools I use to build in the cloud"
        desc="Grouped by the layer of the stack I reach for them at."
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

function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Selected cloud & DevOps work"
        desc="Small, focused builds — each one a step deeper into production-grade infrastructure."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.name} delay={i * 60}>
            <article className="hairline lift group relative flex h-full flex-col rounded-2xl bg-card p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-secondary ring-1 ring-border">
                    <Cpu className="h-5 w-5 text-accent" />
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {p.name}
                  </h3>
                </div>
                <span className="text-[11px] uppercase tracking-widest text-muted-foreground">
                  0{i + 1}
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-secondary px-2 py-1 text-[11px] text-muted-foreground"
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
                <span className="text-[11px] text-muted-foreground">Case study coming soon</span>
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
    <section id="certifications" className="scroll-mt-24 py-20">
      <SectionHeading
        eyebrow="Certifications"
        title="On the certification path"
        desc="Structured learning to back the hands-on work."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {CERTS.map((c, i) => (
          <Reveal key={c.name} delay={i * 60}>
            <div className="hairline lift flex h-full flex-col gap-4 rounded-2xl bg-card p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-secondary ring-1 ring-border">
                  <c.Icon className="h-5 w-5 text-accent" />
                </span>
                <div className="min-w-0">
                  <div className="text-sm font-medium text-foreground">{c.name}</div>
                  <div className="text-xs text-muted-foreground">{c.status}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full border border-border bg-secondary px-2.5 py-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                  {c.status === "In progress" ? "Active" : "Roadmap"}
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
    <section id="journey" className="scroll-mt-24 py-20">
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
                <span className="ml-auto text-[11px] uppercase tracking-widest text-muted-foreground">
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
  { label: "GitHub", href: "https://github.com/aribakhan", Icon: Github, handle: "@aribakhan" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aribakhan",
    Icon: Linkedin,
    handle: "in/aribakhan",
  },
  { label: "Email", href: "mailto:ariba@example.com", Icon: Mail, handle: "ariba@example.com" },
  { label: "LeetCode", href: "https://leetcode.com/aribakhan", Icon: Code2, handle: "/aribakhan" },
];

function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20">
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
    <footer className="relative mt-20 border-t border-border/60">
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
