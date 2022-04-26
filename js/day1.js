const panels = document.querySelectorAll('.panel')
panels.forEach((panel,index) => {
	console.log(panel)
	panel.addEventListener('mouseover', () => {
		removeActiveClasses()
		panel.classList.add('active')
	})
	panel.addEventListener('click', () => {
		if(panel.className ='panel active')
		{
			console.log(index)
			redirectToSeries(index)
		}
	})
})
function removeActiveClasses(){
	panels.forEach(panel => {
		panel.classList.remove('active')
	})
}
function redirectToSeries(index){
	if(index == 0)
	{
		window.open('https://sflix.to/tv/free-moon-knight-hd-52420', '_blank');
	}
	else if(index == 1)
	{
		window.open('https://sflix.to/tv/free-loki-hd-42258', '_blank');
	}
	else if(index == 4){
		window.open('https://sflix.to/tv/free-hawkeye-hd-43521', '_blank');
	}
	else if(index == 3){
		window.open('https://sflix.to/tv/free-what-if-hd-71031', '_blank');
	}
	else if(index == 2){
		window.open('https://sflix.to/tv/free-wandavision-hd-42256', '_blank');
	}
}