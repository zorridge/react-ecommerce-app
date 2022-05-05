import { useReducer } from 'react';

// Initial reducer state
const initialInputState = {
    value: '',
    isTouched: false,
};

const inputStateReducer = (state, action) => {
    // Maintain controlled component
    if (action.type === 'INPUT') {
        return { value: action.value, isTouched: state.isTouched };
    }
    // Out of focus
    if (action.type === 'BLUR') {
        return { value: state.value, isTouched: true };
    }
    // Reset input
    if (action.type === 'RESET') {
        return { value: '', isTouched: false };
    }
    return initialInputState;
};

// Custom hook
const useInput = validateInput => {
    // Initialise reducer
    const [inputState, dispatch] = useReducer(
        inputStateReducer,
        initialInputState
    );

    // Validate controlled component's input value
    const inputIsValid = validateInput(inputState.value);

    // Overall input error state
    const isError = !inputIsValid && inputState.isTouched;

    // Action handlers
    const valueChangeHandler = e => {
        dispatch({ type: 'INPUT', value: e.target.value });
    };

    const blurChangeHandler = () => {
        dispatch({ type: 'BLUR' });
    };

    const reset = () => {
        dispatch({ type: 'RESET' });
    };

    return {
        value: inputState.value,
        isValid: inputIsValid, // Controlled component validation state
        isError, // Overall input validation state upon blur
        valueChangeHandler,
        blurChangeHandler,
        reset,
    };
};

export default useInput;
