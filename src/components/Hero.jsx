function Hero(){
    return(<>
        <div className="flex flex-col justify-center items-center mt-5 bg-white h-full">
            <img className="rounded-full w-64" src="./public/raghd.jpg" alt="" />
            <div className="flex flex-col justify-center items-center w-3/4">
                <h2 className="text-2xl tracking-widest text-bold" >Raghd Bashour</h2>
                <p className="text-gray-500 capitalize mb-1.5 text-bold">software engineer</p>
                <hr className="w-2/3 p-2" />
                <p className="text-zinc-800 text-l capitalize text-bold ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quasi aliquid expedita tempora, est accusantium sed iste quia earum sunt adipisci minima possimus repudiandae quisquam quas fuga dolorum culpa a. Odio, nesciunt magnam eius ea sint quo. Nam, sit vel.</p>
            </div>
        </div>
    </>)
}
export default Hero