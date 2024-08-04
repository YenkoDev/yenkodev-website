const LoadingBar = ({ isLoading }: { isLoading: boolean }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      setProgress(0);
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev < 100) return prev + 20;
          clearInterval(interval);
          return prev;
        });
      }, 100);

      return () => clearInterval(interval);
    } else {
      setProgress(100);
      const timeout = setTimeout(() => {
        setProgress(0);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [isLoading]);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-blue-light transition-all"
      style={{ width: `${progress}%`, opacity: isLoading ? 1 : 0 }}
    ></div>
  );
};
