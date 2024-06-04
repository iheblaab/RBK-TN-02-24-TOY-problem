/**
 *  Given an arbitrary input string, return the first nonrepeated character in
 *  the string. For example:
 *  firstNonRepeatedCharacter('ABA'); // => 'B'
 *  firstNonRepeatedCharacter('AACBDB'); // => 'C'
 *  Should return null or empty string of there is no repeated characters
 * 
 * @function firstNonRepeatedCharacter
 * @param {String} string 
 * @returns {String}
 */
const firstNonRepeatedCharacter = function (string) {
  // TODO: your solution here
}
const firstNonRepeatedCharacter = function (string) {
  // TODO: your solution here
  
   for (let i = 0; i < string.length; i++) {
     var cha = string.chatAt(i) 
       if (sting.indexOf(cha)===string.lastindexOf(cha)) {
           return cha
       }
   }
    return null
}