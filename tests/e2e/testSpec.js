describe("anything", function() {
//    beforeEach(function() {
//        browser().navigateTo('whatever');
//    });
it('should let you toggle the class', function() {
    console.log("hello");
    browser().navigateTo('/test.html');
    console.log(element('p:first').prop('className'))
    expect(element('p:first').prop('className')).not().toMatch(/bold/);
    expect(element( 'p:first').prop('className')).not().toMatch(/red/);

    input('important').check();
    expect(element('p:first').prop('className')).toMatch(/bold/);

    input('error').check();
    expect(element(' p:first').prop('className')).toMatch(/red/);
});

it('should let you toggle string example', function() {
    console.log("find out more")
    console.log(element('p:nth-of-type(2)'))
    expect(element('p:nth-of-type(2)').prop('className')).toBe('');
    input('style').enter('red');
    expect(element(' p:nth-of-type(2)').prop('className')).toBe('red');
});
//
it('array example should have 3 classes', function() {
    expect(element(' p:last').prop('className')).toBe('');
    input('style1').enter('bold');
    input('style2').enter('strike');
    input('style3').enter('red');
    expect(element(' p:last').prop('className')).toBe('bold strike red');
})
});