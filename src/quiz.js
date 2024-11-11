export const catalogQuizData = {
    'cryptography': {
        'question-1': {
            "question": "What is the main purpose of cryptography ?",
            'options': ['Data encryption', 'Data storage', 'Data visualization', 'Data compression'],
            'answer': 'Data encryption'
        },
        'question-2': {
            "question": "Which algorithm is commonly used for asymmetric encryption ?",
            'options': ['AES', 'RSA', 'SHA-256', 'MD5'],
            'answer': 'RSA'
        },
        'question-3': {
            "question": "What is a characteristic of symmetric encryption ?",
            'options': ['Uses two keys', 'Uses a single key', 'Is slower than asymmetric', 'No key is needed'],
            'answer': 'Uses a single key'
        },
        'question-4': {
            "question": "Which of the following is a hashing algorithm ?",
            'options': ['DES', '3DES', 'Blowfish', 'SHA-256'],
            'answer': 'SHA-256'
        },
        'question-5': {
            "question": "What does SSL stand for ?",
            'options': ['Secure Socket Layer', 'Safe Security Layer', 'Secure Shell Link', 'Simple Secure Layer'],
            'answer': 'Secure Socket Layer'
        },
        'question-6': {
            "question": "What is the output size of an MD5 hash ?",
            'options': ['128 bits', '256 bits', '512 bits', '64 bits'],
            'answer': '128 bits'
        },
        'question-7': {
            "question": "Which cryptographic method uses public and private keys ?",
            'options': ['Symmetric encryption', 'Asymmetric encryption', 'Steganography', 'Data masking'],
            'answer': 'Asymmetric encryption'
        },
        'question-8': {
            "question": "What does the 'nonce' refer to in cryptography ?",
            'options': ['Random number', 'Algorithm name', 'Encryption key', 'Digital certificate'],
            'answer': 'Random number'
        },
        'question-9': {
            "question": "What does the Caesar Cipher use for encryption ?",
            'options': ['Block cipher', 'Stream cipher', 'Shift cipher', 'Permutation'],
            'answer': 'Shift cipher'
        },
        'question-10': {
            "question": "Which is NOT a cryptographic protocol ?",
            'options': ['HTTPS', 'FTP', 'TLS', 'PGP'],
            'answer': 'FTP'
        }
    },

    'information security': {
        'question-1': {
            "question": "What is the primary goal of information security ?",
            'options': ['Confidentiality, Integrity, Availability', 'Speed, Accuracy, Efficiency', 'Encryption, Decryption, Storage', 'Authentication, Authorization, Accounting'],
            'answer': 'Confidentiality, Integrity, Availability'
        },
        'question-2': {
            "question": "What does the principle of least privilege mean ?",
            'options': ['Give all users maximum access', 'Deny all access by default', 'Provide minimum access necessary', 'Always use admin access'],
            'answer': 'Provide minimum access necessary'
        },
        'question-3': {
            "question": "What is phishing ?",
            'options': ['A hacking tool', 'An email scam', 'A type of malware', 'A type of firewall'],
            'answer': 'An email scam'
        },
        'question-4': {
            "question": "What does a firewall do ?",
            'options': ['Encrypts data', 'Monitors network traffic', 'Blocks unauthorized access', 'Stores passwords'],
            'answer': 'Blocks unauthorized access'
        },
        'question-5': {
            "question": "What is two-factor authentication ?",
            'options': ['Using two passwords', 'Verifying identity with two methods', 'Using two IP addresses', 'Encrypting twice'],
            'answer': 'Verifying identity with two methods'
        },
        'question-6': {
            "question": "What does DLP stand for in cybersecurity ?",
            'options': ['Data Loss Prevention', 'Digital Link Protocol', 'Distributed Log Processing', 'Dynamic Layer Protection'],
            'answer': 'Data Loss Prevention'
        },
        'question-7': {
            "question": "What does VPN stand for ?",
            'options': ['Virtual Private Network', 'Variable Packet Node', 'Verified Protection Network', 'Virtual Protocol Node'],
            'answer': 'Virtual Private Network'
        },
        'question-8': {
            "question": "What is an example of a social engineering attack ?",
            'options': ['SQL injection', 'Brute force attack', 'Phishing email', 'Zero-day exploit'],
            'answer': 'Phishing email'
        },
        'question-9': {
            "question": "Which of these is NOT a type of malware ?",
            'options': ['Worm', 'Trojan', 'Firewall', 'Ransomware'],
            'answer': 'Firewall'
        },
        'question-10': {
            "question": "What is a zero-day vulnerability ?",
            'options': ['An outdated patch', 'A vulnerability known to attackers but not yet patched', 'A type of malware', 'An encryption algorithm'],
            'answer': 'A vulnerability known to attackers but not yet patched'
        }
    },

    'cloud security': {
        'question-1': {
            "question": "Which of the following is a cloud service model ?",
            'options': ['IaaS', 'IPSec', 'SSO', 'PaaL'],
            'answer': 'IaaS'
        },
        'question-2': {
            "question": "What is the primary benefit of cloud computing ?",
            'options': ['Reduced speed', 'Scalability', 'Data loss', 'Manual intervention'],
            'answer': 'Scalability'
        },
        'question-3': {
            "question": "What does SaaS stand for ?",
            'options': ['Security as a Service', 'Software as a Service', 'Storage as a Service', 'System as a Service'],
            'answer': 'Software as a Service'
        },
        'question-4': {
            "question": "What is a cloud access security broker (CASB) ?",
            'options': ['A firewall for cloud apps', 'A tool to monitor and enforce security policies', 'A type of encryption', 'A cloud storage service'],
            'answer': 'A tool to monitor and enforce security policies'
        },
        'question-5': {
            "question": "What is 'multi-tenancy' in cloud computing ?",
            'options': ['Multiple clouds interacting', 'Sharing resources among clients', 'A single user with multiple accounts', 'A type of encryption'],
            'answer': 'Sharing resources among clients'
        },
        'question-6': {
            "question": "What does PaaS stand for ?",
            'options': ['Platform as a Service', 'Privacy as a Service', 'Protocol as a Service', 'Provisioning as a Service'],
            'answer': 'Platform as a Service'
        },
        'question-7': {
    "question": "What does the Shared Responsibility Model in cloud computing mean ?",
    'options': [
        'Cloud provider handles all security aspects',
        'Both cloud provider and user share security responsibilities',
        'User handles all security aspects',
        'Only data security is the users responsibility'
    ],
    'answer': 'Both cloud provider and user share security responsibilities'
},
'question-8': {
    "question": "Which of the following is a method to secure data in transit in cloud environments ?",
    'options': ['Data masking', 'TLS/SSL encryption', 'Data deduplication', 'Database indexing'],
    'answer': 'TLS/SSL encryption'
},
'question-9': {
    "question": "What is the purpose of a cloud firewall ?",
    'options': [
        'To filter network traffic entering and leaving a cloud environment',
        'To provide storage optimization',
        'To manage user access control',
        'To handle automatic cloud scaling'
    ],
    'answer': 'To filter network traffic entering and leaving a cloud environment'
},
'question-10': {
    "question": "Which security standard is commonly used for cloud data protection and privacy ?",
    'options': ['ISO 27001', 'PCI DSS', 'GDPR', 'SOC 2'],
    'answer': 'ISO 27001'
}
    },
    'application security': {
'question-1': {
    "question": "What is the primary goal of application security ?",
    'options': ['To optimize performance', 'To protect applications from threats', 'To increase application speed', 'To manage user access'],
    'answer': 'To protect applications from threats'
},
'question-2': {
    "question": "What does SQL injection target ?",
    'options': ['Application logic', 'Database queries', 'Network layer', 'Encryption algorithms'],
    'answer': 'Database queries'
},
'question-3': {
    "question": "What is Cross-Site Scripting (XSS) ?",
    'options': ['A method to encrypt data', 'A technique to speed up applications', 'A vulnerability that allows attackers to inject malicious scripts', 'A protocol for secure communication'],
    'answer': 'A vulnerability that allows attackers to inject malicious scripts'
},
'question-4': {
    "question": "What is the purpose of input validation ?",
    'options': ['To enhance UI design', 'To prevent unauthorized access', 'To ensure that user input is safe and correct', 'To increase application speed'],
    'answer': 'To ensure that user input is safe and correct'
},
'question-5': {
    "question": "What does OWASP stand for ?",
    'options': ['Open Web Application Security Project', 'Online Web Application Security Protocol', 'Open Web Advanced Security Program', 'Operational Web Application Security Process'],
    'answer': 'Open Web Application Security Project'
},
'question-6': {
    "question": "Which of these is a common application security testing method ?",
    'options': ['White-box testing', 'URL filtering', 'Packet sniffing', 'SSL offloading'],
    'answer': 'White-box testing'
},
'question-7': {
    "question": "What is the purpose of a Web Application Firewall (WAF) ?",
    'options': ['To compress web pages', 'To filter and monitor HTTP traffic', 'To scan networks', 'To encrypt database connections'],
    'answer': 'To filter and monitor HTTP traffic'
},
'question-8': {
    "question": "What is the result of a successful buffer overflow attack ?",
    'options': ['Denial of Service (DoS)', 'Data compression', 'Improved performance', 'Data encryption'],
    'answer': 'Denial of Service (DoS)'
},
'question-9': {
    "question": "What is CSRF (Cross-Site Request Forgery) ?",
    'options': ['A network vulnerability', 'An attack that forces an authenticated user to perform unwanted actions', 'A method of encrypting data', 'A type of denial-of-service attack'],
    'answer': 'An attack that forces an authenticated user to perform unwanted actions'
},
'question-10': {
    "question": "Which tool is commonly used for penetration testing in web applications ?",
    'options': ['Wireshark', 'Burp Suite', 'Kali Linux', 'Nmap'],
    'answer': 'Burp Suite'
}
},
'network security': {
'question-1': {
    "question": "What is the main purpose of a firewall ?",
    'options': ['To speed up network traffic', 'To block unauthorized access to a network', 'To store network data', 'To manage bandwidth'],
    'answer': 'To block unauthorized access to a network'
},
'question-2': {
    "question": "Which protocol is used for secure data transmission over the internet ?",
    'options': ['HTTP', 'FTP', 'SMTP', 'HTTPS'],
    'answer': 'HTTPS'
},
'question-3': {
    "question": "What does VPN stand for ?",
    'options': ['Virtual Private Network', 'Virtual Protected Network', 'Verified Protocol Node', 'Virtual Packet Node'],
    'answer': 'Virtual Private Network'
},
'question-4': {
    "question": "What is a DDoS attack ?",
    'options': ['A method of encryption', 'A type of malware', 'An attack that overloads a network with traffic', 'A network optimization technique'],
    'answer': 'An attack that overloads a network with traffic'
},
'question-5': {
    "question": "What does IDS stand for in network security ?",
    'options': ['Internet Data Service', 'Intrusion Detection System', 'Internal Data Storage', 'Information Distribution System'],
    'answer': 'Intrusion Detection System'
},
'question-6': {
    "question": "What is the primary function of a DMZ in network security ?",
    'options': ['To store encrypted data', 'To host publicly accessible services securely', 'To block malicious websites', 'To enhance network speed'],
    'answer': 'To host publicly accessible services securely'
},
'question-7': {
    "question": "What is the difference between a worm and a virus ?",
    'options': ['A worm needs user action to spread, while a virus spreads automatically', 'A virus needs user action to spread, while a worm spreads automatically', 'They are the same', 'A worm can only infect files, while a virus can infect systems'],
    'answer': 'A virus needs user action to spread, while a worm spreads automatically'
},
'question-8': {
    "question": "Which device is used to connect different networks ?",
    'options': ['Router', 'Switch', 'Firewall', 'Modem'],
    'answer': 'Router'
},
'question-9': {
    "question": "What is network sniffing ?",
    'options': ['Monitoring network traffic', 'Blocking malware', 'Encrypting network data', 'Improving network speed'],
    'answer': 'Monitoring network traffic'
},
'question-10': {
    "question": "What is the purpose of a VPN ?",
    'options': ['To enhance network speed', 'To provide a secure connection over a public network', 'To store data', 'To monitor network activity'],
    'answer': 'To provide a secure connection over a public network'
}
},
'social engineering': {
'question-1': {
    "question": "What is social engineering in cybersecurity ?",
    'options': ['Hacking into systems', 'Manipulating people to divulge confidential information', 'Encrypting data', 'Using social media for marketing'],
    'answer': 'Manipulating people to divulge confidential information'
},
'question-2': {
    "question": "Which of the following is a common social engineering tactic ?",
    'options': ['Phishing', 'Firewall configuration', 'Encryption', 'Penetration testing'],
    'answer': 'Phishing'
},
'question-3': {
    "question": "What is baiting in social engineering ?",
    'options': ['Offering something enticing to trick victims into revealing information', 'Blocking access to unauthorized users', 'Securing emails', 'Encrypting network traffic'],
    'answer': 'Offering something enticing to trick victims into revealing information'
},
'question-4': {
    "question": "What does tailgating refer to in a physical security context ?",
    'options': ['Using someone else’s credentials to gain access', 'Following someone into a restricted area without authorization', 'Phishing for sensitive information', 'Encrypting access cards'],
    'answer': 'Following someone into a restricted area without authorization'
},
'question-5': {
    "question": "What is pretexting ?",
    'options': ['Creating a fabricated scenario to obtain information', 'Installing malware on a device', 'Scanning networks for vulnerabilities', 'Encrypting files'],
    'answer': 'Creating a fabricated scenario to obtain information'
},
'question-6': {
    "question": "Which attack involves impersonating a trusted entity via email ?",
    'options': ['Phishing', 'Sniffing', 'Keylogging', 'Brute force attack'],
    'answer': 'Phishing'
},
'question-7': {
    "question": "What is shoulder surfing ?",
    'options': ['Physically observing someones screen or keyboard', 'Monitoring network traffic', 'Intercepting emails', 'Breaking into a server room'],
    'answer': "Physically observing someone's screen or keyboard"
},
'question-8': {
    "question": "What is a vishing attack ?",
    'options': ['Voice phishing over the phone', 'Visual hacking', 'Virtual network attack', 'Vulnerability scanning'],
    'answer': 'Voice phishing over the phone'
},
'question-9': {
    "question": "What technique involves convincing someone to reset a password ?",
    'options': ['Password spraying', 'Social engineering', 'Dumpster diving', 'Pretexting'],
    'answer': 'Social engineering'
},
'question-10': {
    "question": "Which is NOT a social engineering technique ?",
    'options': ['Phishing', 'Ransomware', 'Tailgating', 'Pretexting'],
    'answer': 'Ransomware'
}
}
};
