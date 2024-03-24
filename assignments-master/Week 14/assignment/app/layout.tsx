import "./globals.css";
import { Navbar, Prop} from "@/components/navbar";

const props: Prop[] = [
  {
    buttonContent: 'Home',
    link: '/',
  },
  {
    buttonContent: 'Server Page',
    link: '/static-page',
  },
  {
    buttonContent: 'Client Page',
    link: '/interactive-page',
  },
];

export default function RootLayout() {
  return <Navbar props={props} />;
}
