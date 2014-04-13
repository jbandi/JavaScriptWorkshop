var calculator = function() {
    var equationElement,
        currentValueElement,
        operator,
        operatorSet = false,
        equalsPressed = false,
        lastNumber = null,

        init = function(equationEl, currentValueEl) {
            equationElement = equationEl;
            currentValueElement = currentValueEl;
        },

        add = function(x, y) {
            return x + y;
        },

        subtract = function(x, y) {
            return x - y;
        },

        multiply = function(x, y) {
            return x * y;
        },

        divide = function(x, y) {
            if (y == 0) {
                alert("Can't divide by 0");
                return 0;
            }
            return x / y;
        },

        setVal = function(val) {
            currentValueElement.html(val);
        },

        setEquation = function(val) {
            equationElement.html(val);
        },

        clearNumbers = function() {
            lastNumber = null;
            equalsPressed = operatorSet = false;
            setVal('0');
            setEquation('');
        },

        setOperator = function(e) {

            var newOperator = $(e.target).html();

            if (newOperator == '=') {
                equalsPressed = true;
                calculate();
                setEquation('');
                return;
            }

            //Handle case where = was pressed
            //followed by an operator (+, -, *, /)
            if (!equalsPressed) calculate();
            equalsPressed = false;
            operator = newOperator;
            operatorSet = true;
            lastNumber = parseFloat(currentValueElement.html());
            var eqText = (equationElement.html() == '') ?
                lastNumber + ' ' + operator + ' ' :
                equationElement.html() + ' ' + operator + ' ';
            setEquation(eqText);
        },

        numberClick = function(e) {
            if (operatorSet == true || currentValueElement.html() == '0') {
                setVal(''); // the current value has to be cleared before the new one is set
                operatorSet = false;
            }
            var html = $(e.target).html();
            setVal(currentValueElement.html() + html);
            setEquation(equationElement.html() + html);
        },

        calculate = function() {
            if (!operator || lastNumber == null) return;
            var currNumber = parseFloat(currentValueElement.html()),
                newVal = 0;

            switch (operator) {
                case '+':
                    newVal = add(lastNumber, currNumber);
                    break;
                case '-':
                    newVal = subtract(lastNumber, currNumber);
                    break;
                case '*':
                    newVal = multiply(lastNumber, currNumber);
                    break;
                case '/':
                    newVal = divide(lastNumber, currNumber);
                    break;
            }
            setVal(newVal);
            lastNumber = newVal;
        };

    return {
        init: init,
        numberClick: numberClick,
        setOperator: setOperator,
        clearNumbers: clearNumbers
    };
}();