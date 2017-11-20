import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default function ValiderButton(props) {
    const {valider, display_correction} = props;
    return (
            <RaisedButton
                style={{marginTop: 20}} 
                primary={true}
                label='Valider' 
                fullWidth={true}
                disabled={!display_correction} 
                onClick={valider}
                />
        )
}
