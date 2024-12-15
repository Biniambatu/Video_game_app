
export const Carts = ({game}:any) => {
   const { name,  background_image} = game
  return (
    <>
    <div>
            <div className="max-w-sm ml-7  mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
                <img className="rounded-t-lg " src={background_image} alt="" />
                <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
                </div>
            </div>
        </div>
    </>
  )
}
