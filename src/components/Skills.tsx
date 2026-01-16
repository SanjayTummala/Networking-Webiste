import React from "react";
import SectionDivider from "./SectionDivider";

interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Core Networking",
    description:
      "Fundamental networking concepts built through structured study and hands-on troubleshooting.",
    skills: [
      "TCP/IP & OSI Model",
      "IP Addressing & Subnetting",
      "ARP, ICMP, Ping",
      "Network Troubleshooting",
    ],
  },
  {
    title: "Routing & Switching",
    description:
      "Enterprise routing and switching concepts validated through lab simulations.",
    skills: [
      "Static & Default Routing",
      "OSPF",
      "VLAN Configuration",
      "Spanning Tree Protocol (STP)",
    ],
  },
  {
    title: "Network Security Fundamentals",
    description:
      "Core security principles focused on traffic control and monitoring.",
    skills: [
      "Access Control Lists (ACLs)",
      "Firewall Concepts",
      "Traffic Monitoring",
      "Basic Threat Analysis",
    ],
  },
  {
    title: "Tools & Platforms",
    description:
      "Industry-standard tools used for simulation, analysis, and configuration.",
    skills: [
      "GNS3",
      "Cisco Packet Tracer",
      "Wireshark",
      "Cisco IOS",
    ],
  },
  {
    title: "Operating Systems",
    description:
      "Operating system fundamentals relevant to networking environments.",
    skills: [
      "Linux Basics",
      "Networking Services",
      "Command-Line Operations",
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section className="section" id="skills-section">
      <SectionDivider id="skills" />
      <h2 className="section-title">Skills</h2>

      <p className="skills-intro">
        Core networking and infrastructure skills developed through structured
        learning, hands-on labs, and real-world troubleshooting practice.
      </p>

      <div className="skills-card-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-card">
            <h3 className="skill-card-title">{category.title}</h3>
            <p className="skill-card-desc">{category.description}</p>

            <div className="skill-badge-group">
              {category.skills.map((skill, i) => (
                <span key={i} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
