const LayoutContent = ({ children }) => {
    return (
        <div className='flex flex-col space-y-2 items-center w-full h-2/3'>
            { children }
        </div>
    )
}

export default LayoutContent