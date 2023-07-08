
const minNameLength = 10
const minAge = 25
const minIncome = 100000
const maxIncome = 1000000
const dataArray = []




// fungsi ngatur tab buat nampilin content
const displayShow = (id , section) => {
    // selector
    let allActiveTabs = document.querySelectorAll(".tab-active")
    let clicked = document.getElementById(id)
    let divToShow = document.getElementById(section)
    let allSections = document.querySelectorAll('.section')
    const sections =[]

    // buat tab jadi gk active
    for (let i of allActiveTabs){
        i.classList.remove("tab-active")
    }     

    // buat tab yg di klik jadi active
    clicked.classList.add("tab-active")

    // bikin section lain hidden hidden
    
    for (let i of allSections){
        i.classList.add("hidden")
    }

    // munculin div
    divToShow.classList.remove("hidden")

    
}

// CLASS Person
class Person {
    constructor(name, age, income) {
        this.name = name
        this.age = age
        this.income = income
    }

    
}

//------------------------------------------------------//
//fungsi nyaring data dan pop-up alert
const filter = (name, age, income)=> {
    let counter = 0
    name.length >= 10 ? counter +=1 :
    document.getElementById('name-alert').classList.remove('hidden');
    
    age >= 25 ? counter +=1:
    document.getElementById('age-alert').classList.remove('hidden'); 

    income >= 100000 && income < 1000000 ? counter +=1:
    document.getElementById('income-alert').classList.remove('hidden');

    if (counter == 3) {
        return true
    } else return false
}



//onSubmit

document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault() 
    //get input value
    let name = document.getElementById('name')
    let age = document.getElementById('age')
    let income = document.getElementById('income')

    //filter data
    console.log((filter(name.value, age.value, income.value)))
    if(filter(name.value, age.value, income.value)){
    
    // submit to class
    const newPerson = new Person (name.value, age.value, income.value)
    dataArray.push(newPerson)

    //clear inputs
    name.value=''
    age.value=''
    income.value=''
    
    //insert the data to the table
    writeTable(dataArray)}

    //calculate avgage, avginc
    let totalAge= 0
    let totalIncome= 0
    dataArray.forEach((i)=>{
        totalAge += Number(i.age)
        totalIncome += Number(i.income) 
    })
    let AverageAge= totalAge/dataArray.length
    let AverageIncome= totalIncome/dataArray.length
    
    //add resume average age and average income
    const resume = document.getElementById('resume')
    const conclusion = document.createElement('p')
    conclusion.classList.add("text-xs","text-center","text-red-400")
    conclusion.textContent= `Average age is ${AverageAge} and Average income is ${AverageIncome}` 
    console.log(conclusion)
    resume.replaceChildren(conclusion)
})


//fungsi untuk nulis data ke tabel
const writeTable = (data) => {
    // selector
    const tbody = document.getElementById('tbody')


    let count = 1
    // create new row and cells
    const newRow = data.map((item)=>{
        
        const newRow = document.createElement('tr')
        newRow.classList.add('hover')
        
        //counter
        const counter = document.createElement('td')
        counter.textContent=count
        count++
        newRow.appendChild(counter)

        // new cell for name and insert to newRow
        const nameCell = document.createElement('td')
        nameCell.textContent= item.name
        newRow.appendChild(nameCell)

        //new cell for age and insert to newRow
        const ageCell = document.createElement('td')
        ageCell.textContent= item.age
        newRow.appendChild(ageCell)


        //new cell for income and insert to newRow
        const incomeCell = document.createElement('td')
        incomeCell.textContent= item.income
        newRow.appendChild(incomeCell)


        return newRow 

        
    })
    tbody.replaceChildren(...newRow)


}