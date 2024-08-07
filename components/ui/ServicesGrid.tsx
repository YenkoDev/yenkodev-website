import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto p-2",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento transition duration-200 p-4 dark:bg-black-light dark:border-white/[0.2] shadow-md justify-start flex flex-col space-y-4 min-h-[280px]",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <h3 className="font-bold text-sm dark:text-neutral-200 mb-4 mt-2">
          {title}
        </h3>
        <div className="text-custom-gray text-sm dark:text-neutral-300 ">
          {description}
        </div>
      </div>
    </div>
  );
};
