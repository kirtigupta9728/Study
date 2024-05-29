// useCallback is a hook that returns a memoized callback.
//  A callback is a function that is 
// passed as an argument to another function.

// the useCallback hook takes two arguments:
//  a function and a dependency array. It will return a
//   memoized version of the function that only changes if 
//   one of the dependencies has changed.

//const result = useMemo(() => computeExpensiveValue(counter1), [counter1]);

import { useCallback, useMemo, useState } from "react";
import { Button, SafeAreaView, Text } from "react-native";

const UseCallbackExample = () => {
    console.log('11111')
    const [counter1, setCounter1] = useState(0); // Counter 1
    const [counter2, setCounter2] = useState(0); // Counter 1
    //const expensiveValue = computeExpensiveValue(counter1);
    // expensiveValue from computeExpensiveValue Function without useMemo()
    //const expensiveValue = useCallback(() => computeExpensiveValue(counter2), [counter2]);

    const values = [3, 9, 6, 4, 2, 1]

    // This will always return the same value, a sorted array. Once the values array changes then this will recompute.
   // const memoizedValue = useMemo(() => values.sort(), [values])

    // This will give me back a function that can be called later on. It will always return the same result unless the values array is modified.
   const memoizedFunction = useCallback(() =>console.log("value",values.sort()) , [values])

  // console.log('memoizedValue,',memoizedValue)
   console.log('memoizedFunction,',memoizedFunction)

   const update=()=>{
    //let x=20;
    values.push(20);
   }

    return (
        <SafeAreaView>
            <>
                <Text>Counter 1: {counter1}</Text>
                <Button title="+" onPress={() => setCounter1(counter1 + 1)}></Button>
            </>
            <>
                <Text>Counter 2: {counter2}</Text>
                <Button title="+" onPress={() => setCounter2(counter2 + 1)}></Button>
            </>
            <>
                <Text>Expensive Value:</Text>
            </>
        </SafeAreaView>
    );
};

// Expensive Function
// const computeExpensiveValue = (count) => {
//     // Display on console whenever the function gets call
//     console.log("This function is running...")
//     // Time Consuming Calcuation
//     for (let i = 0; i < 10; i++) {
//         count += 1;
//     }
//     return count;
// };

export default UseCallbackExample;