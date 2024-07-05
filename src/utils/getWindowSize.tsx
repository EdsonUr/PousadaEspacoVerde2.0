import useWindowDimensions from "../hooks/useWindowDimensions";
import { breakpoints } from "../styles/global";
export function getWindowSize() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { width } = useWindowDimensions();
  if (width <= breakpoints.desktop && width > breakpoints.tablet) {
    return "desktop";
  }
  else if (width <= breakpoints.tablet && width > breakpoints.mobile) {
    return "tablet";
  }
  else {
    return "mobile";
  }
}