import {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  ReactNode,
} from "react";
import { useRouter, usePathname } from "next/navigation";

interface NavigationContextType {
  handleNavigation: (path: string | null) => void;
  isLoading: boolean;
  nextPath: React.MutableRefObject<string | null>;
  handleExitComplete: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined
);

export const NavigationProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const nextPath = useRef<string | null>(null);

  const handleNavigation = (path: string | null) => {
    if (path !== pathname) {
      nextPath.current = path;
      setIsLoading(true);
    }
  };

  const handleExitComplete = () => {
    if (nextPath.current) {
      router.push(nextPath.current);
      nextPath.current = null;
    }
  };

  useEffect(() => {
    setIsLoading(false);
  }, [pathname]);

  return (
    <NavigationContext.Provider
      value={{ handleNavigation, isLoading, nextPath, handleExitComplete }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};
