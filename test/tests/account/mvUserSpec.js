describe('mvUser', function() {
    beforeEach(module('app'));
    
    describe('isAdmin', function() {
        it('should return false if the roles array dose not hava an admin entry', inject(function(mvUser) {
            var user = new mvUser();
            user.roles = ['not admin'];
            expect(user.isAdmin()).to.be.falsey;
        }))
        
        it('should return true if the roles array hava an admin entry', inject(function(mvUser) {
            var user = new mvUser();
            user.roles = ['admin'];
            expect(user.isAdmin()).to.be.true;
        }))
    })
})

