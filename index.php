<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="description" content="Mortgage Calculator. Get free quotes from top lenders that reflect your loan situation.">
	<meta name="author" content="Phoenix Mortgage Group">

	<title>Phoenix Mortgage Group</title>

	<!-- Bootstrap core CSS -->
	<link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css">

	<!-- Custom fonts for this theme -->
	<link href='https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>
	<link href='https://fonts.googleapis.com/css?family=Raleway:400,100,200,300,600,500,700,800,900' rel='stylesheet' type='text/css'>

	<!-- Vendor CSS -->
	<link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
	<link href="vendor/owl-carousel/owl.carousel.css" rel="stylesheet" type="text/css">
	<link href="vendor/owl-carousel/owl.theme.css" rel="stylesheet" type="text/css">
	<link href="vendor/owl-carousel/owl.transitions.css" rel="stylesheet" type="text/css">
	<link href="vendor/magnific-popup/magnific-popup.css" rel="stylesheet" type="text/css">
	<link href="vendor/animate.css/animate.min.css" rel="stylesheet" type="text/css">
	<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">

	<!-- Custom CSS -->
	<link href="app/phoenixmortgagegroup.css" rel="stylesheet" type="text/css">
	<link rel="stylesheet" href="app/jslider.css">

	<!-- Temporary navbar container fix -->
	<style>
		.navbar-toggler {
			z-index: 1;
		}

		@media (max-width: 576px) {
			nav > .container {
				width: 100%;
			}
		}
	</style>
</head>

<body ng-app="pmg-app">

<!-- button at top of page
<a class="btn btn-block btn-full-width" href="http://www.phoenixmortgagegroup.com/default.aspx"
   target="_blank">
	<img id="pmg-logo-top-img" src="img/logo-dark.png" alt="logo">
</a>
 -->

<?php $tech="Phoenix Mortgage Group"; echo $tech; ?>

<!-- style="background-image: url('img/view1.jpg');" -->
<header class="masthead" style="background-image: url('img/view1.jpg');">
	<div class="container h-100">
		<div class="row h-100">
			<!-------------------------------->
			<!-- This is The CORE Container -->
			<!-------------------------------->
			<div id="pmg-calc" class="container" ng-controller="CoreCtrl">
				<!-- 1) intro slide -->
				<section id="intro-slide" class="pmg-slide"
				         ng-class="{
							'active-top': activeSlide.intro.active,
							'inactive-top': !activeSlide.intro.active,
							'answered': activeSlide.intro.qState === 'answered'
						 }">
					<intro active-slide="activeSlide"></intro>
				</section>
				<!-- 1b) intro slide -->
				<section class="pmg-slide"
				         ng-class="{
							'active': activeSlide.intro2.active, 'inactive': !activeSlide.intro2.active,
							'answered': activeSlide.intro2.qState === 'answered'
						 }">
					<intro2 active-slide="activeSlide"></intro2>
				</section>
				<!-- 2) property used slide -->
				<section class="pmg-slide"
				         ng-class="{
						'active': activeSlide.propertyUsed.active, 'inactive': !activeSlide.propertyUsed.active,
						'answered': activeSlide.propertyUsed.qState === 'answered'
						}">
					<property-used active-slide="activeSlide"></property-used>
				</section>
				<!-- 3) zip code slide -->
				<section class="pmg-slide"
				         ng-class="{
						'active': activeSlide.zipCode.active, 'inactive': !activeSlide.zipCode.active,
						'answered': activeSlide.zipCode.qState === 'answered'
						}">
					<zip-code active-slide="activeSlide"></zip-code>
				</section>
				<!-- 4) value estimate slide -->
				<section class="pmg-slide"
				         ng-class="{
				         'active': activeSlide.estimateValue.active, 'inactive': !activeSlide.estimateValue.active,
						 'answered': activeSlide.estimateValue.qState === 'answered'
				         }">
					<estimate-value active-slide="activeSlide"></estimate-value>
				</section>
				<!-- 5) remaining mortgage balance1 -->
				<section class="pmg-slide"
				         ng-class="{
				         'active': activeSlide.remainingBalance1.active, 'inactive': !activeSlide.remainingBalance1.active,
						 'answered': activeSlide.remainingBalance1.qState === 'answered'
				         }">
					<remaining-balance1 active-slide="activeSlide"></remaining-balance1>
				</section>
				<!-- 6) second mortgage -->
				<section class="pmg-slide"
				         ng-class="{
				            'active': activeSlide.secondMortgage.active, 'inactive': !activeSlide.secondMortgage.active,
						    'answered': activeSlide.secondMortgage.qState === 'answered'
				         }">
					<second-mortgage active-slide="activeSlide"></second-mortgage>
				</section>
				<!-- 7a) remaining balance 2 -->
				<section class="pmg-slide"
				         ng-class="{
				         'active': activeSlide.remainingBalance2.active, 'inactive': !activeSlide.remainingBalance2.active,
						 'answered': activeSlide.remainingBalance2.qState === 'answered'
				         }">
					<remaining-balance2 active-slide="activeSlide"></remaining-balance2>
				</section>
				<!-- 7b) borrow -->
				<section class="pmg-slide"
				         ng-class="{
				            'active': activeSlide.borrow.active, 'inactive': !activeSlide.borrow.active,
						    'answered': activeSlide.borrow.qState === 'answered'
				         }">
					<borrow active-slide="activeSlide"></borrow>
				</section>
				<!-- 8) credit score -->
				<section class="pmg-slide"
				         ng-class="{
				         'active': activeSlide.creditScore.active, 'inactive': !activeSlide.creditScore.active,
						 'answered': activeSlide.creditScore.qState === 'answered'
				         }">
					<credit-score active-slide="activeSlide"></credit-score>
				</section>
				<!-- 9) "First Home Purchase" slide, used to be the born slide. -->
				<section class="pmg-slide"
				         ng-class="{
				            'active': activeSlide.firstHomePurchase.active, 'inactive': !activeSlide.firstHomePurchase.active,
						    'answered': activeSlide.firstHomePurchase.qState === 'answered'
				         }">
					<born active-slide="activeSlide"></born>
				</section>
				<!-- 10) military -->
				<section class="pmg-slide"
				         ng-class="{
				         'active': activeSlide.military.active, 'inactive': !activeSlide.military.active,
						 'answered': activeSlide.military.qState === 'answered'
				         }">
					<military active-slide="activeSlide"></military>
				</section>
				<!-- 11a) veterans administration loan -->
				<section class="pmg-slide"
				         ng-class="{
				         'active': activeSlide.vaLoan.active, 'inactive': !activeSlide.vaLoan.active,
						 'answered': activeSlide.vaLoan.qState === 'answered'
				         }">
					<va-loan active-slide="activeSlide"></va-loan>
				</section>
				<!-- 11b) bankruptcy questionnaire -->
				<section class="pmg-slide"
				         ng-class="{
				         'active': activeSlide.bankruptcyQuestion.active, 'inactive': !activeSlide.bankruptcyQuestion.active,
						 'answered': activeSlide.bankruptcyQuestion.qState === 'answered'
				         }">
					<bankruptcy-question active-slide="activeSlide"></bankruptcy-question>
				</section>
				<!-- 12) bankruptcy slide -->
				<section class="pmg-slide"
				         ng-class="{
				         'active': activeSlide.bankruptcy.active, 'inactive': !activeSlide.bankruptcy.active,
						 'answered': activeSlide.bankruptcy.qState === 'answered'
				         }">
					<bankruptcy active-slide="activeSlide"></bankruptcy>
				</section>
				<!-- 13) foreclosure slide -->
				<section class="pmg-slide"
				         ng-class="{
				         'active': activeSlide.foreclosure.active, 'inactive': !activeSlide.foreclosure.active,
						 'answered': activeSlide.foreclosure.qState === 'answered'
				         }">
					<foreclosure active-slide="activeSlide"></foreclosure>
				</section>
				<!-- 14) current address
				<section class="pmg-slide"
				         ng-class="{
				         'active': activeSlide.currentAddress.active, 'inactive': !activeSlide.currentAddress.active,
						 'answered': activeSlide.currentAddress.qState === 'answered'
				         }">
					<current-address active-slide="activeSlide"></current-address>
				</section>
				-->
				<!-- 15) rates ready to view -->
				<section class="pmg-slide"
				         ng-class="{
				         'active': activeSlide.ratesReady.active, 'inactive': !activeSlide.ratesReady.active,
						 'answered': activeSlide.ratesReady.qState === 'answered'
				         }">
					<rates-ready active-slide="activeSlide"></rates-ready>
				</section>
			</div>
		</div>
	</div>
</header>
<!-- Footer...  style="background-image: url('img/kansas-bg.jpg'); background-position: center 160px;" -->
<footer class="footer bg-inverse">
	<div class="container text-center">
		<div class="row">
			<div class="col-md-4 footer-contact-details">
				<h4><i class="fa fa-phone"></i> Call</h4>
				<p>(316) 942-8228</p>
			</div>
			<div class="col-md-4 footer-contact-details">
				<h4><i class="fa fa-map-marker"></i> Visit</h4>
				<p>240 N Rock Rd, Ste 280
					<br>Wichita, KS 67206</p>
			</div>
			<div class="col-md-4 footer-contact-details">
				<h4><i class="fa fa-envelope"></i> Email</h4>
				<p><a href="mailto:info@phoenixmortgagegroup.com">info@phoenixmortgagegroup.com</a>
				</p>
			</div>
		</div>
		<p class="copyright">&copy; THE PHOENIX MORTGAGE GROUP, INC. NMLS #326386</p>
	</div>
</footer>

<!-- Vendor JavaScript -->
<script src="vendor/jquery/jquery.min.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script src="vendor/tether/tether.min.js"></script>
<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
<script src="vendor/angular/angular.min.js"></script>

<!-- Custom JavaScript -->
<script src="app/phoenixmortgagegroup.js"></script>
<script src="app/2_property_used/comp.property.used.js"></script>
<script src="app/9_born/comp.born.js"></script>
<script src="app/8_credit_score/comp.credit.score.js"></script>
<script src="app/1_intro/comp.intro.js"></script>
<script src="app/1b_intro/comp.intro2.js"></script>
<script src="app/5_remaining_balance_1st/comp.remaining.balance1.js"></script>
<script src="app/7a_remaining_balance_2nd/comp.remaining.balance2.js"></script>
<script src="app/6_second_mortgage/comp.second.mortgage.js"></script>
<script src="app/4_estimate_value/comp.value.estimate.js"></script>
<script src="app/3_zip_code/comp.zip.code.js"></script>
<script src="app/7b_borrow/comp.borrow.js"></script>
<script src="app/10_military/comp.military.js"></script>
<script src="app/11a_va_loan/comp.va.loan.js"></script>
<script src="app/11b_bankruptcy_question/comp.bankruptcy.question.js"></script>
<script src="app/12_bankruptcy/comp.bankruptcy.js"></script>
<script src="app/13_foreclosure/comp.foreclosure.js"></script>
<script src="app/14_current_address/comp.current.address.js"></script>
<script src="app/15_rates_ready/comp.rates.ready.js"></script>

</body>

</html>

