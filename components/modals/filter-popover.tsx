import { Popover, Text, Button, Checkbox } from "@mantine/core";
import Image from "next/image";

function FilterPopover() {
  return (
    <Popover width={200} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <button className="flex items-center border border-[#dddddd] px-3 py-1 rounded-md gap-2">
          <Image
            src={"/images/Filter.png"}
            alt="Filter"
            width={20}
            height={20}
          />
          <span className="text-[0.9rem] text-[#252C32]">Filter Cycle</span>
        </button>
      </Popover.Target>
      <Popover.Dropdown className="rounded-l-xl">
        <section className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <Checkbox />
            <h2 className="text-base text-[#54565B] font-medium">Cycle 1</h2>
          </div>
          <div className="flex items-center gap-4">
            <Checkbox />
            <h2 className="text-base text-[#54565B] font-medium">Cycle 2</h2>
          </div>
          <div className="flex items-center gap-4">
            <Checkbox />
            <h2 className="text-base text-[#54565B] font-medium">Cycle 3</h2>
          </div>
        </section>
      </Popover.Dropdown>
    </Popover>
  );
}

export default FilterPopover;
