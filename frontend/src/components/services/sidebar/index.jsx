import SidebarItem from "./SidebarItem";

const Sidebar = ({ openSidebar }) => {
  return (
    <div
      className={`absolute md:relative transition-all duration-300 ${
        openSidebar ? "left-0" : "-left-[100%] md:left-0"
      } bg-white p-5 md:p-0 w-full sm:w-[300px] border md:border-none`}
    >
      <ul className="flex flex-col gap-3">
        <SidebarItem title="Blueprints" />
        <SidebarItem title="Interior Design" />
        <SidebarItem title="Exterior Design" />
        <SidebarItem title="Fur Design" />
        <SidebarItem title="Electrical Plan" />
        <SidebarItem title="Lighting Plan" />
        <SidebarItem title="Elevation Plan" />
        <SidebarItem title="Consultancy" />
        <SidebarItem title="Decoration" />
        <SidebarItem title="Titles" />
        <SidebarItem title="Plumbing" />
        <SidebarItem title="Electrical Construction" />
        <SidebarItem title="Painting" />
        <SidebarItem title="Demolition" />
      </ul>
    </div>
  );
};

export default Sidebar;
