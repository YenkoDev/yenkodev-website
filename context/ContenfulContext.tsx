import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import client from '@/services/contentfulClient';

interface ContentfulContextType {
  projects: any[];
  services: any[];
  team: any[];
  process: any[];
  loading: boolean;
  categories: string[];
}

export const ContentfulContext = createContext<ContentfulContextType | undefined>(undefined);

interface ContentfulProviderProps {
  children: ReactNode;
}

export const ContentfulProvider: React.FC<ContentfulProviderProps> = ({ children }) => {
  const [projects, setProjects] = useState<any[]>([]);
  const [services, setServices] = useState<any[]>([]);
  const [team, setTeam] = useState<any[]>([]);
  const [process, setProcess] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchContentful = async () => {
      try {
        const response_projects = await client.getEntries({
          content_type: 'projects',
        });
        const projects = response_projects.items;
        setProjects(projects);

        const response_services = await client.getEntries({
          content_type: 'services',
        });
        const services = response_services.items;
        setServices(services);

        const response_team = await client.getEntries({
          content_type: 'team',
        });
        const team = response_team.items;
        setTeam(team);

        const response_process = await client.getEntries({
          content_type: 'process',
        });
        const process = response_process.items;
        setProcess(process);

        // Extract unique categories
        const uniqueCategories = Array.from(new Set(projects.map((project: any) => project.fields.category)));
        setCategories(uniqueCategories);

      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContentful();
  }, []);

  return (
    <ContentfulContext.Provider value={{ projects, services, team, process, loading, categories }}>
      {children}
    </ContentfulContext.Provider>
  );
};

export const useContentfulContext = () => {
  const context = useContext(ContentfulContext);
  if (!context) {
    throw new Error("useContentfulContext must be used within a NavigationProvider");
  }
  return context;
};
