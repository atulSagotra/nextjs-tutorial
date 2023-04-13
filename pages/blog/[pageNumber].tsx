export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  const paths = data.map((currElem) => {
    return {
      params: {
        pageNumber: currElem.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context: {}) => {
  console.log(context)
  const id = context.params.pageNumber;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

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
