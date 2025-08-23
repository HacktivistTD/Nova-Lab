import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Mission',
    description: 'To deliver cutting-edge software solutions that empower businesses to thrive in the digital age.',
  },
  {
    icon: Eye,
    title: 'Vision',
    description: 'To be the leading force in transforming ideas into powerful, scalable software solutions.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'We are driven by our love for clean code, innovative design, and meaningful user experiences.',
  },
  {
    icon: Users,
    title: 'Team',
    description: 'A diverse group of talented engineers, designers, and strategists working together seamlessly.',
  },
];

export function About() {
  return (
    <section id="about" className="section-padding bg-muted/20">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About CodeCraft</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're more than just a software engineering company. We're your partners in digital transformation,
            committed to crafting solutions that make a difference.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-6">Our Story</h3>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Founded in 2019, CodeCraft emerged from a simple belief: that great software
                can transform businesses and improve lives. What started as a small team of
                passionate developers has grown into a full-service software engineering company.
              </p>
              <p>
                We've had the privilege of working with startups disrupting their industries,
                established companies modernizing their infrastructure, and everything in between.
                Each project teaches us something new and makes us better.
              </p>
              <p>
                Today, we're proud to be a trusted partner for businesses looking to leverage
                technology for growth, efficiency, and innovation.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-4">100+</div>
                <div className="text-2xl font-semibold mb-2">Happy Clients</div>
                <div className="text-muted-foreground">Across 15+ Countries</div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-2xl rotate-12" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-2xl -rotate-12" />
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center p-6 rounded-3xl bg-card hover:bg-card/80 transition-colors card-hover group"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}