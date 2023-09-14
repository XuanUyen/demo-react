import {useState} from 'react';

function Sum(){
    const [soA, setSoA] = useState(0)
    const [soB, setSoB] = useState(0)
    const [totalAB, setTotal] = useState(0)
    console.log('So A =', soA)

    function handleAChange(e){
        setSoA(e.target.value)
        
    }

    function handleBChange(e){
        setSoB(e.target.value)
        
    }  

    function total(e){
        setTotal(Number(soA)+ Number(soB))
    }
    
    return(
        <div>
            <p>Tổng 2 số nguyên</p>
            <input type='number' onChange={handleAChange}/><br/>
            <input type='number' onChange={handleBChange}/><br/>
            <button onClick={total}>Tính tổng</button>
            <p>{soA} + {soB} = {totalAB}</p>
        </div>
    )
}

export default Sum;