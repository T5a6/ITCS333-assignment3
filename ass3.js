
        fetch('https://data.gov.bh/api/records/1.0/search/?dataset=01-statistics-of-students-nationalities_updated&rows=100&sort=number_of_students')
            .then(response => response.json()) 
            .then(data => {
                const tableBody = document.getElementById('data-body'); 
                
                data.records.forEach(record => {
                    const row = document.createElement('tr'); // Creates a new table row for each record
                    row.innerHTML = `
                        <td>${record.fields.year}</td>
                        <td>${record.fields.semester}</td> 
                        <td>${record.fields.the_programs}</td> 
                        <td>${record.fields.nationality}</td> 
                        <td>${record.fields.colleges}</td> 
                        <td>${record.fields.number_of_students}</td> 
                    `;
                    tableBody.appendChild(row); // Appends the new row to the table body
                });
            })
            .catch(error => {
                console.error('Data Fetching error:', error);
                alert('cannot fetch the data');
            });
        
        
