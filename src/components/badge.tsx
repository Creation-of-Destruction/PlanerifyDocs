import {LayoutDashboard} from "lucide-react";

export const Badge = ({children} : {children: React.ReactNode}) => (
    <div className={"flex sm:items-center sm:justify-center"}>
        <a href={""}
           className="px-4 py-2 rounded-xl group bg-primary/25 hover:bg-primary transition text-foreground flex items-center justify-center md:gap-3 gap-2">
            <LayoutDashboard className={"text-primary/75 group-hover:text-white duration-100"}/>
            <p className="text-sm/relaxed sm:text-base/relaxed text-primary/75 font-semibold flex items-center gap-2 group-hover:text-white duration-150">
                {children}
            </p>
        </a>
    </div>
)