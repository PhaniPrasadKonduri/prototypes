import React, { useState, useEffect } from 'react';
import './ProcurementDashboard.css'; // Separate CSS file for styling
import Chatbot from './Chatbot'; // Assuming you have a Chatbot component

const procurementPhases = [
  { id: 1, name: 'Requirement Identification', status: 'completed', approvals: ['Manager A', 'Department Head B'] },
  { id: 2, name: 'Vendor Selection', status: 'in-progress', approvals: ['Procurement Team C'] },
  { id: 3, name: 'Negotiation', status: 'pending', approvals: ['Legal D', 'Finance E'] },
  { id: 4, name: 'Contract Award', status: 'pending', approvals: ['Senior Management F'] },
  { id: 5, name: 'Purchase Order Creation', status: 'pending', approvals: [] },
  { id: 6, name: 'Delivery & Acceptance', status: 'pending', approvals: [] },
  { id: 7, name: 'Payment', status: 'pending', approvals: ['Finance G'] },
];

const statusColors = {
  completed: '#4CAF50', // Green
  'in-progress': '#2196F3', // Blue
  pending: '#FF9800', // Orange
};

function ProcurementDashboard() {
  const [selectedPhase, setSelectedPhase] = useState(null);

  const handlePhaseClick = (phase) => {
    setSelectedPhase(phase);
    // In a real application, you might fetch more details for the selected phase here
  };

  return (
    <div className="procurement-dashboard-container">
      {/* Left Pane: Procurement Process Phases */}
      <div className="procurement-phases-pane">
        <h2>Procurement Process</h2>
        <ul className="phases-list">
          {procurementPhases.map((phase) => (
            <li
              key={phase.id}
              className={`phase-item ${selectedPhase?.id === phase.id ? 'selected' : ''}`}
              onClick={() => handlePhaseClick(phase)}
            >
              <div className="phase-info">
                <span
                  className="status-indicator"
                  style={{ backgroundColor: statusColors[phase.status] }}
                ></span>
                {phase.name}
              </div>
              {phase.approvals.length > 0 && (
                <div className="approvals">
                  <small>Approvals:</small>
                  {phase.approvals.map((approver) => (
                    <span key={approver} className="approver-badge">
                      {approver}
                    </span>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
        {selectedPhase && (
          <div className="phase-details">
            <h3>Details for: {selectedPhase.name}</h3>
            <p>Status: <span style={{ color: statusColors[selectedPhase.status], fontWeight: 'bold' }}>{selectedPhase.status}</span></p>
            {selectedPhase.approvals.length > 0 && (
              <>
                <p>Pending Approvals:</p>
                <ul>
                  {selectedPhase.approvals.map((approver) => (
                    <li key={approver}>{approver}</li>
                  ))}
                </ul>
              </>
            )}
            {/* Add more detailed information about the selected phase here */}
          </div>
        )}
      </div>

      {/* Right Pane: Chatbot */}
      <div className="chatbot-pane">
        <Chatbot />
      </div>
    </div>
  );
}

export default ProcurementDashboard;