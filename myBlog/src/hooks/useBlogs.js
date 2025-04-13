import useSWR from "swr";
import axios from "axios";

// Create a fetcher function using axios
const fetcher = (url) => axios.get(url).then((res) => res.data);

const useBlogs = () => {
  const { data, error, isLoading } = useSWR(
    "http://localhost:1337/api/blogs?populate=*",
    fetcher
  );

  return {
    blogs: data?.data || [],
    isLoading,
    isError: error,
  };
};

export default useBlogs;
