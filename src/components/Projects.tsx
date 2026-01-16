import React, { useState } from "react";
import SectionDivider from "./SectionDivider";
import ProjectModal from "./ProjectModal";

interface Project {
  title: string;
  summary: string;
  bullets: string[];
  tools: string[];
  file: string;
}

const projects: Project[] = [
  {
    title: "Packet Analysis & Network Troubleshooting",
    summary:
      "Analyzed real network traffic to understand packet flow and troubleshoot connectivity issues.",
    bullets: [
      "Captured ICMP, ARP, and DHCP packets using Wireshark",
      "Diagnosed latency and packet loss issues",
      "Analyzed protocol behavior at packet level",
      "Applied systematic troubleshooting methodology",
    ],
    tools: ["Wireshark", "ICMP", "ARP"],
    file: "/projects/packet-analysis.html",
  },
  {
    title: "DHCP Implementation & Address Management",
    summary:
      "Implemented DHCP services to automate IP address allocation in enterprise-style networks.",
    bullets: [
      "Configured DHCP scopes and lease timers",
      "Observed full DHCP DORA process",
      "Validated client IP assignment",
      "Tested failure and renewal scenarios",
    ],
    tools: ["DHCP", "GNS3", "Packet Tracer"],
    file: "/projects/dhcp-implementation.html",
  },
  {
    title: "Static & Default Routing",
    summary:
      "Designed static and default routing to ensure predictable traffic flow across networks.",
    bullets: [
      "Configured static and default routes",
      "Verified route selection and failover",
      "Tested multi-hop routing paths",
      "Observed routing behavior during route removal",
    ],
    tools: ["Cisco IOS", "Static Routing"],
    file: "/projects/static-routing.html",
  },
  {
    title: "OSPF Dynamic Routing (Real-Time)",
    summary:
      "Configured OSPF to study dynamic routing behavior and convergence in routed networks.",
    bullets: [
      "Established OSPF neighbor adjacencies",
      "Analyzed hello/dead timers",
      "Observed route advertisements",
      "Tested topology changes and convergence",
    ],
    tools: ["OSPF", "GNS3", "Cisco IOS"],
    file: "/projects/ospf-routing.html",
  },
  {
    title: "VLAN & Spanning Tree Techniques",
    summary:
      "Implemented VLAN segmentation and observed STP behavior to prevent Layer 2 loops.",
    bullets: [
      "Configured VLANs across switches",
      "Observed STP root bridge election",
      "Analyzed port states and transitions",
      "Validated loop prevention mechanisms",
    ],
    tools: ["VLAN", "STP", "Packet Tracer"],
    file: "/projects/vlan-stp.html",
  },
];

const Projects: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const toggleDetails = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const closeModal = () => {
    setActiveProject(null);

    setTimeout(() => {
      const divider = document.getElementById("projects");
      if (divider) {
        window.scrollTo({
          top: divider.getBoundingClientRect().top + window.scrollY - 100,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <section className="section" id="projects-section">
      <SectionDivider id="projects" />
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h3>{project.title}</h3>
              <button
                className="project-link"
                title="View full project"
                onClick={() => setActiveProject(project)}
              >
                👁
              </button>
            </div>

            <p>{project.summary}</p>

            <div className="project-tags">
              {project.tools.map((tool, i) => (
                <span key={i} className="project-tag">
                  {tool}
                </span>
              ))}
            </div>

            <button
              className={`expand-btn ${
                expandedIndex === index ? "expanded" : ""
              }`}
              onClick={() => toggleDetails(index)}
            >
              <span>
                {expandedIndex === index ? "Hide Details" : "View Details"}
              </span>
              <span className="chevron">▼</span>
            </button>

            <div
              className={`project-details ${
                expandedIndex === index ? "expanded" : ""
              }`}
            >
              <ul>
                {project.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {activeProject && (
        <ProjectModal
          title={activeProject.title}
          src={activeProject.file}
          onClose={closeModal}
        />
      )}
    </section>
  );
};

export default Projects;
