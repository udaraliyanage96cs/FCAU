# FCAU IIMS Prototype - Page & Module Guide

This document provides a comprehensive list of all functional pages within the FCAU IIMS frontend prototype, organized by their respective SRS modules.

## 🏠 Home & Strategic Analytics
| Page | URL | Description |
|------|-----|-------------|
| **IIMS Dashboard** | [iims-dashboard.html](file:///d:/FCAU/main/iims-dashboard.html) | Central operational dashboard with KPI counters and task summaries. |
| **Risk Heatmaps** | [iims-risk-heatmaps.html](file:///d:/FCAU/main/iims-risk-heatmaps.html) | Strategic visualization of national non-compliance density (Grade C/D clusters). |

## 🔑 Admin & User Management
| Page | URL | Description |
|------|-----|-------------|
| **User Sign-up** | [iims-user-signup.html](file:///d:/FCAU/main/iims-user-signup.html) | Level 1 Identity Inception for new system users (Progressive Profiling). |
| **User Directory** | [iims-user-management.html](file:///d:/FCAU/main/iims-user-management.html) | Master list of all internal users (PHIs, MOHs, Admins) with role management. |
| **Add New User** | [iims-add-user.html](file:///d:/FCAU/main/iims-add-user.html) | Form to provision new internal identities and assign administrative territories. |
| **Login Portal** | [iims-login.html](file:///d:/FCAU/main/iims-login.html) | Secure entry point for all system actors. |

## 📋 Registration (FBO)
| Page | URL | Description |
|------|-----|-------------|
| **Registration Wizard** | [iims-fbo-registration.html](file:///d:/FCAU/main/iims-fbo-registration.html) | Multi-step form for Premises Owners to register and upload statutory documents. |
| **Premises Registry** | [iims-premises-list.html](file:///d:/FCAU/main/iims-premises-list.html) | Comprehensive list of all registered food establishments with risk indexing. |
| **Grievance & Appeals**| [iims-appeals.html](file:///d:/FCAU/main/iims-appeals.html) | Management of appeals against rejected registrations or grading results. |

## 🛡️ Inspection & Grading
| Page | URL | Description |
|------|-----|-------------|
| **H-800 Digital Form** | [iims-inspection-form.html](file:///d:/FCAU/main/iims-inspection-form.html) | Mobile-responsive checklist for field PHIs to record 10-cage evaluation data. |
| **Inspection Result** | [iims-inspection-result.html](file:///d:/FCAU/main/iims-inspection-result.html) | Printable Hygiene Rating Certificate (Grade A/B/C/D) with QR verification. |
| **Supervisory Review** | [iims-inspection-review.html](file:///d:/FCAU/main/iims-inspection-review.html) | MOH interface to audit PHI findings and finalize grading decisions. |
| **Inspection Config** | [iims-inspection-config.html](file:///d:/FCAU/main/iims-inspection-config.html) | Backend tool to define scoring weights and risk-based frequency rules. |
| **Inspection Calendar**| [iims-inspection-calendar.html](file:///d:/FCAU/main/iims-inspection-calendar.html) | PHI itinerary planner showing routine, complaint, and follow-up triggers. |

## 🧪 Laboratory Coordination
| Page | URL | Description |
|------|-----|-------------|
| **Sample Management** | [iims-sample-management.html](file:///d:/FCAU/main/iims-sample-management.html) | Registry of all physical samples currently in transit, in lab, or completed. |
| **Reception Triage** | [iims-lab-triage.html](file:///d:/FCAU/main/iims-lab-triage.html) | Lab reception interface to verify sample integrity and assign analysts. |
| **Manual Result Entry**| [iims-lab-report-form.html](file:///d:/FCAU/main/iims-lab-report-form.html) | Form for recording analytical parameters (Moisture, NaCl, Microbiology). |

## 🚢 Trade Control (Import/Export)
| Page | URL | Description |
|------|-----|-------------|
| **Import Pipeline** | [iims-import-control.html](file:///d:/FCAU/main/iims-import-control.html) | Tracking queue for all incoming food consignments at ports of entry. |
| **Pre-Import Entry** | [iims-import-entry.html](file:///d:/FCAU/main/iims-import-entry.html) | Importer portal for submitting shipping details prior to cargo arrival. |
| **Border Inspection** | [iims-import-inspection.html](file:///d:/FCAU/main/iims-import-inspection.html) | FDI log for trilingual label verification and border triage decisions. |
| **Export Control** | [iims-export-control.html](file:///d:/FCAU/main/iims-export-control.html) | Dashboard for reviewing and issuing Export Health Certificates. |
| **Health Cert App** | [iims-export-app.html](file:///d:/FCAU/main/iims-export-app.html) | Exporter portal to apply for specific consignment certifications. |
| **Exporter Registry** | [iims-exporter-registration.html](file:///d:/FCAU/main/iims-exporter-registration.html) | Advanced registration for factories seeking export-grade status. |

## 🏭 Specialized Manufacturing
| Page | URL | Description |
|------|-----|-------------|
| **Salt Manufacturing** | [iims-salt-manufacturing.html](file:///d:/FCAU/main/iims-salt-manufacturing.html) | Specialized module dashboard for Common Salt manufacturing. |
| **Salt Reg Form** | [iims-salt-registration-form.html](file:///d:/FCAU/main/iims-salt-registration-form.html) | Detailed registration for Salt Lagoons and Processing Factories. |
| **Salt Renewal** | [iims-salt-renewal.html](file:///d:/FCAU/main/iims-salt-renewal.html) | Streamlined annual renewal workflow with document reuse logic. |
| **Salt Amendment** | [iims-salt-amendment.html](file:///d:/FCAU/main/iims-salt-amendment.html) | Request portal for location, ownership, or structural changes. |
| **Bottled Water** | [iims-bottled-water.html](file:///d:/FCAU/main/iims-bottled-water.html) | Specialized module dashboard for Bottled/Packaged water. |
| **Water Reg Form** | [iims-water-registration-form.html](file:///d:/FCAU/main/iims-water-registration-form.html) | Application for water source (Well/Spring) and initial facility approval. |
| **Brand Registration** | [iims-water-brands.html](file:///d:/FCAU/main/iims-water-brands.html) | Registering multiple commercial brands under a single parent facility. |
| **Water Guest Reg Wizard** | [iims-water-premises-registration.html](file:///d:/FCAU/main/iims-water-premises-registration.html) | Guest-facing multi-step wizard for new Bottled Water Premises & User Account registration. |
| **Salt Guest Reg Wizard** | [iims-salt-premises-registration.html](file:///d:/FCAU/main/iims-salt-premises-registration.html) | Guest-facing multi-step wizard for new Common Salt Premises (Factory/Saltern) & User Account registration. |

## ⚖️ Compliance & Enforcement
| Page | URL | Description |
|------|-----|-------------|
| **Complaints Ledger** | [iims-complaints.html](file:///d:/FCAU/main/iims-complaints.html) | Tracking system for all public reports and food poisoning cases. |
| **Complaint Triage** | [iims-complaint-triage.html](file:///d:/FCAU/main/iims-complaint-triage.html) | Administrative "Ticketing Engine" to route complaints to the correct PHI. |
| **Public Portal** | [iims-public-complaint.html](file:///d:/FCAU/main/iims-public-complaint.html) | Simple citizen interface to report food safety concerns anonymously. |
| **Legal Action Registry**| [iims-enforcement.html](file:///d:/FCAU/main/iims-enforcement.html) | Central log of Seizures, Destructions, and Prosecutions. |
| **Seizure Order** | [iims-seizure-order.html](file:///d:/FCAU/main/iims-seizure-order.html) | Formal record creation for the lawful seizure of hazardous goods. |
| **Prosecution Form** | [iims-prosecution-form.html](file:///d:/FCAU/main/iims-prosecution-form.html) | Formulation of court plaints and recording of judicial verdicts. |
| **Arrested Register** | [iims-arrested-list.html](file:///d:/FCAU/main/iims-arrested-list.html) | Dedicated custody log for enforcement actions involving physical arrests. |

## 📢 System Support
| Page | URL | Description |
|------|-----|-------------|
| **Alerts Center** | [iims-alerts.html](file:///d:/FCAU/main/iims-alerts.html) | Inbox for critical system notifications and expiring certifications. |
| **Notif. Templates** | [iims-notification-templates.html](file:///d:/FCAU/main/iims-notification-templates.html) | Management of SMS/Email templates with dynamic placeholders. |
| **Reports & Analytics**| [iims-reports.html](file:///d:/FCAU/main/iims-reports.html) | Multi-dimensional reporting engine with charts and data export. |
