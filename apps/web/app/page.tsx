import DefaultLayout from '../components/layouts/DefaultLayout';
import HeroBanner from '../components/ui/HeroBanner';
import Categories from '../components/ui/Categories';
import PopularServices from '../components/ui/PopularServices';

export default function Home() {
  return (
    <DefaultLayout>
      <HeroBanner />
      <Categories />
      <PopularServices />
    </DefaultLayout>
  );
}