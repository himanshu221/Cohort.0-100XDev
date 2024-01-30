import { atom, selector } from 'recoil'

export const numberAtom = atom({
    key: "numberAtom",
    default: 0
})

export const choiceAtom = atom({
    key: "choiceAtom",
    default: "words"
})

export const textSelector = selector({
    key: "textSelector",
    get: ({get}) => {
        const number = get(numberAtom)
        const choice = get(choiceAtom)

        if(choice === "words"){
            return <div>
                {getWords(number)}
            </div>
                
        }
        else if(choice === "sentences"){
            return <div>
                {getSentences(number)}
            </div>    
        }else{
            return <div>
                {getParagraphs(number).split('<break>').map(str => <div className='para'>{str}</div>)}
            </div>
        }

    }
})

function getSentences(count) {
    let sentences = ''

    for(let i = 0; i < count; ++i){
        sentences += " " + getWords(Math.floor(Math.random()*10) + 3) + "."
    }

    return sentences
}

function getParagraphs(count) {
    let paragraphs = ''

    for(let i = 0 ; i < count; ++i){
        paragraphs +=  '<break>' + getSentences(Math.floor(Math.random()*10) + 2)
    }

    return paragraphs
}
function getWords(count) {
    let words = ''
    for(let i=0; i < count; ++i){
        words += i == count-1 ? getWord() : getWord() + " "
    }
    return words
}

function getWord(){
    let chars = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 
                'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
                'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
                'y', 'z']
    let word = ''
    for(let i = 0; i < Math.floor(Math.random()*10) + 2; ++i){
        word += chars[Math.floor(Math.random()*100)%26];
    }
    return word;
}