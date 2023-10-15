const table= [
    {
        name:'Pratibha singh',
        Age: '24',
        Occupation: 'Full Stack Developer',
        City: 'Bangalore',
        state: 'Karnataka'
    },

    {
        name:'Ekta Singh',
        Age: '25',
        Occupation: 'Data Scientist',
        City: 'Banglore',
        state: 'Karnataka'
    },
    
    {
        name:'Priya Yadav',
        Age: '28',
        Occupation: 'Doctor',
        City: 'Gurugram',
        state: ' New Delhi'
    },
    
    {
        name:'Akriti Rao',
        Age: '25',
        Occupation: 'Engineer',
        City: 'Allahabad',
        state: 'Uttar Pradesh'
    },
    
    {
        name:'Sweety Singh',
        Age: '25',
        Occupation: 'Engineer',
        City: 'Bangalore',
        state: 'Karnataka'
    },
    
    {
        name:'Aarju Sinha',
        Age: '27',
        Occupation: 'Java Developer',
        City: 'Pune',
        state: 'Mumbai'
    },
    {
        name:'Diya Rao',
        Age: '25',
        Occupation: 'Doctor',
        City: 'Noida',
        state: 'Delhi'
    },
    
    ]

    const tableHeader = Object.keys(table[0]);
    // console.log(tableHeader);

    const search = document.querySelector('.filter-input');
    const output = document.querySelector('.output');

    window.addEventListener('DOMContentLoaded', loadTable);
    search.addEventListener('input', filter);

    function loadTable(){
        let temp = `<table> <tr>`;
        tableHeader.forEach( header=> temp+= `<th> ${header.toUpperCase()} </th>`)

        temp+= `<tr>`

        table.forEach(row => {
            temp+=  `
            <tr>
            <td>${row.name}</td>
            <td>${row.Age}</td>
            <td>${row.Occupation}</td>
            <td>${row.City}</td>
            <td>${row.state}</td>
            </tr>
            `

        });

        temp += `</table>`

        output.innerHTML= temp;
    }

    function filter(e){
        // console.log(e.target.value);

        let results;
        let temp ="";

        results = table.filter(item => 
            item.state.toLowerCase().includes(e.target.value.toLowerCase())|| 
            item.name.toLowerCase().includes(e.target.value.toLowerCase())|| 
            item.City.toLowerCase().includes(e.target.value.toLowerCase())|| 
            item.Occupation.toLowerCase().includes(e.target.value.toLowerCase())|| 
            item.Age.toLowerCase().includes(e.target.value.toLowerCase())
        );

        if(results.length>0){
            temp = `<table> <tr>`;
            tableHeader.forEach( header=> temp+= `<th> ${header.toUpperCase()} </th>`)
    
            temp+= `<tr>`
    
            results.forEach(row => {
                temp+=  `
                <tr>
                <td>${row.name}</td>
                <td>${row.Age}</td>
                <td>${row.Occupation}</td>
                <td>${row.City}</td>
                <td>${row.state}</td>
                </tr>
                `
    
            });
    
            temp += `</table>`

        }else{
            temp = `<div class="no-item">Item Not Found</div>`
        }

        output.innerHTML =temp;

    }
   