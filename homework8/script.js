// 1: ['kitab', 'defter', 'qelem', 'pozan'] bu array içərisində ‘qelem’-i silib yerinə 'juran', 'karandas'əlavə edin.
const array1 = ['kitab', 'defter', 'qelem', 'pozan']
array1.splice(2, 1, 'juran', 'karandas')
console.log(array1)

// 2: [2, 5, 32, 12, 6] arrayinin bütün elementlərinin cüt olub olmadığını yoxlayın. Daha sonra ən az bir elementinin tək olub olmadığını yoxlayın
const array2 = [2, 5, 32, 12, 6]
const result1 = array2.every(function (el) {
    return el % 2 == 0
})
console.log(result1)
const result2 = array2.some(function (el) {
    return el % 2 == 0
})
console.log(result2)

// 3: [-23, 5, 34, 3, -3, 0] arrayinin müsbət elementlərindən yeni bir array qurun, daha sonra qurduğunuz arrayın elementlərini 2-yə vurulmuş vəziyyətə çevirib, ardında böyükdən kiçiyə sıralayın

const array3 = [-23, 5, 34, 3, -3, 0]
const positiveArray = array3.filter(function (el) {
    return el > 0
})
console.log(positiveArray)
const multipliedTwoArray = positiveArray.map(function (el) {
    return el * 2
})
console.log(multipliedTwoArray)

const sortFrommMaxToMin = multipliedTwoArray.sort(function (a, b) {
    return b - a
})
console.log(sortFrommMaxToMin)

// 4: Istifadəçi 3 düymədən birinə klikləməlidir. Bunlar Save, Cancel, və Update-dir. Əgər Save etsə konsolda “yadda saxalndı”, Cancel etsə “Çıxıldı”, Update etsə “dəyişikliklər yadda saxlandı” yazılsın. Başqa düyməyə klikləsə “Qebul edilmedi” yazılsın. Switch Case ilə bəhs edilən məntiqi qurmağa çalışın.

let buttonName = "Save"
switch (buttonName) {
    case "Save":
        console.log("Yadda saxlanidi")
        break;
    case "Cancel":
        console.log("Çıxıldı")
        break;
    case "Update":
        console.log("dəyişikliklər yadda saxlandı")
        break;
    default:
        console.log("Qebul edilmedi")
}

// 5: [4, 6, 3, 2, 5, 7] bu arrayi bu formaya çevirin [cut, cut, tek, cut, tek, tek] . Bunun üçün map metodundan və ternary operatorsdan istifadə edin.

const array4=[4, 6, 3, 2, 5, 7]
const changedArray=array4.map(function(el){
   
    return el%2==0?"cut":"tek"
})

console.log(changedArray)

// 6: 'abcfdeg' stringini Array Classından istifadə edərək array-ə çevirin.
let text='abcfdeg'
console.log(Array.from(text))

// 7: {cloud: 'bulud', book: 'kitab', juice: 'meyve siresi'} ilə {phone: 'telefon', window: 'pencere'} objectlerini birləşdirin və daha sonra value-lerini array şəklində alın.

const obj1={cloud: 'bulud', book: 'kitab', juice: 'meyve siresi'}
const obj2={phone: 'telefon', window: 'pencere'}
const obj3=Object.assign(obj1,obj2)
console.log(Object.values(obj3))