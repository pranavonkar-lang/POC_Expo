import { router } from 'expo-router';

const NavigationService = {
  navigate: (path: string, params?: Record<string, any>) => {
    if (params) {
      router.navigate({ pathname: path as any, params });
    } else {
      router.navigate(path as any);
    }
  },
  replace: (path: string, params?: Record<string, any>) => {
    if (params) {
        router.push({ pathname: path as any, params });
      } else {
        router.push(path as any);
      }
  },
  push: (path: string, params?: Record<string, any>) => {
    if (params) {
        router.push({ pathname: path as any, params });
      } else {
        router.push(path as any);
      }
  },
  back: () => {
    router.back();
  },
  canGoBack: () => {
    return router.canGoBack();
  },
};

export default NavigationService;