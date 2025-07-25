export const useThrottle = () => {
  let timeout: NodeJS.Timeout | null = null;

  const throttle = (callback: () => void, delay: number) => {
    if (timeout) return;
    timeout = setTimeout(() => {
      callback();
      timeout = null;
    }, delay);
  };

  return { throttle };
};
