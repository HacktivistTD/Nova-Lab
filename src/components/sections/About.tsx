import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Mission',
    description:
      'To deliver cutting-edge software solutions that empower businesses to thrive in the digital age.',
  },
  {
    icon: Eye,
    title: 'Vision',
    description:
      'To be the leading force in transforming ideas into powerful, scalable software solutions.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description:
      'We are driven by our love for clean code, innovative design, and meaningful user experiences.',
  },
  {
    icon: Users,
    title: 'Team',
    description:
      'A diverse group of talented engineers, designers, and strategists working together seamlessly.',
  },
];

const stats = [
  { number: '100+', label: 'Happy Clients', sub: 'Across 15+ Countries' },
  { number: '250+', label: 'Projects Delivered', sub: 'From startups to enterprises' },
  { number: '50+', label: 'Team Members', sub: 'Engineers, designers & strategists' },
  { number: '10+', label: 'Years of Experience', sub: 'In software innovation' },
];

export function About() {
  return (
    <section id="about" className="section-padding bg-muted/20">
      <div className="container-width">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Nova Labs</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're more than just a software engineering company. We're your partners in digital
            transformation, committed to crafting solutions that make a difference.
          </p>
        </motion.div>

        {/* Story + Stats */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-6">Our Story</h3>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Founded in 2025, Nova Labs emerged from a simple belief: that great software can
                transform businesses and improve lives. What started as a small team of passionate
                developers has grown into a full-service software engineering company.
              </p>
              <p>
                We've had the privilege of working with startups disrupting their industries,
                established companies modernizing their infrastructure, and everything in between.
              </p>
              <p>
                Today, we're proud to be a trusted partner for businesses looking to leverage
                technology for growth, efficiency, and innovation.
              </p>
            </div>
          </motion.div>

          {/* Stats in 4-Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 text-center shadow-md hover:shadow-lg transition"
              >
                <div className="text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-xl font-semibold">{stat.label}</div>
                <div className="text-muted-foreground text-sm mt-1">{stat.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Values with hover description */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative text-center p-6 rounded-3xl bg-card hover:bg-card/80 transition group overflow-hidden"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              {/* Title */}
              <h4 className="text-xl font-semibold mb-3">{value.title}</h4>

              {/* Hidden description appears on hover */}
              <p className="absolute inset-0 flex items-center justify-center px-4 text-muted-foreground opacity-0 group-hover:opacity-100 bg-card/95 backdrop-blur-md transition-opacity duration-300 rounded-3xl">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
