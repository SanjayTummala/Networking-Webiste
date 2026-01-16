import React from 'react';
import SectionDivider from './SectionDivider';

interface Service {
    icon: string;
    title: string;
    description: string;
}

const services: Service[] = [
    {
        icon: '🌐',
        title: 'Network Design & Simulation',
        description: 'Design and simulate enterprise network topologies using GNS3 and Packet Tracer, ensuring optimal performance and scalability.'
    },
    {
        icon: '🔀',
        title: 'Routing & Switching',
        description: 'Configure and manage routing protocols (OSPF, EIGRP) and switching technologies (VLANs, STP) for seamless network operation.'
    },
    {
        icon: '🔧',
        title: 'Network Troubleshooting',
        description: 'Diagnose and resolve connectivity issues using Wireshark, traceroute, and systematic troubleshooting methodologies.'
    },
    {
        icon: '🛡️',
        title: 'Security Fundamentals',
        description: 'Implement basic network security measures including ACLs, firewalls, and secure network design principles.'
    }
];

const WhatIDo: React.FC = () => {
    return (
        <section className="section" id="whatido-section">
            <SectionDivider id="whatido" />
            <h2 className="section-title">What I Do</h2>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div 
                        key={index} 
                        className={`service-card animate-on-scroll delay-${index + 1}`}
                    >
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhatIDo;
