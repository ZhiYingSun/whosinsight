import React, { useState } from 'react'

const UploadForm = () => {

    const [file, setFile]= useState(null);
    const types = ['iamge/png', 'image/jpeg'];
    const [error, setError] = useState(null);

    // access file the user has selected
    const changeHandler = (e) => {
        let selected = e.target.files[0];
        console.log(selected);

        // make sure a file has been slected and is of allowed type
        if (selected && types.includes(selected.type)) {
            setFile(selected);
        } else {
            setFile(null);
            setError('Please select an image file (png or jpeg)')
        }
    }

    return (
        <form>
            <input type="file" onChange={ changeHandler } />
            <div className="output">
                {/* if we have an error */}
                { error && <div className="error">{ error }</div> }
            </div>
        </form>
    )   
 
}

export default UploadForm;