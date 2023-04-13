import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

interface BlogProps {
  data: [{ id: number; title: string; body: string }];
}
const Blog = ({ data }: BlogProps) => {
  
  return (
    <div className="data-items">
      {data.slice(0, 5).map((item) => {
        return (
          <Link key={item.id} href={`/blog/${item.id}`} className="item-card">
            <h1>{item.id}</h1>
            <h2>{item.title}</h2>
          </Link>
        );
      })}
    </div>
  );
};
export default Blog;
