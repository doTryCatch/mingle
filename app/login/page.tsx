import Image from "next/image";
import Logo from "../../public/logo/give-love.png";
function LoginPage() {
  // ths page will be having all those ui and logic to ensure the functioning of reposive logging page
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src={Logo} alt="page logo" width={200} height={200}></Image>
      <h1>Login Page</h1>
    </main>
  );
}

export default LoginPage;
