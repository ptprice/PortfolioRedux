//import React from 'react';

const Experience = () => {
  const sectionStyle = {
    marginBottom: '20px'
  };

  const headingStyle = {
    fontWeight: 'bold',
    marginBottom: '10px'
  };

  const jobTitleStyle = {
    fontWeight: 'bold',
    marginBottom: '5px'
  };

  const contactInfoStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px'
  };

  const jobDetailsStyle = {
    marginBottom: '15px',
    lineHeight: '1.5'
  };

  return (
    <div>
      <div style={contactInfoStyle}>
        <p>Paul Price</p>
        <p>Phone: 540-487-4911 | Email: PTPrice@gmail.com</p>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>EXPERIENCE:</h2>
        
        <div style={jobDetailsStyle}>
          <p style={jobTitleStyle}>8/2016 – Current Kaiser Permanente – Portland, Oregon</p>
          <p>Compliance Consultant Lead</p>
          <p>
            Responsible for ensuring all projects from HR and Finance groups were in compliance with SOX, HIPAA, PCI, Central Authentication, Vendor Management, Disaster Recovery, and select accounting policies prior to UAT and Go-Live. Provided training to over 125 Project Managers on Compliance and Regulation. Responsible for compliance of transition to new Cloud Based Cost Accounting Application. Annual review of application vendor SOC Reports and subservice vendors. Managed decommissioning of multiple critical applications.
          </p>
        </div>

        <div style={jobDetailsStyle}>
          <p style={jobTitleStyle}>6/2009 – 2/2012 and 10/2014 to 8/2016 Brown Edwards and Company LLP – Harrisonburg, Virginia</p>
          <p>Senior IT Security Consultant</p>
          <p>
            Responsible for IT audit and associated consulting work at the firm including Disaster Recovery Planning, Critical Vendor Management, and IT Security and controls consulting. Developed the penetration testing and vulnerability assessment practice for the firm and performed multiple assessments for community banks and businesses in our region. Responsible for internal financial audits for multiple community banks and managed teams of multiple individuals on these audits. Performed and reviewed specialty audits including ACH and Public Deposit Audits. Responsible for billing and selling the work that I perform. Gave multiple presentations to local organizations on various topics including network and IT security as well as IT in specific industries.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Resume() {
  return (
    <div className="resumeTab">
      <h1>Resume Page</h1>
      <Experience />
    </div>
  );
}
