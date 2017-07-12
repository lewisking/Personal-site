<!DOCTYPE html>
<html lang="en">

<head>

	<meta name="description" content="Lewis King is a designer and User Interface Developer based in Bath, UK." />
	<meta name="keywords" content="HTML,CSS,Photoshop,Design,Graphic,WordPress,Integrations,Ecommerce,Development,Responsive,Designer,Lewis,King,Lewis King,XHTML,CSS3,HTML5,Frontend,Developer" />
	<meta name="author" content="Lewis King" />
	<meta http-equiv="content-type" content="text/html;charset=UTF-8" />

	<title>Lewis King - Senior User Interface Developer</title>
	<link rel="stylesheet" type="text/css" href="assets/css/styles.css" media="all" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">

	<link href="//fonts.googleapis.com/css?family=Karla:400,700" rel="stylesheet">

	<script>
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		ga('create', 'UA-25928542-1', 'lewisking.net');
		ga('send', 'pageview');
	</script>

</head>

<?php
	date_default_timezone_set('Europe/London');
	$currentHour = date('H');
	$classHour = null;
	if ($currentHour <= 6) {
		 $classHour = "nighttime";
	} elseif ($currentHour <= 10) {
		 $classHour = "morning";
	} elseif ($currentHour <= 15) {
		 $classHour = "afternoon";
	} elseif ($currentHour <= 20) {
		$classHour = "early-evening";
	} elseif ($currentHour <= 24) {
	   $classHour = "nighttime";
   };
?>

<body class="<?= $classHour?>">

	<div class="container table container-introduction" id="introduction">

		<div class="inner cell animated fadeInUp">

			<div class="max-width">

				<img src="assets/images/lewis@2x.png" alt="A photograph of me">
				<h1>Hello, my name is Lewis King; I'm a Senior User Interface Developer based in the beautiful city of <a href="http://en.wikipedia.org/wiki/Bath,_Somerset" target="_blank" title="A link to a Wikipedia article on Bath">Bath, UK</a>.</h1>

			</div>
		</div>

	</div>

	<div class="animated fadeIn delay">
		<div class="container container-about" id="about">
			<div class="inner">
				<div class="max-width">
					<h2>About me</h2>

					<p>I've been building websites for just over 10 years, starting when I was just 13. Back then I built small brochure sites for friends and family whenever I could; desperate to get my hands on anything to do with the web. These days I lead the front-end team at <a target="_blank" href="http://blubolt.com" title="External link to blubolt">blubolt</a> - a leading eCommerce agency in Bath. Whilst at blubolt, I spend my time advocating the importance of design and great user experiences across the teams - on both our <a href="http://blubolt.com/customers" title="External link to bluCommerce" target="_blank">client sites</a> and our internal tooling/<a href="http://blubolt.com/blucommerce" title="External link to bluCommerce" target="_blank">platform</a>.</p>

					<p>In recent years I've built the front-end for some of the UK's biggest eCommerce retailers such as <a target="_blank" href="http://routeone.co.uk" title="External link to Route One">Route One</a>, <a target="_blank" href="http://robertwelch.com" title="External link to Robert Welch">Robert Welch</a>, <a target="_blank" href="http://whittard.co.uk" title="External link to Whittard">Whittard</a>, <a target="_blank" href="http://teapigs.co.uk" title="External link to teapigs">Teapigs</a> & more. If you would like to work on something together; I am available to take on a <strong>limited amount</strong> of freelance work through <?= date('F', strtotime('+1 month')); ?>.</p>

				</div>

			</div>
		</div>

		<div class="container container-current-work" id="current">
			<div class="inner">
				<div class="max-width">
					<h2>Current projects <span>&amp; previous work</span></h2>

					<div class="item">
						<a href="http://independentbath.co" target="_blank" class="remove-line" title="View site">
							<div class="image">
								<img src="assets/images/portfolio/independentbath.jpg" alt="Visit Independent Bath"/>
							</div>
							<div class="text">
								<div class="table">
									<div class="cell">
										<p>In my spare time, I run Independent Bath - A site that showcases independent businesses in the wonderful city I call home.</p>
										<p><small>Frontend &bull; Design &bull; Branding &bull; WordPress</small></p>
									</div>
								</div>
							</div>
						</a>
					</div>

					<div class="item">
						<a href="http://society-cafe.com" target="_blank" class="remove-line" title="Visit Society Cafe's site">
							<div class="image">
								<img src="assets/images/portfolio/society.jpg" alt="Society Cafe"/>
							</div>

							<div class="text">
								<div class="table">
									<div class="cell">
										<p>I helped redesign my favourite coffee shop's website to bring their online presence up to date with their store.</p>
										<p><small>Frontend &bull; Design</small></p>

									</div>
								</div>
							</div>
						</a>
					</div>

					<div class="item wow fadeInUp" data-wow-offset="200">

						<a href="http://designedbyadam.co.uk" target="_blank" class="remove-line" title="Visit Adam's site">
							<div class="image">
								<img src="assets/images/portfolio/adam.jpg" alt="Adam Dale"/>
							</div>

							<div class="text">
								<div class="table">
									<div class="cell">
										<p>Award winning designer Adam Dale needed a responsive WordPress theme created for his new portfolio.</p>
										<p><small>Frontend &bull; WordPress</small></p>
									</div>
								</div>
							</div>
						</a>
					</div>

					<div class="item">

						<a href="http://more2.com" target="_blank" class="remove-line" title="Visit More2's site">
							<div class="image">
								<img src="assets/images/portfolio/more2.jpg" alt="more2"/>
							</div>

							<div class="text">
								<div class="table">
									<div class="cell">
										<p>More2 (partner company of blubolt) required a redesign earlier this year to better showcase their history and services.</p>
										<p><small>Frontend &bull; WordPress</small></p>
									</div>
								</div>
							</div>
						</a>
					</div>


					<div class="item">

						<a href="http://blubolt.com" target="_blank" class="remove-line" title="Visit blubolt's site">
							<div class="image">
								<img src="assets/images/portfolio/blubolt.jpg" alt="blubolt"/>
							</div>

							<div class="text">
								<div class="table">
									<div class="cell">
										<p>This year I rebuilt the blubolt site from scratch, further refining our site and new focus on blog content.</p>
										<p><small>Frontend &bull; WordPress</small></p>
									</div>
								</div>
							</div>
						</a>
					</div>

				</div>

			</div>
		</div>

		<div class="container container-contact" id="contact">

			<div class="inner">

				<div class="max-width">

					<p>Want to work together? Please feel free to contact me via <a href="mailto:lewisking@me.com" title="Email me">email</a>. You can find me on social media too:</p>
					<ul class="social-networks">
						<li class="twitter">
							<a target="_blank" href="http://twitter.com/lewisking" class="remove-line" title="Keep up to date with things that I think are somehow are relevant on Twitter">Twitter</a>
						</li>
						<li class="spotify">
							<a target="_blank" href="https://open.spotify.com/user/lewisking1994" class="remove-line" title="Subscribe to my playlists on Spotify">Spotify</a>
						</li>
						<li class="linkedin">
							<a target="_blank" href="http://linkedin.com/in/lewis-king" class="remove-line" title="Visit my LinkedIn Profile">LinkedIn</a>
						</li>
						<li class="instagram">
							<a target="_blank" href="http://instagram.com/lewis" class="remove-line" title="View my photos that mainly consist of coffee, travelling and bands I see live">Instagram</a>
						</li>
					</ul>

				</div>
			</div>

		</div>
	</div>

</body>

</html>
