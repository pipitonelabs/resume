export interface Role {
  title: string
  /** YYYY-MM */
  start: string
  /** YYYY-MM, or null while the role is current */
  end: string | null
  bullets: string[]
}

export interface Employer {
  company: string
  location: string
  roles: Role[]
}

export interface Certification {
  name: string
  /** YYYY-MM */
  issued: string
  lapsed?: boolean
}

export interface SkillGroup {
  name: string
  items: string[]
}

export const resume = {
  name: 'Joseph Pipitone',
  title: 'Cloud Systems Engineer',
  address: '2 Gilhall Circle, Fairport, NY 14450',
  phone: '585-978-1735',
  email: 'joe@pipitonelabs.com',
  github: { handle: '@pipitonelabs', url: 'https://github.com/pipitonelabs' },

  summary:
    'Cloud Systems Engineer skilled in delivering IaC automation, FinOps cost optimizations, and CCoE governance using Terraform and CloudFormation. Proficient in landing zones, policy-as-code guardrails, Agile workflows, and cross-functional team enablement. Draws from extensive background in systems administration, including VMware environments, SQL clustering, F5 load balancing, and M365 migrations. AWS Solutions Architect Associate certified. Passionate about building resilient, scalable cloud infrastructure that integrates CloudOps, SysAdmin, and DevOps principles.',

  experience: [
    {
      company: 'MegazoneCloud',
      location: 'Fairport, NY',
      roles: [
        {
          title: 'Cloud Systems Engineer',
          start: '2026-01',
          end: '2026-09',
          bullets: [
            'Delivered cloud consulting engagements for enterprise customers, crafting architectures that span security, data, application, and operations.',
            'Led AWS Migration Acceleration Program (MAP) assessments: discovery, application portfolio analysis, TCO and business case modeling, and migration wave planning.',
            'Designed multi-account AWS landing zones with AWS Organizations, Control Tower, and IAM Identity Center, defining IAM, network segmentation, and encryption standards, with policy-as-code guardrails delivered through Terraform, CloudFormation, and AWS CDK, including AWS Landing Zone Accelerator (LZA) deployments with pipeline-based customization.',
            'Produced infrastructure architecture designs and solution diagrams for pursuit teams, supporting proposals, statements of work, and customer workshops.',
            'Built reusable reference implementations (Terraform modules, account vending, CI/CD pipelines) adopted across engagements to shorten delivery time.',
            'Championed shift-left security and FinOps practices, embedding guardrails, cost allocation tagging, and rightsizing recommendations into every design.',
            'Mentored customer and partner engineers through build and migration phases, and served as the technical escalation point during go-live and hyper-care.',
            'Authored internal knowledge articles and technical documentation to capture engagement patterns and lessons learned.',
          ],
        },
      ],
    },
    {
      company: 'Constellation Brands, Inc.',
      location: 'Canandaigua, NY',
      roles: [
        {
          title: 'Cloud Engineer',
          start: '2022-05',
          end: '2026-01',
          bullets: [
            'Reviewed and approved Accenture change requests against CCoE guardrails while enabling secure updates.',
            'Led Accenture offshore team through FY26 cost-avoidance program via weekly cadence; delivered over $240,000 in validated fiscal year savings via automated snapshot cleanup (prod/non-prod retention), gp2→gp3 migrations, idle resource decommissioning, and EC2 rightsizing.',
            'Directed Accenture engineers in building org-wide cleanup solution using CloudFormation to orchestrate Lambda workflows across 78+ AWS accounts with S3 reporting; enforced tiered snapshot retention contributing towards over $240,000 in fiscal year savings.',
            'Directed Accenture engineers on proactive risk remediation - Trusted Advisor compliance, IAM access key rotations, anomaly detection with team notifications, and preemptive monitoring; reducing downtime while routing ServiceNow tickets to the appropriate assignment groups as well as CCoE backlog for fulfillment.',
            'Utilized Terraform modules for Identity Center, Landing Zones, and account bootstrapping - reducing deployment time from days to hours.',
            'Helped establish and operationalize the Cloud Center of Excellence (CCoE), designing AWS and Azure governance standards (VPC, IAM, resource naming and tagging, landing zones) deployed via Terraform and CloudFormation; reduced manual deployments through policy-as-code.',
            'Served as SME for various technologies and initiatives during cross-functional project syncs, aligning internal teams with CCoE standards in 2-week Agile sprints.',
            'Utilized Terraform modules and CloudFormation templates in sprint cycles to automate CCoE-compliant provisioning - Identity Center, account bootstrapping, networking, and cleanup solutions that utilize cloud services to drive our OKRs forward while maintaining our established standards.',
            'Built framework to support Infrastructure teams in migrations to AWS, in support of our Cloud First approach.',
          ],
        },
        {
          title: 'Senior Office 365 Engineer',
          start: '2020-03',
          end: '2022-05',
          bullets: [
            'SME for Office 365, Messaging & Collaboration suites.',
            'Global enterprise support of all Messaging & Collaboration platforms: Proofpoint, Exchange Online, SharePoint Online, OneDrive, Microsoft Teams, Azure, Power Apps, and the entire Microsoft 365 cloud technology stack. These products are globally used in locations such as the US, Mexico, Italy, and New Zealand.',
            'Facilitated conversations to plan and implement B2B solutions. Leverage Azure to securely provide a way to collaborate between organizations and various cloud technologies.',
            'Responsible for Azure requests related to directory access and application provisioning. Assist IAM, Cloud, Infrastructure, Enterprise Architecture, and Systems Management teams with solutioning various project needs.',
            'Led team with retirement of Skype and the migration to Microsoft Teams.',
            'Additional responsibilities include operational activity support as it relates to divestitures and acquisitions.',
          ],
        },
      ],
    },
    {
      company: '1105 Media, Inc.',
      location: 'Woodland Hills, CA',
      roles: [
        {
          title: 'IT Systems Operations Engineer',
          start: '2018-06',
          end: '2020-03',
          bullets: [
            'Responsible for Infrastructure architecture and development in an enterprise environment. Currently leveraging public / private cloud and virtualization technologies.',
            'Architected and managed VMware vSphere clusters, Sitecore CMS, F5 BigIP, SQL clustering, and Veeam backups.',
            'Led on-prem to Office 365, Azure, AWS migrations; implemented DirectAccess and site-to-site VPNs utilizing Sonicwall hardware.',
            'Responsible for the enterprise TLS lifecycle.',
          ],
        },
        {
          title: 'Internet Systems Engineer',
          start: '2006-03',
          end: '2018-06',
          bullets: [
            'Enterprise Network WAN/LAN Management: Racking, stacking, and cabling of servers and storage devices in multiple data centers.',
            'Responsible for networking devices, F5 BigIP, iRule scripting, SSL offloading, Linux BIND DNS servers, Active Directory, ADFS, Microsoft Windows and SQL clustering.',
            'Directly responsible for architecting, deploying, and maintaining VMware environment hosting corporate resources and clustered Sitecore CMS based websites located in a managed data center in Burbank, CA.',
            'Reduced operating costs by migrating acquired companies onto our corporate network and bandwidth.',
            'Migrated on-premises corporate resources to Office 365. Administration of Office 365 resources.',
            'Exchange, SharePoint, Teams, OneDrive migrations.',
            'Implementation of DirectAccess for seamless network connectivity. Created site-to-site tunnels to integrate branch offices and network services.',
            'Deployment of new servers for both corporate and web usage. Microsoft SQL Server performance tuning. Architecture of VMware clusters and shared storage.',
            'VMware Horizon View and App Volumes deployment. Deployment of Dell and HP fiber Modular Storage Arrays, fiber switch zoning.',
            'Responsible for web and corporate network remote backups using Veeam Backup & Replication.',
            'Responsible for corporate domain names and SSL certificate registrations and renewals.',
            'Support DevOps team during migration of legacy sites into the new Sitecore CMS environment.',
            'Microsoft System Center, Nagios and Cacti network monitoring.',
            'Responsible for domain name registrations, maintenance, and renewals of 600+ owned domain names.',
            'Google Analytics monthly reporting. Powershell automation.',
          ],
        },
      ],
    },
  ] satisfies Employer[],

  expertise: [
    'AWS / Azure / M365 Cloud Infrastructure',
    'Infrastructure / Policy-as-code',
    'CCoE Governance & Standards',
    'Agile Framework',
    'Windows & Linux Administration',
    'Cost Optimization & FinOps',
    'Virtualization Technologies',
    'Automation & Scripting',
    'Solution Design',
    'ITIL',
  ],

  skills: [
    { name: 'Cloud & IaC', items: ['AWS', 'Azure', 'Terraform', 'CloudFormation'] },
    {
      name: 'Design & Governance',
      items: [
        'Cloud Infrastructure Design & Enablement',
        'Cross-functional SME Collaboration',
        'Policy-as-code, CCoE guardrails',
        'Rightsizing, gp2 → gp3, Idle resource decommissioning',
      ],
    },
    {
      name: 'Automation & DevOps',
      items: ['Lambda cleanup workflows', 'Agile 2-week sprints', 'ServiceNow request routing'],
    },
    { name: 'Networking & Security', items: ['VPC, VNet, VPN, DNS, TLS lifecycle'] },
    {
      name: 'Microsoft 365 & Migrations',
      items: ['Exchange Online, Teams, SharePoint, OneDrive', 'On-prem → AWS/Azure/M365', 'Skype → Teams'],
    },
    {
      name: 'Infrastructure',
      items: ['VMware vSphere/Horizon View', 'Windows & SQL Clustering', 'F5 BigIP', 'Veeam', 'Ubiquiti UniFi'],
    },
    {
      name: 'Windows & Linux Administration',
      items: [
        'Enterprise Windows Server & Active Directory',
        'Microsoft SQL Server clustering and performance tuning',
        'Linux BIND DNS, scripting, and server administration',
        'PowerShell automation and systems management',
        'Long-term on-premises and hybrid systems administration (2006–present)',
      ],
    },
    {
      name: 'Kubernetes (Self-Directed Learning)',
      items: [
        'Talos Linux + Flux GitOps',
        'Cilium (eBPF CNI), Rook Ceph',
        'cert-manager, External DNS, VolSync',
        'Renovate + GitHub Actions',
      ],
    },
    {
      name: 'HomeLab',
      items: [
        'Built and managed a self-hosted UniFi network',
        'Designed topology, ran and patched structured cabling, racked switches/servers/APs with proper labeling and management',
        'Configured entire network, storage, software stack using IaC & CI/CD',
      ],
    },
  ] satisfies SkillGroup[],

  certifications: [
    { name: 'AWS Certified Solutions Architect Associate', issued: '2025-02' },
    { name: 'AWS Certified Cloud Practitioner', issued: '2022-12' },
    { name: 'Microsoft Certified: Azure Fundamentals', issued: '2022-03' },
    { name: 'ITIL 4 Foundation', issued: '2022-11' },
    { name: 'VCP5-DCV: VMware Certified Professional 5', issued: '2013-05', lapsed: true },
    {
      name: 'MCITP EA - Microsoft Certified IT Professional Enterprise Administrator',
      issued: '2013-01',
      lapsed: true,
    },
  ] satisfies Certification[],

  education: [
    {
      degree: 'B.S. in Information Technology',
      school: 'Point Park University',
      location: 'Pittsburgh, PA',
      year: '2004',
    },
  ],
}

export type Resume = typeof resume

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

/** "2026-01" -> "Jan 2026" */
export function formatMonth(ym: string): string {
  const [year, month] = ym.split('-')
  return `${MONTHS[Number(month) - 1]} ${year}`
}

/** "2022-05", "2026-01" -> "May 2022 – Jan 2026"; null end -> "Present" */
export function formatRange(start: string, end: string | null): string {
  return `${formatMonth(start)} – ${end ? formatMonth(end) : 'Present'}`
}
