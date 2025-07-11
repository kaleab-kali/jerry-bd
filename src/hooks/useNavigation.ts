import { useNavigationContext } from "../contexts/NavigationContext";


export function useNavigation() {
  return useNavigationContext()
}