import { useReducer } from 'react';

const initialInputState = {
    value: '',
    isTouched: false,
};

const inputStateReducer = (state, action) => {
    if (action.type === 'INPUT') {
        return { value: action.value, isTouched: state.isTouched };
    }
    if (action.type === 'BLUR') {
        return { value: state.value, isTouched: true };
    }
    if (action.type === 'RESET') {
        return { value: '', isTouched: false };
    }
    return initialInputState;
};

const useInput = validateInput => {
    const [inputState, dispatch] = useReducer(
        inputStateReducer,
        initialInputState
    );

    const inputIsValid = validateInput(inputState.value);
    const isError = !inputIsValid && inputState.isTouched;

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
        isValid: inputIsValid,
        isError,
        valueChangeHandler,
        blurChangeHandler,
        reset,
    };
};

export default useInput;
