const fs = require('fs');
let code = fs.readFileSync('c:/HDC MA/HDC MA/src/data/servicesData.js', 'utf8');
code = code.replace(
  /techStack: \["Zscaler".*?\],/,
  'techStack: ["Qualys", "Tenable Nessus", "OpenVAS", "Rapid7 InsightVM", "Tanium", "Splunk Enterprise Security", "IBM QRadar", "Microsoft Sentinel", "Palo Alto Cortex XSOAR", "Seceon", "CrowdStrike Falcon", "Microsoft Defender for Endpoint", "RSA Archer", "ServiceNow", "Claude Code Security"],'
);
fs.writeFileSync('c:/HDC MA/HDC MA/src/data/servicesData.js', code);
console.log('Update complete');
