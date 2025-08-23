import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce platform with real-time inventory, payment integration, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    category: 'Web Development',
    link: '#',
    github: '#',
  },
  {
    title: 'Healthcare Mobile App',
    description: 'Cross-platform mobile app for patient management with telemedicine capabilities.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
    tags: ['React Native', 'Firebase', 'WebRTC', 'Redux'],
    category: 'Mobile Development',
    link: '#',
    github: '#',
  },
  {
    title: 'AI Analytics Dashboard',
    description: 'Intelligent business analytics platform with machine learning insights and predictive modeling.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    tags: ['Python', 'TensorFlow', 'React', 'D3.js'],
    category: 'AI & Machine Learning',
    link: '#',
    github: '#',
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Scalable microservices architecture with automated deployment and monitoring.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop',
    tags: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    category: 'Cloud Solutions',
    link: '#',
    github: '#',
  },
  {
    title: 'Fintech Trading Platform',
    description: 'Real-time trading platform with advanced charting and portfolio management features.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
    tags: ['Vue.js', 'WebSocket', 'MongoDB', 'Express'],
    category: 'Web Development',
    link: '#',
    github: '#',
  },
  {
    title: 'IoT Monitoring System',
    description: 'Industrial IoT platform for real-time device monitoring and predictive maintenance.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop',
    tags: ['Angular', 'MQTT', 'InfluxDB', 'Grafana'],
    category: 'Custom Software',
    link: '#',
    github: '#',
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-muted/20">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore some of our recent projects and see how we've helped businesses
            transform their ideas into powerful digital solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="h-full rounded-3xl bg-card overflow-hidden card-hover border border-border/50 hover:border-primary/20 transition-all duration-300">
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay buttons */}
                  <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.link}
                      className="p-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
                      aria-label="View project"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href={project.github}
                      className="p-3 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/90 transition-colors"
                      aria-label="View source code"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <div className="flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <button className="btn-primary">
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}