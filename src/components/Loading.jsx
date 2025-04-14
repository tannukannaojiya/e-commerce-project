// import { QueryClient } from "@tanstack/react-query";
// import {FeaturedProducts, Hero} from "../components";
// import { customFetch } from "../utils";

// const url = '/products?featured=true';

// const featuredProductsQuery = {
//   queryKey :['featuredProducts'], 
//   queryFn:() => customFetch(url),
// };

// export const loader = (queryClient)=>async()=>{
//   const response = await queryClient.ensureQueryData(featuredProductsQuery);
//   const products = response.data.data;
//   return { products };
// }

const Loading = () => {
  return (
    <div className='h-screen flex items-center'>
        <span className='loading loading-ring loading-lg'></span>
      
    </div>
  )
}

export default Loading;
