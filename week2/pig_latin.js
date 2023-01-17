
let pLatin = prompt('Enter Word')
let vowels = ('AEIOUaeiou')
let consonent = ('BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz')

    if(pLatin = '', ' ') {
        document.write('input invalid');
      
    } else if(vowels.includes(pLatin(0))) {
      document.write(pLatin + 'way');
      
    } else if(consonent.includes(pLatin(0,1))) {
        let half1 = pLatin.slice(0,1);
        let half2 = pLatin.slice(-2);
        document.write(half1 + half2 + 'ay');
    } 
      else if(consonent.includes(pLatin(0))) {
       let half1 = pLatin.slice(0);
       let half2 = pLatin.slice(-1);
       document.write(half1 + half2 + 'ay');
      } 