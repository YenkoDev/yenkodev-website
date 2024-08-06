import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { placeholderImage } from "@/assets";

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + "...";
};

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
        "grid grid-cols-1 lg:grid-cols-3 gap-8 mx-auto p-2",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  coverImage,
  description,
  clients,
  category,
  objectivesGoalsPurpose,
  technologiesUsed,

}: {
  className?: string;
  id: string;
  title: string;
  coverImage: Array<{ fields: { file: { url: string }; title: string } }>;
  description: string;
  clients: string | Array<string>;
  category: string;
  objectivesGoalsPurpose: string;
  technologiesUsed: string | Array<string>;
 
}) => {
  const router = useRouter();
  const maxLength = 200; // Adjust this number to your desired character limit

  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento transition duration-200 p-4 dark:bg-black-light dark:border-white/[0.2] shadow-xl justify-start flex flex-col space-y-4 min-h-[500px]",
        className
      )}
    >
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <h3 className="font-bold text-sm dark:text-neutral-200 mb-4 mt-2">
          {title}
        </h3>
        <h2 className="bg-black-light font-bold text-white rounded-full text-sm w-fit px-4 py-1 mb-4 flex items-center">
          {category}
        </h2>
        {coverImage ? (
          <div className="mb-4 relative w-full min-h-56">
            {coverImage.map((image) => (
              <Image
                key={image.fields.file.url}
                src={`https:${image.fields.file.url}`}
                alt={image.fields.title}
                fill
                style={{ objectFit: 'contain' }}
                className="rounded-lg"
              />
            ))}
          </div>
        ) : (
          <div className="mb-4 relative w-full min-h-56">
            <Image
              src={placeholderImage}
              alt="placeholder image"
            fill
            style={{ objectFit: "contain" }}
              className="rounded-lg"
              priority
            />
          </div>
        )}
        <div className="text-custom-gray text-sm dark:text-neutral-300">
          {truncateText(description, maxLength)}
          {description.length > maxLength && (
            <span
              className="text-blue-500 cursor-pointer ml-2 underline"
              onClick={() => router.push(`/projects/${id}`)}
            >
              Learn More
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
