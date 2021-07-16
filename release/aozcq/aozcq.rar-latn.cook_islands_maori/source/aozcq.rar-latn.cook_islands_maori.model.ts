/*
  Cook Islands Maori 1.2. Word list generated from texts collected by Sally Akevai Nicholas.
  
  This is a minimal lexical model source that uses a tab delimited wordlist.
  See documentation online at https://help.keyman.com/developer/ for
  additional parameters.
*/

const source: LexicalModelSource = {
   format: 'trie-1.0',
   wordBreaker: 'default',
   sources: ['wordlist.tsv'],
   languageUsesCasing: true,
   searchTermToKey: function (term: string): string {
    let termWithoutGlottal = term.replace("ꞌ", "")

    return termWithoutGlottal;
   },
};
export default source;
