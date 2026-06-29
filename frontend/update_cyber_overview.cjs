const fs = require('fs');

let code = fs.readFileSync('c:/HDC MA/HDC MA/src/data/servicesData.js', 'utf8');

// Parse the file or replace specifically the cybersecurity object's detailedContent and overview.
// It's safer to use a regex that captures the cybersecurity-services block.

const cyberBlockRegex = /(slug:\s*"cybersecurity-services"[\s\S]*?overview:\s*")([\s\S]*?)",\s*detailedContent:\s*\[([\s\S]*?)\],/;

const newOverview = "In today’s rapidly evolving digital landscape, cybersecurity is no longer optional—it is a business imperative. Our Cybersecurity Services are designed to help organizations proactively identify vulnerabilities, defend against emerging threats, and build resilient security frameworks that protect critical assets, sensitive data, and business operations.";

const newDetailedContent = `[
      "In today’s rapidly evolving digital landscape, cybersecurity is no longer optional—it is a business imperative. Our Cybersecurity Services are designed to help organizations proactively identify vulnerabilities, defend against emerging threats, and build resilient security frameworks that protect critical assets, sensitive data, and business operations.",
      "We deliver comprehensive security solutions across vulnerability assessment, penetration testing, threat detection, security monitoring, endpoint protection, governance, risk management, and compliance. By combining industry best practices with advanced technologies and a risk-driven approach, we help businesses minimize exposure, ensure regulatory compliance, and maintain operational continuity.",
      "Whether you're a startup, enterprise, or public sector organization, our team works closely with you to strengthen your security posture, respond effectively to evolving cyber risks, and enable secure digital transformation with confidence. Our mission is to provide reliable, scalable, and future-ready cybersecurity solutions that safeguard your business today and prepare it for tomorrow’s challenges."
    ]`;

const newCode = code.replace(cyberBlockRegex, `$1${newOverview}",\n    detailedContent: ${newDetailedContent},`);

fs.writeFileSync('c:/HDC MA/HDC MA/src/data/servicesData.js', newCode);
console.log("Cybersecurity overview updated.");
