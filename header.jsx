
function Header ({selectedTeam, count}) {

    
    return(
        <header className="container">
            <div className="text-align-center">
                <h3> {selectedTeam} has {count} {count<2?'memeber':'members'} </h3>
            </div>
        </header>
    ) 
}


export default Header