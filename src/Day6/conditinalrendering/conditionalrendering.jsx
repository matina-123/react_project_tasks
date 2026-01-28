let ConditionalRendering = () => {
  let number=10;
    return(
        <>
        <h1>Conditional Rendering in React</h1>
        {/* {conditional rendering using ternary operator(?:)} */}
        {
            number % 2 === 0 ? <h2>Even Number:{number}</h2> : <h2>Odd Number:{number}</h2>
        }
        {/* {conditional rendering using logical && operator:short circuit evaluation} */}
        {
            number < 20 && <h3>Number is less than 20</h3>
        }
        {/* {using logical OR (||):default value or fallback value} */}
        {
            number <20 || <h3>Number not less than 20</h3>
        }
          </> 
    )
}

export default ConditionalRendering;