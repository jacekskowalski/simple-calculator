const { mathOperationDetection } = require('../src/arith');

const initialState = {

    values: "",
    total : 0
};

export default function calculation(state = initialState, action) {
 
    switch (action.type) {
        case "NEW_NUMBER":
            let newArrayValues = state.values;
            const payload = action.payload;
            let tempValues = newArrayValues.concat(payload);
  
             const result = mathOperationDetection(tempValues) === "Operation forbidden" ?
                 0 : mathOperationDetection(tempValues);
   
            return Object.assign({}, state, {
                values: mathOperationDetection(tempValues) === "Operation forbidden"
                    ? "Operation forbidden" :  tempValues,
                 total: result
            }
            );
            break;
        case "C":
            state = initialState
            break;
        case "+":
            let doAdd = state.values;
            const newValues = doAdd.concat("+");
            return Object.assign({}, state, { values: newValues, total: state.total });
        case "-":
            const doSubtract = state.values;
            const newValues1 = doSubtract.concat("-");
            return Object.assign({}, state, { values: newValues1, total: state.total });
         case "*":
            const doMultiply = state.values;
            const newValues2 = doMultiply.concat("*");
            return Object.assign({}, state, { values: newValues2, total: state.total });
            
        case "/":
            const doDivide = state.values;
            const newValues3= doDivide.concat("/");
            return Object.assign({}, state, { values: newValues3, total: state.total })
         
        case ".":
            const addComa = state.values;
            const newValues4= addComa.concat(".");
            return Object.assign({}, state, { values: newValues4, total: state.total })
          
        default:
            return state
        }
        
    return state;
}
