import React, { useState } from 'react';

// Función para transcribir ADN a ARN
function toRna(strand) {
    let transcribed = '';
    const mapper = new Map([
        ["G", "C"],
        ["C", "G"],
        ["T", "A"],
        ["A", "U"],
    ]);
    for (var i = 0; i < strand.length; i++) {
        if (!mapper.has(strand.charAt(i))) throw new Error('Invalid input DNA.');
        transcribed = transcribed + mapper.get(strand.charAt(i));
    }
    return transcribed;
}

// Componente de React
function DnaToRnaTranscriber() {
    const [dna, setDna] = useState('');
    const [rna, setRna] = useState('');

    const transcribeDna = () => {
        try {
            setRna(toRna(dna));
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div>
            <input type="text" value={dna} onChange={e => setDna(e.target.value)} />
            <button onClick={transcribeDna}>Transcribe DNA</button>
            <p>RNA: {rna}</p>
        </div>
    );
}

export default DnaToRnaTranscriber;