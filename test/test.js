'use strict';

var expect = require('chai').expect;
var msnToDouble = require('../index');

describe('#msnToDouble', () => {
    describe('happy path', ()=>{

        const aus = '+61401000000'

        it('should convert aus number to double', ()=>{
            const tuncMsn = msnToDouble(aus)
            expect(tuncMsn).to.equal(401000000)
        })

        const us = '+12025550121'

        it('should convert us number to double', ()=>{
            const tuncMsn = msnToDouble(us)
            expect(tuncMsn).to.equal(2025550121)
        })

        const uk = '+441632960574'

        it('should convert uk number to double', ()=>{
            const tuncMsn = msnToDouble(uk)
            expect(tuncMsn).to.equal(1632960574)
        })

        const canada = '+16135550170'

        it('should convert canada number to double', ()=>{
            const tuncMsn = msnToDouble(canada)
            expect(tuncMsn).to.equal(6135550170)
        })

    })
    describe('unhappy path', ()=>{

        const notanmsn = 'notanmsn'

        it('should return error', ()=>{
            const tuncMsn = msnToDouble(notanmsn)
            expect(tuncMsn).to.equal(`couldn't convert ${notanmsn} to double`)
        })

    })
})