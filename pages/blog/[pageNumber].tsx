import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  const paths = data.map((currElem) => {
    return {
      params: {
        pageNumber: currElem.id.toString(),
      },
    };
  });
  console.log("Logging on Server side Paths", data);
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }: {}) => {
  console.log(params);
  const id = params.pageNumber;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  console.log("Logging on Server side Static", data);
  return {
    props: {
      data,
    },
  };
};
interface BlogProps {
  data: { id: number; title: string; body: string };
}
const BlogPage = ({ data }: BlogProps) => {
  console.log("Logging on Client side", data);
  const { id, title, body } = data;
  return (
    <div>
      <h1>id: {id}</h1>
      <h2>Title: {title}</h2>
      <h3>Body: {body}</h3>
    </div>
  );
};
export default BlogPage;
