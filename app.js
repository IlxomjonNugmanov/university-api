const elul = document.querySelector('.ul')
const elh2 = document.querySelector('.title')
const elload = document.querySelector('.load')

async function data() {
  
    const url = await fetch('http://universities.hipolabs.com/search?country=United+States')
    const data = await url.json()
    render(data)
    console.log(data);

}

data()

async function render(arr) {
  await arr.forEach(element => {
        const elli = document.createElement('li')

        elli.innerHTML=`

          <div class="card-wrapper p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${element.country}</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${element.name}</p>
            <a href="${element.web_pages}" target="_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            
          </div>

        `        
        elul.append(elli)
  });

}
