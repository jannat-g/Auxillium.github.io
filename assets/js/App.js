const cafeList = document.querySelector('#cafe-list');
const form = document.querySelector('#add-cafe-list');

//create an element and render the elements
function renderProduct(doc)
{
	let li = document.createElement('li');
	let name = document.createElement('span');
	let price = document.createElement('span');
	let cross = document.createElement('div');



	li.setAttribute('data-id', doc.id);
	name.textContent = doc.data().name;
	price.textContent = doc.data().price;
	cross.textContent = '-';
	


	li.appendChild(name);
	li.appendChild(price);
	li.appendChild(cross);


	cafeList.appendChild(li);

	//delte data
	cross.addEventListener('click', (e) => 
	{
		e.stopPropagation();
		let id = e.target.parentElement.getAttribute('data-id');
		db.collection('Product').doc(id).delete();
	})
}


//saving data
form.addEventListener('submit', (e) => 
{
	e.preventDefault();
	db.collection('Product').add(
	{
		name: form.name.value,
		price: form.price.value
	});

	form.name.value = '';
	form.price.value = '';
})


//getting data
db.collection('Product').onSnapshot(snapshot => 
{
	let changes = snapshot.docChanges();
	changes.forEach(change =>
	{
		if(change.type == 'added')
		{
			renderProduct(change.doc);
		}

		else if (change.type == 'removed')
		{
			let li = cafeList.querySelector('[data-id=' + change.doc.id + ']');
			cafeList.removeChild(li);
		}
	})
})
