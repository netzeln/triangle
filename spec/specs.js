describe("defTriangle", function(){
  it("is false if the sum of two sides is less than or equal to the third", function() {
    expect(defTriangle(2,3,9)).to.equal(false);
  });
});

describe("typeTriangle",function(){
  it("is an equilateral if all sides are the same", function(){
    expect(typeTriangle(3,3,3)).to.equal("equilateral");
  });

  it ("is an isoceles triangle if 2 sides are the same", function(){
    expect(typeTriangle(3,3,4)).to.equal("isoceles");
  });

  it("is scalene if none of the sides are the same", function(){
    expect(typeTriangle(3,4,5)).to.equal("scalene");
  });
});


describe ("isTriangle", function(){
  it("is true if it is a triangle then return type of triangle", function(){
    expect(isTriangle(2,3,4)).to.equal("scalene");
  });

  it("is false if not a triangle, then return error message", function(){
    expect(isTriangle(1,1,80)).to.equal("Oops, please try again. Entry was incorrect.");
  });
});
