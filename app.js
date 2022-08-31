const packages = [
  // NOTE each set of curly brackets within this ARRAY is an OBJECT, each line within the object is a VARIABLE of said OBJECT.
  {
  priority: true,
  isFragile: false,
  weight: 2,
  to: 'Sir Harrington IV',
  trackingNumber: '1324kjs'
},
{
  priority: true,
  isFragile: true,
  weight: .5,
  to: 'Master Mercutio',
  trackingNumber: '1325sdk'
},
{
  priority: false,
  isFragile: true,
  weight: .5,
  to: 'Mistress Ravenfeather',
  trackingNumber: 'jffd147'
},
{
  priority: false,
  isFragile: false,
  weight: 4,
  to: 'B. Robert Brown',
  trackingNumber: 'acdc145'
},
{
  priority: false,
  isFragile: true,
  weight: 6,
  to: 'Chancellor Wallace'
},
{
  priority: true,
  isFragile: false,
  weight: 5,
  to: 'Sarah Sharm',
  trackingNumber: '8081baz'
},
{
  priority: true,
  isFragile: true,
  weight: 12,
  to: 'Tae Lien',
  trackingNumber: 'suz2367'
  }]


  // NOTE these are variables. We are using the .filter function to filter by property 

  // NOTE for this variable/function, we are making priority = TRUE. So when we use the property PRIORITY, it is only drawing packages with priority TRUE.
let priority = packages.filter(package => package.priority)

  // NOTE for this filter variable/function, we are making isFragile = TRUE. So when we use the property FRAGILE, it is only drawing packages with fragile TRUE, because we have defined it as such.
let fragile = packages.filter(package => package.isFragile)

  // NOTE for this variable/function, we are making weight = TRUE if the weight is more than 4. So when we use the property WEIGHT, it is only drawing packages with weight greater than 4.
let weight = packages.filter(package => package.weight > 4)

// NOTE draw essentially means populate the page
function drawPackages(packages) {
  // NOTE we are pulling the table element from HTML. specicially, our div with the ID table. so within this function, we are giving table a definition that allows us to target/populate that div.
  let table = document.getElementById('table')

  // NOTE let template with empty quotation marks is converting it into a string so that the following will be read as HTML ??
  let template = ''
  

    // NOTE  forEach is taking the packages array and taking each object within it, and filling out this form with that information.
  // NOTE bananaWord is just showing that this word can be named anything. normally we would name is package -singular, because it belongs to packages, plural.
  packages.forEach(bananaWord =>
  // NOTE => can be used to define a function inside an expression. In this case, we are defining bananaWord as a template.
  { 
  template += `<table class="table table-bordered table-success">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">To:</th>
      <th scope="col">Tracking #</th>
      <th scope="col">Weight</th>
      <th scope="col">Priority</th>
      <th scope="col">Fragile</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td>${bananaWord.to}</td>
      <td>${bananaWord.trackingNumber}</td>
      <td>${bananaWord.weight}</td>
      <td>${bananaWord.priority}</td>
      <td>${bananaWord.isFragile}</td>
    </tr>

    </tr>
  </tbody>
</table>`
    // NOTE this is defining our table div as the area to place our template.
table.innerHTML = template
});
}

// NOTE executes the function we made above, drawing all the info onto the page.
drawPackages()

// NOTE function for our button that filters by weight.
function filterWeight() {
  // NOTE again, defining table within our function to populate the div with the ID of table
  let table = document.getElementById("table")
  // @ts-ignore
  // NOTE template with empty quotation marks is converting it into a string so that the following will be read as a string within the template HTML below.
  template = ""
  // NOTE  using our weight variable we defined above, forEach is taking the weight variable from each object, and filling out this form with that information.
  weight.forEach(package => {
    // @ts-ignore
    template += `<table class="table table-bordered table-success">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">To:</th>
      <th scope="col">Tracking #</th>
      <th scope="col">Weight</th>
      <th scope="col">Priority</th>
      <th scope="col">Fragile</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td>${package.to}</td>
      <td>${package.trackingNumber}</td>
      <td>${package.weight}</td>
      <td>${package.priority}</td>
      <td>${package.isFragile}</td>
    </tr>

    </tr>
  </tbody>
</table>`
    // NOTE again, we are filling the div with the ID table with the template we just created.
    // @ts-ignore
    table.innerHTML = template
  })
}

// NOTE filterFragile function below behaves the same as above, reference above notes.
function filterPriority(){
drawPackages(priority)
 
}

function filterFragile(){
  let table = document.getElementById("table")
  // @ts-ignore
  template = ""
  fragile.forEach(package => {
    // @ts-ignore
    template += `<table class="table table-bordered table-success">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">To:</th>
      <th scope="col">Tracking #</th>
      <th scope="col">Weight</th>
      <th scope="col">Priority</th>
      <th scope="col">Fragile</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td>${package.to}</td>
      <td>${package.trackingNumber}</td>
      <td>${package.weight}</td>
      <td>${package.priority}</td>
      <td>${package.isFragile}</td>
    </tr>

    </tr>
  </tbody>
</table>`
    // @ts-ignore
    table.innerHTML = template
  })
}

// NOTE by changing function drawPackages() to function drawPackages(packages) allows 
function drawAllPackages() {
  drawPackages(packages)
}