import React, { createContext, useState, useEffect, ReactNode } from 'react';
import client from '@/services/contentfulClient';

interface ContentfulContextType {
  projects: any[];
  loading: boolean;
  categories: string[];
}

export const ContentfulContext = createContext<ContentfulContextType | undefined>(undefined);

interface ContentfulProviderProps {
  children: ReactNode;
}

export const ContentfulProvider: React.FC<ContentfulProviderProps> = ({ children }) => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchContentful = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'projects',
        });

        const projects = response.items;
        setProjects(projects);

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
    <ContentfulContext.Provider value={{ projects, loading, categories }}>
      {children}
    </ContentfulContext.Provider>
  );
};
