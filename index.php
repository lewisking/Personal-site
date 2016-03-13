<!DOCTYPE html>
<html> 

<head>

	<meta name="description" content="Lewis King is a designer and front-end developer based in Bath, UK." /> 
	<meta name="keywords" content="HTML,CSS,Photoshop,Design,Graphic,WordPress,Integrations,Ecommerce,Development,Responsive,Designer,Lewis,King,Lewis King,XHTML,CSS3,HTML5,Frontend,Developer" /> 
	<meta name="author" content="Lewis King" /> 
	<meta http-equiv="content-type" content="text/html;charset=UTF-8" /> 
	
	<title>Lewis King - Designer and front-end developer</title> 
	<link rel="stylesheet" type="text/css" href="assets/css/animate.css" media="all" /> 
	<link rel="stylesheet" type="text/css" href="assets/css/styles.css" media="all" /> 
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	
	<script src="assets/js/jquery.js"></script>
	<script src="assets/js/scripts.js" type="text/javascript"></script>
		
	<script>
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		
		ga('create', 'UA-25928542-1', 'lewisking.net');
		ga('send', 'pageview');
	</script>

</head> 

<body class="animated fadeIn slower"> 
	
	<div class="menu-wrapper">
		
		<ul>
			<li><a href="#introduction" title="Visit home section">Home</a></li>
			<li><a href="#about" title="Visit about section">About</a></li>
			<li><a href="#current" title="Visit projects section">Projects</a></li>
			<li><a href="#contact" title="Visit contact section">Contact</a></li>
		</ul>
		
	</div>

	<div class="container container-introduction" id="introduction">
					
		<div class="inner animated">
			
			<a href="" class="menu" title="Open menu">
				<span></span>
				<span></span>
				<span></span>				
			</a>
			
			<div class="max-width">
				
				<span class="tag">- hello</span>

				<h1 class="animated fadeIn delay">My name is Lewis King. I'm a designer &amp; front-end developer based in the beautiful city of <a href="http://en.wikipedia.org/wiki/Bath,_Somerset" target="_blank" title="A link to a Wikipedia article on Bath">Bath, UK</a>.</h1>
				
				<span class="bounce"><a href="#about" class="arrow animated fadeIn delay_three">Scroll down</a></span>
			
			</div>
		</div>
		
	</div>

	<div class="container-about" id="about">
		<div class="inner">
			<div class="max-width">	
			
				<h2>A little about me</h2>
				
				<p>Hello, my name is Lewis; I am a designer &amp; front-end developer based in the beautiful city of <a href="http://en.wikipedia.org/wiki/Bath,_Somerset" target="_blank" title="A link to a Wikipedia article on Bath">Bath, UK</a>. I build websites for small companies and individuals all over the world. Currently, I am available to take on a <strong>limited amount</strong> of freelance work through <?= date('F', strtotime('+1 month')); ?>. During the day I'm senior front-end developer at <a target="_blank" href="http://blubolt.com" title="External link to blubolt">blubolt</a> - where I lead eCommerce site builds and oversee and the front-end of the bluCommerce platform.</p>
				
			</div>
		</div>
	</div>

	<div class="container container-current-work" id="current">
		<div class="inner">
			<div class="max-width">
				<h2>Current projects <span>&amp; previous work</span></h2>
				
				<div class="main group">
					
					<div class="item flip group">
						<div class="chrome">
							<div class="top">
								<img src="assets/images/chrome.png" alt="chrome" />
								<a href="http://independentbath.co" class="url" target="_blank" title="View site">http://independentbath.co</a>
							</div>
							<div class="content"><img src="assets/images/portfolio/independentbath.jpg" alt="Independent Bath"/></div>
						</div>
						<div class="text">
							<p>In my spare time, I run Independent Bath.</p>
							<p>Both designed and built by me, Independent Bath was created to showcase independent businesses in the wonderful city I call home. </p>
							<a href="http://independentbath.co" class="button button-light" target="_blank" title="View site">View site</a>
							
							<p><small>A site built entirely by myself</small></p>

						</div>
					</div>  
				
					<div class="item group">
						<div class="chrome">
							<div class="top">
								<img src="assets/images/chrome.png" alt="chrome" />
								<a href="http://society-cafe.com" class="url" target="_blank" title="View site">http://society-cafe.com</a>
							</div>
							<div class="content"><img src="assets/images/portfolio/society.jpg" alt="Society Cafe"/></div>
						</div>
						<div class="text">
							<p>I helped redesign my favourite coffee shop's website to bring their online presence up to date with their store.</p>
							<p>Now featuring an up-to-date food and drinks list, as well as a map and directions to the store, the new site really makes finding out more about the caf&eacute; much easier.</p>
							<p>Not only that, we now include photos of staff, the latest Instagram photos posted to the caf&eacute;'s account and what is currently playing in the store via last.fm.</p>
							<a href="http://society-cafe.com" class="button button-light" target="_blank" title="View site">View site</a>
							
							<p><small>A collaborative design and development with @<a href="http://twitter.com/dizzyup" title="Hector Simpson's twitter profile">dizzyup</a> &amp; @<a href="http://twitter.com/lgladdy" title="Liam Gladdy's twitter profile">lgladdy</a>.</small></p>
						</div>
					</div>  
										
					<div class="item flip group">
						<div class="chrome">
							<div class="top">
								<img src="assets/images/chrome.png" alt="chrome" />
								<a href="http://designedbyadam.co.uk" class="url" target="_blank" title="View site">http://designedbyadam.co.uk</a>
							</div>
							<div class="content"><img src="assets/images/portfolio/adam.jpg" alt="Adam Dale"/></div>
						</div>
						<div class="text">
							<p>Award winning designer Adam Dale needed a responsive WordPress theme created for his new portfolio.</p>
							<p>I wrote a theme that makes use of WordPress Custom Fields, is fully responsive and was finished within a few short weeks.</p>
							<p>Adam has lots of big images so designed a site that showed them off in all their glory. With some code to work out which orientation an image is, I was able to create a versatile template for his project pages that would look great at any resolution.</p>
							<a href="http://designedbyadam.co.uk" class="button button-light" target="_blank" title="View site">View site</a>
							
							<p><small>A site built entirely by myself</small></p>
						</div>
					</div>  
					
					<div class="item group">
						<div class="chrome">
							<div class="top">
								<img src="assets/images/chrome.png" alt="chrome" />
								<a href="http://more2.com" class="url" target="_blank" title="View site">http://more2.com</a>
							</div>
							<div class="content"><img src="assets/images/portfolio/more2.jpg" alt="more2"/></div>
						</div>
						<div class="text">
							<p>More2 (partner company of blubolt) required a redesign earlier this year to better showcase their history and services.</p>
							
							<p>Together we came up with a site that is clean and modern yet functional and informative. Design and development was all in-house and done over one weekend. The site is fully responsive and customisable via WordPress.</p>					
							<a href="http://more2.com" class="button button-light" target="_blank" title="View site">View site</a>
							
							<p><small>Front-end development and design input via <a href="http://blubolt.com" title="blubolt - eCommerce specialists">blubolt.com</a></small></p>

						</div>
					</div> 
				</div>

				</div>
				
				<div class="center">
					<p>If you would like to see more of my work, please do get in touch; my details are below!</p>
				
					<a href="#contact" class="button button-light" title="Contact me">Onwards!</a>
				</div>
			
			</div>

		</div>
	</div>
		
	<div class="container container-contact center" id="contact">
		
		<div class="inner">
			
			<div class="max-width">
								
				<h2>Let's chat!</h2>
				<p>Please feel free to contact me via <a href="mailto:lewisking@me.com" title="Email me">email</a>, or find me on the following social networks:</p>
				
				<ul class="social-networks">
					<li class="twitter">
						<a href="#">Twitter</a>
					</li>
					<li class="spotify">
						<a href="#">Spotify</a>
					</li>
					<li class="instagram">
						<a href="#">Instagram</a>
					</li>
				</ul>
				
				<script>
					
					$('.social-networks li').each(function() {
					    var socialClass = $(this).attr("class");
					    $(this).hover(function () {
					        $(".container-contact").addClass("container-social-" + socialClass);
					    },function () {
$(".container-contact").removeClass("container-social-" + socialClass);
					    });
					});	
									
				</script>
				
			</div>
		</div>
	
	</div>
	
	<div class="menu-close"></div>
	
	<script src="https://use.typekit.net/dtg8rlv.js"></script>
	<script>try{Typekit.load({ async: true });}catch(e){}</script>

</body>

</html>