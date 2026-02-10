function Light({clases, utility, color}){

    return(
        <div className={clases} onClick={() => {
            utility(color)
        }}>

        </div>
    )
};

export default Light;