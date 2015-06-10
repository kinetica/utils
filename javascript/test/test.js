describe("formatString text", function(){

	it("simple format", function(){
		var data = { prop1: "val1"};
		var pattern = "${prop1}";
		var result = TextUtil.formatString(pattern, data);
		
		expect(result).toBe("val1");
	});

});