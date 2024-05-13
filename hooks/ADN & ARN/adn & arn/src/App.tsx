import React, { useState } from 'react';

const toRna = (strand: string): string => {
  let transcribed: string = '';
  const mapper = new Map<string, string>([
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

const DNAToRNATranscriber: React.FC = () => {
  const [dna, setDna] = useState<string>('');
  const [rna, setRna] = useState<string>('');

  const handleDnaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDna(e.target.value);
  };

  const transcribeDnaToRna = () => {
    try {
      const transcribedRna = toRna(dna);
      setRna(transcribedRna);
    } catch (error) {
      if (error instanceof Error) {
      alert(error.message);
    }else {

    }
  }
  };

  return (
    <div>
      <h1>DNA to RNA Transcriber</h1>
      <label>
        DNA Strand:
        <input type="text" value={dna} onChange={handleDnaChange} />
      </label>
      <button onClick={transcribeDnaToRna}>Transcribe</button>
      {rna && (
        <p>Transcribed RNA Strand: {rna}</p>
      )}
    </div>
  );
};

export default DNAToRNATranscriber;
