import React from "react";
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Users, FileText, Clock, Mail, ArrowLeft } from 'lucide-react';
import { Layout } from "@/layout/Layout";

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: FileText,
      title: "Information We Collect",
      content: [
        "Personal Information: Name, email, phone number, billing details when you contact us or use our services.",
        "Technical Data: IP address, browser type, device information, and usage analytics to improve our website performance.",
        "Cookies and Tracking: We use cookies to enhance user experience and analyze website traffic patterns.",
        "Project Data: Information shared during consultations and project development phases."
      ]
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "To provide and improve our software engineering services and customer support.",
        "To communicate with you regarding project updates, service announcements, and promotional offers.",
        "To analyze usage trends and improve website functionality and user experience.",
        "To comply with legal obligations and protect our legitimate business interests.",
        "To process payments and manage billing for our services."
      ]
    },
    {
      icon: Users,
      title: "Sharing of Information",
      content: [
        "We do not sell, rent, or trade your personal data to third parties for marketing purposes.",
        "We may share information with trusted service providers who assist with hosting, analytics, payment processing, and customer support.",
        "Information may be disclosed to authorities when legally required or to protect our rights and safety.",
        "In case of business transfers, your information may be transferred as part of the business assets."
      ]
    },
    {
      icon: Lock,
      title: "Data Security & Protection",
      content: [
        "We implement industry-standard encryption protocols to protect data in transit and at rest.",
        "Access controls ensure only authorized personnel can access your personal information.",
        "Regular security audits and vulnerability assessments are conducted to maintain system integrity.",
        "We maintain backup systems and disaster recovery procedures to prevent data loss."
      ]
    },
    {
      icon: Shield,
      title: "Your Rights & Choices",
      content: [
        "Access: You have the right to request access to the personal data we hold about you.",
        "Correction: You may request corrections to inaccurate or incomplete personal information.",
        "Deletion: You can request deletion of your personal data, subject to legal and business requirements.",
        "Portability: You may request your data in a structured, machine-readable format.",
        "Opt-out: You can unsubscribe from marketing communications at any time."
      ]
    },
    {
      icon: Clock,
      title: "Data Retention",
      content: [
        "We retain personal information only as long as necessary for the purposes outlined in this policy.",
        "Project-related data is typically retained for 7 years after project completion for legal and business purposes.",
        "Marketing data is retained until you opt out or request deletion.",
        "Technical logs and analytics data are automatically purged after 24 months."
      ]
    }
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
                <Shield className="w-4 h-4" />
                <span>Your Privacy Matters</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Privacy Policy
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                At <strong className="text-primary">Nova Labs</strong>, we respect your privacy and are committed
                to protecting your personal data. This policy explains how we collect, use, and safeguard 
                your information with complete transparency.
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

            {/* Privacy Sections */}
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

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16"
            >
              <div className="p-8 rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">Questions About Your Privacy?</h3>
                
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  If you have any questions about this Privacy Policy, your data rights, or how we handle your information, 
                  please don't hesitate to contact our privacy team.
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
                    Contact Form
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Additional Legal Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-12 p-6 rounded-2xl bg-muted/50 border border-border/50"
            >
              <h4 className="font-semibold mb-3">Changes to This Policy</h4>
              <p className="text-sm text-muted-foreground mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices, 
                technology, legal requirements, or other factors. We will notify you of any material changes 
                by posting the new Privacy Policy on our website and updating the "Last Updated" date.
              </p>
              
              <div className="flex flex-wrap gap-4 text-sm">
                <a href="/terms-of-service" className="text-primary hover:text-primary/80 transition-colors">
                  Terms of Service
                </a>
                <a href="/cookie-policy" className="text-primary hover:text-primary/80 transition-colors">
                  Cookie Policy
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

export default PrivacyPolicy;
