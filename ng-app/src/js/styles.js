$(function() {

	// Mobile search
	$('[data-name="mobile-search"]').on('click', function() {
		$('.mobile-navbar .search').addClass('opened');
	});

	$('.search__close').on('click', function() {
		$('.mobile-navbar .search').removeClass('opened');
	});

	// Mobile category
	$('[data-name="mobile-category"]').on('click', function() {
		$('body').prepend('<div class="overlay"></div>');
		$('.swipe--category').addClass('swipe--opened');
	});

	// Mobile menu
	$('[data-name="mobile-menu"]').on('click', function() {
		$('body').prepend('<div class="overlay"></div>');
		$('.swipe--menu').addClass('swipe--opened');
	});

	// Mobile order
	$('[data-name="mobile-order"]').on('click', function() {
		$('body').prepend('<div class="overlay"></div>');
		$('.swipe--order').addClass('swipe--opened');
	});

	$('.swipe__close').on('click', function() {
		$('.swipe').removeClass('swipe--opened');
		$('.overlay').remove();
	});

	// Bulk order content tab
	// $('.bulk-order__actions .btn').on('click', function() {
	// 	var self = $(this);

	// 	console.log(self)

	// 	openBulkOrderTab(self);
	// });

	// Accordion
	// $('.accordion__header').on('click', function() {
	// 	var self = $(this).parent();

	// 	if(self.hasClass('accordion__item--active')) {
	// 		self.removeClass('accordion__item--active');
	// 	}
	// 	else {
	// 		self.addClass('accordion__item--active');
	// 	}
	// });

	$('body').delegate('.overlay', 'click', function() {
		$('.swipe').removeClass('swipe--opened');
		$('.overlay').remove();
  });


  // $('.dropdown__toggle').on('click', function() {
  //   var self = $(this).parent();
  //   if(self.hasClass('dropdown--opened')) {
	// 		self.removeClass('dropdown--opened');
	// 	}
	// 	else {
	// 		self.addClass('dropdown--opened');
	// 	}
  // });


});

// function openBulkOrderTab(self) {
// 	var index = self.index();

// 	self.addClass('btn--active').siblings().removeClass('btn--active');

// 	$('.bulk-order__content').removeClass('bulk-order__content--active');
// 	$('.bulk-order__content[data-index="' + index + '"]').addClass('bulk-order__content--active');
// }
