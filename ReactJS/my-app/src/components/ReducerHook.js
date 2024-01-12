import React,{useReducer} from 'react'

const initialState = { width: 15 };

const reducer = (state, action) => {
  switch (action) {
    case 'plus':
      return { width: state.width + 15 }
    case 'minus':
      return { width: Math.max(state.width - 15, 2) }
    default:
      throw new Error("what's going on?" )
  }
}

const ReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <div style={{ background: 'teal', height: '30px', width: state.width }}></div>
            <div style={{ marginTop: '3rem' }}>
                <button onClick={() => dispatch('plus')}>Increase bar size</button>
                <button onClick={() => dispatch('minus')}>Decrease bar size</button>
            </div>
        </>
    );
}

export default ReducerHook