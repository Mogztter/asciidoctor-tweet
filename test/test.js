const chai = require('chai')
const expect = chai.expect
const asciidoctorTweet = require('../src/asciidoctor-tweet')
const asciidoctor = require('asciidoctor.js')()
const cheerio = require('cheerio')

const registry = asciidoctorTweet.register(asciidoctor.Extensions.create())

describe('Asciidoctor tweet extension', () => {
  it('should display a tweet', () => {
    const html = asciidoctor.convert('tweet::988973671065600000[]', {extension_registry: registry})
    const result = cheerio.load(html)
    expect(result('.tweet')).to.have.lengthOf(1)
    expect(result('.tweet-text').text()).to.equal('Asciidoctor 1.5.7 is going to feature much more accurate line tracking. While there are still edge cases, the numbers will be correct in most documents.')
  })
})
