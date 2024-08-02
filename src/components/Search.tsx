import clsx from "clsx";

import { MagnifyingGlass } from "@/components/icons";

interface Props {
  value: string;
  placeholder: string;
  onSearch: (value: string) => void;
  className?: string;
}

const Search = ({ value, placeholder, onSearch, className }: Props) => (
  <div className={clsx("relative", className)}>
    <MagnifyingGlass className="absolute left-2 top-1/2 h-4 -translate-y-1/2 transform text-slate-950/20" />
    <input
      value={value}
      onChange={(e) => onSearch(e.target.value)}
      type="search"
      placeholder={placeholder}
      className={clsx(
        "rounded-lg w-full h-full bg-slate-950/5 py-1 pl-8 pr-2 text-sm placeholder:text-slate-950/20",
      )}
    />
  </div>
);

export default Search;
