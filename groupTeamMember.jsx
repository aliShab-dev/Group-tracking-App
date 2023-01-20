import {useState} from 'react'
import { useLinkClickHandler } from 'react-router-dom'
import Header from './header'

function GroupedTeamMember ({selectedTeam, setTeam, employees}) {

    const[groupEmployees, setGroup] = useState(groupedTeamMember())

function groupedTeamMember() {

    var teams = []
    var TeamArray = ['TeamA', 'TeamB', 'TeamC', 'TeamD']
    
    
    const Accordian = (teamX) =>{
        var teamMember = employees.filter((em)=> em.teamName === teamX )
        var TeamXObj = {team: teamX, members : teamMember, collapsed: teamX === selectedTeam? false:true}
        teams.push(TeamXObj)
        
    }
    
    
    
    TeamArray.forEach((item) =>(
        Accordian(item)
        )) 
        


        return teams
    }

    function clickHandler(event) {
        var transformedGroup = groupEmployees.map((group) => (
            group.team === event.currentTarget.id?{...group,collapsed:!group.collapsed}:group
        )) 
        setGroup(transformedGroup)
        console.log(event.currentTarget.id)
        setTeam(event.currentTarget.id)
    }
    

        
    return(
        <main>


<Header count={employees.filter((em)=> (em.teamName=== selectedTeam)).length }
            selectedTeam={selectedTeam} 
    />


        {
            groupEmployees.map((item)=>{
                return (
                    <div key={item.team} id={item.team} className='card mt-2' style={{cursor:'pointer'}} onClick={clickHandler}>
                        <h4 id={item.team} className='card-header text-secondary bg-white'>
                            Team Name : {item.team}
                        </h4>
                        <div id={'collapse_'+item.team} className={item.collapsed === true?'collapse':''}>
                            {item.members.map(member=> {
                                return(
                                    <div key={member.id} className='mt-2'>
                                        <h5 className='card-title mt-2'>
                                        <hr />
                                            <span className='text-dark'>fullName: {member.fullName}</span>
                                        </h5>
                                        <p>designation: {member.designation}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })
        }
        </main>
    )
}

export default GroupedTeamMember