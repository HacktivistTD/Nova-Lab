import React from "react";
import { motion } from 'framer-motion';
import { Cookie, Settings, Eye, Shield, Trash2, Info, Mail, ArrowLeft, Clock, FileText } from 'lucide-react';
import { Layout } from "@/layout/Layout";

const CookiePolicy = () => {
  const sections = [
    {
      icon: Info,
      title: "What Are Cookies?",
      content: [
        "Cookies are small text files that are stored on your device when you visit our website.",
        "They help us remember your preferences, improve website functionality, and provide a better user experience.",
        "Cookies contain information that is transferred to your device's hard drive and stored there.",
        "Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer."
      ]
    },
    {
      icon: Settings,
      title: "Types of Cookies We Use",
      content: [
        "Essential Cookies: Required for basic website functionality, security, and navigation. These cannot be disabled.",
        "Performance Cookies: Help us understand how visitors interact with our website by collecting anonymous information.",
        "Functional Cookies: Remember your preferences and choices to provide enhanced, personalized features.",
        "Analytics Cookies: Allow us to count visits and traffic sources to measure and improve website performance.",
        "Marketing Cookies: May be used to deliver relevant advertisements and track the effectiveness of our marketing campaigns."
      ]
    },
    {
      icon: Eye,
      title: "How We Use Cookies",
      content: [
        "To ensure our website functions properly and securely for all users.",
        "To remember your preferences, such as language settings and display options.",
        "To analyze website traffic and user behavior to improve our services and content.",
        "To provide personalized content and recommendations based on your interests.",
        "To measure the effectiveness of our marketing efforts and improve our advertising.",
        "To prevent fraud and enhance the security of our website and services."
      ]
    },
    {
      icon: Shield,
      title: "Third-Party Cookies",
      content: [
        "We may allow trusted third-party services to place cookies on your device for analytics and advertising purposes.",
        "Google Analytics: Helps us understand website usage patterns and improve user experience.",
        "Social Media Platforms: Enable social sharing features and may track your interaction with embedded content.",
        "Advertising Partners: May use cookies to deliver relevant ads and measure campaign performance.",
        "These third parties have their own privacy policies and cookie practices, which we encourage you to review."
      ]
    },
    {
      icon: Trash2,
      title: "Managing & Controlling Cookies",
      content: [
        "Browser Settings: You can control cookies through your web browser settings. Most browsers allow you to block or delete cookies.",
        "Selective Blocking: You can choose to accept some cookies while blocking others, though this may affect website functionality.",
        "Cookie Preferences: Use our cookie preference center (if available) to customize your cookie settings.",
        "Automatic Deletion: Set your browser to automatically delete cookies when you close it.",
        "Opt-out Tools: Use industry opt-out tools for advertising cookies and tracking technologies."
      ]
    },
    {
      icon: Clock,
      title: "Cookie Retention & Updates",
      content: [
        "Session Cookies: Deleted automatically when you close your browser or end your session.",
        "Persistent Cookies: Remain on your device for a set period, typically ranging from 30 days to 2 years.",
        "Policy Updates: We may update this Cookie Policy to reflect changes in technology, legal requirements, or our practices.",
        "Regular Review: We regularly review our cookie usage to ensure compliance with privacy regulations and best practices."
      ]
    }
  ];

  const browserInstructions = [
    { browser: "Chrome", steps: "Settings → Privacy and security → Cookies and other site data" },
    { browser: "Firefox", steps: "Options → Privacy & Security → Cookies and Site Data" },
    { browser: "Safari", steps: "Preferences → Privacy → Manage Website Data" },
    { browser: "Edge", steps: "Settings → Cookies and site permissions → Cookies and site data" }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-muted/20 to-background">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container-width">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Cookie className="w-4 h-4" />
                <span>Cookie Information</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Cookie Policy
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                This Cookie Policy explains how <strong className="text-primary">Nova Labs</strong> uses cookies
                and similar technologies to enhance your browsing experience, analyze website performance,
                and provide personalized content.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Last Updated: January 10, 2025</span>
                </div>
                <div className="hidden sm:block">•</div>
                <div className="flex items-center space-x-2">
                  <FileText className="w-4 h-4" />
                  <span>Effective Date: January 1, 2025</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container-width max-w-4xl">
            {/* Back Navigation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Previous Page</span>
              </button>
            </motion.div>

            {/* Cookie Sections */}
            <div className="space-y-12">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="p-8 rounded-3xl bg-card hover:bg-card/80 transition-all duration-300 border border-border/50 hover:border-primary/20 card-hover">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <section.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                        {index + 1}. {section.title}
                      </h2>
                    </div>
                    
                    <ul className="space-y-4">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2" />
                          <span className="text-muted-foreground leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Browser Instructions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16"
            >
              <div className="p-8 rounded-3xl bg-card border border-border/50">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Settings className="w-6 h-6 text-primary mr-3" />
                  Browser-Specific Cookie Settings
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {browserInstructions.map((instruction, index) => (
                    <div key={instruction.browser} className="p-4 rounded-2xl bg-muted/50 border border-border/30">
                      <h4 className="font-semibold text-primary mb-2">{instruction.browser}</h4>
                      <p className="text-sm text-muted-foreground">{instruction.steps}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-16"
            >
              <div className="p-8 rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">Questions About Cookies?</h3>
                
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  If you have questions about our use of cookies or need help managing your cookie preferences, 
                  our support team is here to help.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="mailto:privacy@novalabs.dev"
                    className="btn-primary inline-flex items-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    privacy@novalabs.dev
                  </a>
                  
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = '/#contact';
                    }}
                    className="btn-outline inline-flex items-center"
                  >
                    Contact Support
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Additional Legal Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 p-6 rounded-2xl bg-muted/50 border border-border/50"
            >
              <h4 className="font-semibold mb-3">Important Notes</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Disabling certain cookies may affect website functionality. Essential cookies cannot be disabled 
                as they are necessary for the website to function properly. This policy works in conjunction 
                with our Privacy Policy and Terms of Service.
              </p>
              
              <div className="flex flex-wrap gap-4 text-sm">
                <a href="/privacy-policy" className="text-primary hover:text-primary/80 transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms-of-service" className="text-primary hover:text-primary/80 transition-colors">
                  Terms of Service
                </a>
                <a href="/#contact" className="text-primary hover:text-primary/80 transition-colors">
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CookiePolicy;
