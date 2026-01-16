import React from "react";
import SectionDivider from "./SectionDivider";

interface Lab {
  title: string;
  description: string;
  focus: string[];
  tools: string[];
  devices: string;
}

const labs: Lab[] = [
  {
    title: "DHCP Fundamentals & IP Address Assignment",
    description:
      "Explored dynamic IP allocation using simulated and device-assisted environments. Observed the full DORA process, verified lease assignment, and validated client connectivity under multiple network conditions.",
    focus: ["DHCP", "IP Addressing"],
    tools: ["GNS3", "Cisco Packet Tracer"],
    devices: "Cisco routers and switches (learning & validation)",
  },
  {
    title: "OSPF Routing Fundamentals & Neighbor Formation",
    description:
      "Configured and validated OSPF behavior to study neighbor adjacencies, hello/dead timers, route advertisement, and basic convergence in routed environments.",
    focus: ["OSPF", "Routing"],
    tools: ["GNS3"],
    devices: "Cisco routers",
  },
  {
    title: "Static & Default Routing Behavior Testing",
    description:
      "Tested static and default routing to observe traffic flow, route selection, and routing behavior during configuration changes and route removal.",
    focus: ["Static Routing", "Default Routing"],
    tools: ["Cisco IOS", "GNS3"],
    devices: "Cisco routers",
  },
  {
    title: "VLAN Segmentation & Spanning Tree Observation",
    description:
      "Implemented VLAN segmentation and observed STP behavior including root bridge election, port states, and loop prevention mechanisms.",
    focus: ["VLANs", "STP", "Layer 2 Switching"],
    tools: ["Cisco Packet Tracer"],
    devices: "Cisco switches",
  },
  {
    title: "Enterprise-Style Branch Network Simulation",
    description:
      "Built enterprise-style branch topologies with routed infrastructure and DHCP-enabled clients to validate end-to-end connectivity.",
    focus: ["Network Design", "Routing", "DHCP"],
    tools: ["GNS3", "Cisco IOS"],
    devices: "Cisco routers and switches",
  },
  {
    title: "Packet Analysis & Network Troubleshooting Practice",
    description:
      "Captured and analyzed ICMP, ARP, and DHCP traffic to understand protocol behavior and troubleshoot connectivity issues at packet level.",
    focus: ["Packet Analysis", "ICMP", "ARP"],
    tools: ["Wireshark"],
    devices: "Live traffic observation",
  },
  {
    title: "Device Roles & Topology Exploration",
    description:
      "Explored routers, switches, cabling, and LAN connectivity to understand physical device roles, interfaces, and topology behavior.",
    focus: ["Routers", "Switches", "LAN Fundamentals"],
    tools: ["Cisco Packet Tracer"],
    devices: "Hubs, Cisco routers, Cisco switches",
  },
];

const Labs: React.FC = () => {
  return (
    <section className="section" id="labs-section">
      <SectionDivider id="labs" />
      <h2 className="section-title">Homelab Practice</h2>

      <p className="labs-intro">
        Hands-on lab environments built to understand network behavior,
        protocol interaction, configuration validation, and troubleshooting
        in enterprise-style networks.
      </p>

      <div className="labs-grid-new">
        {labs.map((lab, index) => (
          <div key={index} className="lab-card-advanced">
            <h3 className="lab-title">{lab.title}</h3>

            <p className="lab-description">{lab.description}</p>

            <div className="lab-meta">
              <div>
                <span className="lab-meta-label">Focus Areas</span>
                <div className="badge-group">
                  {lab.focus.map((f, i) => (
                    <span key={i} className="badge badge-focus">
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="lab-meta-label">Tools & Platforms</span>
                <div className="badge-group">
                  {lab.tools.map((t, i) => (
                    <span key={i} className="badge badge-tool">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lab-device">
                <span className="lab-meta-label">Device Exposure</span>
                <p>{lab.devices}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Labs;
