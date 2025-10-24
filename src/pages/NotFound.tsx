import React from "react";
import { motion } from 'framer-motion';
import { AlertCircle, Home, ArrowLeft, Search, Mail, FileQuestion } from 'lucide-react';
import { Layout } from "@/layout/Layout";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const quickLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Services", href: "/#services", icon: Search },
    { name: "Portfolio", href: "/#portfolio", icon: FileQuestion },
    { name: "Contact", href: "/#contact", icon: Mail }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-muted/20 to-background">
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container-width max-w-4xl">
            <div className="text-center">
              {/* 404 Animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                className="mb-8"
              >
                <div className="relative inline-block">
                  <h1 className="text-8xl md:text-9xl font-bold text-primary/20 select-none">
                    404
                  </h1>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-primary/30">
                      <AlertCircle className="w-12 h-12 text-primary" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Error Message */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Oops! Page Not Found
                </h2>
                
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
                  The page you're looking for seems to have wandered off into the digital void. 
                  Don't worry, even the best developers encounter 404s!
                </p>

                <div className="p-4 rounded-2xl bg-muted/50 border border-border/50 max-w-md mx-auto">
                  <p className="text-sm text-muted-foreground">
                    <strong>Requested URL:</strong> {location.pathname}
                  </p>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
              >
                <a
                  href="/"
                  className="btn-primary inline-flex items-center"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Back to Home
                </a>
                
                <button
                  onClick={() => window.history.back()}
                  className="btn-outline inline-flex items-center"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Go Back
                </button>
              </motion.div>

              {/* Quick Navigation */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h3 className="text-xl font-semibold mb-6 text-muted-foreground">
                  Or explore these popular sections:
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                  {quickLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                      className="group p-6 rounded-2xl bg-card hover:bg-card/80 border border-border/50 hover:border-primary/20 transition-all duration-300 card-hover"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors duration-300">
                        <link.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-semibold group-hover:text-primary transition-colors duration-300">
                        {link.name}
                      </h4>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Help Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="p-8 rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 max-w-2xl mx-auto">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">Still Can't Find What You Need?</h3>
                  
                  <p className="text-muted-foreground mb-6">
                    Our team is here to help! Reach out if you believe this page should exist 
                    or if you need assistance finding specific information.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href="mailto:support@novalabs.dev"
                      className="btn-primary inline-flex items-center"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Contact Support
                    </a>
                    
                    <a
                      href="/#contact"
                      className="btn-outline inline-flex items-center"
                    >
                      Get Help
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Fun Facts */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="mt-12 p-6 rounded-2xl bg-muted/50 border border-border/50 max-w-lg mx-auto"
              >
                <h4 className="font-semibold mb-3">Did You Know?</h4>
                <p className="text-sm text-muted-foreground">
                  The first documented case of a 404 error was at CERN in 1992. 
                  The number 404 comes from the room number where the web servers were located!
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default NotFound;
