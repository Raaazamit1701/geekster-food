import Section_2 from "./Section-2";
import Section_3 from "./Section-3";

const Body = () => {
    return (
        <>
            <div className=" h-auto  flex-col">
                <section className="relative h-[90vh] bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1770&amp;q=80')"}}>

                        <div className="absolute w-[42%] top-40 left-16  p-5">
                            <h1 className="text-5xl font-serif font-bold text-center text-black">Let us find your</h1>
                            <h1 className="text-5xl font-serif font-bold text-center text-red-600">Forever Food.</h1>
                            <p className="text-lg font-sans font-semibold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
                            <div className="flex justify-start">
                                <button className="bg-red-600 w-32 h-10 rounded-lg text-white cursor-pointer font-serif font-bold m-3">Search Now</button>
                                <button className="bg-white w-32 h-10 rounded-lg text-red-500 cursor-pointer font-serif font-bold m-3">Know More</button>
                            </div>
                        </div>

                </section>
                
               <Section_2/>

               <Section_3 />
            </div>
        </>
    );
};

export default Body;
