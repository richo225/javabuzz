describe('JavaBuzz', function(){
  var javabuzz;

  describe('knows when a number is', function(){

    it('divisible by 3', function(){
      javabuzz = new JavaBuzz();
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('divisible by 5', function(){
      javabuzz = new JavaBuzz();
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('divisible by 15', function(){
      javabuzz = new JavaBuzz();
      expect(javabuzz.isDivisibleByFifteen(30)).toBe(true);
    });

  });

  describe('knows when a number is NOT', function(){

    it('divisible by 3', function(){
      javabuzz = new JavaBuzz();
      expect(javabuzz.isDivisibleByThree(4)).toBe(false);
    });

    it('divisble by 5', function(){
      javabuzz = new JavaBuzz();
      expect(javabuzz.isDivisibleByFive(2)).toBe(false);
    });

    it('divisible by 15', function(){
      javabuzz = new JavaBuzz();
      expect(javabuzz.isDivisibleByFifteen(21)).toBe(false);
    });

  });

});
