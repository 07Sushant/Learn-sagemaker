import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Download, 
  BookOpen, 
  Cpu, 
  Cloud, 
  Database, 
  Settings, 
  Monitor, 
  GitBranch,
  Shield,
  Zap,
  Brain,
  TrendingUp,
  Award,
  ExternalLink,
  Play,
  Code,
  FileText,
  Presentation,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Target,
  Users,
  Heart,
  Building,
  Smartphone,
  BarChart3,
  Workflow,
  Eye,
  Lightbulb,
  Rocket,
  Star,
  Globe,
  Lock,
  DollarSign,
  Clock,
  Map,
  ChevronRight,
  Archive
} from 'lucide-react';

// Import hero images
const sagemakerHero = 'https://raw.githubusercontent.com/07Sushant/dump/main/sage.png';
const mlLifecycleVideo = 'https://www.youtube.com/embed/EJsbKexFzrc?si=KuM9_TShfYo2uhh7&autoplay=1&mute=0&controls=1'; // YouTube video with autoplay and volume
const sagemakerArchitecture = 'https://raw.githubusercontent.com/07Sushant/dump/main/sage_component.png';
const workflowImage = 'https://raw.githubusercontent.com/07Sushant/dump/main/Workflow.png';

// Import components
import DeveloperProfile from '@/components/DeveloperProfile';

const SageMakerLearningPlatform = () => {
  const [activeSection, setActiveSection] = useState('hero');

  // Intersection observer for navigation highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Animation trigger for cards
  useEffect(() => {
    const cards = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const navigationItems = [
    { id: 'hero', label: 'Home' },
    { id: 'introduction', label: 'Introduction' },
    { id: 'concepts', label: 'Core Concepts' },
    { id: 'hands-on', label: 'Hands-On' },
    { id: 'use-cases', label: 'Use Cases' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'challenges', label: 'Challenges' },
    { id: 'advanced', label: 'Advanced Tools' },
    { id: 'resources', label: 'Resources' }
  ];

  const useCases = [
    {
      title: 'Fraud Detection',
      description: 'Real-time fraud detection in financial transactions using machine learning algorithms',
      icon: Shield,
      category: 'Finance',
      technologies: ['XGBoost', 'Feature Store', 'Real-time Inference']
    },
    {
      title: 'Predictive Maintenance',
      description: 'Predict equipment failures before they happen to minimize downtime',
      icon: Settings,
      category: 'IoT',
      technologies: ['Time Series', 'AutoML', 'Batch Transform']
    },
    {
      title: 'Personalized Recommendations',
      description: 'Deliver personalized product recommendations to increase customer engagement',
      icon: Heart,
      category: 'Retail',
      technologies: ['Collaborative Filtering', 'Deep Learning', 'A/B Testing']
    },
    {
      title: 'Risk Analysis',
      description: 'Assess and predict risks for insurance underwriting and pricing',
      icon: BarChart3,
      category: 'Insurance',
      technologies: ['Linear Learner', 'Feature Engineering', 'Model Monitor']
    },
    {
      title: 'Medical Diagnosis',
      description: 'AI-powered medical image analysis for early disease detection',
      icon: Brain,
      category: 'Healthcare',
      technologies: ['Computer Vision', 'Transfer Learning', 'Clarify']
    },
    {
      title: 'Supply Chain Optimization',
      description: 'Optimize inventory and logistics using demand forecasting',
      icon: TrendingUp,
      category: 'Logistics',
      technologies: ['DeepAR', 'Prophet', 'Batch Inference']
    }
  ];

  const benefits = [
    {
      icon: Cloud,
      title: 'Fully Managed ML Infrastructure',
      description: 'No need to manage servers, scaling, or infrastructure. Focus on your models.'
    },
    {
      icon: Zap,
      title: 'Built-in & Custom Algorithms',
      description: '17+ built-in algorithms plus support for custom frameworks like TensorFlow and PyTorch.'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Training & Deployment',
      description: 'Train on massive datasets and deploy at any scale with automatic scaling.'
    },
    {
      icon: GitBranch,
      title: 'MLOps with Pipelines',
      description: 'Complete CI/CD for machine learning with automated pipelines and versioning.'
    },
    {
      icon: Brain,
      title: 'AutoML with Autopilot',
      description: 'Automatically build, train, and tune ML models without writing code.'
    },
    {
      icon: Database,
      title: 'Integrated AWS Ecosystem',
      description: 'Seamless integration with S3, IAM, CloudWatch, Lambda, and 200+ AWS services.'
    }
  ];

  const challenges = [
    {
      type: 'warning',
      title: 'Pricing Complexity',
      description: 'Pay-per-use model can be confusing. Costs vary by instance type, region, and usage patterns.'
    },
    {
      type: 'warning', 
      title: 'IAM & Permissions',
      description: 'Complex permission management. Requires understanding of AWS IAM roles and policies.'
    },
    {
      type: 'warning',
      title: 'Limited Free Tier',
      description: 'Free tier is limited for large datasets. Production workloads can become expensive.'
    },
    {
      type: 'warning',
      title: 'Debugging Complexity',
      description: 'Training job failures can be hard to debug. Logs are distributed across CloudWatch.'
    },
    {
      type: 'warning',
      title: 'Region Availability',
      description: 'Not all SageMaker features are available in all AWS regions.'
    }
  ];

  const advancedTools = [
    {
      name: 'SageMaker Autopilot',
      description: 'Automated machine learning that builds, trains, and tunes models automatically',
      icon: Zap,
      badge: 'AutoML',
      features: ['Automatic feature engineering', 'Model selection', 'Hyperparameter tuning', 'Explainable AI']
    },
    {
      name: 'SageMaker Clarify',
      description: 'Detect bias and explain model predictions for responsible AI',
      icon: Eye,
      badge: 'Explainability', 
      features: ['Bias detection', 'Feature importance', 'SHAP values', 'Model explainability']
    },
    {
      name: 'SageMaker Neo',
      description: 'Optimize models for edge deployment with up to 2x performance improvement',
      icon: Cpu,
      badge: 'Edge',
      features: ['Model optimization', 'Edge deployment', 'Cross-platform support', 'Reduced latency']
    },
    {
      name: 'Model Monitor',
      description: 'Continuously monitor model performance and data drift in production',
      icon: Monitor,
      badge: 'Monitoring',
      features: ['Data drift detection', 'Model quality monitoring', 'Alerting', 'Statistical analysis']
    },
    {
      name: 'Ground Truth',
      description: 'High-quality data labeling with human and machine collaboration',
      icon: Target,
      badge: 'Data Labeling',
      features: ['Active learning', 'Human workforce', 'Quality control', 'Custom workflows']
    },
    {
      name: 'Feature Store',
      description: 'Centralized repository for ML features with online and offline access',
      icon: Database,
      badge: 'Features',
      features: ['Feature versioning', 'Online/offline store', 'Feature discovery', 'Point-in-time lookups']
    }
  ];

  const coreComponents = [
    {
      name: 'SageMaker Studio',
      description: 'Integrated development environment for the entire ML lifecycle',
      icon: Code,
      color: 'bg-blue-100 text-blue-700'
    },
    {
      name: 'Notebook Instances',
      description: 'Jupyter notebooks with pre-configured ML environments',
      icon: BookOpen,
      color: 'bg-green-100 text-green-700'
    },
    {
      name: 'Training Jobs',
      description: 'Scalable model training with built-in algorithms or custom code',
      icon: Brain,
      color: 'bg-purple-100 text-purple-700'
    },
    {
      name: 'Endpoints',
      description: 'Real-time and batch inference for deployed models',
      icon: Globe,
      color: 'bg-orange-100 text-orange-700'
    },
    {
      name: 'Pipelines',
      description: 'Orchestrate end-to-end ML workflows with CI/CD',
      icon: Workflow,
      color: 'bg-red-100 text-red-700'
    },
    {
      name: 'Model Registry',
      description: 'Version control and lifecycle management for ML models',
      icon: Archive,
      color: 'bg-indigo-100 text-indigo-700'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Cloud className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                SageMaker Academy
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`nav-link text-sm font-medium ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => {
                  window.open('https://www.linkedin.com/in/07sushant/', '_blank');
                  window.open('https://github.com/07Sushant/Learn-sagemaker', '_blank');
                }}
              >
                <Download className="h-4 w-4 mr-2" />
                Resources
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" data-section className="pt-20 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                  Learn Amazon SageMaker
                  <span className="block bg-gradient-to-r from-orange-300 to-orange-100 bg-clip-text text-transparent">
                    From Zero to Hero
                  </span>
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                  A comprehensive and interactive tutorial to help you master Amazon SageMaker for building, 
                  training, and deploying machine learning models whether you're a beginner or an aspiring expert.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="btn-aws group"
                  onClick={() => window.open('https://drive.google.com/viewerng/viewer?embedded=true&url=https://raw.githubusercontent.com/07Sushant/dump/main/SageMaker_doc.pdf', '_blank')}
                >
                  <Download className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                  Download Developer PDF
                </Button>
                <Button 
                  className="btn-secondary"
                  onClick={() => window.open('https://raw.githubusercontent.com/07Sushant/dump/main/SageMaker_PPT.pptx', '_blank')}
                >
                  <Presentation className="h-5 w-5 mr-2" />
                  Download Workflow PPT
                </Button>
                <Button 
                  className="bg-white text-primary border-2 border-white hover:bg-primary-glow hover:text-white transition-all duration-300"
                  onClick={() => window.open('https://colab.research.google.com/drive/1k6DfzXKMih7BvzJ5OXFU_WEfQfI7-RC_?usp=sharing', '_blank')}
                >
                  <Code className="h-5 w-5 mr-2" />
                  Get Jupyter Notebook
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">17+</div>
                  <div className="text-blue-200 text-sm">Built-in Algorithms</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-blue-200 text-sm">Use Cases Covered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="text-blue-200 text-sm">Hands-on Learning</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-glow">
                <img
                  src={sagemakerHero}
                  alt="SageMaker Learning Platform"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-warning text-warning-foreground px-3 py-2 rounded-full text-sm font-medium animate-bounce">
                🚀 New Course!
              </div>
              <div className="absolute -bottom-4 -left-4 bg-success text-success-foreground px-3 py-2 rounded-full text-sm font-medium">
                ✨ Interactive Learning
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="introduction" data-section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Introduction to Amazon SageMaker</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Amazon SageMaker is a fully managed platform that enables developers and data scientists 
              to build, train, and deploy machine learning models at any scale.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">What is SageMaker?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Amazon SageMaker is a comprehensive machine learning platform that provides every developer 
                  and data scientist with the ability to build, train, and deploy ML models quickly. It removes 
                  the heavy lifting from each step of the machine learning process to make it easier to develop 
                  high-quality models.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Why Choose SageMaker?</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span>Fully managed infrastructure</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span>Built-in algorithms and frameworks</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span>Seamless AWS integration</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span>Pay-per-use pricing model</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-card">
                <iframe
                  src={mlLifecycleVideo}
                  title="ML Lifecycle with SageMaker"
                  className="w-full h-auto aspect-video rounded-xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-card/20 to-transparent rounded-xl pointer-events-none" />
            </div>
          </div>

          {/* ML Lifecycle Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="learning-card fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-warning" />
                  <span>Traditional ML Development</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-warning rounded-full" />
                    <span className="text-sm">Manual infrastructure management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-warning rounded-full" />
                    <span className="text-sm">Complex scaling and optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-warning rounded-full" />
                    <span className="text-sm">Time-consuming deployment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-warning rounded-full" />
                    <span className="text-sm">Manual monitoring and maintenance</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="learning-card fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>SageMaker ML Development</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-success rounded-full" />
                    <span className="text-sm">Fully managed infrastructure</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-success rounded-full" />
                    <span className="text-sm">Automatic scaling and optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-success rounded-full" />
                    <span className="text-sm">One-click deployment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-success rounded-full" />
                    <span className="text-sm">Built-in monitoring and alerting</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Concepts Section */}
      <section id="concepts" data-section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Core Concepts of SageMaker</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Understanding the fundamental components that make SageMaker powerful for ML development
            </p>
          </div>

          {/* Architecture Overview */}
          <div className="mb-16">
            <div className="relative rounded-xl overflow-hidden shadow-aws">
              <img
                src={sagemakerArchitecture}
                alt="SageMaker Architecture"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>

          {/* Core Components Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {coreComponents.map((component, index) => (
              <Card key={index} className="learning-card fade-in">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${component.color} flex items-center justify-center mb-4`}>
                    <component.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{component.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{component.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Component Breakdown */}
          <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
            <AccordionItem value="studio">
              <AccordionTrigger className="text-left">
                <div className="flex items-center space-x-3">
                  <Code className="h-5 w-5 text-blue-600" />
                  <span>SageMaker Studio - Integrated IDE</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4">
                <p className="text-muted-foreground">
                  SageMaker Studio is a web-based integrated development environment (IDE) for machine learning. 
                  It provides a unified visual interface where you can perform all ML development steps.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h5 className="font-semibold">Key Features:</h5>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Jupyter notebooks with multiple kernels</li>
                      <li>• Visual workflow designer</li>
                      <li>• Integrated debugging tools</li>
                      <li>• Git integration</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-semibold">Use Cases:</h5>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Data exploration and visualization</li>
                      <li>• Model development and testing</li>
                      <li>• Experiment tracking</li>
                      <li>• Pipeline creation</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="training">
              <AccordionTrigger className="text-left">
                <div className="flex items-center space-x-3">
                  <Brain className="h-5 w-5 text-purple-600" />
                  <span>Training Jobs - Scalable Model Training</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4">
                <p className="text-muted-foreground">
                  Training jobs in SageMaker allow you to train machine learning models using built-in algorithms, 
                  popular ML frameworks, or your own custom algorithms.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h5 className="font-semibold">Training Options:</h5>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Built-in algorithms (XGBoost, Linear Learner)</li>
                      <li>• Framework containers (TensorFlow, PyTorch)</li>
                      <li>• Custom Docker containers</li>
                      <li>• Distributed training</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-semibold">Features:</h5>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Automatic scaling</li>
                      <li>• Spot instance support</li>
                      <li>• Hyperparameter tuning</li>
                      <li>• Model checkpointing</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="endpoints">
              <AccordionTrigger className="text-left">
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-orange-600" />
                  <span>Endpoints - Model Deployment & Inference</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4">
                <p className="text-muted-foreground">
                  SageMaker endpoints provide real-time inference capabilities for your deployed models, 
                  with automatic scaling and multi-model hosting.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h5 className="font-semibold">Deployment Types:</h5>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Real-time endpoints</li>
                      <li>• Batch transform jobs</li>
                      <li>• Multi-model endpoints</li>
                      <li>• Serverless inference</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-semibold">Features:</h5>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Auto-scaling based on traffic</li>
                      <li>• A/B testing support</li>
                      <li>• Model monitoring</li>
                      <li>• High availability</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Hands-On Implementation */}
      <section id="hands-on" data-section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Hands-On Implementation Guide</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Build a complete machine learning model with SageMaker - from data preparation to deployment
            </p>
          </div>

          {/* Interactive Tutorial */}
          <div className="mb-12">
            <Card className="learning-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Play className="h-6 w-6 text-primary" />
                  <span>💻 Try the Tutorial Yourself</span>
                </CardTitle>
                <CardDescription>
                  Interactive SageMaker tutorial with step-by-step guidance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg overflow-hidden border">
                  <iframe
                    src="https://aws.storylane.io/demo/3siijvynnjzu?embed=inline"
                    width="100%"
                    height="600"
                    style={{ border: 'none', borderRadius: '8px' }}
                    allowFullScreen
                    loading="lazy"
                    title="SageMaker Interactive Tutorial"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Step-by-Step Guide */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center mb-8">Complete Implementation Steps</h3>
            
            <Tabs defaultValue="setup" className="w-full">
              <TabsList className="grid w-full grid-cols-7 mb-8">
                <TabsTrigger value="setup">Setup</TabsTrigger>
                <TabsTrigger value="data">Data</TabsTrigger>
                <TabsTrigger value="notebook">Notebook</TabsTrigger>
                <TabsTrigger value="train">Train</TabsTrigger>
                <TabsTrigger value="deploy">Deploy</TabsTrigger>
                <TabsTrigger value="predict">Predict</TabsTrigger>
                <TabsTrigger value="cleanup">Cleanup</TabsTrigger>
              </TabsList>

              <TabsContent value="setup" className="space-y-6">
                <Card className="learning-card">
                  <CardHeader>
                    <CardTitle>Step 1: Set up SageMaker Environment</CardTitle>
                    <CardDescription>Initialize your AWS environment and configure permissions</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h5 className="font-semibold">Prerequisites:</h5>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• AWS Account with appropriate permissions</li>
                        <li>• IAM role for SageMaker execution</li>
                        <li>• S3 bucket for data storage</li>
                      </ul>
                    </div>
                    
                    <div className="bg-aws-code-bg text-aws-code-text p-4 rounded-lg overflow-x-auto">
                      <pre><code>{`import boto3
import sagemaker
from sagemaker.session import Session

# Initialize SageMaker session
sagemaker_session = Session()
region = sagemaker_session.boto_region_name
role = sagemaker.get_execution_role()

print(f"Region: {region}")
print(f"Role: {role}")

# Create S3 bucket for data
bucket = sagemaker_session.default_bucket()
prefix = 'sagemaker-tutorial'
print(f"Bucket: {bucket}")`}</code></pre>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="data" className="space-y-6">
                <Card className="learning-card">
                  <CardHeader>
                    <CardTitle>Step 2: Upload Dataset to S3</CardTitle>
                    <CardDescription>Prepare and upload your training data</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-aws-code-bg text-aws-code-text p-4 rounded-lg overflow-x-auto">
                      <pre><code>{`import pandas as pd
import numpy as np
from sklearn.datasets import load_boston
from sklearn.model_selection import train_test_split

# Load sample dataset (Boston Housing)
boston = load_boston()
X, y = boston.data, boston.target

# Split the data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Create DataFrames
train_data = pd.DataFrame(X_train, columns=boston.feature_names)
train_data['target'] = y_train

test_data = pd.DataFrame(X_test, columns=boston.feature_names)
test_data['target'] = y_test

# Save to S3
train_data.to_csv(f's3://{bucket}/{prefix}/train.csv', index=False)
test_data.to_csv(f's3://{bucket}/{prefix}/test.csv', index=False)

print("Data uploaded successfully!")`}</code></pre>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notebook" className="space-y-6">
                <Card className="learning-card">
                  <CardHeader>
                    <CardTitle>Step 3: Set up Jupyter Notebook Environment</CardTitle>
                    <CardDescription>Access interactive notebooks for hands-on learning</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h5 className="font-semibold">💻 Google Colab Notebooks</h5>
                        <p className="text-sm text-muted-foreground">Ready-to-use interactive notebooks for learning SageMaker:</p>
                      </div>
                      
                      <div className="grid gap-4">
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="space-y-1">
                            <h6 className="font-medium">Getting Started With SageMaker</h6>
                            <p className="text-xs text-muted-foreground">Basic setup and first model training</p>
                          </div>
                          <Button 
                            size="sm" 
                            onClick={() => window.open('https://colab.research.google.com/drive/1k6DfzXKMih7BvzJ5OXFU_WEfQfI7-RC_?usp=sharing', '_blank')}
                            className="bg-orange-500 hover:bg-orange-600 text-white"
                          >
                            <Code className="h-4 w-4 mr-2" />
                            Open in Colab
                          </Button>
                        </div>
                        
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="space-y-1">
                            <h6 className="font-medium">SageMaker Model Training</h6>
                            <p className="text-xs text-muted-foreground">Advanced training techniques and deployment</p>
                          </div>
                          <Button 
                            size="sm" 
                            onClick={() => window.open('https://colab.research.google.com/drive/1F0L2gTWSrZQH0BwIaRrmeS2tE500A-CL?usp=sharing', '_blank')}
                            className="bg-orange-500 hover:bg-orange-600 text-white"
                          >
                            <Code className="h-4 w-4 mr-2" />
                            Open in Colab
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="train" className="space-y-6">
                <Card className="learning-card">
                  <CardHeader>
                    <CardTitle>Step 4: Train with XGBoost Algorithm</CardTitle>
                    <CardDescription>Use SageMaker's built-in XGBoost algorithm</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-aws-code-bg text-aws-code-text p-4 rounded-lg overflow-x-auto">
                      <pre><code>{`from sagemaker.xgboost.estimator import XGBoost
from sagemaker.inputs import TrainingInput

# Set up XGBoost estimator
xgb_estimator = XGBoost(
    entry_point='train.py',
    framework_version='1.3-1',
    instance_type='ml.m5.large',
    instance_count=1,
    role=role,
    sagemaker_session=sagemaker_session,
    hyperparameters={
        'max_depth': 3,
        'eta': 0.1,
        'gamma': 4,
        'min_child_weight': 6,
        'subsample': 0.8,
        'objective': 'reg:linear',
        'num_round': 100
    }
)

# Define training input
train_input = TrainingInput(
    s3_data=f's3://{bucket}/{prefix}/train.csv',
    content_type='text/csv'
)

# Start training job
xgb_estimator.fit({'train': train_input})
print("Training completed!")`}</code></pre>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="deploy" className="space-y-6">
                <Card className="learning-card">
                  <CardHeader>
                    <CardTitle>Step 5: Deploy as Endpoint</CardTitle>
                    <CardDescription>Create a real-time inference endpoint</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-aws-code-bg text-aws-code-text p-4 rounded-lg overflow-x-auto">
                      <pre><code>{`# Deploy the model to an endpoint
predictor = xgb_estimator.deploy(
    initial_instance_count=1,
    instance_type='ml.t2.medium',
    endpoint_name='xgboost-housing-endpoint'
)

print(f"Endpoint deployed: {predictor.endpoint_name}")

# Test the endpoint
import json

# Prepare test data
test_sample = X_test[0].reshape(1, -1)
result = predictor.predict(test_sample)

print(f"Prediction: {result}")
print(f"Actual: {y_test[0]}")`}</code></pre>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="predict" className="space-y-6">
                <Card className="learning-card">
                  <CardHeader>
                    <CardTitle>Step 6: Make Predictions & Test Model</CardTitle>
                    <CardDescription>Use the deployed model for inference and testing</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h5 className="font-semibold">💻 Interactive Notebooks for Testing:</h5>
                        <p className="text-sm text-muted-foreground">Use these Google Colab notebooks to test your models:</p>
                      </div>
                      
                      <div className="grid gap-4 mb-4">
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="space-y-1">
                            <h6 className="font-medium">Getting Started With SageMaker</h6>
                            <p className="text-xs text-muted-foreground">Test basic predictions and model evaluation</p>
                          </div>
                          <Button 
                            size="sm" 
                            onClick={() => window.open('https://colab.research.google.com/drive/1k6DfzXKMih7BvzJ5OXFU_WEfQfI7-RC_?usp=sharing', '_blank')}
                            className="bg-orange-500 hover:bg-orange-600 text-white"
                          >
                            <Code className="h-4 w-4 mr-2" />
                            Open in Colab
                          </Button>
                        </div>
                        
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="space-y-1">
                            <h6 className="font-medium">SageMaker Model Training</h6>
                            <p className="text-xs text-muted-foreground">Advanced prediction techniques and model evaluation</p>
                          </div>
                          <Button 
                            size="sm" 
                            onClick={() => window.open('https://colab.research.google.com/drive/1F0L2gTWSrZQH0BwIaRrmeS2tE500A-CL?usp=sharing', '_blank')}
                            className="bg-orange-500 hover:bg-orange-600 text-white"
                          >
                            <Code className="h-4 w-4 mr-2" />
                            Open in Colab
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-aws-code-bg text-aws-code-text p-4 rounded-lg overflow-x-auto">
                      <pre><code>{`# Make batch predictions
import pandas as pd

# Load test data
test_df = pd.read_csv(f's3://{bucket}/{prefix}/test.csv')
test_features = test_df.drop('target', axis=1)

# Make predictions
predictions = predictor.predict(test_features.values)

# Evaluate model performance
from sklearn.metrics import mean_squared_error, r2_score

mse = mean_squared_error(test_df['target'], predictions)
r2 = r2_score(test_df['target'], predictions)

print(f"Mean Squared Error: {mse:.2f}")
print(f"R² Score: {r2:.2f}")

# Create predictions DataFrame
results_df = pd.DataFrame({
    'actual': test_df['target'],
    'predicted': predictions.flatten()
})

print(results_df.head())`}</code></pre>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="cleanup" className="space-y-6">
                <Card className="learning-card">
                  <CardHeader>
                    <CardTitle>Step 7: Cleanup Resources</CardTitle>
                    <CardDescription>Important: Clean up to avoid charges</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="warning-box mb-4">
                      <div className="flex items-center space-x-2">
                        <AlertTriangle className="h-5 w-5 text-warning" />
                        <span className="font-semibold">Important: Always cleanup resources!</span>
                      </div>
                      <p className="text-sm mt-2">Endpoints continue to incur charges even when not in use.</p>
                    </div>
                    
                    <div className="bg-aws-code-bg text-aws-code-text p-4 rounded-lg overflow-x-auto">
                      <pre><code>{`# Delete the endpoint
predictor.delete_endpoint()
print("Endpoint deleted successfully!")

# Optional: Delete model and endpoint configuration
import boto3

sagemaker_client = boto3.client('sagemaker')

# List and delete endpoint configurations
response = sagemaker_client.list_endpoint_configs(
    NameContains='xgboost-housing'
)

for config in response['EndpointConfigs']:
    sagemaker_client.delete_endpoint_config(
        EndpointConfigName=config['EndpointConfigName']
    )
    print(f"Deleted config: {config['EndpointConfigName']}")

print("Cleanup completed!")`}</code></pre>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" data-section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Real-World Use Cases</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how organizations across industries leverage SageMaker for business impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="learning-card fade-in group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <useCase.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary">{useCase.category}</Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {useCase.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{useCase.description}</p>
                  
                  <div className="space-y-2">
                    <h5 className="font-semibold text-sm">Key Technologies:</h5>
                    <div className="flex flex-wrap gap-2">
                      {useCase.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Industry Success Stories */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Industry Success Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="learning-card fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Building className="h-6 w-6 text-primary" />
                    <span>Netflix - Content Personalization</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Netflix uses SageMaker to power their recommendation engine, serving personalized 
                    content to over 200 million subscribers worldwide with sub-second response times.
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="h-4 w-4 text-success" />
                      <span>35% engagement increase</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>&lt; 100ms latency</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="learning-card fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Smartphone className="h-6 w-6 text-primary" />
                    <span>Airbnb - Fraud Detection</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Airbnb leverages SageMaker to detect fraudulent bookings and protect both hosts 
                    and guests, processing millions of transactions daily.
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Shield className="h-4 w-4 text-success" />
                      <span>99.9% accuracy</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="h-4 w-4 text-primary" />
                      <span>$10M+ saved annually</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" data-section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Benefits of Using SageMaker</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Accelerate your ML journey with these powerful capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="learning-card fade-in text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* ROI Calculator */}
          <div className="mt-16">
            <Card className="learning-card max-w-2xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center space-x-2">
                  <BarChart3 className="h-6 w-6 text-primary" />
                  <span>SageMaker ROI Calculator</span>
                </CardTitle>
                <CardDescription>
                  Estimate potential cost savings and time reduction
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-8 text-center">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">70%</div>
                    <div className="text-sm text-muted-foreground">Infrastructure Cost Reduction</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">5x</div>
                    <div className="text-sm text-muted-foreground">Faster Time to Market</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">60%</div>
                    <div className="text-sm text-muted-foreground">Development Time Saved</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">90%</div>
                    <div className="text-sm text-muted-foreground">Operational Overhead Reduction</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Challenges & Limitations */}
      <section id="challenges" data-section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Challenges & Limitations</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Important considerations before adopting SageMaker
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {challenges.map((challenge, index) => (
              <div key={index} className="warning-box fade-in">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-warning mt-0.5" />
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">{challenge.title}</h4>
                    <p className="text-muted-foreground text-sm">{challenge.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mitigation Strategies */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Mitigation Strategies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="learning-card fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <DollarSign className="h-5 w-5 text-success" />
                    <span>Cost Optimization</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Use Spot instances for training jobs</li>
                    <li>• Implement automatic scaling policies</li>
                    <li>• Monitor usage with CloudWatch</li>
                    <li>• Set up billing alerts and budgets</li>
                    <li>• Leverage serverless inference for low traffic</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="learning-card fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Lock className="h-5 w-5 text-success" />
                    <span>Security & Permissions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Follow principle of least privilege</li>
                    <li>• Use IAM roles instead of users</li>
                    <li>• Enable VPC and private subnets</li>
                    <li>• Implement data encryption at rest/transit</li>
                    <li>• Regular security audits and reviews</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Tools Section */}
      <section id="advanced" data-section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Advanced Tools and Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore powerful SageMaker capabilities for enterprise ML workflows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advancedTools.map((tool, index) => (
              <Card key={index} className="learning-card fade-in group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <tool.icon className="h-6 w-6 text-accent" />
                    </div>
                    <Badge variant="secondary">{tool.badge}</Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-accent transition-colors">
                    {tool.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{tool.description}</p>
                  
                  <div className="space-y-2">
                    <h5 className="font-semibold text-sm">Key Features:</h5>
                    <ul className="space-y-1">
                      {tool.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-xs text-muted-foreground flex items-center space-x-2">
                          <div className="w-1 h-1 bg-accent rounded-full" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* MLOps Workflow */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">MLOps Workflow with SageMaker</h3>
            
            {/* Workflow Diagram */}
            <div className="mb-8">
              <div className="relative rounded-xl overflow-hidden shadow-aws max-w-4xl mx-auto">
                <img
                  src={workflowImage}
                  alt="SageMaker MLOps Workflow"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
            </div>

            <Card className="learning-card fade-in max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Workflow className="h-6 w-6 text-primary" />
                  <span>End-to-End ML Pipeline</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mx-auto">
                      <Database className="h-6 w-6" />
                    </div>
                    <h5 className="font-semibold text-sm">Data Preparation</h5>
                    <p className="text-xs text-muted-foreground">Feature Store, Data Wrangler</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto">
                      <Brain className="h-6 w-6" />
                    </div>
                    <h5 className="font-semibold text-sm">Model Training</h5>
                    <p className="text-xs text-muted-foreground">Training Jobs, Autopilot</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center mx-auto">
                      <Eye className="h-6 w-6" />
                    </div>
                    <h5 className="font-semibold text-sm">Model Validation</h5>
                    <p className="text-xs text-muted-foreground">Clarify, Experiments</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 bg-orange-100 text-orange-700 rounded-full flex items-center justify-center mx-auto">
                      <Rocket className="h-6 w-6" />
                    </div>
                    <h5 className="font-semibold text-sm">Deployment</h5>
                    <p className="text-xs text-muted-foreground">Endpoints, Pipelines</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" data-section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-header">Additional Resources & References</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Continue your SageMaker learning journey with these curated resources
            </p>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              className="btn-aws group"
              onClick={() => window.open('https://drive.google.com/viewerng/viewer?embedded=true&url=https://raw.githubusercontent.com/07Sushant/dump/main/SageMaker_doc.pdf', '_blank')}
            >
              <Download className="h-5 w-5 mr-2 group-hover:animate-bounce" />
              Download Developer PDF
            </Button>
            <Button 
              className="btn-secondary"
              onClick={() => window.open('https://raw.githubusercontent.com/07Sushant/dump/main/SageMaker_PPT.pptx', '_blank')}
            >
              <Presentation className="h-5 w-5 mr-2" />
              Download Workflow PPT
            </Button>
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary-glow transition-all duration-300"
              onClick={() => window.open('https://colab.research.google.com/drive/1k6DfzXKMih7BvzJ5OXFU_WEfQfI7-RC_?usp=sharing', '_blank')}
            >
              <Code className="h-5 w-5 mr-2" />
              Get Jupyter Notebook
            </Button>
          </div>

          <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
            <AccordionItem value="docs">
              <AccordionTrigger className="text-left">
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-primary" />
                  <span>🔗 Official Documentation & Guides</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <a href="https://docs.aws.amazon.com/sagemaker/" className="flex items-center space-x-2 text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      <span>AWS SageMaker Developer Guide</span>
                    </a>
                    <a href="https://aws.amazon.com/sagemaker/getting-started/" className="flex items-center space-x-2 text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      <span>SageMaker Getting Started</span>
                    </a>
                    <a href="https://sagemaker.readthedocs.io/" className="flex items-center space-x-2 text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      <span>SageMaker Python SDK</span>
                    </a>
                  </div>
                  <div className="space-y-3">
                    <a href="https://aws.amazon.com/sagemaker/pricing/" className="flex items-center space-x-2 text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      <span>SageMaker Pricing Calculator</span>
                    </a>
                    <a href="https://aws.amazon.com/sagemaker/faqs/" className="flex items-center space-x-2 text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      <span>SageMaker FAQ</span>
                    </a>
                    <a href="https://aws.amazon.com/sagemaker/features/" className="flex items-center space-x-2 text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      <span>SageMaker Features Overview</span>
                    </a>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="github">
              <AccordionTrigger className="text-left">
                <div className="flex items-center space-x-3">
                  <Code className="h-5 w-5 text-primary" />
                  <span>🔗 GitHub Examples & Repositories</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <a href="https://github.com/aws/amazon-sagemaker-examples" className="flex items-center space-x-2 text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      <span>Official SageMaker Examples</span>
                    </a>
                    <a href="https://github.com/aws/sagemaker-python-sdk" className="flex items-center space-x-2 text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      <span>SageMaker Python SDK</span>
                    </a>
                    <a href="https://github.com/aws-samples/aws-machine-learning-university-accelerated-nlp" className="flex items-center space-x-2 text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      <span>ML University NLP Course</span>
                    </a>
                  </div>
                  <div className="space-y-3">
                    <a href="https://github.com/aws-samples/aws-machine-learning-university-accelerated-cv" className="flex items-center space-x-2 text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      <span>ML University Computer Vision</span>
                    </a>
                    <a href="https://github.com/aws-samples/sagemaker-mlops-workshop" className="flex items-center space-x-2 text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      <span>SageMaker MLOps Workshop</span>
                    </a>
                    <a href="https://github.com/aws-samples/amazon-sagemaker-workshop" className="flex items-center space-x-2 text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      <span>SageMaker Workshop</span>
                    </a>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="videos">
              <AccordionTrigger className="text-left">
                <div className="flex items-center space-x-3">
                  <Play className="h-5 w-5 text-primary" />
                  <span>🔗 Video Tutorials & Courses</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <a href="https://www.youtube.com/watch?v=uQc8Itd4UTs&list=PLhr1KZpdzukcOr_6j_zmSrvYnLUtgqsZz" className="flex items-center space-x-2 text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      <span>AWS SageMaker Video Series</span>
                    </a>
                    <a href="https://aws.amazon.com/training/learn-about/machine-learning/" className="flex items-center space-x-2 text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      <span>AWS Machine Learning Training</span>
                    </a>
                    <a href="https://explore.skillbuilder.aws/learn/course/external/view/elearning/462/amazon-sagemaker-studio-getting-started" className="flex items-center space-x-2 text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      <span>SageMaker Studio Course</span>
                    </a>
                  </div>
                  <div className="space-y-3">
                    <a href="https://aws.amazon.com/certification/certified-machine-learning-specialty/" className="flex items-center space-x-2 text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      <span>AWS ML Specialty Certification</span>
                    </a>
                    <a href="https://www.coursera.org/learn/aws-machine-learning" className="flex items-center space-x-2 text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      <span>AWS Machine Learning on Coursera</span>
                    </a>
                    <a href="https://www.edx.org/course/introduction-to-machine-learning" className="flex items-center space-x-2 text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      <span>ML Fundamentals on edX</span>
                    </a>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cases">
              <AccordionTrigger className="text-left">
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-primary" />
                  <span>🔗 Case Studies & Success Stories</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <a href="https://aws.amazon.com/solutions/case-studies/netflix/" className="flex items-center space-x-2 text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      <span>Netflix Content Personalization</span>
                    </a>
                    <a href="https://aws.amazon.com/solutions/case-studies/airbnb/" className="flex items-center space-x-2 text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      <span>Airbnb Fraud Detection</span>
                    </a>
                    <a href="https://aws.amazon.com/solutions/case-studies/capital-one/" className="flex items-center space-x-2 text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      <span>Capital One Credit Risk</span>
                    </a>
                  </div>
                  <div className="space-y-3">
                    <a href="https://aws.amazon.com/solutions/case-studies/intuit/" className="flex items-center space-x-2 text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      <span>Intuit Tax Optimization</span>
                    </a>
                    <a href="https://aws.amazon.com/solutions/case-studies/ge-healthcare/" className="flex items-center space-x-2 text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      <span>GE Healthcare AI Imaging</span>
                    </a>
                    <a href="https://aws.amazon.com/sagemaker/customers/" className="flex items-center space-x-2 text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      <span>All SageMaker Customer Stories</span>
                    </a>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="community">
              <AccordionTrigger className="text-left">
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span>🔗 Community & Support</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <a href="https://repost.aws/tags/TA4IvCeRHNShempO3dWPEofg/amazon-sagemaker" className="flex items-center space-x-2 text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      <span>AWS re:Post SageMaker Forum</span>
                    </a>
                    <a href="https://stackoverflow.com/questions/tagged/amazon-sagemaker" className="flex items-center space-x-2 text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      <span>Stack Overflow SageMaker</span>
                    </a>
                    <a href="https://www.reddit.com/r/MachineLearning/" className="flex items-center space-x-2 text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      <span>Machine Learning Reddit</span>
                    </a>
                  </div>
                  <div className="space-y-3">
                    <a href="https://aws.amazon.com/developer/community/" className="flex items-center space-x-2 text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      <span>AWS Developer Community</span>
                    </a>
                    <a href="https://twitter.com/awscloud" className="flex items-center space-x-2 text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      <span>AWS on Twitter</span>
                    </a>
                    <a href="https://aws.amazon.com/blogs/machine-learning/" className="flex items-center space-x-2 text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      <span>AWS Machine Learning Blog</span>
                    </a>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Learning Roadmap */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Suggested Learning Roadmap</h3>
            <Card className="learning-card fade-in max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Map className="h-6 w-6 text-primary" />
                  <span>📈 Your Next Steps</span>
                </CardTitle>
                <CardDescription>
                  Follow this structured path to master SageMaker
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div className="space-y-1">
                      <h5 className="font-semibold">Complete This Tutorial</h5>
                      <p className="text-sm text-muted-foreground">Finish all hands-on exercises and download resources</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div className="space-y-1">
                      <h5 className="font-semibold">Build Your First Project</h5>
                      <p className="text-sm text-muted-foreground">Create an end-to-end ML project using your own dataset</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div className="space-y-1">
                      <h5 className="font-semibold">Explore Advanced Features</h5>
                      <p className="text-sm text-muted-foreground">Try Autopilot, Pipelines, and Feature Store</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">4</div>
                    <div className="space-y-1">
                      <h5 className="font-semibold">Get AWS Certified</h5>
                      <p className="text-sm text-muted-foreground">Pursue AWS Machine Learning Specialty Certification</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">5</div>
                    <div className="space-y-1">
                      <h5 className="font-semibold">Join the Community</h5>
                      <p className="text-sm text-muted-foreground">Contribute to open source and share your learnings</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Cloud className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold">SageMaker Academy</span>
              </div>
              <p className="text-sm text-background/70">
                Your comprehensive resource for mastering Amazon SageMaker and machine learning on AWS.
              </p>
            </div>
            
            <div className="space-y-4">
              <h5 className="font-semibold">Quick Links</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#introduction" className="text-background/70 hover:text-background">Introduction</a></li>
                <li><a href="#concepts" className="text-background/70 hover:text-background">Core Concepts</a></li>
                <li><a href="#hands-on" className="text-background/70 hover:text-background">Hands-On Guide</a></li>
                <li><a href="#use-cases" className="text-background/70 hover:text-background">Use Cases</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h5 className="font-semibold">Resources</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-background/70 hover:text-background">Download PDF</a></li>
                <li><a href="#" className="text-background/70 hover:text-background">Get Notebooks</a></li>
                <li><a href="#advanced" className="text-background/70 hover:text-background">Advanced Tools</a></li>
                <li><a href="#resources" className="text-background/70 hover:text-background">References</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h5 className="font-semibold">Connect</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="https://aws.amazon.com/sagemaker/" className="text-background/70 hover:text-background">AWS SageMaker</a></li>
                <li><a href="https://docs.aws.amazon.com/sagemaker/" className="text-background/70 hover:text-background">Documentation</a></li>
                <li><a href="https://github.com/aws/amazon-sagemaker-examples" className="text-background/70 hover:text-background">Examples</a></li>
                <li><a href="https://aws.amazon.com/blogs/machine-learning/" className="text-background/70 hover:text-background">ML Blog</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 pt-8 mt-8 text-center text-sm text-background/70">
            <p>&copy; 2025 SageMaker Academy. This Assignment is completed by SUSHANT</p>
          </div>
        </div>
      </footer>

      {/* Developer Profile Floating Button */}
      <DeveloperProfile />
    </div>
  );
};

export default SageMakerLearningPlatform;
