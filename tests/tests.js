// volver a cambiar todo
suite('Temperature', function() {
    test('32F = 0C and color green', function() {
        original.value = "32F";
        calculate();
        chai.assert.deepEqual(converted.innerHTML, "0 Celsius");
        chai.expect(converted.style).to.have.property('cssText', 'color: green;');

    });
    test('45C = 113.0 Farenheit and color blue', function() {
        original.value = "45C";
        calculate();
        chai.assert.deepEqual(converted.innerHTML, "113 Farenheit");
        chai.expect(converted.style).to.have.property('cssText', 'color: blue;');

	});
    test('5X = error and colore red', function() {
        original.value = "5X";
        calculate();
        chai.assert.match(converted.innerHTML, /ERROR/);
        chai.expect(converted.style).to.have.property('cssText', 'color: red;');

	});

});
