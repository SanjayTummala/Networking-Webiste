import React from "react";
import SectionDivider from "./SectionDivider";

const About: React.FC = () => {
  return (
    <section className="section" id="about-section">
      <SectionDivider id="about" />
      <h2 className="section-title">About Me</h2>

      <div className="about-card">
        <p>
          I am a Network Engineer with a strong interest in building a long-term
          career in networking and enterprise infrastructure. My focus is on
          understanding how networks behave in real environments, not just how
          they are configured.
        </p>

        <p>
          I have developed my skills through structured learning and extensive
          hands-on lab practice. I work regularly with core networking concepts
          such as TCP/IP, routing and switching, DHCP, OSPF, VLANs, Spanning Tree,
          and static routing. I place strong emphasis on validation,
          troubleshooting, and understanding protocol behavior rather than
          memorizing commands.
        </p>

        <p>
          I maintain an active lab environment using tools like GNS3, Cisco
          Packet Tracer, and Wireshark, where I design network topologies, test
          configurations, and analyze traffic at the packet level. This has
          helped me build a practical troubleshooting mindset and a deeper
          understanding of network flow and failures.
        </p>

        <p>
          I am currently looking for opportunities where I can grow as a network
          engineer, work alongside experienced professionals, and contribute to
          stable, well-designed network infrastructures. I am motivated to
          continuously improve my skills and take on increasing responsibility
          as I progress in my networking career.
        </p>
      </div>
    </section>
  );
};

export default About;
