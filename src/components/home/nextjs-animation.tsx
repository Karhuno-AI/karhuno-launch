import { motion } from "framer-motion";

const AnimatedFlow = () => {
  return (
    <div className="relative flex items-center justify-center min-h-[80vh] bg-white overflow-hidden">
      <div className="relative w-full min-h-full">
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute left-[4%] -top-[7px] h-4 bg-gradient-to-r w-11/12 from-purple-100 via-blue-500 to-purple-100 rounded-full"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute left-[8%] h-40 bg-gradient-to-r w-10/12 from-purple-100 via-blue-500 to-purple-100 rounded-[12rem] after:h-36 after:w-full after:bg-white after:0 after:left-0 after:top-[13%] after:rounded-full after:content-[''] after:absolute"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scaleX: 0, rotate:180 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute left-[8%] h-40 bg-gradient-to-r w-10/12 bottom-0 from-purple-100 via-blue-500 to-purple-100 rounded-full after:h-36 after:w-full after:bg-white after:0 after:left-0 after:top-[13%] after:rounded-full after:content-[''] after:absolute"
        ></motion.div>
      </div>
    </div>
  );
};

export default AnimatedFlow;

{
  /* <motion.div
initial={{ opacity: 0, scaleX: 0 }}
animate={{ opacity: 1, scaleX: 1 }}
transition={{ duration: 0.6, ease: 'easeInOut' }}
className="absolute left-1/5 h-2 bg-gradient-to-r w-3/5 from-purple-100 via-blue-500 to-purple-100 rounded-full"
></motion.div>
{[
{ name: "Invoice", position: "top-[40%]" },
{ name: "Treasury", position: "top-[20%]" },
{ name: "Payment", position: "top-[60%]" },
].map(({ name, position }, index) => (
<motion.div
  key={name}
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeInOut' }}
  className={`absolute left-10 ${position} bg-white p-4 rounded-lg shadow-lg before:content-[''] before:bg-gradient-to-r before:from-purple-100 before:via-blue-500 before:to-purple-100  before:absolute before:w-44 before:h-2 before:left-full before:top-1/2 before:rounded-full`}
>
  <p className="text-center mt-2">{name}</p>
</motion.div>
))}
{[
{ name: "Approval", position: "top-[40%]" },
{ name: "Budget", position: "top-[50%]" },
{ name: "Report", position: "top-[60%]" },
].map(({ name, position }, index) => (
<motion.div
  key={name}
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeInOut' }}
  className={`absolute right-10 ${position} bg-white p-4 rounded-lg shadow-lg after:content-[''] after:absolute after:w-12 after:h-1 after:bg-orange-300 after:right-full after:top-1/2`}
>
  <img src={`/icons/${name.toLowerCase()}.png`} alt={name} className="w-10 h-10 mx-auto" />
  <p className="text-center mt-2">{name}</p>
</motion.div>
))} */
}
