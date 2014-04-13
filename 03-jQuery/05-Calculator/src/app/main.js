calculator.init($('#equation'), $('#currentValue'));

$('.DigitButton').on('click', function(){calculator.numberClick(event)});
$('.OperatorButton').on('click', function(){calculator.setOperator(event)});
$('.ClearButton').on('click', function(){calculator.clearNumbers()});