import React from 'react';

import './form-input.styles.scss';

//makes our own stylized dynamic forms
const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className="group">
            <input className='form-input' onChange={ handleChange } { ...otherProps } />
            {
                label ?
                (<label className= {  
                    //selectively shrinks label, if field autofilled by browser & not focused by user, will detect & shrink label
                    `${otherProps.value.length ? 'shrink' : ''} form-input-label` 
                }>
                    { label }
                </label>)
                : null
            }
    </div>
)

export default FormInput;