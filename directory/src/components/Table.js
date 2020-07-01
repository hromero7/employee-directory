import React from "react";



const Table = (props) => {

    const dataToDisplay =  props.data.filter(entry => {

        let names = Object.values(entry.name).join("").toLowerCase();
        console.log(names)
        let keyword = props.keyword
        return (names.indexOf(keyword.toLowerCase()) !== -1)
        })
    
    console.log(dataToDisplay);
    
    return (
        <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <tbody>


            {
                dataToDisplay.map( entry => {
                return (
                <tr key={entry.email}>
                    <th scope="row">
                        <img alt="profilePic" src={entry.picture.large}/>
                    </th>
                    <td>{entry.name.first} {entry.name.last}</td>
                    <td>{entry.phone}</td>
                    <td>{entry.email}</td>
                    <td>{entry.dob.date}</td>
                </tr>
                )
            })
            }
        
        </tbody>
      </table>
    )
}

export default Table;