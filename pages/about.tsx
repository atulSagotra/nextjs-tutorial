import Image from "next/image";

const About = () => {
  return (
    <>
      <h1>I am about us Page</h1>
      <Image src="/flower.jpg" width="100" height="100" alt="flower" />
      <Image
        src="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=800"
        width="100"
        height="100"
        alt="flower"
      />
    </>
  );
};
export default About;
