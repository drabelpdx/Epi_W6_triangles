describe('triangle', function() {
  it ("returns 'equilateral triangle' if 3 input numbers are equal", function() {
    expect(triangle([3,3,3])).to.equal('make an equilateral triangle');
  });

  it ("return 'isoceles triangle' if 2 sides but not 3 are equal", function() {
    expect(triangle([3,2,2])).to.equal('make an isoceles triangle');
  });

  it ("return 'scalene triangle' if no sides but are equal", function() {
    expect(triangle([13,9,14])).to.equal('make a scalene triangle');
  });

  it ("return 'not a triangle' if sides do not form a triangle", function() {
    expect(triangle([13,9,3])).to.equal('do not make a triangle');
  });

});
