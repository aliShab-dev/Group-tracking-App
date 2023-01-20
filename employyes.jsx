import maleProfile from'./images/maleProfile.jpg'
import femaleProfile from'./images/femaleProfile.jpg'
import Header from './header'
const Employees = ({selectedTeam, selectTeamHandler, employees, clickHandler}) => {
    
    
    return(

        <main className="container">

<Header count={employees.filter((em)=> (em.teamName=== selectedTeam)).length }
            selectedTeam={selectedTeam} 
    />

        <div className='row justify-content-center m-3'>
          <div className='col-8 '>
              <select className="form-select form-select-lg" value = {selectedTeam} onChange={selectTeamHandler}>
                <option value="TeamA">TeamA</option>
                <option value="TeamB">TeamB</option>
                <option value="TeamD">TeamD</option>
                <option value="TeamC">TeamC</option>
              </select>
          </div>
        </div>
        <div className='row justify-content-center m-3'>
          <div className='col-8 '>
            <div className="card-collection">
                {
                    
                    employees.map((employee) => (
                        <div key={employee.id} id={employee.id} title={employee.teamName} className={employee.teamName=== selectedTeam?'standout m-2 back':'m-2 back'} style={{cursor:'pointer'}} onClick={clickHandler} > 
                            <img src={employee.gender === 'male'? maleProfile:femaleProfile} alt="" />
                            <div className="card-body">
                                <h3 className="card-title">{employee.fullName}</h3>
                                <p className="card-text"><b>{employee.designation} </b></p>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>        
        </main>
    )
}

export default Employees