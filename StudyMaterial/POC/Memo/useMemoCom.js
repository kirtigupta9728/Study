// The useMemo() hook is very similar to the useCallback(). 
// It takes a function and an array of dependencies as arguments, 
// and returns a Memoized Value which recalculates only when one of
//  the dependencies gets changed. If no array is provided,
// a new value will be computed on every render. 
//See the declaration below:

//const result = useMemo(() => computeExpensiveValue(counter1), [counter1]);

import { useMemo, useState } from "react";
import { Button, SafeAreaView, Text } from "react-native";

const UseMemoExample = () => {
    const [counter1, setCounter1] = useState(0); // Counter 1
    const [counter2, setCounter2] = useState(0); // Counter 1
    //const expensiveValue = computeExpensiveValue(counter1);
     //expensiveValue from computeExpensiveValue Fun ction without useMemo()
   // const expensiveValue =useMemo(()=> computeExpensiveValue(counter1),[counter1]);
     const expensiveValue=useMemo(()=>computeExpensiveValue(counter2),[counter2])
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
                {console.log("fghjk",expensiveValue)}
            </>
        </SafeAreaView>
    );
};

// Expensive Function
const computeExpensiveValue = (count) => {
    // Display on console whenever the function gets call
    console.log("This function is running...")
    // Time Consuming Calcuation
    for (let i = 0; i < 10; i++) {
        count += 1;
    }
    return count;
};

export default UseMemoExample;