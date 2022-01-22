export default function(props) {

    const filledCirclesNumber = new Array(parseInt(props.circles)).fill('').map((_, key) => {
        return <div key={key} className='circle filled-circle'></div>
    })

    const emptyCirclesNumber = new Array(10 - props.circles).fill('').map((_, key) => {
        return <div key={key} className='circle'></div>
    })

    return (
        <div className='circles-container'>
            {filledCirclesNumber}
            {emptyCirclesNumber}
        </div>
    )
}