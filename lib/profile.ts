import { compactYears, getProject } from "@/lib/projects"

type ExperienceEntry = {
  role: string
  company: string
  companyUrl: string
  years: string
  summary: string
}

/** Bio-only fields. When a `projectId` is given, role and years derive from
    lib/projects.ts so the About timeline can never drift from the case study. */
type ExperienceSource = Omit<ExperienceEntry, "role" | "years"> & {
  projectId?: string
  role?: string
  years?: string
}

const experienceSource: ExperienceSource[] = [
  {
    projectId: "syphon-labs",
    company: "Syphon Labs",
    companyUrl: "https://syphonlabs.com/",
    summary:
      "Leading product strategy, vision, and go-to-market for AI-native productivity infrastructure, from first commit to first customers.",
  },
  {
    projectId: "nyc-health-harlem",
    company: "NYC Health + Hospitals",
    companyUrl: "https://www.nychealthandhospitals.org/",
    summary:
      "Led end-to-end design and deployment of workflow automation, replacing manual triage with rule-based decision engines and improving operational efficiency by roughly 30% across high-volume tasks.",
  },
  {
    projectId: "treevah",
    company: "Treevah",
    companyUrl: "https://treevah.com/",
    summary:
      "Led financial modeling and cost-performance analysis of AI product opportunities, directly informing leadership’s roadmap decisions.",
  },
  {
    role: "Data Product Consultant",
    years: "2024",
    company: "Experis",
    companyUrl: "https://www.experis.com/",
    summary:
      "Owned delivery of a real-time data product for academic decision-making, from stakeholder alignment through pipeline architecture to launch.",
  },
  {
    role: "Research Analyst",
    years: "2023–24",
    company: "New York University",
    companyUrl: "https://www.nyu.edu/",
    summary:
      "Converted 100+ datasets into executive-facing KPI dashboards supporting institutional decision-making and accreditation reporting.",
  },
  {
    role: "Programming Analyst",
    years: "2022",
    company: "Cognizant",
    companyUrl: "https://www.cognizant.com/us/en",
    summary:
      "Behavioral analytics and A/B testing that lifted user retention 20% and subscription revenue 20%.",
  },
  {
    projectId: "edhitha-uas",
    company: "Edhitha UAS",
    companyUrl: "https://suas-competition.org/",
    summary:
      "Led autonomous UAV development to a top-10 international finish at the 2018 AUVSI SUAS Competition.",
  },
]

export const experience: ExperienceEntry[] = experienceSource.map((entry) => {
  const project = entry.projectId ? getProject(entry.projectId) : undefined
  const role = project?.role ?? entry.role
  const years = project ? compactYears(project.timeline) : entry.years
  if (!role || !years) {
    throw new Error(`Experience entry for ${entry.company} is missing role/years`)
  }
  return { role, years, company: entry.company, companyUrl: entry.companyUrl, summary: entry.summary }
})

export const education = [
  {
    degree: "MS, Computer Engineering",
    institution: "New York University",
    years: "2022–24",
  },
  {
    degree: "BE, Electronics",
    institution: "Ramaiah Institute of Technology",
    years: "2016–20",
  },
]

export const certifications = [
  {
    name: "McKinsey.org Forward Program",
    issuer: "McKinsey & Company",
    year: "2024",
    url: "https://www.credly.com/badges/aa83a5a4-3f38-4f69-9637-03f721a6fb7a",
  },
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    year: "2024",
    url: "https://www.credly.com/badges/12a52dbe-b959-432d-a73c-e61573667889",
  },
]
