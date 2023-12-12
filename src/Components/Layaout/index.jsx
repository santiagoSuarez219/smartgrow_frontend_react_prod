const Layout = ({ children }) => {
    return (
        <div className='bg-quartiary flex flex-col p-4 items-center w-full h-full'>
            { children }
        </div>
    )
}

export default Layout