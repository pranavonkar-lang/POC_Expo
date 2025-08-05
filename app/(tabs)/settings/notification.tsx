import NotificationsScreen from '@/screens/NotificationsScreen';
import { useTabBarVisibility } from '@/hooks/useTabBarVisibility';

export default function ProfilePage() {
  useTabBarVisibility(false);
  return <NotificationsScreen />;
}
