import './style.css';

function Clock() {
    const data = new Date()
    return (
        <div>
           <div className='a'>Hello, I am Clock</div>
           <div>Now is {data.toLocaleTimeString()}</div>
        </div>
    )
}

export default Clock;