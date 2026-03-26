import CategorySection from '../components/menu/CategorySection'
import DeliveryZones from '../components/menu/DeliveryZones'
import MenuHero from '../components/menu/MenuHero'
import { menuCategories } from '../data/menuData'

export default function Menu() {
  return (
    <>
      <MenuHero />
      {menuCategories.map((category) => (
        <CategorySection category={category} key={category.id} />
      ))}
      <DeliveryZones />
    </>
  )
}
