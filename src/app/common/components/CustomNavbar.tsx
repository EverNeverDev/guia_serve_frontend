import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

const CustomNavbar = () => {
  return (
    <Navbar className="bg-primary" maxWidth="xl">
      <NavbarBrand>
        <p className="font-bold text-inherit">Guia serve logo</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="secondary" href="/auth/login" variant="flat">
            Fazer login
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default CustomNavbar;
