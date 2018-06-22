const translate = (codons = '') => {
  const proteins = [];
  const codonsArray = codons.split('')

  while(codonsArray.length) {
    const codonGroup = codonsArray.splice(0, 3).join('')

    switch (codonGroup) {
      case 'AUG':
        proteins.push('Methionine');
        break; 
      case 'UUU':  
      case 'UUC':
        proteins.push('Phenylalanine');
        break; 
      case 'UUA':
      case 'UUG':
        proteins.push('Leucine');
        break;
      case 'UCU':
      case 'UCC':
      case 'UCA':
      case 'UCG':
        proteins.push('Serine');
        break;
      case 'UAU':
      case 'UAC':
        proteins.push('Tyrosine');
        break;
      case 'UGU':
      case 'UGC':
        proteins.push('Cysteine');
        break;
      case 'UGG':
        proteins.push('Tryptophan');
        break;
      case 'UAA':
      case 'UAG':
      case 'UGA':
        codonsArray.splice(0, codonsArray.length)
        break;
      default:
        throw new Error('Invalid codon')
    }
  }
  return proteins
}

module.exports = translate

