import React from "react";
import { motion } from 'framer-motion';
import { Scale, User, Shield, AlertTriangle, Ban, FileText, Mail, ArrowLeft, Clock } from 'lucide-react';
import { Layout } from "@/layout/Layout";

const TermsOfService = () => {
  const sections = [
    {
      icon: User,
      title: "Acceptance & Use of Services",
      content: [
        "By accessing or using Nova Labs' website, services, or applications, you agree to be bound by these Terms of Service.",
        "You must be at least 18 years old or have parental/guardian consent to use our services.",
        "You agree to use our services only for lawful purposes and in accordance with applicable laws and regulations.",
        "You may not use our services in any way that could damage, disable, overburden, or impair our systems or interfere with other users.",
        "We reserve the right to modify or discontinue services at any time with or without notice."
      ]
    },
    {
      icon: Shield,
      title: "Account Registration & Security",
      content: [
        "You must provide accurate, current, and complete information when creating an account with us.",
        "You are responsible for maintaining the confidentiality of your login credentials and for all activities under your account.",
        "You must immediately notify us of any unauthorized use of your account or any other breach of security.",
        "We reserve the right to suspend or terminate accounts that violate these terms or engage in suspicious activity.",
        "You may not create multiple accounts or use automated systems to create accounts without our written permission."
      ]
    },
    {
      icon: FileText,
      title: "Intellectual Property Rights",
      content: [
        "All content, software, trademarks, logos, and intellectual property on our website belong to Nova Labs unless stated otherwise.",
        "You may not copy, modify, distribute, sell, or lease any part of our services or intellectual property without written permission.",
        "Any code, designs, or materials we create for your project remain your property upon full payment, unless otherwise agreed.",
        "You retain ownership of any content, data, or materials you provide to us during our engagement.",
        "You grant us a limited license to use your materials solely for the purpose of providing our services to you."
      ]
    },
    {
      icon: AlertTriangle,
      title: "Service Availability & Limitations",
      content: [
        "Our services are provided 'as is' without warranties of any kind, either express or implied.",
        "We do not guarantee uninterrupted access to our website or services and may experience downtime for maintenance.",
        "We are not liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.",
        "Our total liability for any claims shall not exceed the amount paid by you for our services in the 12 months preceding the claim.",
        "Some jurisdictions do not allow limitation of liability, so these limitations may not apply to you."
      ]
    },
    {
      icon: Ban,
      title: "Prohibited Activities",
      content: [
        "You may not hack, reverse-engineer, decompile, or attempt to extract source code from our services or systems.",
        "Uploading or transmitting viruses, malware, or any harmful code that could damage our systems or other users' devices.",
        "Attempting to gain unauthorized access to our systems, servers, or networks connected to our services.",
        "Using our services for any illegal activities, including but not limited to fraud, money laundering, or copyright infringement.",
        "Harassing, threatening, or intimidating other users, our staff, or engaging in any form of abusive behavior.",
        "Spamming, phishing, or sending unsolicited communications through our platforms or services."
      ]
    },
    {
      icon: Scale,
      title: "Termination & Dispute Resolution",
      content: [
        "Either party may terminate the agreement with written notice. Immediate termination may occur for breach of these terms.",
        "Upon termination, you must cease all use of our services and we may delete your account and associated data.",
        "Any disputes arising from these terms shall be resolved through binding arbitration in accordance with applicable laws.",
        "These terms are governed by the laws of [Your Jurisdiction] without regard to conflict of law principles.",
        "If any provision of these terms is found invalid, the remaining provisions shall remain in full force and effect."
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
                <Scale className="w-4 h-4" />
                <span>Legal Agreement</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Terms of Service
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Welcome to <strong className="text-primary">Nova Labs</strong>. These Terms of Service govern 
                your use of our website, services, and applications. By accessing or using our services, 
                you agree to be bound by these terms.
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

            {/* Terms Sections */}
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

            {/* Important Notice */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16"
            >
              <div className="p-8 rounded-3xl bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20">
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-3">Important Legal Notice</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      These Terms of Service constitute a legally binding agreement between you and Nova Labs. 
                      Please read them carefully. If you do not agree with any part of these terms, you must 
                      not use our services.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      For questions about these terms or to request modifications for enterprise agreements, 
                      please contact our legal team before using our services.
                    </p>
                  </div>
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
                
                <h3 className="text-2xl font-bold mb-4">Questions About These Terms?</h3>
                
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  If you have questions about these Terms of Service or need clarification on any provisions, 
                  our legal and customer support teams are available to help.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="mailto:legal@novalabs.dev"
                    className="btn-primary inline-flex items-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    legal@novalabs.dev
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
              <h4 className="font-semibold mb-3">Changes to Terms</h4>
              <p className="text-sm text-muted-foreground mb-4">
                We may revise these Terms of Service at any time by updating this page. You should check 
                this page periodically to review the current terms. Your continued use of our services 
                after any changes constitutes acceptance of the new terms.
              </p>
              
              <div className="flex flex-wrap gap-4 text-sm">
                <a href="/privacy-policy" className="text-primary hover:text-primary/80 transition-colors">
                  Privacy Policy
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

export default TermsOfService;
