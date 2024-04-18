const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');




// If user screen width is less than 800px

if (window.matchMedia("(max-width: 800px)").matches) {
	signUpButton.addEventListener('click', () => {
		container.classList.add("right-panel-active-mobile");
	});
	
	signInButton.addEventListener('click', () => {
		container.classList.remove("right-panel-active-mobile");
	});
} else {

		
signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

	

}