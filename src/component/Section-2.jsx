const Section_2 = () => {
    return (
        <section className="m-10   h-auto flex">
        <img className=" w-[45%] h-[80vh]  relative  top-20" src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1770&amp;q=80" alt="Error"/>
        <div className=" flex  relative items-center right-0 bg-gray-100  h-[100vh] w-[50%]">
            <div className=" flex  flex-col absolute left-20 z-10 max-w-md items-center ">
                <h2 className=" font-sans text-3xl m-3 font-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h2>
                <p className=" font-sans font-semibold text-1xl m-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
                <buttom className=" w-40 h-10 items-center bg-blue-600 p-2 m-3 text-center rounded-md cursor-pointer">Get in Touch</buttom>
            </div>
        </div>
    </section>
    );
};

export default Section_2;