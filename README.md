# Iran OSINT - Government & Hezbollah Infrastructure Analysis

<p align="center">
  <img src="kaed0259.jpg" alt="Ayatollah Khamenei" width="400">
</p>

---

## Live Interactive Reports

| Report | Link |
|--------|------|
| **Index** | [https://ringmast4r.github.io/Iran/HTMLs/index.html](https://ringmast4r.github.io/Iran/HTMLs/index.html) |
| **Timeline** | [https://ringmast4r.github.io/Iran/HTMLs/timeline.html](https://ringmast4r.github.io/Iran/HTMLs/timeline.html) |
| **Glossary** | [https://ringmast4r.github.io/Iran/HTMLs/glossary.html](https://ringmast4r.github.io/Iran/HTMLs/glossary.html) |

---

<p align="center">

![Visitors](https://api.visitorbadge.io/api/visitors?path=Ringmast4r%2FIran&label=VISITORS&countColor=%23dc143c&style=for-the-badge)

![FTO](https://img.shields.io/badge/FTO-DESIGNATED-red?style=for-the-badge)
![Counter-Terrorism](https://img.shields.io/badge/COUNTER-TERRORISM-darkred?style=for-the-badge)
![OSINT](https://img.shields.io/badge/OPEN_SOURCE-INTELLIGENCE-black?style=for-the-badge)

![GitHub stars](https://img.shields.io/github/stars/Ringmast4r/Iran?style=for-the-badge&logo=github&color=gold)
![GitHub forks](https://img.shields.io/github/forks/Ringmast4r/Iran?style=for-the-badge&logo=github&color=blue)
![GitHub watchers](https://img.shields.io/github/watchers/Ringmast4r/Iran?style=for-the-badge&logo=github&color=green)

![GitHub repo size](https://img.shields.io/github/repo-size/Ringmast4r/Iran?style=for-the-badge&logo=github&color=purple)
![GitHub last commit](https://img.shields.io/github/last-commit/Ringmast4r/Iran?style=for-the-badge&logo=github&color=orange)
![License](https://img.shields.io/badge/LICENSE-OSINT-green?style=for-the-badge)

</p>

---

## Collection Statistics

| Category | Count |
|----------|-------|
| KEY FINDINGS Files | 23 |
| Intel Reports | 14 |
| MFA Embassy Subdomains | 182 |
| IRNA Subdomains | 50 |
| Khamenei.ir Subdomains | 48 |
| FarsNews/MehrNews Subdomains | 40+ |
| Hezbollah Media Files | 100+ |
| Captured HTML Pages | 120+ |
| Tracking Tokens/Hashes | 28+ |
| Mail Server IPs | 15+ |
| ASNs Mapped | 12 |

---

## Current Situation (January 2026)

| Event | Status |
|-------|--------|
| **Economic Protests** | Day 8+ - 222 locations, 26 provinces, 19+ dead |
| **Khamenei** | "Rioters must be put in their place" |
| **Currency** | Rial collapsed - worst since 1979 |
| **Maduro Capture** | US extracted Jan 3 - Iran condemns |
| **Hezbollah Ceasefire** | 2,024 violations - IDF preparing offensive |

---

## Targets Overview

| Target | Type | Status |
|--------|------|--------|
| **IRNA** (irna.ir) | State News Agency | Private IP leaked |
| **MFA** (mfa.gov.ir) | Foreign Ministry | VPN endpoint exposed |
| **Supreme Leader** (khamenei.ir) | Regime Leadership | Admin portal & hidden API found |
| **President.ir** | Presidential Office | ASN ownership mapped |
| **Hezbollah Media** | FTO Propaganda | Russian/Czech hosting documented |
| **Al-Manar TV** | FTO Media | Tracking IDs captured |
| **FarsNews** (farsnews.ir) | IRGC News | Jira, Confluence, Telegram API exposed |
| **MehrNews** (mehrnews.com) | State Media | PRTG monitoring, HR system found |

---

## Critical Findings

### 1. Private IP Leak - IRNA

```
kateb.irna.ir → 10.30.41.85 (RFC1918 PRIVATE IP)
```

**Internal Network Map Exposed:**
| Subnet | Function |
|--------|----------|
| 10.30.41.x | Editorial systems |
| 217.25.48.x | Mail, Gallery, Tahrir |
| 217.25.51.x | RS1 server farm |
| 217.25.53.x | RS2 server farm |
| 217.25.56.x | News, Streaming |
| 217.25.58.x | Remote access |

### 2. VPN Endpoint Exposed - MFA

```
r1.vpn.minister.local.mfa.gov.ir → 185.143.235.201 (ArvanCloud)
```

- Internal naming convention leaked ("minister.local")
- "r1" suggests multiple endpoints (r2, r3...)
- Target for credential attacks

### 3. Admin Portal - khamenei.ir

```
admin.english.khamenei.ir (discovered via Certificate Transparency)
```

### 4. Hidden API Domain

```
formx.khamenei.link (separate TLD to hide API)
Endpoint: https://formx.khamenei.link/farsi-json/topticker
```
- Discovered through JavaScript analysis
- Contains redirect tracking system

### 5. Mobile APK Exposed - FarsNews

```
https://dl.farsnews.ir/app.apk
```
- Reverse engineering possible
- Device fingerprinting headers exposed (duid, platform, os)

### 6. Embassy Network Mapped - MFA

**182 subdomains enumerated:**
- lebanon.mfa.gov.ir (Hezbollah connection)
- venezuela.mfa.gov.ir (Maduro alliance)
- russia.mfa.gov.ir, china.mfa.gov.ir (strategic partners)

**Internal Systems:**
- cms.mfa.gov.ir (Content Management)
- cloud.mfa.gov.ir (Cloud Storage)
- email.mfa.gov.ir (Email Portal)
- visareq.mfa.gov.ir (Visa Requests)

### 7. FarsNews Internal Tools Exposed

```
jira.farsnews.ir (Atlassian JIRA)
confluence.farsnews.ir (Atlassian Confluence)
chat.farsnews.ir (Internal Chat)
my-api-tlg.farsnews.ir (Telegram API integration!)
```

### 8. MehrNews Monitoring Infrastructure

```
prtg.mehrnews.com (PRTG Network Monitor!)
hrm.mehrnews.com (HR Management System)
election.mehrnews.com (Election coverage)
majles.mehrnews.com (Parliament system)
```

### 9. DMARC Email Addresses Exposed

| Domain | Email |
|--------|-------|
| khamenei.ir | mailauth-rua@khamenei.ir |
| khamenei.ir | mailauth-ruf@khamenei.ir |
| mfa.gov.ir | dmarc-error@mfa.gov.ir |
| farsnews.ir | noc@farsnews.ir (NOC contact) |

---

## Hezbollah Infrastructure

### Hosting Strategy (Resilience)

| Domain | Primary Host | Backup |
|--------|-------------|--------|
| moqawama.org.lb | 91.109.206.65 (Moscow - Okay-Telecom) | 176.74.216.191 (Czech - HOST-TELECOM) |
| almanar.com.lb | 5.35.14.164-166 (Moscow - Selectel) | 47.250.57.153 (Alibaba Malaysia) |

**Why Russian Hosting:**
- Protection from Western takedowns
- .lb TLD outside US legal jurisdiction

**US Domain Seizures (Ineffective):**
- moqawama.org → DOJ seizure page
- almanarnews.org → DOJ seizure page
- **But .lb alternatives remain fully operational**

### EXIF Metadata Attribution

| File | Software | Timestamp |
|------|----------|-----------|
| 1679.jpg | Adobe Photoshop 7.0 | 2023-04-15 15:27:26 |
| 1713.jpg | Adobe Photoshop 7.0 | 2023-05-31 07:13:38 |
| 1808.jpg | Photoshop CS6 (Win) | 2014-07-22 16:07:36 |
| 1833.jpg | Photoshop CS6 (Win) | 2024-01-22 14:34:12 |

- Photoshop 7.0 (2002) = likely pirated
- Timestamps = Beirut working hours (GMT+2/+3)

### WhatsApp OPSEC Failure

```
"WhatsApp Image 2025-12-13 at 9.50.45 AM.jpeg"
Location: english.alahednews.com.lb
```

---

## Government ASN Ownership

| ASN | Owner | Usage |
|-----|-------|-------|
| AS34592 | Iranian Presidential Admin | president.ir |
| AS29079 | IRNA | irna.ir network |
| AS24631 | Tose'h Fanavari | mfa.gov.ir |
| AS48434 | Tebyan-e-Noor Institute | khamenei.ir mail |
| **AS205585** | **ArvanCloud** | **ALL gov sites CDN** |

**ArvanCloud = Single Point of Failure for Iranian regime web infrastructure**

---

## Hash & Token Database

**21 items collected:**

| Type | Count |
|------|-------|
| PHP Session Hashes | 3 |
| Cookie Sessions | 1 |
| CSS Cache Hashes | 1 |
| API Tracking Hashes | 1 |
| Google Verification | 1 |
| Google Analytics IDs | 9 |
| GTM Container IDs | 2 |
| Microsoft Clarity IDs | 3 |

### Google Analytics (Iranian State Media)

| Site | GA ID |
|------|-------|
| khamenei.ir | G-8MVZ1HLJT0 |
| almanar.com.lb | G-JJ1SM3JFZW |
| tasnimnews.com | G-MGYZR3Q3BS |
| presstv.ir | G-F359E8PMME |
| mehrnews.com | G-ERSHRYVTBP |
| defapress.ir | G-94BW46TZJM |
| moqawama.org.lb | G-Z8F3HPDSWG |

### Microsoft Clarity (Session Recording)

| Project ID | Site |
|------------|------|
| cgaike4iub | almanar.com.lb |
| cs22bibpe3 | almanar.com.lb |
| o2z34ibfin | mehrnews.com |

---

## Repository Structure

```
IRAN/
|-- README.md                     # This file
|-- KEY_FINDINGS.txt              # Master summary
|-- HASH_DATABASE.txt             # Tokens & hashes (28+ items)
|-- osint_log.txt                 # Session log with timestamps
|-- hash_viewer.html              # Browser-based hash viewer
|-- kaed0259.jpg                  # Khamenei photo
|
|-- KEY FINDINGS/                 # 23 intelligence files
|   |-- 01_PRIVATE_IP_LEAK.txt    # IRNA 10.30.41.85 exposure
|   |-- 02_VPN_ENDPOINT.txt       # MFA VPN discovery
|   |-- 03_ADMIN_PORTAL.txt       # khamenei.ir admin
|   |-- 04_HIDDEN_API.txt         # formx.khamenei.link
|   |-- 05_HASHES_TOKENS.txt      # Initial token collection
|   |-- 06_HEZBOLLAH_HOSTING.txt  # Russian/Czech analysis
|   |-- 07_GOVERNMENT_ASNS.txt    # ASN ownership map
|   |-- 14_FARSNEWS_DEVTOOLS.txt  # Jira/Confluence exposure
|   |-- 15_MFA_EMBASSY_MAP.txt    # 182 diplomatic subdomains
|   |-- 17_EXIF_METADATA.txt      # Photoshop attribution
|   |-- 19_SEIZED_DOMAINS.txt     # DOJ seizure analysis
|   |-- 23_NEW_HASHES_EXPOSED.txt # Latest: 40+ new subdomains
|   |-- INDEX.txt                 # File index
|
|-- HTMLs/                        # Interactive reports (GitHub Pages)
|   |-- index.html                # Main dashboard
|   |-- timeline.html             # 2025-2026 event timeline
|   |-- glossary.html             # Searchable term database
|
|-- resources/
|   |-- intel/                    # 14 intelligence reports
|   |   |-- IRAN_MASTER_INTEL.txt # Comprehensive document
|   |   |-- HEZBOLLAH_DATA_DUMP.txt
|   |   |-- SUBDOMAIN_INTEL.txt   # 300+ subdomains
|   |   |-- HEZBOLLAH_FINANCIAL_INTEL.txt
|   |
|   |-- hezbollah/
|   |   |-- HTMLs/                # 120+ captured pages
|   |   |-- media/                # 100+ images with EXIF
|   |
|   |-- khamenei/                 # Supreme Leader site captures
|   |-- rss/                      # RSS feed archives
```

---

## Methodology

All intelligence gathered via Tor SOCKS5 (127.0.0.1:9050):
- Exit nodes: RU/TR/AE/LB/IR
- DNS enumeration & subdomain discovery
- Certificate Transparency log analysis
- JavaScript source analysis
- HTTP header inspection
- EXIF metadata extraction
- WHOIS/ASN mapping

---

## Legal Notice

This repository contains **publicly available information** gathered through open source intelligence. No systems were compromised. Sources include:
- Public DNS records
- Certificate Transparency logs
- Publicly accessible websites
- HTTP response headers
- Image metadata (EXIF)

Research supports:
- Counter-terrorism efforts
- Sanctions enforcement
- Iranian activist/dissident awareness

---

*Generated: January 2026*
