const url = 'https://data.gov.bh/api/records/1.0/search/?dataset=01-statistics-of-students-nationalities_updated&rows=100&sort=number_of_students';

// Fetches data from the specified API endpoint
fetch(url)
    .then(response => response.json()) // Converts the response to JSON format
    .then(data => {
        const tableBody = document.getElementById('data-body'); // Gets the table body element by its ID
        data.records.forEach(record => { // Iterates over each record in the fetched data
            const row = document.createElement('tr'); // Creates a new table row for each record
            row.innerHTML = ` <!-- Sets the inner HTML of the row with data -->
                <td>${record.fields.year}</td> <!-- Year data cell -->
                <td>${record.fields.semester}</td> <!-- Semester data cell -->
                <td>${record.fields.the_programs}</td> <!-- Programs data cell -->
                <td>${record.fields.nationality}</td> <!-- Nationality data cell -->
                <td>${record.fields.colleges}</td> <!-- Colleges data cell -->
                <td>${record.fields.number_of_students}</td> <!-- Number of Students data cell -->
            `;
            tableBody.appendChild(row); // Appends the new row to the table body
        });
    });

import axios from 'axios';

async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const records = data.records;
    const year = [];
    const semester = [];
    const programs = [];
    const nationality = [];
    const colleges = [];
    const numberOfStudents = [];

    records.forEach(row => {
      year.push(row.fields.year);
      semester.push(row.fields.semester);
      programs.push(row.fields.the_programs);
      nationality.push(row.fields.nationality);
      colleges.push(row.fields.colleges);
      numberOfStudents.push(row.fields.number_of_students);
    });

    console.log('Fetch API Results:');
    console.log(year);
    console.log(semester);
    console.log(programs);
    console.log(nationality);
    console.log(colleges);
    console.log(numberOfStudents);
  } catch (error) {
    console.error('Error fetching data using fetch API:', error);
  }
}

async function fetchDataUsingAxios() {
  try {
    const response = await axios.get(url);
    const records = response.data.records;
    const year = [];
    const semester = [];
    const programs = [];
    const nationality = [];
    const colleges = [];
    const numberOfStudents = [];

    records.forEach(row => {
      year.push(row.fields.year);
      semester.push(row.fields.semester);
      programs.push(row.fields.the_programs);
      nationality.push(row.fields.nationality);
      colleges.push(row.fields.colleges);
      numberOfStudents.push(row.fields.number_of_students);
    });

    console.log('Axios Results:');
    console.log(year);
    console.log(semester);
    console.log(programs);
    console.log(nationality);
    console.log(colleges);
    console.log(numberOfStudents);
  } catch (error) {
    console.error('Error fetching data using axios:', error);
  }
}

fetchData();
fetchDataUsingAxios();
