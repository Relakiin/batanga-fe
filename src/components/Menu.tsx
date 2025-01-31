import { useScreenDetector } from '../hooks/useScreenDetector';

interface MenuProps {
  items: MenuItem[];
}
export interface MenuItem {
  name: string;
  id: string;
  subItems?: MenuItem[];
}

const Menu = ({ items }: MenuProps) => {

  const { isMobile } = useScreenDetector();

  const toggleCheckbox = () => {
    document.getElementById('my-drawer')?.click()
  }

  const buildItems = (items: MenuItem[]) => {
    return items.map((item) => (
      <li>
        {item.subItems ? (
          <details>
            <summary>{item.name}</summary>
            <ul>{buildItems(item.subItems)}</ul>
          </details>
        ) : (
          <a href={`#${item.id}`} onClick={toggleCheckbox}>{item.name}</a>
        )}
      </li>
    ));
  };

  return isMobile ? (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}

      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full mt-[4.5rem] w-80 p-4">
          {/* Sidebar content here */}
          {buildItems(items)}
        </ul>
      </div>
    </div>
  ) : (
    <div className="menu w-full overflow-scroll h-200">
      <ul className="bg-base-100 rounded-box p-2">{buildItems(items)}</ul>
    </div>
  );
};

export default Menu;
