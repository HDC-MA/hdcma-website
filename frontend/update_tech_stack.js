import fs from 'fs';

let code = fs.readFileSync('c:/HDC MA/HDC MA/src/data/servicesData.js', 'utf8');

const stacks = {
  'ai-machine-learning': ['Python', 'TensorFlow', 'PyTorch', 'OpenAI API', 'AWS SageMaker', 'Hugging Face'],
  'custom-software-development': ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Java Spring', 'TypeScript'],
  'digital-product-engineering': ['Figma', 'React Native', 'Next.js', 'GraphQL', 'AWS', 'Firebase'],
  'it-consulting-managed-services': ['ServiceNow', 'Datadog', 'Jira', 'Splunk', 'Microsoft Intune', 'AWS CloudWatch'],
  'enterprise-software-solutions': ['Java', 'C# .NET', 'Oracle DB', 'MuleSoft', 'Salesforce', 'Kubernetes'],
  'cybersecurity-services': ['Zscaler', 'CrowdStrike', 'Splunk SIEM', 'Okta', 'Kali Linux', 'Tenable'],
  'cloud-services': ['AWS', 'Microsoft Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker'],
  'digital-marketing-services': ['HubSpot', 'Google Analytics 4', 'SEMrush', 'Salesforce Marketing Cloud', 'Ahrefs', 'Meta Ads'],
  'business-enterprise-solutions': ['Tableau', 'Power BI', 'Atlassian Suite', 'Asana', 'Miro', 'Salesforce'],
  'staffing-training-services': ['LinkedIn Recruiter', 'Greenhouse', 'Workday', 'Coursera for Business', 'Pluralsight', 'Udemy Business'],
  'saas-products': ['Stripe', 'AWS', 'React', 'Node.js', 'Redis', 'MongoDB'],
  'sap-solutions': ['SAP S/4HANA', 'SAP CPI', 'SAP BTP', 'SAP Fiori', 'ABAP', 'SAP Analytics Cloud']
};

for (const [slug, stack] of Object.entries(stacks)) {
  const regex = new RegExp('(slug:\\s*"' + slug + '"[\\s\\S]*?capabilities:\\s*\\[[\\s\\S]*?\\],)', 'g');
  code = code.replace(regex, "$1\n    techStack: " + JSON.stringify(stack).replace(/,/g, ', ') + ",");
}

fs.writeFileSync('c:/HDC MA/HDC MA/src/data/servicesData.js', code);
