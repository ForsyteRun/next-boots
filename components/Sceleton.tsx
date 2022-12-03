import ContentLoader from "react-content-loader";

const Sceleton = () => {
  return (
   <ContentLoader 
   speed={2}
   width={210}
   height={260}
   viewBox="0 0 210 260"
   backgroundColor="#f2eeee"
   foregroundColor="#cccccc"
 >
   <circle cx="97" cy="97" r="67" /> 
   <rect x="40" y="179" rx="5" ry="5" width="60" height="17" /> 
   <rect x="40" y="233" rx="5" ry="5" width="80" height="20" /> 
   <rect x="40" y="208" rx="5" ry="5" width="30" height="14" /> 
   <circle cx="149" cy="239" r="15" />
 </ContentLoader>
  )
};

export default Sceleton;
