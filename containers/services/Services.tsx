import SectionHeader from '@/components/SectionHeader';
import ServiceCard from '@/components/ServiceCard';
import { FC } from 'react';

interface Props {}

const Services: FC<Props> = () => {
  return (
    <section className="py-7">
      <div className="container mx-auto">
        <SectionHeader>Services to help you shop</SectionHeader>

        {/* <div className="flex justify-start flex-wrap gap-3"> */}
        {/* <div className="grid grid-cols-[repeat(auto-fill,_minmax(230px,_1fr))] md:flex md:justify-start md:flex-wrap gap-3"> */}
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(230px,_1fr))] gap-3">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </section>
  );
};

export default Services;
