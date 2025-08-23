import { motion } from 'framer-motion';
import { Linkedin, Github, Twitter } from 'lucide-react';

const team = [
  {
    name: 'Sarah Chen',
    role: 'Co-Founder & CEO',
    description: 'Full-stack engineer with 8+ years of experience leading development teams and architecting scalable solutions.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
    github: '#',
    twitter: '#',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Co-Founder & CTO',
    description: 'Backend specialist and DevOps expert passionate about building robust, secure, and scalable infrastructure.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
    github: '#',
    twitter: '#',
  },
  {
    name: 'Emily Johnson',
    role: 'Lead Frontend Developer',
    description: 'React expert and UI/UX enthusiast who creates beautiful, intuitive user experiences that users love.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
    github: '#',
    twitter: '#',
  },
  {
    name: 'David Kim',
    role: 'Mobile Development Lead',
    description: 'Cross-platform mobile developer specializing in React Native and Flutter with a focus on performance.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
    github: '#',
    twitter: '#',
  },
  {
    name: 'Alex Thompson',
    role: 'AI/ML Engineer',
    description: 'Data scientist and machine learning engineer bringing intelligent solutions to complex business problems.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
    github: '#',
    twitter: '#',
  },
  {
    name: 'Sofia Patel',
    role: 'Cloud Architect',
    description: 'AWS certified solutions architect designing and implementing scalable cloud infrastructure and DevOps practices.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
    github: '#',
    twitter: '#',
  },
];

export function Team() {
  return (
    <section id="team" className="section-padding">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Behind every great project is an exceptional team. Meet the passionate engineers,
            designers, and strategists who bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="text-center p-8 rounded-3xl bg-card hover:bg-card/80 transition-all duration-300 card-hover border border-border/50 hover:border-primary/20">
                {/* Profile Image */}
                <div className="relative mb-6 mx-auto w-32 h-32">
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-lg rotate-12 group-hover:rotate-45 transition-transform duration-300" />
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-accent rounded-lg -rotate-12 group-hover:-rotate-45 transition-transform duration-300" />
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                
                <div className="text-primary font-medium mb-4">{member.role}</div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {member.description}
                </p>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.linkedin}
                    className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors duration-200"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.github}
                    className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors duration-200"
                    aria-label={`${member.name} GitHub`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={member.twitter}
                    className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors duration-200"
                    aria-label={`${member.name} Twitter`}
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="p-8 rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Want to Join Our Team?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for creating
              exceptional software solutions. Let's build the future together.
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              View Open Positions
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}