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

  // --- SYSTEM DESIGN NOTES (8 Pages) ---
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
    tag: "Microservices",
    title: "Page 6: Microservices, API Gateways & Rate Limiting",
    sections: [
      {
        heading: "API Gateway Responsibilities",
        content: "Single entry point for client requests handling: Dynamic routing, Authentication & JWT verification, SSL termination, Rate limiting, Request logging, Monitoring, Circuit breaking."
      },
      {
        heading: "Rate Limiting Algorithms (Token Bucket, Leaky Bucket, Sliding Window)",
        content: "1. Token Bucket (fixed capacity, tokens added at rate r; handles bursts). 2. Leaky Bucket (FIFO queue flushes at constant rate; smooths traffic). 3. Sliding Window Log / Counter (hybrid approach preventing boundary bursts, implemented with Redis sorted sets)."
      },
      {
        heading: "Circuit Breakers (Closed, Open, Half-Open)",
        content: "Prevents cascading failures. Closed (normal traffic) → If failure rate exceeds threshold → Open (fails fast immediately without calling downstream) → After cooldown timeout → Half-Open (allows probe traffic to test recovery)."
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
    title: "Page 7: Distributed Consensus & Distributed Transactions",
    sections: [
      {
        heading: "Distributed Transactions: 2PC vs. Saga Pattern",
        content: "Two-Phase Commit (2PC): Prepare phase + Commit phase; strong consistency but blocking and high latency. Saga Pattern: Sequence of local transactions with compensating transactions on failure; Orchestration (central orchestrator) vs. Choreography (event-driven)."
      },
      {
        heading: "Distributed Consensus: Raft & Paxos",
        content: "Raft algorithm achieves consensus via Leader Election, Log Replication, and Safety invariants. Used by etcd (Kubernetes), Consul, and CockroachDB."
      },
      {
        heading: "Distributed Unique ID Generator (Twitter Snowflake)",
        content: "64-bit integer: 1 sign bit + 41 bits timestamp (69 years) + 10 bits machine/datacenter ID (1024 nodes) + 12 bits sequence number (4096 IDs per ms per node)."
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
    tag: "Cheat Sheet",
    title: "Page 8: System Design Master Cheat Sheet",
    sections: [
      {
        heading: "Latency Numbers Every Programmer Should Know",
        content: "L1 cache: 0.5 ns. Mutex lock/unlock: 25 ns. Main memory (RAM) reference: 100 ns. Read 1MB from memory: 3,000 ns (3 µs). SSD random read: 16,000 ns (16 µs). Read 1MB from SSD: 49,000 ns (49 µs). Datacenter roundtrip: 500,000 ns (0.5 ms). Send 1MB over 1Gbps network: 10,000,000 ns (10 ms). HDD seek: 10,000,000 ns (10 ms). Cross-continental roundtrip: 150,000,000 ns (150 ms)."
      },
      {
        heading: "High Availability SLA Numbers (The Nines)",
        content: "99% (2 nines) = 3.65 days downtime/year. 99.9% (3 nines) = 8.76 hours/year. 99.99% (4 nines) = 52.6 minutes/year. 99.999% (5 nines) = 5.26 minutes/year."
      }
    ]
  },

  // --- DSA MASTER NOTES (12 Pages) ---
  {
    id: "dsa-p1",
    notebook: "dsa-notes",
    notebookName: "DSA Master",
    notebookIcon: "💻",
    page: 1,
    url: "../dsa-notes/index.html",
    rootUrl: "dsa-notes/index.html",
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
      }
    ]
  },
  {
    id: "dsa-p2",
    notebook: "dsa-notes",
    notebookName: "DSA Master",
    notebookIcon: "💻",
    page: 2,
    url: "../dsa-notes/index.html",
    rootUrl: "dsa-notes/index.html",
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
      }
    ]
  },
  {
    id: "dsa-p3",
    notebook: "dsa-notes",
    notebookName: "DSA Master",
    notebookIcon: "💻",
    page: 3,
    url: "../dsa-notes/index.html",
    rootUrl: "dsa-notes/index.html",
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
      }
    ]
  },
  {
    id: "dsa-p4",
    notebook: "dsa-notes",
    notebookName: "DSA Master",
    notebookIcon: "💻",
    page: 4,
    url: "../dsa-notes/index.html",
    rootUrl: "dsa-notes/index.html",
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
      }
    ]
  },
  {
    id: "dsa-p5",
    notebook: "dsa-notes",
    notebookName: "DSA Master",
    notebookIcon: "💻",
    page: 5,
    url: "../dsa-notes/index.html",
    rootUrl: "dsa-notes/index.html",
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
      }
    ]
  },
  {
    id: "dsa-p6",
    notebook: "dsa-notes",
    notebookName: "DSA Master",
    notebookIcon: "💻",
    page: 6,
    url: "../dsa-notes/index.html",
    rootUrl: "dsa-notes/index.html",
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
      }
    ]
  },
  {
    id: "dsa-p7",
    notebook: "dsa-notes",
    notebookName: "DSA Master",
    notebookIcon: "💻",
    page: 7,
    url: "../dsa-notes/index.html",
    rootUrl: "dsa-notes/index.html",
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
      }
    ]
  },
  {
    id: "dsa-p8",
    notebook: "dsa-notes",
    notebookName: "DSA Master",
    notebookIcon: "💻",
    page: 8,
    url: "../dsa-notes/index.html",
    rootUrl: "dsa-notes/index.html",
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
      }
    ]
  },
  {
    id: "dsa-p9",
    notebook: "dsa-notes",
    notebookName: "DSA Master",
    notebookIcon: "💻",
    page: 9,
    url: "../dsa-notes/index.html",
    rootUrl: "dsa-notes/index.html",
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
      }
    ]
  },
  {
    id: "dsa-p10",
    notebook: "dsa-notes",
    notebookName: "DSA Master",
    notebookIcon: "💻",
    page: 10,
    url: "../dsa-notes/index.html",
    rootUrl: "dsa-notes/index.html",
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
      }
    ]
  },
  {
    id: "dsa-p11",
    notebook: "dsa-notes",
    notebookName: "DSA Master",
    notebookIcon: "💻",
    page: 11,
    url: "../dsa-notes/index.html",
    rootUrl: "dsa-notes/index.html",
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
      }
    ]
  },
  {
    id: "dsa-p12",
    notebook: "dsa-notes",
    notebookName: "DSA Master",
    notebookIcon: "💻",
    page: 12,
    url: "../dsa-notes/index.html",
    rootUrl: "dsa-notes/index.html",
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
          <button class="search-filter-chip active" data-filter="all" onclick="setSearchFilter('all')">🌐 All Notebooks (38 Pages)</button>
          <button class="search-filter-chip" data-filter="ai-notes" onclick="setSearchFilter('ai-notes')">🧠 AI Evolution</button>
          <button class="search-filter-chip" data-filter="system-design-notes" onclick="setSearchFilter('system-design-notes')">📐 System Design</button>
          <button class="search-filter-chip" data-filter="kubernetes-notes" onclick="setSearchFilter('kubernetes-notes')">⎈ Kubernetes</button>
          <button class="search-filter-chip" data-filter="docker-notes" onclick="setSearchFilter('docker-notes')">🐳 Docker</button>
          <button class="search-filter-chip" data-filter="dsa-notes" onclick="setSearchFilter('dsa-notes')">💻 DSA Master</button>
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
      <button class="topbar-theme-btn" onclick="toggleThemePopover(event)" title="Choose Theme Palette">
        <span class="theme-active-dot" id="topbarThemeDot" style="color: ${currentT.color};"></span>
        <span id="topbarThemeBtnText">${currentT.icon}</span>
        <span style="font-size: 11px; opacity: 0.7;">▼</span>
      </button>
      <div class="theme-popover-menu" id="themePopoverMenu">
        <div class="theme-popover-title">Reading Palette</div>
        ${popoverItemsHtml}
      </div>
    `;

    // Insert before the PDF button or search button
    const pdfBtn = topbarRight.querySelector(".pdf-btn");
    if (pdfBtn) {
      topbarRight.insertBefore(wrapper, pdfBtn);
    } else {
      topbarRight.appendChild(wrapper);
    }
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
