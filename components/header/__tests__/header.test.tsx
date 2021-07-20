import { render } from "@testing-library/react";
import Header from "@/components/header/header";
import { THEMES } from '@/constants/themeTypes'


describe("Header", () => {
  test("renders without crashing", () => {
    const {container} = render(<Header theme={THEMES.DARK} onThemeSwitch={() => {}} />);
  });
});
