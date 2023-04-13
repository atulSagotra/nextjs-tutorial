import { useRouter } from "next/router";
import { useEffect } from "react";

const ErrorPage = () => {
  const router = useRouter();
  const handleRedirect = () => {
    router.push("/");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleRedirect();
      return () => clearTimeout(timer);
    }, 3000);
  }, []);
  return (
    <div>
      <h1>I am Error Page</h1>
      <button onClick={handleRedirect}>Redirect to HomePage</button>
    </div>
  );
};
export default ErrorPage;
