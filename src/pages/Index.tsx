import { Layout } from '@/layout/Layout';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Portfolio } from '@/components/sections/Portfolio';
import { Team } from '@/components/sections/Team';
import { Contact } from '@/components/sections/Contact';
import Hero from '@/components/sections/Hero';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Team />
      <Contact />
    </Layout>
  );
};

export default Index;
