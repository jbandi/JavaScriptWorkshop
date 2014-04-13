describe("Testing observable", function() {
	var observable;

	beforeEach(function() {
		observable = new Observable();
	});

	it("should have a public api", function() {
		expect(observable).toBeDefined();
		expect(typeof observable.bind).toEqual("function");
		expect(typeof observable.unbind).toEqual("function");
		expect(typeof observable.emit).toEqual("function");
	});
	
	it("should be able to bind event listeners", function() {
		var payload = "adas";
		observable.bind("action", function (data) {
			expect(payload).toEqual(data);
			payload = "done";
		});
		// trigger event
		observable.emit("action", payload);
		expect(payload).toEqual("done");
	});
	
	it("should bind the observable to 'this' inside the listener", function() {
		observable.bind("action", function () {
			expect(this).toEqual(observable);
		});
		// trigger event
		observable.emit("action");
	});
	
	it("should be able to unbind event listeners", function() {
		var payload = "token",
			event = "action",
			listener = function (data) {
				expect(payload).toEqual("token");
			};
		observable.bind(event, listener);
		observable.emit(event, payload);
		payload = "";
		observable.unbind(event, listener);
		// trigger event "action"
		observable.emit(event, payload);
	});
});