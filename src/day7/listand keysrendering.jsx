let ListInReact = () => {
    let todos= [ 'Apple', 'Banana', 'Cherry', 'Date'];
    let todosobjects= [
        {id:1, fruit:'Apple'},
        {id:2, fruit:'Banana'},];

        let Student= [
            {id:1, name:'Janu', marks:{social:20,science:25,maths:30},contact:[982344545,98343545]},
            {id:2, name:'Jenis', marks:{social:22,science:24,maths:26},contact:[982344545,98343545]},
        ];
    return (
        <>
            <h2>Fruit List</h2>
             {
             todos.map(
                    (item, index) => {
                    return(
                        <div key={index}>
                            <p>Index: {index}</p>
                            <b>{item}</b>
                        </div>
                    )
                    }
                )
            }
            <h1>todosobjects</h1>
            {
             todosobjects.map(
                    ({id,fruit},index) => {
                    return(
                        <div key={'${index}${id}'}>
                            <p>ID: {id}</p> 
                            <p>Fruit: {fruit}</p>
                        </div>
                    )
                    }
                )
            }
<h1>student details</h1>
{
    Student.map(
        ({id,name,marks,contact},index)=>{
            return(
                <div key={'${index}${id}'}>
                    <p>ID:{id}</p>
                    <p>Name:{name}</p>
                    <p>Marks:</p>
                    <ul>
                        <li>Social:{marks.social}</li>
                        <li>Science:{marks.science}</li>
                        <li>Maths:{marks.maths}</li>
                    </ul>
                    <p>Contact Numbers:</p>
                    <ul>
                        {
                        contact.map((number,idx)=>{
                            return(
                                <li key={idx}>{number}</li>
                            )
                        }
                        )
                        }
                    </ul>
                </div>
            )
        }
    )
}
        </>
    )
}
export default ListInReact;