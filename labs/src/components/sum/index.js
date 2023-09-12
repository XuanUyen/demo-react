import {useState} from 'react';

function Sum(){
    const [soA, setSoA] = useState(0)

    function handleAChange(e){
        setSoA(e.target.value)
        
    }
    
    console.log('So A =', soA)

    return(
        <div>
            <p>Tổng 2 số nguyên</p>
            <input type='number' onChange={handleAChange}/><br/>
            <input type='number'/><br/>
            <button>Tính tổng</button>
            
        </div>
    )
}

export default Sum;