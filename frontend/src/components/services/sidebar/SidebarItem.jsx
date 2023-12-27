const SidebarItem = ({ title = "" }) => {
  return (
    <li className="p-[10px] bg-[#EAE6E6] flex items-center justify-between text-[#525252] stroke-[#525252] cursor-pointer transition-all hover:bg-primary hover:text-white hover:stroke-white">
      <span>{title}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M5 12H19"
          // stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13 18L19 12"
          // stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13 6L19 12"
          // stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </li>
  );
};

export default SidebarItem;
