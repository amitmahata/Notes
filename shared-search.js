/**
 * =========================================================
 * UNIVERSAL FULL-TEXT SEARCH ENGINE (CLIENT-SIDE)
 * Cross-Notebook & In-Notebook Search with Snippets & Cmd+K
 * =========================================================
 */

// Full Content Index of All Handwritten Notes
const NOTES_SEARCH_DATABASE = [
  // --- AI NOTES (6 Pages) ---
  {
    id: "ai-p1",
    notebook: "ai-notes",
    notebookName: "AI Evolution",
    notebookIcon: "🧠",
    page: 1,
    url: "../ai-notes/index.html?page=1",
    rootUrl: "ai-notes/index.html?page=1",
    tag: "Origins",
    title: "Page 1: Early Foundations & Rule-Based AI (1950 – 1997)",
    sections: [
      {
        heading: "What is Artificial Intelligence? (Definition & Origins)",
        content: "AI is a science of making machines perform tasks that normally require human intelligence. 1950 – Can machines think? Alan Turing proposed The Turing Test to evaluate machine intelligence."
      },
      {
        heading: "1955 Dartmouth Workshop & John McCarthy",
        content: "John McCarthy coined 'Artificial Intelligence' in 1955. Researchers gathered with an ambitious belief: Every aspect of learning and intelligence could, in principle, be described precisely enough for a machine to simulate."
      },
      {
        heading: "AI Winter & 1997 Deep Blue Victory",
        content: "After 1955, the AI winter arrived for a long period due to hardware limitations and overpromising. In 1986 synthetic intelligence regained traction. In 1997, IBM's Deep Blue defeated World Chess Champion Garry Kasparov."
      },
      {
        heading: "Rule-Based AI & Expert Systems (1950 – 1980)",
        content: "Rule-Based AI assumed intelligence is simply a collection of IF-THEN rules. Example: Spam Detector hardcoded keyword checks like 'Free', '$$$', 'LOTTERY'. Limitation: Cannot handle edge cases, context, or visual ambiguity."
      }
    ]
  },
  {
    id: "ai-p2",
    notebook: "ai-notes",
    notebookName: "AI Evolution",
    notebookIcon: "🧠",
    page: 2,
    url: "../ai-notes/index.html?page=2",
    rootUrl: "ai-notes/index.html?page=2",
    tag: "ML & DL",
    title: "Page 2: Machine Learning & Deep Learning Revolution",
    sections: [
      {
        heading: "The Paradigm Shift: From Rules to Learning from Data",
        content: "Traditional Programming: Rules + Data → Output. Machine Learning: Data + Output → Rules. Deep Learning automatically extracts hierarchical representations and features directly from raw data."
      },
      {
        heading: "Features vs. Neural Network Weights",
        content: "Traditional ML required manual feature engineering (e.g. edge detectors, texture filters, color histograms). Deep Learning trains multi-layered Artificial Neural Networks where weights and biases are learned via backpropagation and gradient descent."
      },
      {
        heading: "Neural Network Architecture & Backpropagation",
        content: "Input Layer, Hidden Layers, Output Layer. Loss function measures prediction error; Backpropagation computes partial derivatives (gradients) using the Chain Rule to update network weights."
      }
    ]
  },
  {
    id: "ai-p3",
    notebook: "ai-notes",
    notebookName: "AI Evolution",
    notebookIcon: "🧠",
    page: 3,
    url: "../ai-notes/index.html?page=3",
    rootUrl: "ai-notes/index.html?page=3",
    tag: "Vision & NLP",
    title: "Page 3: Computer Vision (AlexNet) & NLP Evolution",
    sections: [
      {
        heading: "2012 ImageNet Breakthrough: AlexNet",
        content: "Alex Krizhevsky, Ilya Sutskever, and Geoffrey Hinton created AlexNet, a Convolutional Neural Network (CNN) trained on GPUs. It slashed the ImageNet top-5 error rate from 26% down to 15.3%, igniting the modern Deep Learning era."
      },
      {
        heading: "Natural Language Processing (NLP) & Ambiguity",
        content: "Human language is filled with polysemy, idioms, and context dependencies. Example: 'I deposited money in the bank' vs 'The river bank was muddy'. Traditional bag-of-words failed to capture semantic relationships."
      },
      {
        heading: "Word2Vec, RNNs, LSTMs & The Attention Mechanism",
        content: "Word2Vec (2013) embedded words in continuous vector spaces (king - man + woman = queen). Recurrent Neural Networks (RNNs) and LSTMs handled sequences but suffered from vanishing gradients on long texts. Bahdanau Attention (2014) allowed the model to dynamically focus on relevant tokens."
      }
    ]
  },
  {
    id: "ai-p4",
    notebook: "ai-notes",
    notebookName: "AI Evolution",
    notebookIcon: "🧠",
    page: 4,
    url: "../ai-notes/index.html?page=4",
    rootUrl: "ai-notes/index.html?page=4",
    tag: "GenAI",
    title: "Page 4: Generative AI & LLMs (Transformers & GPT)",
    sections: [
      {
        heading: "2017 Transformer: 'Attention Is All You Need'",
        content: "Vaswani et al. introduced the Transformer architecture, replacing recurrent layers entirely with Self-Attention and Multi-Head Attention. Enabled massive parallelization across GPU clusters and handled long-range context effortlessly."
      },
      {
        heading: "GPT (Generative Pre-trained Transformer) & Decoder Models",
        content: "GPT uses autoregressive decoder stacks to predict the next token given previous context: P(w_t | w_1, ..., w_{t-1}). Scaling laws proved that expanding model parameters, compute, and data predictably improves downstream reasoning."
      },
      {
        heading: "Pre-training, Fine-Tuning & RLHF Alignment",
        content: "Phase 1: Self-supervised pre-training on trillions of internet tokens. Phase 2: Supervised Fine-Tuning (SFT) on curated question-answer pairs. Phase 3: Reinforcement Learning from Human Feedback (RLHF) with reward models to ensure helpful, honest, and harmless responses."
      }
    ]
  },
  {
    id: "ai-p5",
    notebook: "ai-notes",
    notebookName: "AI Evolution",
    notebookIcon: "🧠",
    page: 5,
    url: "../ai-notes/index.html?page=5",
    rootUrl: "ai-notes/index.html?page=5",
    tag: "Agents",
    title: "Page 5: Multimodal AI & Autonomous Agents",
    sections: [
      {
        heading: "Vision-Language & Multimodal Models (GPT-4V, Gemini)",
        content: "Multimodal models process text, images, audio, video, and code in a unified embedding space. Cross-attention connects visual encoders (e.g. ViT) directly to the transformer language backbone."
      },
      {
        heading: "Autonomous AI Agent Architecture (Perception, Brain, Action)",
        content: "An AI Agent combines an LLM as the core reasoning engine ('Brain') with: 1. Tool Use & APIs (web browsing, code interpreter, database querying). 2. Memory (Short-term context + Long-term Vector DB). 3. Planning & Decomposition."
      },
      {
        heading: "ReAct Pattern, Self-Reflection & Multi-Agent Collaboration",
        content: "ReAct (Reason + Act): The agent iteratively thinks, acts via tool calls, observes outputs, and reflects. Multi-agent frameworks (orchestrator-worker, peer review) coordinate specialized agents for complex engineering pipelines."
      }
    ]
  },
  {
    id: "ai-p6",
    notebook: "ai-notes",
    notebookName: "AI Evolution",
    notebookIcon: "🧠",
    page: 6,
    url: "../ai-notes/index.html?page=6",
    rootUrl: "ai-notes/index.html?page=6",
    tag: "Cheat Sheet",
    title: "Page 6: Future Frontiers & Master Cheat Sheet",
    sections: [
      {
        heading: "Frontier Reasoning Models (System 2 Thinking, OpenAI o1)",
        content: "Shift from intuitive next-token prediction (System 1) to test-time compute scaling: internal chain-of-thought, search over thought trees, and verification before answering complex mathematical and coding problems."
      },
      {
        heading: "Evolution of AI Timeline & Paradigm Comparison Matrix",
        content: "1950 Turing Test → 1955 Dartmouth AI → 1997 Deep Blue → 2012 AlexNet CNN → 2017 Transformer → 2022 ChatGPT / LLMs → 2024 Multimodal & Autonomous Agents → 2026 Test-Time Reasoning & AGI Frontiers."
      }
    ]
  },

  // --- DOCKER NOTES (6 Pages) ---
  {
    id: "docker-p1",
    notebook: "docker-notes",
    notebookName: "Docker",
    notebookIcon: "🐳",
    page: 1,
    url: "../docker-notes/index.html?page=1",
    rootUrl: "docker-notes/index.html?page=1",
    tag: "Core",
    title: "Page 1: What is Docker & Core Architecture",
    sections: [
      {
        heading: "What is Docker? Containers vs. Virtual Machines",
        content: "Docker is an open platform for developing, shipping, and running applications in lightweight isolated environments called containers. Containers share the host OS kernel and use Linux namespaces (isolation) and cgroups (resource limits), whereas VMs require a Hypervisor and guest OS."
      },
      {
        heading: "Docker Engine Client-Server Architecture",
        content: "Docker Engine consists of: 1. Docker Daemon (dockerd) managing objects like images, containers, networks, volumes. 2. REST API. 3. Docker CLI client executing commands."
      }
    ]
  },
  {
    id: "docker-p2",
    notebook: "docker-notes",
    notebookName: "Docker",
    notebookIcon: "🐳",
    page: 2,
    url: "../docker-notes/index.html?page=2",
    rootUrl: "docker-notes/index.html?page=2",
    tag: "Images",
    title: "Page 2: Docker Images & Container Lifecycle",
    sections: [
      {
        heading: "Read-Only Image Layers & Union File System",
        content: "A Docker Image is an immutable snapshot built from stacked read-only layers using UnionFS. When a container runs, Docker adds a thin read-write Container Layer on top using Copy-on-Write (CoW)."
      },
      {
        heading: "Container Lifecycle States & Core Commands",
        content: "Lifecycle States: Created → Running → Paused → Stopped → Deleted. Commands: docker run (create & start), docker ps (list), docker exec -it (interactive shell), docker stop, docker rm."
      }
    ]
  },
  {
    id: "docker-p3",
    notebook: "docker-notes",
    notebookName: "Docker",
    notebookIcon: "🐳",
    page: 3,
    url: "../docker-notes/index.html?page=3",
    rootUrl: "docker-notes/index.html?page=3",
    tag: "Dockerfile",
    title: "Page 3: Dockerfile Deep Dive & Best Practices",
    sections: [
      {
        heading: "Dockerfile Instructions & Layer Optimization",
        content: "FROM (base image), WORKDIR, COPY vs ADD, RUN (executes commands and commits a new layer), EXPOSE, ENV. Best practice: Chain RUN commands with && and clean cache in the same layer to minimize image size."
      },
      {
        heading: "CMD vs. ENTRYPOINT & Multi-Stage Builds",
        content: "ENTRYPOINT defines the immutable command executable; CMD provides default arguments that can be overridden at runtime. Multi-stage builds (FROM ... AS builder) allow compiling artifacts in one stage and copying only binary to a tiny production image (e.g. alpine or distroless)."
      }
    ]
  },
  {
    id: "docker-p4",
    notebook: "docker-notes",
    notebookName: "Docker",
    notebookIcon: "🐳",
    page: 4,
    url: "../docker-notes/index.html?page=4",
    rootUrl: "docker-notes/index.html?page=4",
    tag: "Storage",
    title: "Page 4: Storage & Volumes Management",
    sections: [
      {
        heading: "Data Persistence: Volumes, Bind Mounts & tmpfs",
        content: "By default container storage is ephemeral. 1. Named Volumes (stored in /var/lib/docker/volumes, fully managed by Docker, best for database persistence). 2. Bind Mounts (maps arbitrary host directory, great for local development). 3. tmpfs (in-memory, volatile, secure)."
      },
      {
        heading: "Volume Commands & Sharing",
        content: "docker volume create, docker volume ls, docker volume prune. Mount syntax: -v myvol:/app/data or --mount type=volume,source=myvol,target=/app/data."
      }
    ]
  },
  {
    id: "docker-p5",
    notebook: "docker-notes",
    notebookName: "Docker",
    notebookIcon: "🐳",
    page: 5,
    url: "../docker-notes/index.html?page=5",
    rootUrl: "docker-notes/index.html?page=5",
    tag: "Networking",
    title: "Page 5: Docker Networking & Port Mapping",
    sections: [
      {
        heading: "Network Drivers: Bridge, Host, Overlay, None",
        content: "1. Bridge (default private network with NAT; user-defined bridge provides automatic DNS resolution between container names). 2. Host (removes network isolation, binds directly to host interfaces). 3. Overlay (cross-host multi-daemon networking in Swarm). 4. None (isolated network loopback only)."
      },
      {
        heading: "Port Mapping & DNS Discovery",
        content: "Port forwarding maps host port to container port: docker run -p 8080:80 nginx. Docker embedded DNS resolves container names directly on user-defined networks without static IPs."
      }
    ]
  },
  {
    id: "docker-p6",
    notebook: "docker-notes",
    notebookName: "Docker",
    notebookIcon: "🐳",
    page: 6,
    url: "../docker-notes/index.html?page=6",
    rootUrl: "docker-notes/index.html?page=6",
    tag: "Cheat Sheet",
    title: "Page 6: Docker Compose & Master Cheat Sheet",
    sections: [
      {
        heading: "Docker Compose (compose.yaml) Multi-Container Orchestration",
        content: "Declarative YAML file defining services, networks, volumes, environment variables, dependencies (depends_on), and port mappings. Commands: docker compose up -d, docker compose down, docker compose logs -f."
      },
      {
        heading: "Essential CLI Commands & Maintenance Cheat Sheet",
        content: "docker system prune -a (clean unused images/containers), docker stats (real-time resource consumption), docker inspect (JSON metadata), docker logs --tail 100 -f."
      }
    ]
  },

  // --- KUBERNETES NOTES (6 Pages) ---
  {
    id: "k8s-p1",
    notebook: "kubernetes-notes",
    notebookName: "Kubernetes",
    notebookIcon: "⎈",
    page: 1,
    url: "../kubernetes-notes/index.html",
    rootUrl: "kubernetes-notes/index.html",
    tag: "Introduction",
    title: "Page 1: What is Kubernetes?",
    sections: [
      {
        heading: "What is Kubernetes? Container Orchestration",
        content: "Kubernetes (K8s) is an open-source container orchestration platform for automating deployment, scaling, load balancing, self-healing, and management of containerized applications. Originally developed by Google, now maintained by CNCF."
      },
      {
        heading: "Why Kubernetes? Key Features",
        content: "Auto Scaling (scale up/down based on load), Self Healing (restarts crashed containers), Rolling Updates (zero-downtime deployments), Load Balancing (distributes traffic across pods), Bin Packing (optimally places containers on nodes), Secrets Management."
      }
    ]
  },
  {
    id: "k8s-p2",
    notebook: "kubernetes-notes",
    notebookName: "Kubernetes",
    notebookIcon: "⎈",
    page: 2,
    url: "../kubernetes-notes/index.html",
    rootUrl: "kubernetes-notes/index.html",
    tag: "Architecture",
    title: "Page 2: Cluster Architecture & Control Plane",
    sections: [
      {
        heading: "Control Plane Components vs. Worker Nodes",
        content: "Control Plane: 1. kube-apiserver (central REST API). 2. etcd (consistent distributed key-value store). 3. kube-scheduler (assigns pods to nodes based on resource requests). 4. kube-controller-manager (reconciliation loops). Worker Nodes: kubelet (node agent enforcing pod specs), kube-proxy (network rules & iptables), Container Runtime (containerd, CRI-O)."
      },
      {
        heading: "What is etcd?",
        content: "etcd is a distributed key-value store that stores the entire cluster state and configuration. It is used by kube-apiserver for all cluster data persistence."
      }
    ]
  },
  {
    id: "k8s-p3",
    notebook: "kubernetes-notes",
    notebookName: "Kubernetes",
    notebookIcon: "⎈",
    page: 3,
    url: "../kubernetes-notes/index.html",
    rootUrl: "kubernetes-notes/index.html",
    tag: "Workloads",
    title: "Page 3: Pods, Deployments & Workload Controllers",
    sections: [
      {
        heading: "Pods: The Atomic Unit of Kubernetes",
        content: "A Pod is the smallest deployable object in K8s, hosting one or more containers that share network namespace (IP & localhost) and storage volumes. Multi-container patterns: Sidecar (logging/proxy), Init Container (setup tasks)."
      },
      {
        heading: "Deployments, ReplicaSets & Rolling Updates",
        content: "A Deployment manages ReplicaSets to ensure the desired number of Pod replicas are always running. Supports zero-downtime Rolling Updates, maxSurge, maxUnavailable, and instant rollbacks with kubectl rollout undo."
      },
      {
        heading: "DaemonSets, StatefulSets, Jobs & CronJobs",
        content: "DaemonSet runs a copy of a pod on every node (e.g. Fluentd, node-exporter). StatefulSet provides unique persistent identifiers and ordered deployment for stateful databases. Jobs and CronJobs run batch tasks to completion."
      }
    ]
  },
  {
    id: "k8s-p4",
    notebook: "kubernetes-notes",
    notebookName: "Kubernetes",
    notebookIcon: "⎈",
    page: 4,
    url: "../kubernetes-notes/index.html",
    rootUrl: "kubernetes-notes/index.html",
    tag: "Networking",
    title: "Page 4: Services & Ingress Networking",
    sections: [
      {
        heading: "Kubernetes Service Abstraction (ClusterIP, NodePort, LoadBalancer)",
        content: "Services provide a stable virtual IP and DNS name across ephemeral Pods selected by labels. 1. ClusterIP (internal cluster-only IP). 2. NodePort (exposes port on each node IP 30000-32767). 3. LoadBalancer (provisions cloud cloud provider load balancer like AWS NLB/ALB)."
      },
      {
        heading: "Ingress Controller & CoreDNS Service Discovery",
        content: "Ingress manages external HTTP/HTTPS routing, SSL/TLS termination, and path-based routing (Layer 7) into internal services. CoreDNS automatically creates DNS records for every service: `<service>.<namespace>.svc.cluster.local`."
      }
    ]
  },
  {
    id: "k8s-p5",
    notebook: "kubernetes-notes",
    notebookName: "Kubernetes",
    notebookIcon: "⎈",
    page: 5,
    url: "../kubernetes-notes/index.html",
    rootUrl: "kubernetes-notes/index.html",
    tag: "Storage & Config",
    title: "Page 5: Storage, ConfigMaps, Secrets & Security",
    sections: [
      {
        heading: "Persistent Volumes (PV) & Persistent Volume Claims (PVC)",
        content: "PV is a piece of storage provisioned in the cluster (e.g. AWS EBS, NFS, Ceph). PVC is a request for storage by a developer specifying capacity and Access Modes: ReadWriteOnce (RWO), ReadOnlyMany (ROX), ReadWriteMany (RWX)."
      },
      {
        heading: "StorageClass & Dynamic Provisioning via CSI",
        content: "StorageClass defines the provisioner volume plugin. Enables Dynamic Provisioning: creating a PVC automatically provisions the underlying physical cloud disk via Container Storage Interface (CSI) without manual PV creation."
      },
      {
        heading: "ConfigMaps & Secrets: Decoupling Configuration",
        content: "ConfigMaps inject non-confidential configuration (env vars, config files) into containers. Secrets store sensitive data (base64 encoded passwords, API keys, TLS certs). Can be consumed as environment variables or mounted files."
      },
      {
        heading: "Namespaces & Role-Based Access Control (RBAC)",
        content: "Namespaces partition a physical cluster into logical virtual clusters. RBAC enforces least privilege access control using Roles, ClusterRoles, RoleBindings, and ServiceAccounts."
      }
    ]
  },
  {
    id: "k8s-p6",
    notebook: "kubernetes-notes",
    notebookName: "Kubernetes",
    notebookIcon: "⎈",
    page: 6,
    url: "../kubernetes-notes/index.html",
    rootUrl: "kubernetes-notes/index.html",
    tag: "Cheat Sheet",
    title: "Page 6: Kubectl Master Cheat Sheet",
    sections: [
      {
        heading: "Essential Kubectl Commands for Day-to-Day Operations",
        content: "kubectl get pods,svc,deploy -A, kubectl describe pod <name>, kubectl logs -f <pod> -c <container>, kubectl exec -it <pod> -- /bin/sh, kubectl apply -f manifest.yaml, kubectl delete -f manifest.yaml, kubectl top nodes/pods."
      },
      {
        heading: "Debugging, Port-Forwarding & Cluster Contexts",
        content: "kubectl port-forward svc/my-svc 8080:80, kubectl config get-contexts, kubectl config use-context, kubectl rollout restart deployment/my-app."
      }
    ]
  },

  // --- SYSTEM DESIGN NOTES (10 Pages) ---
  {
    id: "sd-p1",
    notebook: "system-design-notes",
    notebookName: "System Design",
    notebookIcon: "📐",
    page: 1,
    url: "../system-design-notes/index.html?page=1",
    rootUrl: "system-design-notes/index.html?page=1",
    tag: "Framework",
    title: "Page 1: Fundamentals & 4-Step Interview Framework",
    sections: [
      {
        heading: "The 4-Step System Design Interview Framework",
        content: "Step 1: Understand Problem & Scope Requirements (Functional & Non-Functional: DAU, Latency, Availability, Consistency). Step 2: High-Level Math & Capacity Estimations (RPS, Throughput, Storage, Bandwidth, Cache RAM). Step 3: High-Level Architecture Design (Client, CDN, LB, API Gateway, Services, DB, Cache). Step 4: Deep Dive & Bottleneck Resolution (SPOF, Sharding, Concurrency, Failure modes)."
      },
      {
        heading: "Back-of-the-Envelope Estimation Formula",
        content: "1 Million requests/day ≈ 12 requests/second. 100M DAU with 10 requests/day = 1,000,000,000 req/day ≈ 11,600 RPS (Peak = 2x-3x ≈ 25,000-35,000 RPS). 86,400 seconds in a day ≈ 10^5."
      },
      {
        heading: "Napkin Math Worked Example",
        content: "50M DAU × 20 requests = 1B/day ≈ 10K QPS, peak 30K, 1K writes/s, 100 GB/day, 180 TB over 5 years, ~200 GB cache. Powers of two, per-node capacity ballparks."
      }
    ]
  },
  {
    id: "sd-p2",
    notebook: "system-design-notes",
    notebookName: "System Design",
    notebookIcon: "📐",
    page: 2,
    url: "../system-design-notes/index.html?page=2",
    rootUrl: "system-design-notes/index.html?page=2",
    tag: "Scaling",
    title: "Page 2: Scalability, Load Balancing & Reverse Proxies",
    sections: [
      {
        heading: "Vertical Scaling vs. Horizontal Scaling",
        content: "Vertical (Scale-up: more CPU, RAM, disk; hard ceiling, SPOF, downtime). Horizontal (Scale-out: adding commodity server instances, stateless architecture, elastic auto-scaling)."
      },
      {
        heading: "Load Balancer Layer 4 vs. Layer 7 & Algorithms",
        content: "Layer 4 (Transport TCP/UDP NAT routing, lightning fast, unaware of HTTP path/headers). Layer 7 (Application HTTP/HTTPS, cookie stickiness, path-based routing, SSL termination, header inspection). Algorithms: Round Robin, Weighted Round Robin, Least Connections, IP Hash, Consistent Hashing."
      },
      {
        heading: "Consistent Hashing with Virtual Nodes",
        content: "Distributes keys and server nodes on a 360° hash ring. When a server node is added or removed, only k/N keys need remapping. Virtual nodes (v-nodes) ensure uniform traffic distribution and prevent hot spots."
      },
      {
        heading: "Hash Ring & Token Bucket Sketches",
        content: "Adding node D only moves keys in the arc A → D. Virtual nodes even out load. Token bucket refill rate r, capacity b, HTTP 429 when empty, Redis Lua limiter."
      }
    ]
  },
  {
    id: "sd-p3",
    notebook: "system-design-notes",
    notebookName: "System Design",
    notebookIcon: "📐",
    page: 3,
    url: "../system-design-notes/index.html?page=3",
    rootUrl: "system-design-notes/index.html?page=3",
    tag: "Caching",
    title: "Page 3: Distributed Caching & CDN Strategies",
    sections: [
      {
        heading: "Cache Invalidation Strategies (Cache-Aside, Write-Through, Write-Back)",
        content: "1. Cache-Aside / Lazy Loading (App reads from cache; on miss, reads DB and populates cache). 2. Write-Through (App writes to cache, cache writes to DB synchronously). 3. Write-Back / Write-Behind (App writes to cache, cache asynchronously flushes batch to DB; high throughput, risk of data loss on crash)."
      },
      {
        heading: "Cache Eviction Policies (LRU, LFU, FIFO, TTL)",
        content: "LRU (Least Recently Used, implemented via Doubly Linked List + Hash Map O(1)), LFU (Least Frequently Used), FIFO, TTL (Time-To-Live expiration)."
      },
      {
        heading: "Cache Breakdown, Avalanche & Penetration",
        content: "Cache Penetration: Non-existent keys query DB directly → Solution: Bloom Filter or caching null keys. Cache Avalanche: Thousands of keys expire at once → Solution: Random TTL jitter. Cache Breakdown (Hot Key Expiry): Mutex lock / Singleflight to let only 1 thread query DB."
      },
      {
        heading: "Cache-Aside Sequence Diagram",
        content: "GET miss, read DB, SET with TTL and jitter; write path updates DB then DEL key. Hit-ratio latency math, key versioning, what not to cache."
      }
    ]
  },
  {
    id: "sd-p4",
    notebook: "system-design-notes",
    notebookName: "System Design",
    notebookIcon: "📐",
    page: 4,
    url: "../system-design-notes/index.html?page=4",
    rootUrl: "system-design-notes/index.html?page=4",
    tag: "Databases",
    title: "Page 4: Databases: SQL vs NoSQL, Sharding & CAP",
    sections: [
      {
        heading: "SQL (Relational) vs. NoSQL (Non-Relational)",
        content: "SQL (PostgreSQL, MySQL: Structured schema, ACID transactions, complex joins, vertical scaling). NoSQL: Key-Value (Redis, DynamoDB), Document (MongoDB), Columnar (Cassandra, ScyllaDB for time-series / high writes), Graph (Neo4j for social networks)."
      },
      {
        heading: "Database Sharding & Replication",
        content: "Master-Replica Replication (Master handles all writes, Replicas handle read traffic; async replication lag). Database Sharding (Horizontal partitioning across databases by Shard Key like user_id; hash-based or range-based)."
      },
      {
        heading: "CAP Theorem & PACELC Theorem",
        content: "CAP: In a distributed network partition (P), you can choose Consistency (C) or Availability (A). PACELC: If Partition (P) choose Availability (A) or Consistency (C); Else (E) choose Latency (L) or Consistency (C)."
      },
      {
        heading: "Shards, Replicas, CAP Triangle & Isolation Levels",
        content: "hash(user_id) % 4 shards with leader and replicas. CP etcd ZooKeeper, AP Cassandra DynamoDB. Read committed, repeatable read, serializable vs dirty read, non-repeatable read, phantom."
      }
    ]
  },
  {
    id: "sd-p5",
    notebook: "system-design-notes",
    notebookName: "System Design",
    notebookIcon: "📐",
    page: 5,
    url: "../system-design-notes/index.html?page=5",
    rootUrl: "system-design-notes/index.html?page=5",
    tag: "Async & Queues",
    title: "Page 5: Asynchronous Messaging & Event-Driven Systems",
    sections: [
      {
        heading: "Message Queues: Decoupling, Buffering & Backpressure",
        content: "Asynchronous processing converts synchronous bottlenecks into background workers. Provides load leveling / spike buffering, graceful degradation, and independent scaling."
      },
      {
        heading: "Kafka vs. RabbitMQ Architecture Comparison",
        content: "RabbitMQ: Traditional message broker with smart exchanges, routing keys, message ACKs, and queue purging after consumption. Kafka: Distributed append-only commit log with partitioned topics, consumer groups, offset tracking, high-throughput streaming, and long retention."
      },
      {
        heading: "Message Delivery Guarantees & Idempotency",
        content: "At-most-once, At-least-once (most common), Exactly-once (Kafka transactional producer/consumer). Consumers must be idempotent: using unique idempotency keys or database deduplication tables."
      },
      {
        heading: "Kafka Partitions & Consumer Groups",
        content: "Key hash picks partition, ordering only within a partition, consumers beyond partitions sit idle, hot partitions, consumer lag."
      }
    ]
  },
  {
    id: "sd-p6",
    notebook: "system-design-notes",
    notebookName: "System Design",
    notebookIcon: "📐",
    page: 6,
    url: "../system-design-notes/index.html?page=6",
    rootUrl: "system-design-notes/index.html?page=6",
    tag: "Storage",
    title: "Page 6: Storage Systems, CDNs & Media Pipelines",
    sections: [
      {
        heading: "Block vs File vs Object Storage",
        content: "Block storage (EBS, SAN) for databases, file storage (EFS, NFS) for shared POSIX access, object storage (S3, GCS) for blobs, backups and media at massive scale."
      },
      {
        heading: "CDN: Push vs Pull",
        content: "Pull CDN fetches from origin on first miss; push CDN uploads proactively. Cache-Control max-age, immutable hashed assets, short TTL manifests, signed URLs for private content."
      },
      {
        heading: "Upload → Transcode → Stream Pipeline",
        content: "Client asks API for a presigned URL, uploads multipart directly to S3, S3 event goes to a queue, transcoder workers produce 1080p/720p/480p HLS/DASH chunks and thumbnails, CDN serves adaptive bitrate video. Resumable uploads retry failed parts only."
      }
    ]
  },
  {
    id: "sd-p7",
    notebook: "system-design-notes",
    notebookName: "System Design",
    notebookIcon: "📐",
    page: 7,
    url: "../system-design-notes/index.html?page=7",
    rootUrl: "system-design-notes/index.html?page=7",
    tag: "Distributed",
    title: "Page 7: Consistency, Consensus, Locks & ID Generation",
    sections: [
      {
        heading: "Consistency Models Spectrum",
        content: "Linearizable, sequential, read-your-own-writes and eventual consistency trade latency for correctness."
      },
      {
        heading: "Raft Consensus & Quorums",
        content: "Leader election with terms, AppendEntries log replication, entry committed once a majority (3 of 5) acknowledges. Quorum rule W + R > N for read-your-writes."
      },
      {
        heading: "Distributed Locks & Fencing Tokens",
        content: "A lease alone is unsafe: a GC-paused client can write after expiry. Storage must reject writes carrying an older fencing token (33 < 34)."
      },
      {
        heading: "Twitter Snowflake 64-bit IDs",
        content: "1 sign bit, 41-bit timestamp, 10-bit machine id, 12-bit sequence: roughly time-sorted unique ids without coordination. Beware NTP clock drift."
      }
    ]
  },
  {
    id: "sd-p8",
    notebook: "system-design-notes",
    notebookName: "System Design",
    notebookIcon: "📐",
    page: 8,
    url: "../system-design-notes/index.html?page=8",
    rootUrl: "system-design-notes/index.html?page=8",
    tag: "Blueprints",
    title: "Page 8: FAANG Blueprints & 8+ YoE Staff Playbook",
    sections: [
      {
        heading: "6 Core Product Blueprints",
        content: "TinyURL base62 + KGS, WhatsApp chat over WebSockets, Twitter feed hybrid fanout, distributed rate limiter with Redis Lua, multi-channel notifications, web crawler with Bloom filter."
      },
      {
        heading: "Hybrid News Feed Fanout",
        content: "Fanout-on-write (push) into Redis timelines for normal users; celebrity posts (>100K followers) are pulled and merged at read time by the timeline service."
      },
      {
        heading: "Senior / Staff Signals & Observability",
        content: "State assumptions, explain trade-offs, design for failure, golden signals (latency, traffic, errors, saturation), distributed tracing, graceful degradation."
      }
    ]
  },
  {
    id: "sd-p9",
    notebook: "system-design-notes",
    notebookName: "System Design",
    notebookIcon: "📐",
    page: 9,
    url: "../system-design-notes/index.html?page=9",
    rootUrl: "system-design-notes/index.html?page=9",
    tag: "Case Study",
    title: "Page 9: Case Study — Design a URL Shortener",
    sections: [
      {
        heading: "Requirements & Napkin Math",
        content: "100M new URLs per month ≈ 40 writes/s, 100:1 read ratio ≈ 4K redirects/s, 3 TB over 5 years, 62^7 ≈ 3.5 trillion codes."
      },
      {
        heading: "API, Data Model & Architecture",
        content: "POST /api/v1/urls, GET /{code} returns 302. Key-value store sharded by code, Redis cache for hot links, Kafka click events into ClickHouse analytics."
      },
      {
        heading: "Key Generation & 301 vs 302",
        content: "Hash + truncate has collisions, global counter is a hotspot, Key Generation Service leases id ranges from ZooKeeper. 301 is cached by browsers (lose analytics), 302 keeps stats accurate."
      }
    ]
  },
  {
    id: "sd-p10",
    notebook: "system-design-notes",
    notebookName: "System Design",
    notebookIcon: "📐",
    page: 10,
    url: "../system-design-notes/index.html?page=10",
    rootUrl: "system-design-notes/index.html?page=10",
    tag: "Case Study",
    title: "Page 10: Case Study — Design a Chat System (WhatsApp / Slack)",
    sections: [
      {
        heading: "Requirements & Estimates",
        content: "500M DAU × 40 messages = 20B messages/day ≈ 200K msgs/s, 2 TB/day, ~100 WebSocket gateways holding sockets."
      },
      {
        heading: "Architecture",
        content: "Stateful WebSocket gateways, Redis session registry (user → gateway), chat service, Kafka keyed by conversation id, Cassandra message store, fanout worker, APNs/FCM push when offline, heartbeat presence."
      },
      {
        heading: "Message Lifecycle & Receipts",
        content: "clientMsgId for idempotent retries, snowflake msg_id, sent ✓, delivered ✓✓, read receipts up to msg_id. Per-conversation ordering, group fanout vs pull for large channels, multi-device sync cursors, end-to-end encryption."
      }
    ]
  },

  // --- DSA MASTER NOTES (14 Pages) ---
  {
    id: "dsa-p1",
    notebook: "dsa-notes",
    notebookName: "DSA Master",
    notebookIcon: "💻",
    page: 1,
    url: "../dsa-notes/index.html?page=1",
    rootUrl: "dsa-notes/index.html?page=1",
    tag: "Strategy",
    title: "Page 1: Multi-Tier Strategy & 6-Week Master Roadmap",
    sections: [
      {
        heading: "Senior (8+ YoE) Interview Realities: Tier 1 vs Tier 2 vs Tier 3",
        content: "Tier 1 (Meta, Google, Uber, Netflix, Stripe) expects 2 medium/hard problems solved cleanly in 45 minutes with zero bugs. Tier 2 (Salesforce, Adobe, Atlassian, Intuit, PayPal) emphasizes modular clean OOP code, custom data structure design (LRU/LFU), and concurrency. Tier 3 & Enterprises focus on fundamental data structures and passing 100% of Online Assessment (OA) test cases."
      },
      {
        heading: "The 45-Minute Live Coding Interview Time Budget",
        content: "0-5m Clarify constraints & custom test cases. 5-15m Formulate naive vs optimal Big-O trade-offs. 15-35m Write clean modular production code. 35-45m Systematic manual dry run and distributed scaling follow-ups."
      },
      {
        heading: "Constraint-to-Pattern Meta Decision Matrix",
        content: "N <= 12 -> O(N!) Permutations. N <= 25 -> O(2^N) Subsets / Bitmask DP. N <= 500 -> O(N^3) Floyd-Warshall. N <= 5000 -> O(N^2) Matrix DP / Two Pointers. N <= 10^6 -> O(N log N) or O(N) Binary Search, Sorting, Heaps, Sliding Window, Monotonic Stack, DSU."
      },
      {
        heading: "Hand-drawn 6-Week Roadmap",
        content: "Week 1 arrays, hashing, two pointers, sliding window. Week 2 binary search and stacks. Week 3 trees, tries, heaps. Week 4 graphs. Week 5 DP and backtracking. Week 6 mocks, LRU/LFU, concurrency. Spaced repetition 1-3-7-21 days, pattern journal, timebox rule."
      }
    ]
  },
  {
    id: "dsa-p2",
    notebook: "dsa-notes",
    notebookName: "DSA Master",
    notebookIcon: "💻",
    page: 2,
    url: "../dsa-notes/index.html?page=2",
    rootUrl: "dsa-notes/index.html?page=2",
    tag: "Cheat Sheet",
    title: "Page 2: Master Complexity Cheat Sheet & Sorting Deep Dive",
    sections: [
      {
        heading: "Core Data Structure Big-O Complexity Matrix",
        content: "Dynamic Array O(1) access O(N) search. Doubly Linked List O(1) insertion/deletion with node pointer. HashMap O(1) average lookup/insert. Balanced BST O(log N). Priority Queue Binary Heap O(1) peek O(log N) push/pop. Trie O(L). Disjoint Set Union O(alpha(N)) approx O(1)."
      },
      {
        heading: "Sorting Algorithms: In-Place vs Stable Trade-offs",
        content: "QuickSort O(N log N) avg in-place unstable. MergeSort O(N log N) stable O(N) auxiliary space. HeapSort O(N log N) in-place unstable. Counting/Radix Sort O(N + K) stable non-comparative. CPU cache locality benefits arrays over linked nodes."
      },
      {
        heading: "Big-O Growth Curves & Master Theorem",
        content: "About 10^8 simple operations per second. T(n) = 2T(n/2) + O(n) is O(n log n). Recursion depth counts as space; amortized vs average complexity."
      }
    ]
  },
  {
    id: "dsa-p3",
    notebook: "dsa-notes",
    notebookName: "DSA Master",
    notebookIcon: "💻",
    page: 3,
    url: "../dsa-notes/index.html?page=3",
    rootUrl: "dsa-notes/index.html?page=3",
    tag: "Arrays",
    title: "Page 3: Arrays, Strings, Hash Maps & Matrix Manipulations",
    sections: [
      {
        heading: "Prefix Sum & Difference Array Techniques",
        content: "Prefix sum enables O(1) range sum queries. Subarray Sum Equals K uses HashMap of prefix sums to achieve O(N) time and O(N) space. Difference array allows O(1) range updates [L, R] by modifying D[L] += V and D[R+1] -= V."
      },
      {
        heading: "Matrix In-Place Manipulations",
        content: "Rotate Image 90 degrees clockwise by transposing matrix then reversing each row in-place O(N^2) time O(1) space. Spiral matrix traversal with 4 directional boundary pointers (top, bottom, left, right)."
      },
      {
        heading: "Prefix Sum Picture & Dry Run",
        content: "Prefix array with P[0] = 0, range sum P[R+1] - P[L]. Rotate matrix = transpose + reverse rows. Dry run of subarray sum equals k; practice 560, 238, 1094, 48, 54, 41."
      }
    ]
  },
  {
    id: "dsa-p4",
    notebook: "dsa-notes",
    notebookName: "DSA Master",
    notebookIcon: "💻",
    page: 4,
    url: "../dsa-notes/index.html?page=4",
    rootUrl: "dsa-notes/index.html?page=4",
    tag: "Pointers",
    title: "Page 4: Two Pointers, Fast & Slow, and Sliding Window Patterns",
    sections: [
      {
        heading: "Two Pointer Paradigms & Invariants",
        content: "Opposite directional pointers: 2Sum II, 3Sum, Trapping Rain Water, Container With Most Water. Fast & Slow Floyd's cycle detection algorithm for linked lists and Happy Number."
      },
      {
        heading: "Universal Sliding Window Master Template",
        content: "Expand right pointer to satisfy constraint, shrink left pointer while window invariant is invalid. Minimum Window Substring, Longest Substring Without Repeating Characters, Max Consecutive Ones III."
      },
      {
        heading: "Trapping Rain Water Sketch",
        content: "water[i] = min(maxLeft, maxRight) - h[i]; move the pointer with the smaller max. Trigger words for two pointers and sliding window; exactly K = atMost(K) - atMost(K-1)."
      }
    ]
  },
  {
    id: "dsa-p5",
    notebook: "dsa-notes",
    notebookName: "DSA Master",
    notebookIcon: "💻",
    page: 5,
    url: "../dsa-notes/index.html?page=5",
    rootUrl: "dsa-notes/index.html?page=5",
    tag: "Design DS",
    title: "Page 5: Linked Lists & Custom Data Structure Design (LRU/LFU)",
    sections: [
      {
        heading: "LRU Cache Architecture (HashMap + Doubly Linked List)",
        content: "O(1) get and put operations. Doubly linked list maintains access recency order with dummy head and tail sentinel nodes. HashMap stores key to DLL node references for O(1) lookups and eviction."
      },
      {
        heading: "LFU Cache, Design Twitter & Insert Delete GetRandom O(1)",
        content: "LFU Cache uses frequency hash map and doubly linked lists. Insert Delete GetRandom O(1) combines dynamic array with hash map of indices. Design Twitter merges user tweets using Min-Heap priority queue."
      },
      {
        heading: "LRU Trace & LFU Frequency Buckets",
        content: "LRU capacity 2 trace with eviction. LFU cache uses key → node map plus freq → doubly linked list and a minFreq pointer."
      }
    ]
  },
  {
    id: "dsa-p6",
    notebook: "dsa-notes",
    notebookName: "DSA Master",
    notebookIcon: "💻",
    page: 6,
    url: "../dsa-notes/index.html?page=6",
    rootUrl: "dsa-notes/index.html?page=6",
    tag: "Binary Search",
    title: "Page 6: Binary Search & Monotonic Answer Space",
    sections: [
      {
        heading: "Binary Search Invariants & Rotated Sorted Arrays",
        content: "low <= high invariant with mid = low + (high - low) // 2 overflow protection. Rotated sorted array search checks which half is strictly sorted."
      },
      {
        heading: "Binary Search on Monotonic Answer Space (check(mid))",
        content: "When feasibility function check(mid) is monotonic, binary search directly over answer range [1, max(values)]. Koko Eating Bananas, Capacity to Ship Packages Within D Days, Split Array Largest Sum."
      },
      {
        heading: "First True in a Monotonic Predicate",
        content: "F F F T T T picture, low/mid/high, Koko eating bananas dry run, lower-bound loop variants and off-by-one pitfalls."
      }
    ]
  },
  {
    id: "dsa-p7",
    notebook: "dsa-notes",
    notebookName: "DSA Master",
    notebookIcon: "💻",
    page: 7,
    url: "../dsa-notes/index.html?page=7",
    rootUrl: "dsa-notes/index.html?page=7",
    tag: "Stack & Heap",
    title: "Page 7: Monotonic Stack, Deque & Priority Queue / Heaps",
    sections: [
      {
        heading: "Monotonic Stack Pattern (O(N) Next Greater Element)",
        content: "Monotonic decreasing stack pops smaller elements to find Next Greater Element, Daily Temperatures, Largest Rectangle in Histogram, and Asteroid Collision in O(N) time."
      },
      {
        heading: "Monotonic Deque & Two Heaps (Median from Data Stream)",
        content: "Monotonic deque solves Sliding Window Maximum in O(N) amortized time. Two Heaps pattern uses Max-Heap for lower half and Min-Heap for upper half to compute streaming median in O(1) time."
      },
      {
        heading: "Monotonic Stack Trace & Heap as Array",
        content: "Daily temperatures dry run. Heap children 2i+1, 2i+2, parent (i-1)/2, heapify O(n). Top-K with min-heap of size K, sliding window maximum with deque, K-way merge."
      }
    ]
  },
  {
    id: "dsa-p8",
    notebook: "dsa-notes",
    notebookName: "DSA Master",
    notebookIcon: "💻",
    page: 8,
    url: "../dsa-notes/index.html?page=8",
    rootUrl: "dsa-notes/index.html?page=8",
    tag: "Trees & Tries",
    title: "Page 8: Trees, BST, Lowest Common Ancestor (LCA) & Tries",
    sections: [
      {
        heading: "Tree DFS & Lowest Common Ancestor (LCA)",
        content: "Bottom-up post-order recursion computes Tree Diameter and Maximum Path Sum. LCA returns split node where left and right recursion both return non-null in O(N) time."
      },
      {
        heading: "Trie (Prefix Tree) Master Template & Word Search II",
        content: "TrieNode with children dictionary and is_word boolean. Autocomplete, prefix matching in O(L) time. Word Search II combines Trie with 2D Board DFS Backtracking and Trie pruning."
      },
      {
        heading: "LCA Recursion, Trie Sketch & BFS Level Order",
        content: "LCA bubbles results up; trie shares prefixes. BFS level-order template freezes queue size. Traversal cheat sheet and validate BST with bounds."
      }
    ]
  },
  {
    id: "dsa-p9",
    notebook: "dsa-notes",
    notebookName: "DSA Master",
    notebookIcon: "💻",
    page: 9,
    url: "../dsa-notes/index.html?page=9",
    rootUrl: "dsa-notes/index.html?page=9",
    tag: "Graphs",
    title: "Page 9: Graph Algorithms: BFS, DFS, TopoSort, DSU & Shortest Paths",
    sections: [
      {
        heading: "Topological Sort (Kahn's BFS In-Degree Algorithm)",
        content: "Calculates in-degrees for all V vertices. Push 0 in-degree nodes to queue, decrement neighbors. Detects cycles and resolves task dependencies (Course Schedule I & II, Alien Dictionary)."
      },
      {
        heading: "Disjoint Set Union (Union-Find) & Dijkstra's Algorithm",
        content: "DSU with Path Compression and Union by Rank achieves O(alpha(N)) near O(1) operations for Number of Provinces and Redundant Connection. Dijkstra uses Min-Heap priority queue for shortest paths in weighted graphs in O((V + E) log V)."
      },
      {
        heading: "Dijkstra Code, BFS Rings & DSU Forest",
        content: "Dijkstra with PriorityQueue and lazy deletion of stale entries. BFS marks visited on enqueue. Path compression flattens the union-find tree. Which graph algorithm to choose."
      }
    ]
  },
  {
    id: "dsa-p10",
    notebook: "dsa-notes",
    notebookName: "DSA Master",
    notebookIcon: "💻",
    page: 10,
    url: "../dsa-notes/index.html?page=10",
    rootUrl: "dsa-notes/index.html?page=10",
    tag: "DP",
    title: "Page 10: Dynamic Programming & Backtracking Masterclass",
    sections: [
      {
        heading: "The 5-Step DP Formulation Framework",
        content: "1. State Definition dp[i][j]. 2. Choice & Recurrence transition. 3. Base Cases. 4. Order of computation. 5. Rolling array space optimization from O(N^2) to O(N)."
      },
      {
        heading: "Classic DP Patterns & Backtracking Pruning",
        content: "1D Array DP (House Robber, Coin Change, LIS), 2D Grid DP (Unique Paths, Edit Distance, LCS), 0/1 Knapsack (Partition Equal Subset Sum), and Backtracking template with state pruning (Subsets, Permutations, N-Queens)."
      },
      {
        heading: "Memoization Recursion Tree & LCS Table",
        content: "Fib recursion tree collapses with memo. LCS of abcde and ace = 3 table. Top-down vs bottom-up, state design."
      }
    ]
  },
  {
    id: "dsa-p11",
    notebook: "dsa-notes",
    notebookName: "DSA Master",
    notebookIcon: "💻",
    page: 11,
    url: "../dsa-notes/index.html?page=11",
    rootUrl: "dsa-notes/index.html?page=11",
    tag: "Greedy",
    title: "Page 11: Intervals, Greedy, Bit Manipulation & Concurrency",
    sections: [
      {
        heading: "Intervals Patterns: Sort by Start Time",
        content: "Merge Overlapping Intervals in O(N log N). Meeting Rooms II uses Min-Heap of meeting end times to calculate minimum conference rooms required."
      },
      {
        heading: "Bit Manipulation Tricks & Thread-Safe Data Structures",
        content: "XOR cancellation x ^ x = 0 solves Single Number. n & (n - 1) clears lowest set bit. Thread-safe bounded queue uses mutex lock with not_full and not_empty condition variables in while loops."
      },
      {
        heading: "Merge Intervals Number Line & Greedy",
        content: "Sort by start, extend the last interval. Jump game farthest reach, gas station, activity selection, exchange argument proof."
      }
    ]
  },
  {
    id: "dsa-p12",
    notebook: "dsa-notes",
    notebookName: "DSA Master",
    notebookIcon: "💻",
    page: 12,
    url: "../dsa-notes/index.html?page=12",
    rootUrl: "dsa-notes/index.html?page=12",
    tag: "Interview Playbook",
    title: "Page 12: Tier 1/2/3 Rubrics, OA Guide & Live Interview Protocol",
    sections: [
      {
        heading: "The 6-Step Live Interview Protocol",
        content: "1. Clarify constraints & edge cases. 2. Propose naive vs optimal approach. 3. State Big-O complexity upfront. 4. Write clean modular production code. 5. Systematic manual dry-run trace table. 6. Answer follow-up scaling questions."
      },
      {
        heading: "Top Senior Red Flags to Avoid in Coding Rounds",
        content: "Never code in silence for 10 minutes. Avoid cryptic 1-letter variables. Never ignore interviewer hints. Always perform a manual dry run before declaring code complete."
      },
      {
        heading: "Interviewer Scorecard & Phrases",
        content: "Communication, problem solving, code quality, verification. What to say at minute 2, before coding, and when stuck."
      }
    ]
  },
  {
    id: "dsa-p13",
    notebook: "dsa-notes",
    notebookName: "DSA Master",
    notebookIcon: "💻",
    page: 13,
    url: "../dsa-notes/index.html?page=13",
    rootUrl: "dsa-notes/index.html?page=13",
    tag: "Backtracking",
    title: "Page 13: Backtracking & Recursion Trees",
    sections: [
      {
        heading: "Decision Tree for Subsets",
        content: "Draw the recursion tree first. Every node is a subset of [1,2,3]; children only pick indices greater than start, so 2^n answers and no duplicates."
      },
      {
        heading: "Universal Backtracking Template",
        content: "Record a copy of path, loop over choices, skip duplicates after sorting, choose, explore with i + 1 (or i for reuse), un-choose with RemoveAt."
      },
      {
        heading: "Subsets vs Combination Sum vs Permutations vs N-Queens",
        content: "Permutations use a used[] array and loop from 0, n!. Combination sum recurses on i and prunes when remain < 0. N-Queens tracks columns and both diagonals. Word Search marks cells and restores them."
      }
    ]
  },
  {
    id: "dsa-p14",
    notebook: "dsa-notes",
    notebookName: "DSA Master",
    notebookIcon: "💻",
    page: 14,
    url: "../dsa-notes/index.html?page=14",
    rootUrl: "dsa-notes/index.html?page=14",
    tag: "Revision",
    title: "Page 14: Pattern Picker Flowchart & Revision Sheet",
    sections: [
      {
        heading: "Which Pattern? Flowchart",
        content: "Sorted or monotonic → binary search / two pointers. Contiguous subarray → sliding window / prefix sum. Top-K → heap. Next greater → monotonic stack. Graph or dependencies → BFS, DFS, topological sort, DSU, Dijkstra. All combinations → backtracking. Optimal with repeating choices → dynamic programming. Intervals → sort and sweep."
      },
      {
        heading: "One-Line Template Revision Sheet",
        content: "One-breath summary of each core template with its time complexity: prefix sum + map, sliding window, LRU, binary search on answer, monotonic stack, top-K heap, BFS, topo sort, DSU, DP, backtracking, intervals."
      }
    ]
  },

  // --- INTERVIEW Q&A NOTES (25 Pages) ---
  {
    id: "iv-p1",
    notebook: "interview-notes",
    notebookName: "Interview Q&A",
    notebookIcon: "🎯",
    page: 1,
    url: "../interview-notes/index.html?page=1",
    rootUrl: "interview-notes/index.html?page=1",
    tag: "Strategy",
    title: "Page 1: Start Here: Company Tiers, What Each Tier Tests & How to Use",
    sections: [
      {
        heading: "Who sits in which tier? (by interview bar, not by \"quality\")",
        content: "Who sits in which tier? (by interview bar, not by 'quality') Fig 1.1 — tiers describe how hard and how wide the loop is. Prepare for the tier you target + one"
      },
      {
        heading: "What each tier actually weighs",
        content: "What each tier actually weighs Fig 1.2 — T1 = DSA + design + behaviour all strong. T2 = design-heavy (machine coding!). T3 = fundamentals, your stack & project depth. Area Tier 1 Tier 2 Tier 3 Coding 2 LC medium/hard per 45 min, bug-free, optimal, dry-run 1–2 medium; clean, modular, extensible Easy–medium; OA must pass all tests LLD / OOP Sometimes (Microsoft, Uber, Amazon SDE2) Core round — 90-min machine coding (Flipkart, Swiggy, Uber IN) OOP pillars, SOLID, patterns by name HLD 1–2 rounds for senior; deep trade-offs, numbers 1 round; sometimes your own project Your project architecture, basics of scaling Behavioral Dedicated round + Bar Raiser / HC / values Values round (Atlassian) + HM round Managerial + HR, client-facing skills Stack depth Language-agnostic Some stack questions Heavy: C#/.NET, Java, SQL, cloud,"
      },
      {
        heading: "How to use this notebook",
        content: "How to use this notebook 📖 Read mode (default) Every answer is open — read like a book. Yellow box = the one insight to remember. Blue box = follow-up the interviewer asks next. Pink box = trap / common mistake. 🧠 Quiz mode (press Q) Hides all answers. Answer aloud in 60–90 s. Click the question to check yourself. Your choice is remembered next visit. 🔗 Deeper theory Patterns & code → DSA notebook Architectures → System Design Pages 19–24 = Q&A Bank II (harder DSA, more designs, production scenarios). Ctrl+K searches all notebooks at"
      },
      {
        heading: "Meta questions (about the interview itself)",
        content: "What are interviewers really scoring in a coding round? I have 8+ years of experience. How is my loop different from a fresher's? How many problems should I solve, and which ones? What changed in 2025–26 interviews because of AI? — Answer: Four signals, almost everywhere: Problem solving — did you find an efficient approach and can you justify it (complexity, why it is correct)? Coding — readable, idiomatic, well-named, decomposed into helpers. Verification — you test your own code: dry run, edge cases, fix bugs before the interviewer points them out. Communication — you think aloud, clarify, accept hints and explain trade-offs. 💡 A correct solution with silent coding and no testing often scores lower than a slightly slower solution that was communicated and verified well. Fewer pure-DSA rounds, more design — usually 1–2 coding, 1–2 system design, 1 LLD/machine coding (India), 1"
      }
    ]
  },
  {
    id: "iv-p2",
    notebook: "interview-notes",
    notebookName: "Interview Q&A",
    notebookIcon: "🎯",
    page: 2,
    url: "../interview-notes/index.html?page=2",
    rootUrl: "interview-notes/index.html?page=2",
    tag: "Loops",
    title: "Page 2: Company Interview Loops 2025-26 (Tier 1, 2, 3)",
    sections: [
      {
        heading: "The shape of a loop, by tier",
        content: "The shape of a loop, by tier Fig 2.1 — T1 = breadth + committee. T2 = build-it-live first. T3 = your stack, your project, then managerial +"
      },
      {
        heading: "Tier 1 — round by round",
        content: "Tier 1 — round by round Company Typical senior loop What is unique Google Recruiter → 1 technical screen → onsite: 2–3 coding, 1–2 system design (L5+), 1 Googleyness & Leadership → Hiring Committee → team match Scored on GCA, RRK, Leadership, Googleyness . At least one round back in person for many roles. G&L may include a design chat on your past work. Code often not executed — dry-run matters. Meta Recruiter → screen (≈2 problems / 45 min) → onsite: 1 classic coding + 1 AI-enabled coding (pilot), 1–2 system/product design, 1 behavioral Speed: 2 mediums in 35–40 min. AI round = 60 min multi-file codebase (build / extend / debug) with a chosen model. Level set mostly by design + behavioral. Amazon OA (coding + work-style) → phone screen → loop of 4–5 × 60 min → debrief Every round has Leadership-Principle questions (≈ half the time). A Bar Raiser from another org can veto. SDE2+ gets"
      },
      {
        heading: "Tier 2 & Tier 3 — round by round",
        content: "Tier 2 & Tier 3 — round by round Company Typical loop What is unique Flipkart Machine coding (≈30 min brief + 90 min build, proctored) → PSDS (2 LC mediums) → design (LLD/HLD) → HM / techno-managerial Machine coding is usually the gate. Graded on working code, SOLID, patterns, extensibility, tests. Seen: food ordering, BookMyShow, parking lot, property management. Atlassian Screen (sometimes Karat) → code design → data structures → system design → management/leadership → values → hiring committee Code design = build & extend a small real system (rate limiter, file-size report, snake game, feature flags). Values round can fail strong engineers. Adobe · Salesforce · Walmart · PayPal OA → 2 DSA → LLD/HLD → HM → HR Balanced loops; DSA medium, LLD in Java/C#-style OOP, solid CS fundamentals. Intuit OA/screen → Craft Demo (build something, then present + extend) → HM/behavioral You are judged"
      },
      {
        heading: "Loop questions you should be able to answer",
        content: "What is a Bar Raiser and how do I 'pass' one? How does Google's hiring committee and team match work? What is a machine coding round and how is it graded? What are Atlassian's values, and how do I prepare for the values round? What do service companies ask experienced (lateral) candidates? What should I ask the recruiter before the loop? — Answer: A trained interviewer from outside the hiring team whose job is to ensure every hire is better than 50% of current people at that level. They usually probe Leadership Principles deeply and can veto. Expect 3–5 follow-ups per story: 'What exactly did you do?', 'What data?', 'What would you do differently?' Use real numbers (latency, cost, % improvement, team size, dates). Have 2 stories per principle so you never repeat one in the same loop. ⚠️ 'We decided…' without your own action = weak signal. Say 'I'. Answer: Interviewers write detailed"
      }
    ]
  },
  {
    id: "iv-p3",
    notebook: "interview-notes",
    notebookName: "Interview Q&A",
    notebookIcon: "🎯",
    page: 3,
    url: "../interview-notes/index.html?page=3",
    rootUrl: "interview-notes/index.html?page=3",
    tag: "DSA",
    title: "Page 3: DSA Q&A I: Arrays, Strings, Hashing & Sliding Window",
    sections: [
      {
        heading: "Hear the keyword → pick the pattern",
        content: "Hear the keyword → pick the pattern Fig 3.1 — say the pattern name out loud in the interview: 'this smells like a sliding window"
      },
      {
        heading: "Hashing & prefix sums",
        content: "Two Sum — return indices of two numbers that add to target. Subarray Sum Equals K (array has negatives). Product of Array Except Self — without division, O(n). Longest Consecutive Sequence in O(n). Group Anagrams. — Answer: Walk once; for each x check whether target - x was seen. Store value → index after the check (so an element is not paired with itself). O(n) time, O(n) space. ↪ Sorted input? → two pointers, O(1) space. All pairs / count pairs? → map of counts. Stream of numbers? → keep the map, answer per arrival. Answer: sum(i..j) = prefix[j] − prefix[i−1]. So at each position, the number of subarrays ending here with sum k = how many earlier prefixes equal prefix - k . Seed the map with {0: 1} (the empty prefix). O(n) / O(n). ⚠️ Sliding window does not work here — negatives break the 'shrink when too big' rule. Say this explicitly; interviewers love it. Answer: answer[i] ="
      },
      {
        heading: "Kadane, stock & two pointers",
        content: "Maximum Subarray (Kadane's algorithm). Best Time to Buy and Sell Stock (one transaction). 3Sum — all unique triplets summing to 0. Trapping Rain Water. Sort Colors (0s, 1s, 2s) in one pass. — Answer: At each element decide: extend the previous subarray or restart here — cur = max(x, cur + x) . Track the best. O(n) / O(1) . Works for all-negative arrays (answer = largest element). ↪ Return the indices too → remember start when you restart. Max product subarray → track both max and min (a negative flips them). Answer: Track the minimum price so far; profit if sold today = price − min. Keep the max. O(n) / O(1) . ↪ Unlimited transactions → sum every positive day-to-day rise (greedy). At most k transactions / cooldown / fee → DP with states (holding, not holding). Answer: Sort. For each i (skip if same as previous), run two pointers L = i+1, R = end: sum < 0 → L++, sum > 0 → R--, else"
      },
      {
        heading: "Sliding window",
        content: "Longest Substring Without Repeating Characters. Minimum Window Substring (contains all chars of t). Longest Repeating Character Replacement (at most k changes). — Answer: Window [L, R]. Remember last index of each char; when s[R] was seen inside the window, jump L past it. O(n) time, O(alphabet) space. Answer: Count what we need . Grow R; when a needed char arrives, missing-- . While missing == 0 the window is valid → record, then shrink L; if removing s[L] makes it needed again, missing++ . O(|s| + |t|) . 💡 Generic window template: grow R → while invalid (or valid, for 'minimum') shrink L → update answer. Longest = update after shrinking; shortest = update while shrinking. Answer: Window is valid if windowLen - maxFreq ≤ k (chars we must change). Grow R, update counts and maxFreq; if invalid, move L by one. O(n) . maxFreq never needs to decrease — the answer only grows when a bigger"
      }
    ]
  },
  {
    id: "iv-p4",
    notebook: "interview-notes",
    notebookName: "Interview Q&A",
    notebookIcon: "🎯",
    page: 4,
    url: "../interview-notes/index.html?page=4",
    rootUrl: "interview-notes/index.html?page=4",
    tag: "DSA",
    title: "Page 4: DSA Q&A II: Linked Lists, Stacks, Binary Search, Heaps & Intervals",
    sections: [
      {
        heading: "Linked lists",
        content: "Reverse a linked list — iteratively and recursively. Detect a cycle and return the node where it starts. Why does Floyd's trick work? Merge K sorted lists. Remove N-th node from end in one pass? Intersection of two lists? Copy list with random pointer? Design an LRU cache? — Answer: Iterative: three pointers prev , cur , next ; flip one arrow per step. O(n) / O(1) . Recursive: reverse the rest, then make head.next.next = head , head.next = null . O(n) stack . ↪ Reverse in groups of k, reverse between positions m..n, palindrome list (reverse 2nd half, compare, restore). Fig 4.1 — after they meet at M, walk one pointer from H and one from M at the same speed: they meet at S . Answer: slow moves 1, fast moves 2. If they meet, there is a cycle. Slow walked a + b; fast walked twice that, i.e. a full number of extra loops: a + b = k·L. So a = k·L − b = c + (k−1)·L — walking a steps from the"
      },
      {
        heading: "Stacks & monotonic stacks",
        content: "Valid Parentheses. Daily Temperatures / Next Greater Element. Design a Min Stack (getMin in O(1)). — Answer: Push openers; on a closer, the top must be its matching opener, else false. At the end the stack must be empty. O(n) . Quick reject: odd length. ↪ Min removals to make valid (Meta favourite): count unmatched ')' while scanning and unmatched '(' left over — remove those indices. Answer: Keep a stack of indices with decreasing temperatures. For each day, pop while today is warmer — each popped day's answer is i - popped . Each index is pushed and popped once → O(n) . ↪ Same pattern: Largest Rectangle in Histogram, Stock Span, Remove K Digits, Sum of Subarray Minimums. Answer: Store pairs (value, minSoFar) on one stack, or keep a second stack that pushes when a value ≤ current min. All ops O(1)"
      },
      {
        heading: "Binary search",
        content: "Search in Rotated Sorted Array. Koko Eating Bananas / Ship Packages in D Days — 'binary search on the answer'. Median of Two Sorted Arrays in O(log(min(m,n))). — Answer: One half around mid is always sorted. If nums[lo] ≤ nums[mid] the left half is sorted: target in [lo, mid) → go left, else right. Otherwise the right half is sorted — mirror it. O(log n) . ⚠️ With duplicates, nums[lo] == nums[mid] is ambiguous → lo++ ; worst case becomes O(n). Say it. Answer: The answer (speed / capacity) lives in a range [lo, hi], and feasible(x) is monotonic (if x works, x+1 works). Binary search for the smallest feasible x. Cost: O(n · log range) . 💡 Recognise it by 'minimum maximum' / 'smallest capacity such that…'. Template details: DSA notes p.6 . Answer: Binary search a cut i in the smaller array; the cut in the other is j = (m + n + 1)/2 − i . Valid when A[i−1] ≤ B[j] and B[j−1] ≤ A[i] (use ±∞"
      },
      {
        heading: "Heaps & intervals",
        content: "Kth Largest Element — heap or quickselect? Find Median from Data Stream. Merge Intervals & Meeting Rooms II (min rooms needed). — Answer: Min-heap of size k: push each, pop when size > k; the top is the answer. O(n log k), O(k) — works on streams. Quickselect: partition around a random pivot, recurse into one side — O(n) average, O(n²) worst , in-place. ↪ Top K Frequent: count with a map, then heap of size k, or bucket sort by frequency (O(n)). Answer: Two heaps: a max-heap for the lower half, a min-heap for the upper half. Add to lower, move lower's top to upper, rebalance so lower has equal or one more. Median = lower.top or the average of both tops. add O(log n), median O(1) . ↪ Values in 0..100 only → counting array, O(100) median. 99% in range → counts + two overflow heaps. Answer — Merge: sort by start; if current start ≤ last merged end, extend end = max(end, cur.end), else"
      }
    ]
  },
  {
    id: "iv-p5",
    notebook: "interview-notes",
    notebookName: "Interview Q&A",
    notebookIcon: "🎯",
    page: 5,
    url: "../interview-notes/index.html?page=5",
    rootUrl: "interview-notes/index.html?page=5",
    tag: "DSA",
    title: "Page 5: DSA Q&A III: Trees, Tries & Graphs",
    sections: [
      {
        heading: "Binary trees & BSTs",
        content: "Diameter of a Binary Tree. Validate a Binary Search Tree. Lowest Common Ancestor — binary tree and BST. Level Order Traversal / Right Side View / Zigzag. Serialize and Deserialize a Binary Tree. Binary Tree Maximum Path Sum. Implement a Trie; then Word Search II. — Answer: DFS returns the node's height to its parent; while there, update a global best with left + right (the longest path that bends at this node). O(n) time, O(h) stack. 💡 Same 'return one thing, record another' shape solves Max Path Sum (return max(0, gain)), Balanced Tree (return −1 if unbalanced) and Longest Univalue Path. Answer: Pass down an allowed range (min, max): left child gets (min, node.val), right gets (node.val, max). Or do an inorder walk and check strictly increasing. O(n) . ⚠️ Classic wrong answer: only checking left.val < node.val < right.val . A grandchild can break the rule. Use long bounds (or nullable)"
      },
      {
        heading: "Graphs — pick the algorithm",
        content: "Number of Islands. Course Schedule I & II (can all courses be finished? in what order?). Rotting Oranges / Walls and Gates (multi-source BFS). Word Ladder (shortest transformation sequence). Dijkstra — Network Delay Time. Why does it fail with negative edges? Clone Graph? Accounts Merge / Redundant Connection? Detect a cycle — directed vs undirected? Alien Dictionary? — Answer: Scan the grid; on each unvisited '1', count++ and flood-fill (DFS/BFS) marking the island visited. O(R·C) . DFS recursion can overflow on a 1000×1000 all-land grid → use BFS or an explicit stack. ↪ Islands added one by one (Number of Islands II) → DSU, O(α) per addition. Count distinct shapes → serialize the DFS path relative to the start. Answer: Directed graph prereq → course. Kahn's algorithm: queue all in-degree-0 nodes; pop, append to order, decrement neighbours, enqueue those that hit 0. If order has fewer"
      }
    ]
  },
  {
    id: "iv-p6",
    notebook: "interview-notes",
    notebookName: "Interview Q&A",
    notebookIcon: "🎯",
    page: 6,
    url: "../interview-notes/index.html?page=6",
    rootUrl: "interview-notes/index.html?page=6",
    tag: "DSA",
    title: "Page 6: DSA Q&A IV: Dynamic Programming, Backtracking & Greedy",
    sections: [
      {
        heading: "DP concepts they ask before the code",
        content: "How do you recognise that a problem needs DP? Memoization vs tabulation — which and why? — Answer: Two properties: optimal substructure (the best answer is built from best answers of smaller sub-problems) and overlapping sub-problems (the plain recursion solves the same sub-problem many times). Trigger words: 'number of ways', 'min/max cost', 'can you reach / is it possible', 'longest/shortest … subsequence'. 💡 Script: 'Brute force tries every choice — exponential. Many branches repeat the same (i, j) state, so I'll memoise on (i, j): states × work per state.' Memoization (top-down) Tabulation (bottom-up) How Recursion + cache Loops fill a table in dependency order Pros Natural to derive; only computes reachable states No recursion depth risk; easy space optimisation (rolling rows) Cons Stack overflow on deep inputs; call overhead Must figure out the order; computes all states Interview"
      },
      {
        heading: "Classic DP questions",
        content: "House Robber (no two adjacent houses). Coin Change (fewest coins) vs Coin Change II (number of ways). Longest Increasing Subsequence — O(n²) and O(n log n). Edit Distance (insert / delete / replace). Word Break. Partition Equal Subset Sum (0/1 knapsack). Longest Palindromic Substring? Unique Paths / Minimum Path Sum? Decode Ways ('226' → 3)? Longest Common Subsequence? — Answer: dp[i] = max(dp[i-1], dp[i-2] + nums[i]) — skip house i or rob it. Only two previous values matter → O(n) / O(1) . Circular street (House Robber II): answer = max(rob 0..n−2, rob 1..n−1). Fewest: dp[a] = min over coins c of dp[a - c] + 1 , dp[0] = 0, unreachable = ∞ → return −1. O(A · C) . Ways: dp[0] = 1 ; outer loop coins, inner loop amounts → counts combinations (1+2 same as 2+1). ⚠️ Swap the loops (amount outside) and you count permutations — that is Combination Sum IV. Interviewers ask exactly this. ↪ Why"
      },
      {
        heading: "Backtracking",
        content: "Subsets, Permutations, Combination Sum — one template? N-Queens and Word Search. — Answer: Choose → explore → un-choose. Permutations: loop from 0 every time, use a used[] array; record only when path.Count == n. O(n · n!). Combination Sum: recurse with i (reuse allowed), stop when remaining < 0; sort and break early when nums[i] > remaining. N-Queens: place row by row; keep sets for columns, r - c diagonals and r + c anti-diagonals for O(1) conflict checks. Word Search: DFS from each cell matching word[0]; mark the cell (e.g. '#') before recursing and restore it after. O(R·C·4^L). Prune: if the board lacks enough letters, return false"
      },
      {
        heading: "Greedy",
        content: "Jump Game I & II? Gas Station? How do you prove a greedy choice is correct? Non-overlapping intervals (min removals)? — I: track farthest reachable; if i > farthest → false. II: BFS-by-ranges — when i reaches the current range end, jumps++ and range end = farthest. Both O(n). If total gas < total cost → −1. Otherwise scan; when the tank goes negative, the start must be after i — reset tank, start = i+1. O(n). Exchange argument: take any optimal solution that differs from greedy at the first choice; swap in the greedy choice and show it is no worse. Or find a counter-example quickly → then it's DP. Sort by end ; keep an interval if its start ≥ last kept end, else remove it. Earliest end leaves the most room. O(n log"
      }
    ]
  },
  {
    id: "iv-p7",
    notebook: "interview-notes",
    notebookName: "Interview Q&A",
    notebookIcon: "🎯",
    page: 7,
    url: "../interview-notes/index.html?page=7",
    rootUrl: "interview-notes/index.html?page=7",
    tag: "CS Core",
    title: "Page 7: CS Fundamentals: Operating Systems & Concurrency",
    sections: [
      {
        heading: "Processes, threads & memory",
        content: "Process vs thread — differences and when to use which? What happens during a context switch? Virtual memory, paging, page faults and thrashing. Stack vs heap memory? User mode vs kernel mode; system call? CPU scheduling algorithms? How many processes after n fork() calls? — Process Thread Memory Own virtual address space Shares the process's heap, code, files; own stack + registers Creation / switch cost High (new page tables, TLB flush) Low Communication IPC: pipes, sockets, shared memory, queues Shared variables (needs synchronisation) Fault isolation Crash is contained One bad thread can kill the process Use processes for isolation/security (Chrome tabs, microservices, worker processes); threads for cheap parallelism inside one service. Answer: Timer interrupt or blocking call → kernel saves the running thread's CPU state (registers, program counter, stack pointer) into its PCB/TCB →"
      },
      {
        heading: "Synchronisation & deadlocks",
        content: "Mutex vs semaphore vs monitor. What is a deadlock? Necessary conditions and how to prevent it. Race condition — example and three ways to fix it. Implement producer–consumer with a bounded buffer. Print odd and even numbers alternately using two threads. Concurrency vs parallelism? Why use a thread pool? Optimistic vs pessimistic locking? Dining philosophers — the fix? — Mutex: one owner at a time; must be released by the thread that acquired it. Protects a critical section. Semaphore: a counter of permits (counting) — limits concurrency to N (e.g. max 10 DB calls). Any thread can signal. Binary semaphore ≈ lock without ownership. Monitor: mutex + condition variables bundled with the data (C# lock + Monitor.Wait/Pulse , Java synchronized + wait/notify). 💡 One-liner: 'A mutex is a key to one room; a semaphore is a bowl of N keys.' Fig 7.2 — a cycle in the wait-for graph. Fix: always take"
      }
    ]
  },
  {
    id: "iv-p8",
    notebook: "interview-notes",
    notebookName: "Interview Q&A",
    notebookIcon: "🎯",
    page: 8,
    url: "../interview-notes/index.html?page=8",
    rootUrl: "interview-notes/index.html?page=8",
    tag: "CS Core",
    title: "Page 8: CS Fundamentals: DBMS, Transactions, Indexing & SQL",
    sections: [
      {
        heading: "Transactions",
        content: "Explain ACID with a bank transfer. Isolation levels and the anomalies each one allows. — Transfer ₹100 from A to B = debit A + credit B. Atomicity — both happen or neither (rollback via undo log if the credit fails). Consistency — constraints hold before and after (balance ≥ 0, total money unchanged). Isolation — a concurrent report never sees A debited but B not yet credited. Durability — once committed, survives a crash (write-ahead log fsynced before ack). ↪ Across two services/databases there is no single ACID transaction → Saga with compensations, or outbox pattern (page 12). Level Dirty read Non-repeatable read Phantom Notes Read Uncommitted ❌ possible ❌ ❌ Almost never used Read Committed ✅ prevented ❌ ❌ Default in PostgreSQL, SQL Server, Oracle Repeatable Read ✅ ✅ ❌ (in the standard) Default in MySQL InnoDB (gap locks limit phantoms) Serializable ✅ ✅ ✅ Safest, slowest; may abort"
      },
      {
        heading: "Indexing & performance",
        content: "How does an index work? Clustered vs non-clustered? When will the database NOT use my index? An API is slow because of a query. How do you debug it? Normalization 1NF → 3NF, and when to denormalize? SQL vs NoSQL — how do you choose? DELETE vs TRUNCATE vs DROP? WHERE vs HAVING; UNION vs UNION ALL? — An index is a separate sorted structure (usually a B+ tree) mapping key → row location, so lookups are O(log n) page reads instead of a full table scan. Clustered: the table rows themselves are stored in key order (one per table — usually the primary key in SQL Server / InnoDB). Non-clustered (secondary): separate tree whose leaves point to the row (or to the clustered key → extra 'key lookup'). Covering index: includes all columns the query needs → no lookup back to the table ( INCLUDE columns). Cost: slower writes (every insert/update maintains each index) and extra storage. Function or"
      },
      {
        heading: "SQL they make you write",
        content: "Find the Nth highest salary (handle ties). Top 3 salaries in each department. Employees who earn more than their manager (self-join). Find and delete duplicate emails, keeping the smallest id. Running total of sales per day; customers who never ordered. — ↪ RANK vs DENSE_RANK vs ROW_NUMBER for salaries 100, 100, 90: RANK 1,1,3 · DENSE_RANK 1,1,2 · ROW_NUMBER 1,2,3. Return NULL if fewer than N distinct salaries. ⚠️ NOT IN (subquery) returns nothing if the subquery contains a NULL — prefer NOT EXISTS"
      }
    ]
  },
  {
    id: "iv-p9",
    notebook: "interview-notes",
    notebookName: "Interview Q&A",
    notebookIcon: "🎯",
    page: 9,
    url: "../interview-notes/index.html?page=9",
    rootUrl: "interview-notes/index.html?page=9",
    tag: "CS Core",
    title: "Page 9: CS Fundamentals: Networking, HTTP & APIs",
    sections: [
      {
        heading: "The famous one",
        content: "What happens when you type a URL and press Enter? — Parse URL; check HSTS (force HTTPS); check browser / OS / router caches. DNS: stub resolver → recursive resolver (ISP / 8.8.8.8) → root → TLD (.com) → authoritative server → A/AAAA record (cached by TTL). TCP 3-way handshake to the IP on port 443 (or QUIC over UDP for HTTP/3). TLS 1.3: ClientHello / ServerHello, server certificate verified against trusted CAs, key exchange (ECDHE) → symmetric session keys. HTTP request hits a CDN edge or load balancer → reverse proxy → app server → cache / DB. Response with status, headers (Cache-Control, Set-Cookie), compressed body. Render: parse HTML → DOM, CSS → CSSOM, run JS, layout, paint; extra resources fetched in"
      },
      {
        heading: "Transport & protocols",
        content: "TCP vs UDP — and where would you use each? HTTP/1.1 vs HTTP/2 vs HTTP/3. How does HTTPS / TLS keep data secure? OSI vs TCP/IP layers? L4 vs L7 load balancer? WebSockets vs SSE vs long polling? What does a CDN do? — TCP UDP Connection Connection-oriented (handshake) Connectionless Reliability Ordered, retransmits, flow + congestion control Best effort; may drop / reorder Overhead Higher; head-of-line blocking Low latency, small header Use HTTP/1–2, DB connections, file transfer, email DNS, video calls, gaming, streaming, QUIC (HTTP/3) HTTP/1.1: text, keep-alive, one request at a time per connection → browsers open ~6 connections; head-of-line blocking. HTTP/2: binary framing, multiplexed streams on one TCP connection, header compression (HPACK). Still TCP-level HOL blocking on packet loss. HTTP/3: over QUIC (UDP) — independent streams (no TCP HOL), faster handshakes (TLS 1.3 built in,"
      },
      {
        heading: "API design & security",
        content: "PUT vs PATCH vs POST — and which methods are idempotent? REST vs gRPC vs GraphQL — when to pick which? Authentication vs authorization; sessions vs JWT; what is OAuth 2.0? What is CORS and why does my browser call fail while Postman works? Top web security issues and how you prevent them. How do you version an API? Offset vs cursor pagination? — POST — create / action; not idempotent (retry = second order!). PUT — replace the full resource at a known URI; idempotent. PATCH — partial update; not guaranteed idempotent (e.g. 'increment'). GET, HEAD, PUT, DELETE — idempotent; GET/HEAD are also safe (no side effects). 💡 Make POST safe to retry with an Idempotency-Key header: store key → response; replay the stored response on retry (how payment APIs work). ↪ Status codes to know: 200, 201 Created, 202 Accepted, 204, 301/302/304, 400, 401 (who are you?), 403 (not allowed), 404, 409 Conflict,"
      }
    ]
  },
  {
    id: "iv-p10",
    notebook: "interview-notes",
    notebookName: "Interview Q&A",
    notebookIcon: "🎯",
    page: 10,
    url: "../interview-notes/index.html?page=10",
    rootUrl: "interview-notes/index.html?page=10",
    tag: "OOP",
    title: "Page 10: OOP, SOLID & Design Patterns Q&A",
    sections: [
      {
        heading: "OOP fundamentals",
        content: "Explain the four pillars of OOP with real examples. Abstract class vs interface — when to use which? Overloading vs overriding? Why composition over inheritance? Coupling vs cohesion? DRY, KISS, YAGNI? — Encapsulation — hide state behind behaviour: Account.Withdraw(amount) validates; the balance field is private. Protects invariants. Abstraction — expose what , hide how : IPaymentGateway.Charge() without knowing Razorpay vs Stripe internals. Inheritance — 'is-a' reuse: SavingsAccount : Account . Use sparingly. Polymorphism — one call, many behaviours: shape.Area() on Circle/Square. Compile-time = overloading; runtime = overriding (virtual dispatch). Abstract class Interface Inheritance Single Multiple State Fields, constructors No instance fields (C# 8+ allows default methods) Meaning 'is-a' with shared code 'can-do' capability / contract Use when Related classes share base logic"
      },
      {
        heading: "SOLID",
        content: "Explain SOLID — with a violation and a fix for each. — Principle Violation Fix S ingle Responsibility InvoiceService calculates totals, writes PDFs and sends emails Split into calculator, renderer, notifier — one reason to change each O pen/Closed switch (paymentType) edited for every new method IPaymentStrategy per method; add a class, don't edit old code L iskov Substitution Square : Rectangle — setting width also changes height, breaking callers Don't inherit; both implement IShape I nterface Segregation IMachine { Print; Scan; Fax } forces a basic printer to throw on Fax IPrinter , IScanner , IFax D ependency Inversion OrderService does new SqlOrderRepo() Depend on IOrderRepo , inject it (DI container) 💡 In machine coding, the grader literally checks: 'Can I add a new X without modifying existing classes?' — that's O + D in"
      },
      {
        heading: "Design patterns",
        content: "Implement a thread-safe Singleton in C#. Why is Singleton often called an anti-pattern? Factory vs Abstract Factory vs Builder. Observer pattern — where have you used it? Decorator vs Proxy vs Adapter? State pattern — when? Chain of Responsibility? What is Dependency Injection / IoC? 'Which design patterns have you used in your project?' — how to answer. — Alternatives: double-checked locking with volatile , or a static readonly field (eager). Downsides: hidden global state, hard to unit-test/mock, couples callers to a concrete class. Better in modern .NET: register as a singleton lifetime in the DI container ( services.AddSingleton<IConfigCache, ConfigCache>() ). Factory Method: one method decides which concrete class to create ( NotificationFactory.Create('sms') ). Hides new + the switch in one place. Abstract Factory: creates families of related objects ( IUiFactory → Windows button"
      }
    ]
  },
  {
    id: "iv-p11",
    notebook: "interview-notes",
    notebookName: "Interview Q&A",
    notebookIcon: "🎯",
    page: 11,
    url: "../interview-notes/index.html?page=11",
    rootUrl: "interview-notes/index.html?page=11",
    tag: "LLD",
    title: "Page 11: Low-Level Design & Machine Coding Rounds",
    sections: [
      {
        heading: "The 90-minute game plan",
        content: "The 90-minute game plan 0–10 min · Read & clarify List the must-have flows (3–5) and park the nice-to-haves. Ask: in-memory OK? CLI/driver or tests? Concurrency expected? 10–25 min · Model Nouns → entities, verbs → service methods. Write interfaces for anything that will vary (pricing, strategy, storage). Enums for types/status. 25–70 min · Build the happy path end-to-end Models → repository (in-memory dictionaries) → services → driver. Commit to runnable early, then deepen. 70–85 min · Edge cases & demo Validation, custom exceptions, a main/driver or unit tests that exercise every requirement. 85–90 min · Extension talk Show where a new requirement plugs in ('new split type = new class implementing ISplitStrategy'). Why candidates fail machine coding Code doesn't run at the end (spent 60 min on the 'perfect' design). One god class ( SplitwiseManager with 900 lines). Hard-coded if (type"
      },
      {
        heading: "Parking lot — the classic",
        content: "Design a Parking Lot (multi-floor, vehicle types, tickets, fees). — Entities ParkingLot, Floor, ParkingSpot (type, isFree), Vehicle (type, number), Ticket, Payment, Gate. Interfaces ISpotAllocationStrategy.FindSpot(vehicleType) , IFeeStrategy.Calculate(ticket, exitTime) . Flows Park → find spot → mark occupied → issue ticket. Unpark → compute fee → pay → free spot. Data Per floor and type, a set/min-heap of free spot IDs → O(log n) nearest spot; map ticketId → ticket. Concurrency Two gates must not assign the same spot: lock per floor+type, or atomic compare-and-set on spot.isFree . Extensions EV charging spots, reservations, display boards (Observer on spot changes), monthly passes (new fee"
      },
      {
        heading: "The rest of the top 10",
        content: "Design Splitwise (expenses, splits, balances, settle up). Design BookMyShow — how do you stop two users booking the same seat? Implement a rate limiter class (per user, N requests per second). Design an Elevator system. Snake & Ladder? Vending machine? In-memory key-value store with TTL? Food ordering (Flipkart-style)? Logger / in-memory pub-sub? Library management (T3 favourite)? — Entities User, Group, Expense (paidBy, amount, splits), Split (user, amount). Strategy ISplitStrategy : EqualSplit, ExactSplit, PercentSplit (validate sums = amount / 100%). Balances Dictionary<(from, to), decimal> or per-user net balance; update on each expense. Simplify debts Compute net balance per user; repeatedly match the largest creditor with the largest debtor (two heaps) — at most n−1 transactions. Gotchas Use decimal for money; rounding — give the leftover paisa to the first person; idempotent"
      }
    ]
  },
  {
    id: "iv-p12",
    notebook: "interview-notes",
    notebookName: "Interview Q&A",
    notebookIcon: "🎯",
    page: 12,
    url: "../interview-notes/index.html?page=12",
    rootUrl: "interview-notes/index.html?page=12",
    tag: "HLD",
    title: "Page 12: System Design Concepts: Rapid-Fire Q&A",
    sections: [
      {
        heading: "The skeleton almost every answer reuses",
        content: "The skeleton almost every answer reuses Fig 12.1 — start every design from this and then change one box for the problem's real"
      },
      {
        heading: "Consistency & data distribution",
        content: "Explain CAP — and why PACELC is the more useful version. Leader-follower vs multi-leader vs leaderless replication; what is a quorum? How do you shard a database? What problems come with it? Vertical vs horizontal scaling? Strong vs eventual consistency? Partitioning vs sharding vs replication? How is a leader elected? — Answer: During a network P artition, a distributed store must choose C onsistency (refuse/serve errors to stay correct) or A vailability (answer, possibly stale). Partitions are not optional, so it's really CP vs AP when partitioned . PACELC: if Partition → A or C; E lse (normal operation) → L atency or C onsistency. Example: DynamoDB/Cassandra default PA/EL (fast, eventually consistent, tunable); Spanner / traditional single-leader SQL PC/EC. 💡 Choose per feature: payments/inventory → consistency; likes, feeds, view counts → availability + eventual consistency. Single"
      },
      {
        heading: "Caching, queues & reliability",
        content: "Caching strategies, eviction and the hard part — invalidation. Why use a message queue? Kafka vs RabbitMQ? Delivery guarantees? How do you keep data consistent across microservices (no distributed DB transaction)? Rate-limiting algorithms — compare them. Retries done right? Circuit breaker & bulkhead? Load-balancing algorithms? Monolith vs microservices? SLI vs SLO vs SLA; why p99? Bloom filter — where is it used? — Strategy How Good for Cache-aside App reads cache → miss → DB → populate; on write update DB then delete the key Default choice; read-heavy Write-through Write cache + DB synchronously Read-after-write freshness Write-back Write cache, flush to DB later Write-heavy counters; risk of loss Write-around Write DB only; cache fills on read Data rarely re-read Eviction: LRU, LFU, TTL. Problems: stampede (many misses at once → request coalescing / lock per key, jittered TTLs),"
      },
      {
        heading: "Napkin numbers to memorise",
        content: "Napkin numbers to memorise Thing Rough number Use it for 1 day ≈ 86,400 s ≈ 10 5 s 1M req/day ≈ 12 QPS avg; peak ≈ 2–5× avg Memory read / SSD read / same-DC round trip ~100 ns / ~100 µs / ~0.5 ms Why caches and batching win Cross-continent round trip ~100–150 ms Why multi-region + CDN One Redis node ~100K simple ops/s Cache sizing One SQL primary a few thousand write TPS (varies a lot) When to shard Storage 100M users × 1 KB = 100 GB Fits one node? Then don't shard"
      }
    ]
  },
  {
    id: "iv-p13",
    notebook: "interview-notes",
    notebookName: "Interview Q&A",
    notebookIcon: "🎯",
    page: 13,
    url: "../interview-notes/index.html?page=13",
    rootUrl: "interview-notes/index.html?page=13",
    tag: "HLD",
    title: "Page 13: System Design Problems: Answer Blueprints",
    sections: [
      {
        heading: "The 45-minute shape",
        content: "The 45-minute shape Minutes Step Say / draw 0–5 Requirements 3–5 functional, then non-functional: scale, latency, consistency, availability. Write them down. 5–10 Estimates DAU → QPS (avg, peak), storage/day, read:write ratio. Only the numbers that change the design. 10–15 API + data model 3–4 endpoints; main tables/keys; choose SQL/NoSQL with a reason. 15–25 High-level diagram The skeleton from page 12, walking one request end to end. 25–40 Deep dives The 2 hardest parts (the interviewer often picks). Trade-offs, failure modes. 40–45 Wrap-up Bottlenecks, monitoring, what you'd do next with more"
      },
      {
        heading: "Social & real-time",
        content: "Design a News Feed (Twitter / Instagram / LinkedIn). Design a Notification System (push, SMS, email, in-app). Design a distributed rate limiter for an API gateway. — Requirements Post, follow, see a ranked/recent feed; feed loads < 200 ms; eventual consistency OK (a post appearing 5 s late is fine). Estimates 300M DAU × 10 feed loads/day ≈ 35K QPS avg reads; writes ~10× fewer → read-heavy. API POST /posts , POST /follow/{id} , GET /feed?cursor= . Data Posts (sharded by post_id / author), follow graph (user → followers, followee lists), feed cache (user → list of post IDs), media in object storage + CDN. Deep dive Hybrid fan-out (Fig 13.1); ranking service (features: recency, affinity, engagement); cursor pagination; cache warm-up for inactive users computed on login. Trade-offs Fan-out cost vs read latency; ordering under eventual consistency; deleting a post must remove/skip it on read"
      },
      {
        heading: "Location, money & search",
        content: "Design Uber / Ola (ride matching). Design a Payment System (wallet / checkout). Design Typeahead / Search Autocomplete. Design YouTube / Netflix (upload + streaming). Ticket booking at a flash sale (IRCTC Tatkal / concert drop)? Web crawler? Distributed cache (like Redis Cluster)? Distributed job scheduler (cron at scale)? — Requirements Drivers send location every ~4 s; riders request a ride, get matched in seconds; trip tracking; pricing. Estimates 1M active drivers / 4 s ≈ 250K location writes/s → keep live locations in memory , not in a SQL table. Geo index Geohash / S2 / H3 cells: driver location → cell; search the rider's cell + neighbours (Redis GEO or an in-memory sharded index by cell). Matching Candidate drivers ranked by ETA (routing service), offer to one at a time with timeout; lock driver state to avoid double assignment. Trip State machine (Requested → Accepted → Arrived"
      }
    ]
  },
  {
    id: "iv-p14",
    notebook: "interview-notes",
    notebookName: "Interview Q&A",
    notebookIcon: "🎯",
    page: 14,
    url: "../interview-notes/index.html?page=14",
    rootUrl: "interview-notes/index.html?page=14",
    tag: "Language",
    title: "Page 14: C# / .NET & JavaScript / Node.js Q&A",
    sections: [
      {
        heading: "C# / .NET",
        content: "How does async/await work, and why does .Result cause deadlocks? Value types vs reference types; struct vs class; boxing. How does the .NET garbage collector work? IDisposable vs finalizer? IEnumerable vs IQueryable; what is deferred execution? DI lifetimes — and the 'captive dependency' bug? ASP.NET Core middleware pipeline? const vs readonly vs static readonly? Why is string immutable; when StringBuilder? EF Core performance tips? How does Dictionary work internally? — The compiler rewrites an async method into a state machine . At an await on an incomplete task, the method returns to its caller; the rest is registered as a continuation. For I/O (HTTP, DB, file) no thread is blocked while waiting — the OS signals completion and a thread-pool thread resumes the continuation. That's why async scales servers. The continuation resumes on the captured SynchronizationContext (UI thread, old"
      },
      {
        heading: "JavaScript / Node.js",
        content: "What is the output order? (event loop) Closures — and the classic var-in-a-loop bug. Implement debounce. How is throttle different? var vs let vs const; hoisting; TDZ? How is 'this' decided? Promise.all vs allSettled vs race vs any? Node is single-threaded — how does it handle 10K connections? == vs ===; prototypal inheritance? — Answer: A D F C E B . Sync first (A, D — an async function runs synchronously until its first await — then F). Then microtasks in order (C, E). Then the timer macrotask (B). Answer: A closure is a function bundled with references to the variables of the scope where it was created. var is function-scoped → one shared i (3 when the timers run). let is block-scoped → a fresh binding per iteration. Uses: data privacy (module pattern), memoisation, partial application, React hooks. Debounce: run once after the calls stop for wait ms (search box). Throttle: run at"
      }
    ]
  },
  {
    id: "iv-p15",
    notebook: "interview-notes",
    notebookName: "Interview Q&A",
    notebookIcon: "🎯",
    page: 15,
    url: "../interview-notes/index.html?page=15",
    rootUrl: "interview-notes/index.html?page=15",
    tag: "DevOps",
    title: "Page 15: Docker, Kubernetes & Cloud Q&A",
    sections: [
      {
        heading: "Docker",
        content: "Container vs virtual machine. How do you make a Docker image small, fast to build and secure? CMD vs ENTRYPOINT; COPY vs ADD? Volumes vs bind mounts? Docker networks? Image vs container? — Answer: A VM virtualises hardware — each VM runs its own guest OS kernel on a hypervisor (GBs, boots in minutes, strong isolation). A container virtualises the OS — processes share the host kernel, isolated with Linux namespaces (pid, net, mount…) and limited with cgroups (CPU, memory) — MBs, starts in milliseconds, weaker isolation. Many companies run containers inside VMs for both. Multi-stage builds; slim/distroless/alpine base images. Layer order: least-changing first (dependency manifests before source) to maximise cache hits; .dockerignore . Combine RUN steps and clean package caches; pin image versions/digests. Run as non-root, no secrets in layers (use build secrets / runtime env from a"
      },
      {
        heading: "Kubernetes",
        content: "Explain Kubernetes architecture — what happens on kubectl apply ? Liveness vs readiness vs startup probes. A pod is in CrashLoopBackOff. How do you debug it? Requests vs limits; how does autoscaling work? Deployment vs StatefulSet vs DaemonSet vs Job? Service types & Ingress? ConfigMap vs Secret? Rolling vs blue-green vs canary? — Control plane: kube-apiserver (the only door; validates, stores), etcd (consistent key-value store of desired + current state), scheduler (picks a node for unscheduled pods), controller-manager (reconciliation loops: Deployment, ReplicaSet, Node…), cloud-controller-manager. Nodes: kubelet (starts containers via the runtime, reports status, runs probes), kube-proxy (Service routing via iptables/IPVS — or eBPF CNIs), container runtime (containerd). apply flow: kubectl → API server (authn/authz/admission) → etcd → Deployment controller creates a ReplicaSet → RS"
      },
      {
        heading: "Cloud & delivery",
        content: "IaaS vs PaaS vs SaaS? Describe your CI/CD pipeline. Zero-downtime deploy with a DB schema change? AWS ↔ Azure service map (quick)? — IaaS: you manage OS and up (EC2, Azure VMs). PaaS: you deploy code, provider runs the platform (App Service, Elastic Beanstalk, Cloud Run). SaaS: you just use the software (M365, Salesforce). PR → build + unit tests + lint + SAST → image build + scan → push to registry → deploy to dev (IaC: Terraform/Bicep, Helm) → integration tests → staging → approval → prod canary → monitor → full rollout / auto-rollback. Expand → migrate → contract: add the new column (nullable) → deploy code that writes both and reads new-with-fallback → backfill → switch reads → later drop the old column. Never rename in one step. EC2 ↔ VMs · S3 ↔ Blob Storage · Lambda ↔ Functions · EKS ↔ AKS · RDS ↔ Azure SQL · DynamoDB ↔ Cosmos DB · SQS ↔ Service Bus queues · SNS ↔ Event"
      }
    ]
  },
  {
    id: "iv-p16",
    notebook: "interview-notes",
    notebookName: "Interview Q&A",
    notebookIcon: "🎯",
    page: 16,
    url: "../interview-notes/index.html?page=16",
    rootUrl: "interview-notes/index.html?page=16",
    tag: "AI",
    title: "Page 16: AI / ML & LLM Q&A (+ AI-Assisted Coding Rounds)",
    sections: [
      {
        heading: "ML fundamentals (still asked)",
        content: "Supervised vs unsupervised vs reinforcement learning? Overfitting vs underfitting? Precision vs recall — which matters when? How does a neural network learn? — Supervised: labelled examples → predict (spam, price). Unsupervised: find structure without labels (clustering, anomaly detection). RL: agent learns from rewards (games, robotics; RLHF tunes LLMs on human preferences). Overfit: great on train, poor on test (high variance) → more data, regularisation (L1/L2, dropout), early stopping, simpler model. Underfit: poor on both (high bias) → richer features/model, train longer. Precision = of predicted positives, how many are right (spam filter: don't bin real mail). Recall = of real positives, how many we caught (cancer screening, fraud). F1 = harmonic mean. Accuracy misleads on imbalanced data. Forward pass → loss → backpropagation computes gradients via the chain rule → gradient"
      },
      {
        heading: "LLMs",
        content: "Explain how a Transformer / LLM works in 2 minutes. What are embeddings and how does vector search work? Design a RAG-based Q&A bot over company documents. Prompting vs RAG vs fine-tuning — how do you choose? How do you reduce hallucinations? What is an AI agent / tool calling? What is prompt injection; how do you defend? How do you cut LLM cost and latency? — Text → tokens (sub-words) → embeddings (vectors) + position information. Each layer uses self-attention : every token builds a Query, Key and Value; attention weights = softmax(Q·Kᵀ / √d); the output mixes Values — so each token 'looks at' the tokens most relevant to it. Multi-head = several such views in parallel. Then a feed-forward network. Decoder-only LLMs are trained to predict the next token on huge text corpora (causal mask: can't see the future), then instruction-tuned and preference-tuned (RLHF/DPO). Generation = sample"
      },
      {
        heading: "AI-assisted coding rounds (Meta pilot, others following)",
        content: "How should I use the AI assistant in an AI-enabled interview round? — First 3–5 min: no AI Read the codebase and the task yourself. Explain the structure and your plan aloud — they are scoring your understanding. Prompt precisely Give the AI the data structure / algorithm, the language, constraints and the quality bar ('O(n log n), handle empty input, keep the existing interface'). Review every line Read generated code before using it; point out what you'd change. Blind paste = red flag. Verify Run tests, add edge cases, debug failures yourself; ask the AI for test ideas, not just code. Narrate trade-offs Why this approach, what the AI got wrong, what you'd do in production. ⚠️ The signal is judgment: decomposition, validation and debugging. Using AI to skip understanding loses the round even if tests"
      }
    ]
  },
  {
    id: "iv-p17",
    notebook: "interview-notes",
    notebookName: "Interview Q&A",
    notebookIcon: "🎯",
    page: 17,
    url: "../interview-notes/index.html?page=17",
    rootUrl: "interview-notes/index.html?page=17",
    tag: "Behavioral",
    title: "Page 17: Behavioral Q&A: STAR, Amazon LPs, Googleyness & Values",
    sections: [
      {
        heading: "STAR, with the right proportions",
        content: "STAR, with the right proportions Fig 17.1 — most weak answers are 50% situation. Interviewers score the Action and the Result . 📒 Build a story bank (8–10) Hardest technical problem Production incident you led Conflict / disagreement Failure / mistake Influence without authority Mentoring / growing someone Ambiguous project you shaped Customer-driven decision 🎯 Senior signals Scope beyond your team Trade-offs stated explicitly Numbers: latency, cost, %, people You changed a process, not just code Honest learning from failure 🏢 What each company calls it Amazon: 16 Leadership Principles Google: Googleyness & Leadership Meta: ambiguity, conflict, growth, impact Atlassian: 5 values (page 2) Microsoft: growth mindset,"
      },
      {
        heading: "Amazon's 16 Leadership Principles → the question you'll hear",
        content: "Amazon's 16 Leadership Principles → the question you'll hear Principle Typical question Customer Obsession Tell me about a time you went beyond what the customer asked for. Ownership A time you took on something outside your responsibility. Invent and Simplify A time you simplified a complex process or system. Are Right, A Lot A decision you made with incomplete data. Were you right? Learn and Be Curious Something you learned recently on your own and applied. Hire and Develop the Best How you mentored someone / raised the bar in hiring. Insist on the Highest Standards A time you refused to ship something that wasn't good enough. Think Big A bold idea you proposed that changed direction. Bias for Action A time you acted quickly on a calculated risk. Frugality Accomplished more with less (cost, people, time). Earn Trust A time you admitted a mistake / received hard feedback. Dive Deep A"
      },
      {
        heading: "Top questions with worked answers",
        content: "'Tell me about yourself.' 'Tell me about a conflict with a teammate or manager.' 'Tell me about a time you failed / made a mistake.' 'Describe the most complex technical problem you solved.' (Dive Deep) 'Tell me about a time you influenced without authority.' 'Tell me about a time you had to make a decision with incomplete information / under a tight deadline.' 'How do you mentor engineers?' 'Disagree and commit' example? 'How do you handle critical feedback?' 'Time you handled ambiguity?' — Formula (90 s): Present → Past → Why you're here. 'I'm a senior backend engineer with 8+ years, mostly C#/.NET and distributed systems on Azure. Right now I lead the payments-integration team of 5 at ___, where I re-architected our settlement pipeline from nightly batches to event-driven processing on Kafka — settlement time dropped from ~8 hours to under 10 minutes. Before that I built ___ at ___,"
      }
    ]
  },
  {
    id: "iv-p18",
    notebook: "interview-notes",
    notebookName: "Interview Q&A",
    notebookIcon: "🎯",
    page: 18,
    url: "../interview-notes/index.html?page=18",
    rootUrl: "interview-notes/index.html?page=18",
    tag: "HR",
    title: "Page 18: Senior / Staff, Managerial & HR Rounds (India)",
    sections: [
      {
        heading: "Project deep dive & hiring-manager round",
        content: "'Walk me through the most significant project you've worked on.' 'How do you balance tech debt against feature work?' 'A team member is underperforming. What do you do?' 'How do you estimate work?' 'Client changes requirements mid-sprint / escalates?' 'Production is down at 2 AM — walk me through it.' Staff-level: 'How do you set technical direction for multiple teams?' — Why it mattered (1 min) Business problem + metric: 'checkout failures cost ~2% of orders'. Architecture (3–4 min) Draw it: components, data flow, scale numbers (QPS, data size, team size). Your part (2 min) What you designed/decided/led vs what the team did. Hardest decision (3 min) Two options, trade-offs, why you chose one, what it cost. What broke + what you'd change (2 min) Incidents, tech debt, the redesign you'd do today. Shows maturity. ⚠️ Be ready for 'why not X?' on every box you draw. If you can't defend a"
      },
      {
        heading: "HR round — India specifics",
        content: "'What is your current and expected CTC?' How do I negotiate the offer? 'What is your notice period? Can you join early?' 'Why are you leaving your current company?' 'Why this company?' 'Strengths and weaknesses?' 'Will you accept a counter-offer?' Explaining a career gap? Questions to ask them at the end? — Current: be honest and break it down (fixed, variable, stock, bonus) — Indian companies often ask for payslips/offer letters, so inflated numbers backfire. Expected: anchor on the role and market , not a hike %: 'Based on the scope of this senior role and offers in the market, I'm looking at ₹__ fixed and total comp in the ₹__–__ range. I'm flexible on the mix.' Early in the process, you can defer: 'I'd like to understand the role and level first; I'm sure we can align if it's the right fit.' Research bands (levels.fyi, AmbitionBox, Glassdoor, peers) for that company + level before"
      }
    ]
  },
  {
    id: "iv-p19",
    notebook: "interview-notes",
    notebookName: "Interview Q&A",
    notebookIcon: "🎯",
    page: 19,
    url: "../interview-notes/index.html?page=19",
    rootUrl: "interview-notes/index.html?page=19",
    tag: "Bank II",
    title: "Page 19: Q&A Bank II — DSA V: Matrix, Bit Manipulation & Strings",
    sections: [
      {
        heading: "Matrix",
        content: "Rotate Image (n×n, 90° clockwise, in place). Spiral Matrix — return elements in spiral order. Set Matrix Zeroes with O(1) extra space. Search a row- and column-sorted 2D matrix? Game of Life in place? — ⚠️ Starting j at 0 swaps every pair twice and undoes the transpose. Answer: Keep four walls top, bottom, left, right . Walk right along top (top++), down the right wall (right--), then — only if top ≤ bottom — left along bottom (bottom--), and only if left ≤ right — up the left wall (left++). Repeat while top ≤ bottom and left ≤ right. O(m·n) . ⚠️ The two 'only if' checks prevent double-printing the middle row/column of non-square matrices. Answer: Use the first row and first column as marker arrays. First remember (two booleans) whether row 0 / column 0 themselves contain a zero. Mark m[i][0] = m[0][j] = 0 for every zero cell, then zero cells (i, j ≥ 1) whose row or column marker is 0,"
      },
      {
        heading: "Bit manipulation",
        content: "Single Number — every element appears twice except one. Counting Bits — number of 1s for every i in 0..n. Missing Number in 0..n? Generate all subsets with bitmasks? Add two integers without + or −? Useful bit one-liners? — Answer: XOR everything: a ^ a = 0 , a ^ 0 = a , and XOR is commutative → the pairs cancel. O(n) / O(1). ↪ Every other number appears three times → count each bit position mod 3. Two singles → XOR all to get x^y, split numbers by any set bit of that result, XOR each group. Alternative: bits[i] = bits[i & (i - 1)] + 1 . Both O(n) . XOR all indices 0..n with all values — the missing one survives. Or n(n+1)/2 − sum (watch overflow → long). Sorting is O(n log n) and not needed. For mask 0..2ⁿ−1, element i is in the subset if (mask >> i) & 1 . O(n·2ⁿ). Same idea powers bitmask DP (TSP-style, n ≤ 20). Sum without carry = a ^ b; carry = (a & b) << 1. Repeat with a = sum, b ="
      },
      {
        heading: "String puzzles",
        content: "Find a pattern in text in O(n + m) — explain KMP. Decode String: '3[a2[c]]' → 'accaccacc'. Basic Calculator II ('3+2*2', no parentheses). String to Integer (atoi) — what edge cases? Valid Palindrome II (delete at most one char)? Reorganize String (no two equal neighbours)? Reverse words in a string in place? — Answer: Precompute lps[i] = length of the longest proper prefix of pattern[0..i] that is also a suffix. On a mismatch, instead of restarting, jump the pattern pointer to lps[j-1] — the text pointer never moves backwards. ↪ Alternatives to name: Rabin-Karp (rolling hash, great for many patterns / plagiarism), Z-algorithm. In production: IndexOf(…, StringComparison.Ordinal) . Answer: Two stacks: counts and partial strings. Digit → build k (multi-digit!). [ → push (k, current), reset. ] → pop (k, prev), current = prev + current × k . Letter → append. Use StringBuilder. Time ="
      }
    ]
  },
  {
    id: "iv-p20",
    notebook: "interview-notes",
    notebookName: "Interview Q&A",
    notebookIcon: "🎯",
    page: 20,
    url: "../interview-notes/index.html?page=20",
    rootUrl: "interview-notes/index.html?page=20",
    tag: "Bank II",
    title: "Page 20: Q&A Bank II — DSA VI: Hard Tier-1 Patterns & Design-a-DS",
    sections: [
      {
        heading: "Monotonic deque",
        content: "Sliding Window Maximum in O(n). — Answer: Deque of indices whose values are decreasing. For each i: drop the front if it left the window; pop the back while its value ≤ nums[i] (they can never be a max again); push i; the front is the window max. Each index enters and leaves once → O(n) . i nums[i] deque (values) window max 0 1 [1] — 1 3 [3] (1 popped) — 2 −1 [3, −1] 3 3 −3 [3, −1, −3] 3 4 5 [5] (3 expired, −3, −1 popped) 5 5 3 [5, 3] 5 6 6 [6] 6 7 7 [7] 7 ↪ Same deque trick: Shortest Subarray with Sum ≥ K (with prefix sums, negatives allowed), Constrained Subsequence Sum, Jump Game"
      },
      {
        heading: "Design a data structure",
        content: "Insert, Delete, GetRandom — all O(1). Time-Based Key-Value Store: set(key, value, t), get(key, t) → latest value at or before t. Design a Hit Counter (hits in last 5 min)? Design an LFU cache in O(1)? Flatten a Nested List Iterator? Median of a sliding window? — Answer: List<int> for O(1) random index + Dictionary<int,int> value → index. Delete: move the last element into the deleted slot, update its index in the map, remove the last slot. GetRandom: list[rng.Next(list.Count)] . ↪ Duplicates allowed → map value → HashSet of indices. Answer: Dictionary<string, List<(int t, string v)>> ; timestamps arrive increasing, so each list stays sorted. get → binary search for the last entry with time ≤ t. set O(1), get O(log n). ↪ Out-of-order timestamps → SortedList / SortedDictionary per key. This is MVCC in miniature — mention it. Queue of timestamps, pop older than t−300 (exact, memory ∝"
      },
      {
        heading: "Hard DP",
        content: "Regular Expression Matching with '.' and '*'. Burst Balloons — the 'interval DP' template. Longest Valid Parentheses? Longest Increasing Path in a Matrix? — Answer: dp[i][j] = does s[0..i) match p[0..j). If p[j−1] is '*': zero copies → dp[i][j−2], or one more copy → dp[i−1][j] when s[i−1] matches p[j−2]. Else: dp[i−1][j−1] when chars match (or p is '.'). Base: dp[0][0] = true; dp[0][j] = p[j−1]=='*' && dp[0][j−2] (patterns like 'a*b*' match empty). O(m·n) . Answer: Pad with 1s at both ends. Think about the balloon burst last in (l, r): its neighbours are then l and r, and the two sides are independent. dp[l][r] = max over k of dp[l][k] + dp[k][r] + a[l]·a[k]·a[r] , filled by increasing interval length. O(n³) . 💡 'Choose the last action, not the first' turns dependent sub-problems into independent ones. Same for Matrix-Chain Multiplication and Minimum Cost to Cut a Stick. Stack of"
      },
      {
        heading: "Hard graphs",
        content: "Critical Connections (bridges) in a network? Parallel Courses / minimum semesters? Bus Routes (fewest buses)? Shortest path visiting all nodes (n ≤ 12)? — Tarjan: DFS with discovery time disc[u] and low[u] = earliest discovery reachable via the subtree plus one back edge. Edge (u, v) is a bridge if low[v] > disc[u] . O(V + E). Kahn's BFS level by level — each level is one semester; answer = number of levels, −1 if a cycle leaves nodes unprocessed. Longest path in a DAG = DP in topological order. BFS over routes , not stops: map stop → routes; start with routes containing the source; mark visited routes and stops. Level = buses taken. O(sum of route lengths). BFS over state (node, visitedMask), starting from every node at once; the first state with all bits set gives the answer. O(2ⁿ · n²). Recognise 'n ≤ 20' → bitmask"
      }
    ]
  },
  {
    id: "iv-p21",
    notebook: "interview-notes",
    notebookName: "Interview Q&A",
    notebookIcon: "🎯",
    page: 21,
    url: "../interview-notes/index.html?page=21",
    rootUrl: "interview-notes/index.html?page=21",
    tag: "Bank II",
    title: "Page 21: Q&A Bank II — System Design II: More Blueprints",
    sections: [
      {
        heading: "Storage, collaboration & logs",
        content: "Design Google Docs (real-time collaborative editing). Design Dropbox / Google Drive (file sync). Design a distributed message queue / log like Kafka. — Core problem Two users edit the same paragraph at once; everyone must converge to the same text without locking. Algorithms OT (Operational Transformation): a central server orders operations and transforms concurrent ones against each other (Google Docs style). CRDT : each character gets a unique, ordered ID so replicas merge without a central order (works offline / peer-to-peer; more metadata). Architecture WebSocket gateway → document session server (one owner per doc, sticky by doc_id) holding the live state → operation log (append-only) + periodic snapshots in storage. Presence/cursors via a lightweight pub/sub channel. Deep dives Reconnect: client sends last acked version, server replays ops since then. Version history = snapshots"
      },
      {
        heading: "IDs, ranking & location",
        content: "Design a distributed unique ID generator. Design a real-time gaming leaderboard (top 10 + my rank). Design 'nearby restaurants' (Yelp / Swiggy discovery). — Option Pros Cons DB auto-increment Simple, ordered Single bottleneck; multi-master needs step/offset tricks UUID v4 No coordination 128-bit, random → poor index locality UUID v7 / ULID Time-ordered, no coordination Still 128-bit Snowflake (Fig 21.1) 64-bit, time-sortable, fast Needs machine-ID assignment (ZooKeeper/config) and sane clocks Ticket server / ID ranges Each node leases a block of 1,000 IDs Gaps on crash; range service must be HA Store Redis sorted set per leaderboard: ZINCRBY on score, ZREVRANGE 0 9 for the top 10, ZREVRANK for a user's rank — all O(log n). Durability Scores also written to a DB (source of truth) via the game service; Redis can be rebuilt. Scale Hundreds of millions of users: shard by score range, or"
      },
      {
        heading: "Analytics, booking & migrations",
        content: "Design ad-click / metrics aggregation (counts per minute, at scale). Design hotel / Airbnb booking — how do you prevent double booking? Migrate a live database with zero downtime? Active-active multi-region — what's hard? Handle a hot partition / celebrity key? Design an online code judge (LeetCode)? — Ingest Click events → Kafka (keyed by ad_id) → stream processor (Flink / Kafka Streams) with tumbling 1-min windows and event-time watermarks for late events. Store Aggregates to an OLAP/time-series store (ClickHouse, Druid, Pinot); raw events to cheap object storage for replay and audits. Correctness Dedupe by click_id; exactly-once sinks or idempotent upserts; nightly batch reconciliation (Lambda) or replay-from-log (Kappa). Hot keys A viral ad → pre-aggregate per partition, then merge. Answer: Model inventory per room-type per date ( room_type_id, date, total, reserved ). Booking = one"
      }
    ]
  },
  {
    id: "iv-p22",
    notebook: "interview-notes",
    notebookName: "Interview Q&A",
    notebookIcon: "🎯",
    page: 22,
    url: "../interview-notes/index.html?page=22",
    rootUrl: "interview-notes/index.html?page=22",
    tag: "Bank II",
    title: "Page 22: Q&A Bank II — LLD & Machine Coding II",
    sections: [
      {
        heading: "Order matching engine (stock exchange)",
        content: "Implement a limit-order matching engine (price-time priority). — ↪ Extensions they ask: cancel (lazy-delete set checked on peek, or SortedDictionary<price, LinkedList<Order>> + id → node map for O(1) cancel), market orders (no price check), one book per symbol, single-threaded matcher per symbol fed by a queue (no locks,"
      },
      {
        heading: "More machine-coding problems",
        content: "Shopping cart with pluggable discount rules. Cab booking (Uber/Ola LLD): riders, drivers, matching, fares. Tic-tac-toe on an n×n board — check the winner in O(1) per move. Meeting room scheduler? ATM machine? Task scheduler with dependencies and priorities? Cache with pluggable eviction policy? Inventory with reservations (e-commerce)? Feature-flag evaluator (Atlassian-style)? — Entities Product (id, price, category), Cart (lines: product + qty), Coupon, User (tier). Rules IDiscountRule { bool AppliesTo(Cart); decimal Discount(Cart); } — FlatOff, PercentOff (capped), BuyXGetY, CategoryOff, FirstOrder. A PricingEngine runs rules in priority order; a stacking policy (best single / all stackable) is itself a strategy. Money decimal , round once at the end, never below zero, return a line-by-line breakdown (users and graders both love it). Extension New rule = new class + registration;"
      }
    ]
  },
  {
    id: "iv-p23",
    notebook: "interview-notes",
    notebookName: "Interview Q&A",
    notebookIcon: "🎯",
    page: 23,
    url: "../interview-notes/index.html?page=23",
    rootUrl: "interview-notes/index.html?page=23",
    tag: "Bank II",
    title: "Page 23: Q&A Bank II — Production Scenarios (.NET, SQL, Network, K8s, Cloud)",
    sections: [
      {
        heading: ".NET services in production",
        content: "CPU is at 100% on your API pods. Walk me through it. Memory keeps growing until the pod is OOMKilled. How do you find the leak? Latency spikes under load but CPU is low. What is thread-pool starvation? Why is async void dangerous? Global error handling in ASP.NET Core? IMemoryCache vs IDistributedCache? How do you make logs useful? — Mitigate: scale out / roll back the last deploy if it correlates. Scope: all pods or one? Which endpoints got slower (APM traces)? Traffic spike or same traffic? Evidence: dotnet-counters monitor (CPU, GC %, thread-pool queue, exceptions/sec); dotnet-trace collect for a CPU profile → hot methods. Usual suspects: tight retry loops, regex backtracking, huge JSON serialisation, LINQ in loops (O(n²)), GC thrash from allocations, exception storms. Prevent: load test the hot path, alerts on CPU + p99, regex timeouts, allocation budgets. Confirm with metrics"
      },
      {
        heading: "Database scenarios",
        content: "Design an index for: WHERE tenant_id = ? AND status = ? AND created_at > ? ORDER BY created_at. Database deadlocks in production? Lost updates with EF Core? User saved data but doesn't see it on refresh? Add a column to a 500M-row table safely? — Answer: Composite index (tenant_id, status, created_at) — equality columns first, then the range/sort column . The index then serves the filter and the ORDER BY (no sort step). Add frequently selected columns with INCLUDE to make it covering. Verify with the actual plan. ⚠️ Putting created_at first makes the range scan everything after the date for all tenants. Capture the deadlock graph (SQL Server extended events / Postgres logs). Fix: touch tables/rows in a consistent order, keep transactions short, add indexes so updates lock fewer rows, retry the victim transaction. Optimistic concurrency: a rowversion / [Timestamp] or concurrency-token"
      },
      {
        heading: "Network & Linux debugging",
        content: "Users get intermittent 502/504 errors after a deploy. Debug it. Linux commands for a sick server? 'Works on my machine, fails in prod with SSL error'? — Correlate with the deploy → roll back first if impact is high. 502 during rollout: pods killed while serving (no graceful shutdown / preStop delay), readiness passing too early, keep-alive timeout of app shorter than the LB's (LB reuses a connection the app just closed). 504: a slow dependency or query; LB timeout shorter than the request path; thread-pool starvation. Tools: LB access logs (target status, latency), app logs by trace ID, curl -v from inside the cluster, pod events. top/htop (CPU, load), free -m (memory), df -h / du -sh (disk), ss -tulpn (ports), lsof -p (open files), journalctl -u svc / tail -f (logs), dig / nslookup (DNS), curl -v (HTTP/TLS), tcpdump (packets). Expired/incomplete certificate chain, hostname mismatch,"
      },
      {
        heading: "Kubernetes, cloud & delivery scenarios",
        content: "Pod stuck in Pending? ImagePullBackOff? Service exists but calls time out? RPO vs RTO; DR strategies? Cut the cloud bill by 30%? git merge vs rebase; revert vs reset? Unit vs integration vs contract tests? How do you roll out a risky change? — kubectl describe pod → events: insufficient CPU/memory (requests too high / cluster full → autoscaler), node selector/taints without tolerations, unbound PVC, quota exceeded. Wrong image name/tag, private registry without imagePullSecrets / managed identity, registry rate limits (Docker Hub), network egress blocked. kubectl get endpoints svc — empty means the selector doesn't match pod labels or pods aren't Ready. Then check targetPort vs container port, NetworkPolicies, and DNS ( svc.namespace.svc.cluster.local ). RPO = how much data you can lose (time since last good copy); RTO = how long you can be down. Cheapest → fastest: backup & restore →"
      }
    ]
  },
  {
    id: "iv-p24",
    notebook: "interview-notes",
    notebookName: "Interview Q&A",
    notebookIcon: "🎯",
    page: 24,
    url: "../interview-notes/index.html?page=24",
    rootUrl: "interview-notes/index.html?page=24",
    tag: "Bank II",
    title: "Page 24: Q&A Bank II — Behavioral II & AI/LLM Engineering II",
    sections: [
      {
        heading: "More behavioral questions, worked",
        content: "'Tell me about a time you took ownership of something outside your role.' (Ownership) 'Tell me about delivering under a tight deadline.' (Deliver Results / Bias for Action) 'Tell me about a difficult stakeholder.' 'Why should we hire you?' 'A time you simplified something.' (Invent & Simplify) 'A time you refused to compromise on quality.' 'Priorities changed / your project was cancelled.' 'Tell me about learning something fast.' — S/T: Our on-call got ~40 pages a week, most from one flaky integration owned by another team that was busy with a launch. A: I grouped a month of alerts by cause, found 70% came from timeouts on one vendor endpoint, proposed a fix in their repo (retry with jitter + circuit breaker + a dead-letter queue), paired with their engineer to review it, and added a dashboard both teams watched. R: Pages dropped from ~40 to ~6 a week within a month; the other team"
      },
      {
        heading: "AI / LLM engineering — the follow-ups",
        content: "How do you evaluate a RAG system? Chunking strategies — and why chunking matters so much. LoRA / QLoRA / quantization? What drives LLM latency? How do you get reliable structured output? Estimate the cost of an LLM feature? Long conversations exceed the context window? When should you NOT use an agent? You switch embedding models — what breaks? What guardrails would you put on a customer-facing bot? — Build a golden set — 100–300 real questions with expected answers and the source passages (from support tickets, SMEs, logs). Retrieval metrics: recall@k (is the right chunk in the top k?), MRR / nDCG (is it near the top?). Generation metrics: faithfulness/groundedness (every claim supported by retrieved text), answer relevance, correctness vs reference, citation accuracy — scored by human review plus an LLM-as-judge calibrated against humans. Online: thumbs up/down, escalation-to-human"
      }
    ]
  },
  {
    id: "iv-p25",
    notebook: "interview-notes",
    notebookName: "Interview Q&A",
    notebookIcon: "🎯",
    page: 25,
    url: "../interview-notes/index.html?page=25",
    rootUrl: "interview-notes/index.html?page=25",
    tag: "Revision",
    title: "Page 25: 30-Day Plan, Company Cheat Sheet & Night-Before Checklist",
    sections: [
      {
        heading: "The 30-day calendar",
        content: "The 30-day calendar Fig 25.1 — Tier 3 target? Compress weeks 3–4 and spend more on stack depth (p.14–15, 23). Tier 1? Add a 5th week: Q&A Bank II"
      },
      {
        heading: "Company-wise cheat sheet",
        content: "Company-wise cheat sheet Company Win condition Revise these pages Google Clean optimal code without running it; graphs/DP; G&L stories; design depth at L5+ 5, 6, 12, 13, 17, 19–21 Meta Speed (2 mediums / 40 min), trees/graphs/arrays; AI-enabled round; product design; ambiguity & conflict stories 3, 4, 5, 13, 16, 17, 20, 24 Amazon LP story in every round (2 per principle); OOD; system design for SDE2+ 3, 4, 11, 13, 17, 21, 24 Microsoft DSA medium, LLD + HLD, AA round, collaboration stories; C#/.NET depth helps 4, 7, 10, 11, 14, 19, 23 Uber Graphs/DP, runnable machine coding, project-centred design, strong HM round 5, 6, 11, 13, 18, 20, 22 Flipkart · Swiggy · Razorpay Machine coding gate (SOLID, extensible, runs), PSDS mediums, practical HLD 10, 11, 22, 3–5, 13, 21 Atlassian Code design build-and-extend, values round, system design 2, 11, 12, 17, 20, 22 Adobe · Salesforce · Walmart ·"
      },
      {
        heading: "Am I ready?",
        content: "How do I know I'm ready for the loop? — ✓ You solve an unseen medium in ≤ 25 min with a clean dry run, 4 times out of 5. ✓ You can answer every 🔥 question in this notebook in Quiz mode without peeking. ✓ You've built parking lot + one other LLD in 90 minutes and it ran (T2 targets). ✓ You can whiteboard feed, notifications and rate limiter in 40 minutes each, with numbers. ✓ You have 8+ STAR stories with metrics, each told in under 3 minutes. ✓ You know your own numbers: current CTC breakdown, notice period, expected range. 💡 If two boxes are unticked, reschedule by a week — recruiters almost always agree, and a failed loop often means a 6–12 month"
      }
    ]
  }
];

// Current active notebook filter in modal
let currentSearchFilter = "all";
let currentSelectedResultIndex = -1;

/**
 * Perform full-text search across the database
 */
function searchNotesDatabase(query, filterNotebook = "all") {
  const q = (query || "").toLowerCase().trim();
  if (!q) return [];

  const searchTerms = q.split(/\s+/).filter(Boolean);
  const results = [];

  for (const pageEntry of NOTES_SEARCH_DATABASE) {
    if (filterNotebook !== "all" && pageEntry.notebook !== filterNotebook) {
      continue;
    }

    let score = 0;
    let matchedHeading = "";
    let matchedSnippet = "";
    let bestSnippetScore = 0;

    const pageTitleLower = pageEntry.title.toLowerCase();

    // Check page title
    if (searchTerms.every(term => pageTitleLower.includes(term))) {
      score += 100;
    } else {
      searchTerms.forEach(term => {
        if (pageTitleLower.includes(term)) score += 20;
      });
    }

    // Check sections
    for (const sec of pageEntry.sections) {
      const headingLower = sec.heading.toLowerCase();
      const contentLower = sec.content.toLowerCase();
      let secScore = 0;

      searchTerms.forEach(term => {
        if (headingLower.includes(term)) secScore += 30;
        if (contentLower.includes(term)) secScore += 15;
      });

      if (secScore > bestSnippetScore) {
        bestSnippetScore = secScore;
        matchedHeading = sec.heading;
        matchedSnippet = createSnippetWithHighlight(sec.content, searchTerms);
      }
    }

    score += bestSnippetScore;

    if (score > 0) {
      if (!matchedSnippet && pageEntry.sections.length > 0) {
        matchedHeading = pageEntry.sections[0].heading;
        matchedSnippet = createSnippetWithHighlight(pageEntry.sections[0].content, searchTerms);
      }

      results.push({
        ...pageEntry,
        score,
        matchedHeading: matchedHeading || pageEntry.title,
        matchedSnippet: matchedSnippet || pageEntry.sections[0]?.content.slice(0, 100) + "..."
      });
    }
  }

  // Sort results by relevance score descending
  results.sort((a, b) => b.score - a.score);
  return results;
}

/**
 * Generate a smart snippet around the matched keyword with <mark> tags
 */
function createSnippetWithHighlight(text, terms) {
  if (!text) return "";
  const textLower = text.toLowerCase();
  let firstIndex = -1;

  for (const term of terms) {
    const idx = textLower.indexOf(term);
    if (idx !== -1 && (firstIndex === -1 || idx < firstIndex)) {
      firstIndex = idx;
    }
  }

  if (firstIndex === -1) {
    firstIndex = 0;
  }

  const start = Math.max(0, firstIndex - 35);
  const end = Math.min(text.length, firstIndex + 90);
  let snippet = text.slice(start, end);

  if (start > 0) snippet = "..." + snippet;
  if (end < text.length) snippet = snippet + "...";

  // Wrap matching terms in <mark>
  for (const term of terms) {
    const regex = new RegExp(`(${escapeRegex(term)})`, 'gi');
    snippet = snippet.replace(regex, '<mark>$1</mark>');
  }

  return snippet;
}

function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Initialize and inject the search modal HTML into DOM if not present
 */
function initSearchModalUI() {
  if (document.getElementById("searchModalBackdrop")) return;

  const isSubdirectory = window.location.pathname.includes("-notes");

  const modalHtml = `
    <div class="search-modal-backdrop" id="searchModalBackdrop" onclick="handleSearchBackdropClick(event)">
      <div class="search-modal-window" onclick="event.stopPropagation()">
        <div class="search-modal-header">
          <span class="search-modal-icon">🔍</span>
          <input type="text" id="globalSearchInput" class="search-modal-input" placeholder="Search handwritten notes (e.g. AlexNet, Kafka, Raft, Dockerfile)..." autocomplete="off" oninput="handleModalSearchInput(this.value)" />
          <span class="search-modal-kbd">ESC to close</span>
          <button class="search-modal-close" onclick="closeSearchModal()" aria-label="Close Search">&times;</button>
        </div>

        <div class="search-modal-filters">
          <button class="search-filter-chip active" data-filter="all" onclick="setSearchFilter('all')">🌐 All Notebooks (67 Pages)</button>
          <button class="search-filter-chip" data-filter="ai-notes" onclick="setSearchFilter('ai-notes')">🧠 AI Evolution</button>
          <button class="search-filter-chip" data-filter="system-design-notes" onclick="setSearchFilter('system-design-notes')">📐 System Design</button>
          <button class="search-filter-chip" data-filter="kubernetes-notes" onclick="setSearchFilter('kubernetes-notes')">⎈ Kubernetes</button>
          <button class="search-filter-chip" data-filter="docker-notes" onclick="setSearchFilter('docker-notes')">🐳 Docker</button>
          <button class="search-filter-chip" data-filter="dsa-notes" onclick="setSearchFilter('dsa-notes')">💻 DSA Master</button>
          <button class="search-filter-chip" data-filter="interview-notes" onclick="setSearchFilter('interview-notes')">🎯 Interview Q&amp;A</button>
        </div>

        <div class="search-modal-results" id="searchModalResults">
          <div class="search-empty-state">
            <div class="search-suggestions-title">💡 Popular Search Topics</div>
            <div class="search-suggestions-tags">
              <span class="suggestion-tag" onclick="quickFillSearch('LRU Cache')">⚡ LRU Cache</span>
              <span class="suggestion-tag" onclick="quickFillSearch('Dijkstra')">🛣️ Dijkstra</span>
              <span class="suggestion-tag" onclick="quickFillSearch('Monotonic Stack')">🥞 Monotonic Stack</span>
              <span class="suggestion-tag" onclick="quickFillSearch('Sliding Window')">🪟 Sliding Window</span>
              <span class="suggestion-tag" onclick="quickFillSearch('Trie Prefix')">🌳 Trie Prefix</span>
              <span class="suggestion-tag" onclick="quickFillSearch('Knapsack DP')">🎒 Knapsack DP</span>
              <span class="suggestion-tag" onclick="quickFillSearch('AlexNet CNN')">🖼️ AlexNet CNN</span>
              <span class="suggestion-tag" onclick="quickFillSearch('Consistent Hashing')">🔄 Consistent Hashing</span>
              <span class="suggestion-tag" onclick="quickFillSearch('Raft Consensus')">🤝 Raft Consensus</span>
              <span class="suggestion-tag" onclick="quickFillSearch('Kubernetes Ingress')">⎈ K8s Ingress</span>
              <span class="suggestion-tag" onclick="quickFillSearch('STAR')">🎯 STAR Stories</span>
              <span class="suggestion-tag" onclick="quickFillSearch('Nth highest salary')">🗄️ Nth Highest Salary</span>
            </div>
          </div>
        </div>

        <div class="search-modal-footer">
          <div class="search-shortcuts">
            <span><kbd>↑</kbd> <kbd>↓</kbd> Navigate</span>
            <span><kbd>↵</kbd> Open Page</span>
            <span><kbd>ESC</kbd> Close</span>
          </div>
          <div>Amit Mahata Notes Search Engine</div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", modalHtml);
}

/**
 * Open the Command Palette Search Modal
 */
function openSearchModal(initialQuery = "") {
  initSearchModalUI();
  const backdrop = document.getElementById("searchModalBackdrop");
  const input = document.getElementById("globalSearchInput");
  if (backdrop && input) {
    backdrop.classList.add("open");
    document.body.style.overflow = "hidden";
    if (initialQuery) {
      input.value = initialQuery;
      handleModalSearchInput(initialQuery);
    } else {
      input.value = "";
      renderDefaultSuggestions();
    }
    setTimeout(() => input.focus(), 80);
  }
}

/**
 * Close the Search Modal
 */
function closeSearchModal() {
  const backdrop = document.getElementById("searchModalBackdrop");
  if (backdrop) {
    backdrop.classList.remove("open");
    document.body.style.overflow = "";
  }
}

function handleSearchBackdropClick(e) {
  if (e.target.id === "searchModalBackdrop") {
    closeSearchModal();
  }
}

function setSearchFilter(filter) {
  currentSearchFilter = filter;
  document.querySelectorAll(".search-filter-chip").forEach(chip => {
    chip.classList.toggle("active", chip.dataset.filter === filter);
  });
  const input = document.getElementById("globalSearchInput");
  if (input) {
    handleModalSearchInput(input.value);
  }
}

function quickFillSearch(term) {
  const input = document.getElementById("globalSearchInput");
  if (input) {
    input.value = term;
    handleModalSearchInput(term);
    input.focus();
  }
}

function handleModalSearchInput(val) {
  const resultsContainer = document.getElementById("searchModalResults");
  if (!resultsContainer) return;

  const query = (val || "").trim();
  if (!query) {
    renderDefaultSuggestions();
    return;
  }

  const results = searchNotesDatabase(query, currentSearchFilter);
  if (results.length === 0) {
    resultsContainer.innerHTML = `
      <div class="search-empty-state">
        <div style="font-size: 28px; margin-bottom: 8px;">🔍</div>
        <div style="font-size: 18px; color: #f8fafc; margin-bottom: 4px;">No results found for "${escapeHtml(query)}"</div>
        <div style="font-size: 14px; color: #94a3b8;">Try searching for keywords like <em>Turing, Dockerfile, Raft, Ingress, Cache, Attention</em></div>
      </div>
    `;
    return;
  }

  const isSubdirectory = window.location.pathname.includes("-notes");

  let html = "";
  results.forEach((res, idx) => {
    const targetUrl = isSubdirectory ? res.url : res.rootUrl;
    html += `
      <div class="search-result-card ${idx === 0 ? 'selected' : ''}" data-index="${idx}" onclick="navigateSearchResult('${res.notebook}', ${res.page})">
        <div class="search-result-top">
          <div class="search-result-notebook">
            <span>${res.notebookIcon}</span>
            <span class="notebook-pill">${res.notebookName}</span>
          </div>
          <span class="search-result-page-tag">Page ${res.page}</span>
        </div>
        <div class="search-result-title">${res.matchedHeading}</div>
        <div class="search-result-snippet">${res.matchedSnippet}</div>
      </div>
    `;
  });

  resultsContainer.innerHTML = html;
  currentSelectedResultIndex = 0;
}

function renderDefaultSuggestions() {
  const resultsContainer = document.getElementById("searchModalResults");
  if (!resultsContainer) return;
  resultsContainer.innerHTML = `
    <div class="search-empty-state">
      <div class="search-suggestions-title">💡 Popular Search Topics</div>
      <div class="search-suggestions-tags">
        <span class="suggestion-tag" onclick="quickFillSearch('Turing Test')">🧠 Turing Test</span>
        <span class="suggestion-tag" onclick="quickFillSearch('AlexNet CNN')">🖼️ AlexNet CNN</span>
        <span class="suggestion-tag" onclick="quickFillSearch('Transformers Attention')">⚡ Transformers</span>
        <span class="suggestion-tag" onclick="quickFillSearch('Autonomous Agents')">🤖 Autonomous Agents</span>
        <span class="suggestion-tag" onclick="quickFillSearch('Consistent Hashing')">🔄 Consistent Hashing</span>
        <span class="suggestion-tag" onclick="quickFillSearch('Kafka vs RabbitMQ')">📬 Kafka & Queues</span>
        <span class="suggestion-tag" onclick="quickFillSearch('Raft Consensus')">🤝 Raft Consensus</span>
        <span class="suggestion-tag" onclick="quickFillSearch('Multi-stage Dockerfile')">🐳 Multi-stage Dockerfile</span>
        <span class="suggestion-tag" onclick="quickFillSearch('Kubernetes Ingress')">⎈ K8s Ingress & PV</span>
      </div>
    </div>
  `;
}

function navigateSearchResult(notebook, pageNum) {
  // Capture current search query for highlighting on the target page
  const input = document.getElementById("globalSearchInput");
  const searchQuery = input ? input.value.trim() : "";

  closeSearchModal();

  // Store navigation intent in sessionStorage (survives redirects reliably)
  sessionStorage.setItem("notes_nav_page", String(pageNum));
  if (searchQuery) {
    sessionStorage.setItem("notes_nav_highlight", searchQuery);
  }

  // Check if we are already inside the same notebook
  const isCurrentNotebook = window.location.pathname.includes(notebook);
  if (isCurrentNotebook && typeof goToPage === "function") {
    goToPage(pageNum);
    if (searchQuery) {
      setTimeout(() => highlightSearchTermsOnPage(searchQuery), 200);
    }
    // Clear storage since we handled it inline
    sessionStorage.removeItem("notes_nav_page");
    sessionStorage.removeItem("notes_nav_highlight");
  } else {
    const isSubdir = window.location.pathname.includes("-notes");
    const target = isSubdir ? `../${notebook}/index.html` : `${notebook}/index.html`;
    window.location.href = target;
  }
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/**
 * On page load, check sessionStorage for pending navigation (page jump + highlight).
 * This is more reliable than URL query params which can get stripped by server redirects.
 */
function handleSearchNavigation() {
  const targetPage = sessionStorage.getItem("notes_nav_page");
  const highlightQuery = sessionStorage.getItem("notes_nav_highlight");

  // Also check URL params as fallback
  const urlParams = new URLSearchParams(window.location.search);
  const urlPage = urlParams.get("page");

  const pageNum = targetPage || urlPage;

  if (pageNum && typeof goToPage === "function") {
    const p = parseInt(pageNum, 10);
    if (!isNaN(p) && p >= 1) {
      // Use a retry approach to ensure goToPage works after full DOM init
      let attempts = 0;
      const tryGoToPage = () => {
        attempts++;
        goToPage(p);
        // Verify it actually worked by checking the page indicator
        const indicator = document.getElementById("pageIndicator");
        if (indicator && !indicator.textContent.includes(`Page ${p} `)) {
          if (attempts < 5) {
            setTimeout(tryGoToPage, 150);
            return;
          }
        }
        // Now highlight search terms after page is displayed
        if (highlightQuery) {
          setTimeout(() => highlightSearchTermsOnPage(highlightQuery), 300);
        }
      };
      // Small delay to ensure notebook's own DOMContentLoaded has fired first
      setTimeout(tryGoToPage, 150);
    }
  }

  // Clean up sessionStorage
  sessionStorage.removeItem("notes_nav_page");
  sessionStorage.removeItem("notes_nav_highlight");
}

/**
 * Highlight search terms on the currently visible notebook page.
 * Wraps matching text nodes in <mark class="page-search-highlight"> and scrolls to the first match.
 */
function highlightSearchTermsOnPage(query) {
  if (!query) return;

  // First, remove any existing highlights
  clearPageHighlights();

  const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return;

  // Find the currently active notebook page
  const activePage = document.querySelector(".notebook-page.active");
  if (!activePage) return;

  const contentArea = activePage.querySelector(".page-content") || activePage;
  let firstHighlight = null;
  let highlightCount = 0;

  // Walk all text nodes inside the content area
  const walker = document.createTreeWalker(contentArea, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) => {
      // Skip script, style, and already-highlighted nodes
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      const tag = parent.tagName.toLowerCase();
      if (tag === "script" || tag === "style" || tag === "mark") return NodeFilter.FILTER_REJECT;
      // Skip if parent is the search modal
      if (parent.closest(".search-modal-backdrop") || parent.closest(".sidebar-drawer")) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const textNodes = [];
  let node;
  while ((node = walker.nextNode())) {
    textNodes.push(node);
  }

  for (const textNode of textNodes) {
    const text = textNode.textContent;
    const textLower = text.toLowerCase();

    // Check if any term matches in this text node
    let hasMatch = false;
    for (const term of terms) {
      if (textLower.includes(term)) {
        hasMatch = true;
        break;
      }
    }

    if (!hasMatch) continue;

    // Build a regex that matches any of the search terms
    const pattern = terms.map(t => escapeRegex(t)).join("|");
    const regex = new RegExp(`(${pattern})`, "gi");
    const parts = text.split(regex);

    if (parts.length <= 1) continue;

    // Replace text node with mix of text + <mark> elements
    const fragment = document.createDocumentFragment();
    for (const part of parts) {
      if (regex.test(part) || terms.some(t => part.toLowerCase() === t)) {
        const mark = document.createElement("mark");
        mark.className = "page-search-highlight";
        mark.textContent = part;
        fragment.appendChild(mark);
        highlightCount++;
        if (!firstHighlight) firstHighlight = mark;
      } else {
        fragment.appendChild(document.createTextNode(part));
      }
      // Reset regex lastIndex since we're reusing it
      regex.lastIndex = 0;
    }

    textNode.parentNode.replaceChild(fragment, textNode);
  }

  // Scroll to the first highlighted match
  if (firstHighlight) {
    setTimeout(() => {
      firstHighlight.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  }

  // Show a small toast notification with match count
  if (highlightCount > 0) {
    showHighlightToast(highlightCount, query);
  }
}

/**
 * Remove all in-page search highlights
 */
function clearPageHighlights() {
  const marks = document.querySelectorAll("mark.page-search-highlight");
  marks.forEach(mark => {
    const parent = mark.parentNode;
    parent.replaceChild(document.createTextNode(mark.textContent), mark);
    parent.normalize(); // Merge adjacent text nodes
  });
  // Remove toast if present
  const toast = document.getElementById("highlightToast");
  if (toast) toast.remove();
}

/**
 * Show a floating toast at the top showing how many matches were found
 */
function showHighlightToast(count, query) {
  // Remove old toast
  const old = document.getElementById("highlightToast");
  if (old) old.remove();

  const toast = document.createElement("div");
  toast.id = "highlightToast";
  toast.innerHTML = `
    <span>🔍 Found <strong>${count}</strong> match${count > 1 ? "es" : ""} for "<em>${escapeHtml(query)}</em>"</span>
    <button onclick="clearPageHighlights()" title="Clear highlights">✕ Clear</button>
  `;
  toast.style.cssText = `
    position: fixed;
    top: 70px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(135deg, #0f172a, #1e293b);
    color: #f8fafc;
    border: 1px solid rgba(56, 189, 248, 0.4);
    border-radius: 12px;
    padding: 8px 18px;
    font-family: 'Patrick Hand', cursive;
    font-size: 15px;
    display: flex;
    align-items: center;
    gap: 12px;
    z-index: 1500;
    box-shadow: 0 8px 30px rgba(0,0,0,0.5), 0 0 15px rgba(56, 189, 248, 0.2);
    animation: slideDown 0.3s ease;
  `;

  // Style the clear button
  const btn = toast.querySelector("button");
  btn.style.cssText = `
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.2);
    color: #cbd5e1;
    border-radius: 6px;
    padding: 2px 10px;
    cursor: pointer;
    font-family: 'Patrick Hand', cursive;
    font-size: 13px;
  `;

  document.body.appendChild(toast);

  // Auto-dismiss after 8 seconds
  setTimeout(() => {
    if (toast.parentNode) {
      toast.style.opacity = "0";
      toast.style.transition = "opacity 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }
  }, 8000);
}

/**
 * Upgrade Topic Sidenav Drawer Live Search with deep snippets
 */
function enhanceTopicDrawerSearch() {
  const origFilterFn = window.filterSidebarTopics;
  window.filterSidebarTopics = function(query) {
    const q = (query || "").toLowerCase().trim();
    const items = document.querySelectorAll(".sidebar-topic-item");
    const clearBtn = document.getElementById("clearSearchBtn");
    if (clearBtn) clearBtn.style.display = q ? "block" : "none";

    const currentNotebook = window.location.pathname.includes("ai-notes") ? "ai-notes" :
                            window.location.pathname.includes("docker-notes") ? "docker-notes" :
                            window.location.pathname.includes("kubernetes-notes") ? "kubernetes-notes" :
                            window.location.pathname.includes("system-design-notes") ? "system-design-notes" : "all";

    const fullMatches = q ? searchNotesDatabase(q, currentNotebook) : [];
    const matchedPagesMap = new Map();
    fullMatches.forEach(m => matchedPagesMap.set(m.page, m));

    items.forEach(item => {
      const pageNum = parseInt(item.dataset.page, 10);
      const text = item.textContent.toLowerCase();
      const keywords = (item.dataset.keywords || "").toLowerCase();
      const isTitleMatch = !q || text.includes(q) || keywords.includes(q);
      const isContentMatch = matchedPagesMap.has(pageNum);

      // Remove existing snippet if any
      const existingSnippet = item.querySelector(".drawer-matched-snippet");
      if (existingSnippet) existingSnippet.remove();

      if (isTitleMatch || isContentMatch) {
        item.style.display = "flex";
        if (q && isContentMatch) {
          const matchData = matchedPagesMap.get(pageNum);
          const snippetDiv = document.createElement("div");
          snippetDiv.className = "drawer-matched-snippet";
          snippetDiv.innerHTML = `<strong>${matchData.matchedHeading}:</strong> ${matchData.matchedSnippet}`;
          const topicInfo = item.querySelector(".topic-info");
          if (topicInfo) {
            topicInfo.appendChild(snippetDiv);
          }
        }
      } else {
        item.style.display = "none";
      }
    });
  };
}

/**
 * Global Keyboard Event Listeners for Command Palette (Ctrl+K, Cmd+K, /, Esc)
 */
document.addEventListener("keydown", (e) => {
  // Toggle Search with Ctrl+K or Cmd+K
  if ((e.ctrlKey || e.metaKey) && (e.key === "k" || e.key === "K")) {
    e.preventDefault();
    const backdrop = document.getElementById("searchModalBackdrop");
    const isOpen = backdrop && backdrop.classList.contains("open");
    if (isOpen) closeSearchModal();
    else openSearchModal();
    return;
  }

  // Quick '/' shortcut when not typing in an input
  if (e.key === "/" && e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA") {
    e.preventDefault();
    openSearchModal();
    return;
  }

  const modalBackdrop = document.getElementById("searchModalBackdrop");
  if (modalBackdrop && modalBackdrop.classList.contains("open")) {
    if (e.key === "Escape") {
      closeSearchModal();
      return;
    }

    const cards = document.querySelectorAll(".search-result-card");
    if (cards.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      currentSelectedResultIndex = (currentSelectedResultIndex + 1) % cards.length;
      updateSelectedCard(cards);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      currentSelectedResultIndex = (currentSelectedResultIndex - 1 + cards.length) % cards.length;
      updateSelectedCard(cards);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (currentSelectedResultIndex >= 0 && currentSelectedResultIndex < cards.length) {
        cards[currentSelectedResultIndex].click();
      }
    }
  }
});

function updateSelectedCard(cards) {
  cards.forEach((card, idx) => {
    const isSel = idx === currentSelectedResultIndex;
    card.classList.toggle("selected", isSel);
    if (isSel) card.scrollIntoView({ block: "nearest", behavior: "smooth" });
  });
}

/**
 * Initialize dynamic reading progress bar attached to topbar
 */
function initTopbarProgressBar() {
  const topbar = document.querySelector(".topbar");
  if (!topbar || topbar.querySelector(".topbar-progress-track")) return;

  const track = document.createElement("div");
  track.className = "topbar-progress-track";
  const bar = document.createElement("div");
  bar.className = "topbar-progress-bar";
  bar.id = "topbarProgressBar";
  track.appendChild(bar);
  topbar.appendChild(track);

  // Update progress bar based on current page indicator text (e.g. "Page 2 / 6")
  const updateProgress = () => {
    const indicator = document.getElementById("pageIndicator");
    if (!indicator) return;
    const text = indicator.textContent || "";
    const match = text.match(/Page\s+(\d+)\s*\/\s*(\d+)/i);
    if (match) {
      const current = parseInt(match[1], 10);
      const total = parseInt(match[2], 10);
      if (total > 0) {
        const pct = Math.min(100, Math.max(0, (current / total) * 100));
        bar.style.width = pct + "%";
      }
    }
  };

  // Initial update
  updateProgress();

  // Observe page indicator changes
  const indicator = document.getElementById("pageIndicator");
  if (indicator) {
    const observer = new MutationObserver(updateProgress);
    observer.observe(indicator, { childList: true, characterData: true, subtree: true });
  }

  // Also hook into window.goToPage if available
  const origGoToPage = window.goToPage;
  if (typeof origGoToPage === "function") {
    window.goToPage = function(...args) {
      const res = origGoToPage.apply(this, args);
      setTimeout(updateProgress, 50);
      return res;
    };
  }
}

/**
 * Theme Configurations
 */
const NOTES_THEMES = [
  {
    id: "warm-paper",
    name: "Classic Paper",
    icon: "📄",
    color: "#fdfbf7",
    desc: "Warm ivory ruled paper"
  },
  {
    id: "dark",
    name: "Dark Obsidian",
    icon: "🌙",
    color: "#0f172a",
    desc: "Eye-friendly dark slate"
  },
  {
    id: "sepia",
    name: "Vintage Sepia",
    icon: "📜",
    color: "#f4ebd0",
    desc: "Aged engineer's journal"
  },
  {
    id: "blueprint",
    name: "Tech Blueprint",
    icon: "📐",
    color: "#09223e",
    desc: "Cyan architectural grid"
  }
];

/**
 * Get current theme from localStorage (defaults to "warm-paper")
 */
function getCurrentTheme() {
  return localStorage.getItem("notes_theme") || "warm-paper";
}

/**
 * Set and apply active theme
 */
function setTheme(themeId) {
  const selectedTheme = NOTES_THEMES.find(t => t.id === themeId) || NOTES_THEMES[0];
  document.documentElement.setAttribute("data-theme", selectedTheme.id);
  document.body.setAttribute("data-theme", selectedTheme.id);
  localStorage.setItem("notes_theme", selectedTheme.id);

  // Update Topbar button display if present
  const themeDot = document.getElementById("topbarThemeDot");
  const themeBtnText = document.getElementById("topbarThemeBtnText");
  if (themeDot) themeDot.style.color = selectedTheme.color;
  if (themeBtnText) themeBtnText.textContent = selectedTheme.icon;

  // Update active states in Popover items
  document.querySelectorAll(".theme-option-item").forEach(item => {
    item.classList.toggle("active", item.dataset.theme === selectedTheme.id);
  });

  // Update active states in Drawer cards
  document.querySelectorAll(".drawer-theme-card").forEach(card => {
    card.classList.toggle("active", card.dataset.theme === selectedTheme.id);
  });
}

/**
 * Toggle Theme Popover Menu open/close
 */
function toggleThemePopover(e) {
  if (e) e.stopPropagation();
  const popover = document.getElementById("themePopoverMenu");
  if (popover) {
    popover.classList.toggle("open");
  }
}

/**
 * Close Theme Popover Menu
 */
function closeThemePopover() {
  const popover = document.getElementById("themePopoverMenu");
  if (popover) {
    popover.classList.remove("open");
  }
}

/**
 * Initialize Theme Switcher in Topbar and Topic Sidenav Drawer
 */
function initThemeSystem() {
  // Apply stored theme immediately
  const activeTheme = getCurrentTheme();
  setTheme(activeTheme);

  // 1. Inject Theme Switcher into Topbar (if topbar exists and not already injected)
  const topbarRight = document.querySelector(".topbar-right");
  if (topbarRight && !document.getElementById("topbarThemeWrapper")) {
    const currentT = NOTES_THEMES.find(t => t.id === activeTheme) || NOTES_THEMES[0];
    
    const wrapper = document.createElement("div");
    wrapper.className = "topbar-theme-wrapper";
    wrapper.id = "topbarThemeWrapper";

    let popoverItemsHtml = "";
    NOTES_THEMES.forEach(t => {
      popoverItemsHtml += `
        <div class="theme-option-item ${t.id === activeTheme ? 'active' : ''}" data-theme="${t.id}" onclick="setTheme('${t.id}'); closeThemePopover();">
          <div class="theme-option-left">
            <span class="theme-swatch-circle" style="background: ${t.color};"></span>
            <span>${t.icon} ${t.name}</span>
          </div>
          <span class="theme-check-icon">✓</span>
        </div>
      `;
    });

    wrapper.innerHTML = `
      <button class="topbar-theme-btn" onclick="toggleThemePopover(event)" title="Choose Theme Palette" aria-label="Choose theme palette">
        <span class="theme-active-dot" id="topbarThemeDot" style="color: ${currentT.color};"></span>
        <span id="topbarThemeBtnText">${currentT.icon}</span>
        <span class="theme-caret" style="font-size: 11px; opacity: 0.7;">▼</span>
      </button>
      <div class="theme-popover-menu" id="themePopoverMenu">
        <div class="theme-popover-title">Reading Palette</div>
        ${popoverItemsHtml}
      </div>
    `;

    topbarRight.appendChild(wrapper);
  }

  // 2. Inject Theme Cards into Topic Sidenav Drawer
  const drawerHeader = document.querySelector(".sidebar-header");
  const switcherSection = document.querySelector(".sidebar-section");
  if (drawerHeader && switcherSection && !document.getElementById("drawerThemeSection")) {
    const themeSection = document.createElement("div");
    themeSection.className = "drawer-theme-section";
    themeSection.id = "drawerThemeSection";

    let drawerCardsHtml = "";
    NOTES_THEMES.forEach(t => {
      drawerCardsHtml += `
        <div class="drawer-theme-card ${t.id === activeTheme ? 'active' : ''}" data-theme="${t.id}" onclick="setTheme('${t.id}')">
          <span class="theme-swatch-circle" style="background: ${t.color}; width: 14px; height: 14px;"></span>
          <span>${t.name}</span>
        </div>
      `;
    });

    themeSection.innerHTML = `
      <div class="section-label">THEME PALETTE</div>
      <div class="drawer-theme-grid">
        ${drawerCardsHtml}
      </div>
    `;

    // Insert right after the notebook switcher section
    switcherSection.parentNode.insertBefore(themeSection, switcherSection.nextSibling);
  }

  // Close popover when clicking anywhere outside
  document.addEventListener("click", (e) => {
    const wrapper = document.getElementById("topbarThemeWrapper");
    if (wrapper && !wrapper.contains(e.target)) {
      closeThemePopover();
    }
  });
}

// Auto-initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  initSearchModalUI();
  handleSearchNavigation();
  enhanceTopicDrawerSearch();
  initTopbarProgressBar();
  initThemeSystem();
});

// Immediate early theme application before rendering to prevent flash
(function earlyThemeInit() {
  const theme = localStorage.getItem("notes_theme") || "warm-paper";
  document.documentElement.setAttribute("data-theme", theme);
})();
