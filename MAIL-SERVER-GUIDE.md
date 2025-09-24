# Bazaari Mail Server Complete Guide

## 📋 Table of Contents
1. [Overview](#overview)
2. [System Requirements](#system-r
3. [Architecture](#architecture)
4. [Components](#components)
5. [Installation Guide](#installation-guide)
6. [Configuration](#configuration)
7. [Performance Optimization](#performance-optimization)
8. [Security](#security)
9. [Monitoring & Analytics](#monitoring--analytics)
10. [Maintenance](#maintenance)
11. [Troubleshooting](#troubleshooting)

---

## 🎯 Overview

Bazaari Mail Server เป็นระบบ self-hosted email server ที่ออกแบบมาเพื่อรองรับการส่งอีเมลปริมาณสูง พร้อมระบบจัดการที่ครบถ้วน

### Key Features
- ✅ High-performance email delivery
- ✅ Web-based management dashboard
- ✅ Advanced analytics & reporting
- ✅ Anti-spam & security protection
t
- ✅ API integration
- ✅ Queue management
- ✅ Real-time monitoring

---



nts
- **CPU**: 2 cores,Hz
*: 4 GB
- **Storage**: 50 GB SS
- **Network**: 100 Mbps
- **OS**: Ubuntu 20.04+ / CentOS 8+ / De 11+

### Recommended for High Perforance
- **CPU**: 8 cores, 3.0 GHz+

- **Storage**: 200 GB NVM
- **Network**: 1 Gbps
- **OS**: Ubuntu 22.04 LTS

### Enterprise Level
5 GHz+
- **RAM**: 32 GB+
- **Storage**: 500 GB NVMe SSD  1)
- **Network**: 10 Gbps
- **Load Balancer**: Multiple servers

---

## 🏗️ Architectur

```
──────┐
│        │
├──────────────
│  ┌─────────────┐  ┌─────────────┐  ┌
      │
│  │ Dashboard    │
│  └─────────────┘  └─────────────┘  └────────────
├────────────────────────┤
  │
│  │   Queue     │  │     │
│  │  Manager    │  │   Server    │  │   Server    │        │
│  └─────────────┘  └─────────────┘  └─────        │

│  ┌─────────────┐  ┌─────  │
│  │  Anti-Spam  │  │   Virus
│  │   Engine   │
│   │
──┤
│  ┌─────────────┐  ┌─────────────┐  ┌      │
   │
│  │ Po        │
│  └─────────────┘  └───────── │
└─────────────────────────┘
```

---

## 🔧 Components

s
#### SMTP Server (Postfix)
- **Purpose**: Outgoing mailivery
- *r
miting


- **Purl
- **Performance**: 1000+ concurrent conn
- **Features**: Fultering

Optional)
- **Purpose**: Legacy email access
- **Petions

### 2. Web Management Dashboard
#### Admin Panel Features
```typescript
hboard {
  // User Management
  userManaent: {
    createUser: boolean;
    editUser: boolean;
    deleteUser: boolean;
    bulkOperations: boolean;
  };
 
  // Domain Management

    add
    configureDNS: bool;
    sslCertificates: boole
   ean;

  
ment
  queueManagement: {
an;
    retryFailed: boolean;
lean;
    prioritySettings: boolean;
  };
  
  /cs
  analytics: {
    del boolean;
    bounceAnalysis: boolean;
    spamRepo;
    perfon;
  };
}
```

#### Usures
- Email cong
- Inbox management
- Contactent
- Tent
ng
- Statistics & reports

### 3. APServer
#### REdpoints
```typescript
// Email  API
POSnd
s/:id
GET    /api/v1/emaist
DELETE /:id

// User Management API
POS
i/v1/users
PUTusers/:id
DELETE /ad

// Domain Management API
POST   /a
GET
id
DELETE /api/v1/domai

// AnalytI
GET    /api/
GET    /api/v1/analytics/bounce
GET    /a
GETe
```

### 4. Queue Management System
###atures
- **Priority Queues**: High, Mediu
- *
sages
- **Bulk Processing*rations
 limits

#### Queue Types
```typescript
m {
  immediate: Query
  scheduled: Queue;   

  retry: Queue;   
  deadLetter: Queueiled
}
```

###ponents

- *filtering
m
- **RBL Checking**: Real-tiacklists
on
- **Rate Limiting**: Connectis

#### Viner
- **ClamAV**: Vir
- **Real-time Scanning**: Aments
ils
- **Auto-updates*ions

cation
- **SASL**: SMTP authentication
- **OAuth2**: Modern authentication
- **2FA**: Two-factor authentication
on

### 6. Monitoring & Analytics
###
pt
interface MonitoringMe
cs
  emailr;
  queueSize: number;
  deliveryRate: number;
  bounceRate: number;
  
  /rics

  mber;

  networkTraffic: number;
  
  // Security Metrics
;
  virusumber;
  failedLo
  suspiciousActivity: number;

```

###d
es
- **Bounce Analysis**: H
s
- **Geocation
- **Time-based Analysis**: Peak hours/days


#### PostgreSQL (Prase)
ql
-- Core Tables
CREATE TABLE users (
  i
NULL,
  password_hash VART NULL,

  updat
);


  id SERIAL PR
  domain VARCHAR(255) UNIQUE NOT NULL,
  s

);

CREATE TABLE email_queue (
ARY KEY,
  from_email VARCHAR(255) NOT NULL,
  to_email VARCHAR(255) NOT NULL,
  subject TEXT,
  body TEXT,
  status VARCHAR(50) DEFAULT 'pending',
  priority INTEGER DEFAULT 5,
,
  created_at TIMESTAMP DEFAULT NOW(),
AULT NOW()
);

CREATE TABLE email_logs (

  email_id INTEGER REFERid),

  eventta JSONB,
  created_a
);
```

#### Redis (Cache & Sessis)
ssions
- **Cache Layer**: Frequently
ers
- **Qus

---

## 🚀 Performance Optimization

### 1. SMTP Optimization

# Postfix Configuration
postconf -e 'smtp_destination_concurrenimit = 20'
postconf -e 'smtp_destination_rate_delay = 
10'
postconf -e 'default_process_limit = 00'
postconf -e 'smtpd_client_connection_coun0'
```

### 2. Database On
```sql
-- Indexes fonce
CREATE INDEX idx_email_queue_status ON email_queue(status);
ed_at);
CREATE INDEX idx_email_logs_email_id ON eemail_id);
CREATE INDEX idx_email_log);

-- Partitioning for large tables
CREATE TABLE email_logs_20
FOR1');
```

##
```bash
ameters
echo 'net.core.rmem_m.conf
f
echo 'net.ipv
echo 'net.ipv4.tcp_wmem = 4096 65536 16.conf

s
echo '* soft nofile 65536' >> /etc/security/linf
echo '* hard nofile 65536' >> /etc/security/limits.co
```

--

#ation

up
```
pt SSL
certbot certo
zaari.com
certbot certonly --stand
```

### 2. Firewall es
```bash
ion
ufw allow 22/tcp    # SSH
ufw allow 25/tcp    # SMTP
ufw

ufw allow 993/tcp   # IMS
TP
ufw all
ufw enable
```

### 3. Fail2Banon
```ini
[po

port = smtp,465,subn

logpathlog
maxretry = 3
bantime = 3600
```

---

## ing Setup

### 1. Prometheus Metrics
l
# prometheus.yml
global:
  scrape_interval: 15s

s:
  -'

      - targets: ['localhost:9
exporter
```

### 2. ard
```json
{
: {
    "title": "Bazaari Mar",
    "panels": [
  {
        "title": "Email Deliv Rate",
        "type": "graph",
   

            "expr": "r"
  }
        ]
      },
      {
,
        "type": "s
        "targets": [
   
_size"
          }
       ]
      }
    ]
  }
}
```

###
aml
groups:
r
    rules:
      - alert: HighBounceRate
        expr: rate(postfix_bounced_tota
   or: 5m
tations:
   tected"
      
      - aklog
        expr:0
        for:2m
        annotations:
          sum
```

-

ds


```bash
# Clone repry
git clone https:it
rver

# Run setup script

sudo ./setup-mailsr.sh


docker-compose -f dockup -d
```

### 2. Manual Installation
```bash
ies
apt update && apt upgrade -y
aptpop3d


vices
systemctl enable postx

```

---

## 📈 Pmarks

### Expected Performance
 |
|--------|---------|--
| Emails/Hour | 1,000 | 10,000 | 100,000+ |

| Queue Processing | |
| Storage | 10GB | 100GB | 1TB+ |
| Uptime | 99% | 99.9% | 99.99% |

ting
```bash

for i ido
  echo "Test emai&
done

# API Load Test
ab -n 1000 -c 10 http://admin.bazaari.com/
```

---

Tasks

Tasks
- [ ] C status
- [ ] Review bounce reports
- [ ] Monitor disk usage
gs

### Weekly Tasks
s
- [ ] Review performance metrics
- [ ] Clean old logs
- [ion

### Monthly Tasks
s
- [ ] Rificates
- [ ] Analyze delivery trends
- [ ] Optimize date

---

## 🚨 Troubleshooting

s


```bash
# Check bounce rea
tail -f /var/log/mail.log | grep bounced

# Review DNS configion
dig MX bazaari.com
om
```

###y
sh
# Check queue status
ueue -p


htop
iotop
```

#### Authentication Fais
```bash
 logs
tail -f /var/log/mail.log | grep authenti

# Tth
87
```

---

## 📞 Support & Documentation

### Resources
- **Documentation**: https://docs.bazaari.com/mail-server
- *s
i.com
- *com

### Emergency Contacts
ri.com
- **Security Team**: secur
xxx

---

*Last Updated: December 2024*
*Version: 1.0.0*