const assert = require('chai').assert
const { httpRequest } = require('../../util/http')
const Http = require('http')
const Config = require('../../config')
const MAX_TIMEOUT = 1 * 60 * 1000

const agent = new Http.Agent({
  keepAlive: true,
  maxSockets: 3
})
const requestOptions = {
  port: Config.get('http_port'),
  agent: agent
}

describe('Test Media Types: dna+fasta', function () {
  describe('genome_feature', () => {
    it('Test call_method: stream', async function () {
      this.timeout(MAX_TIMEOUT)

      return httpRequest(Object.assign(requestOptions, {
        headers: {
          'Accept': 'application/dna+fasta',
          'Content-Type': 'application/x-www-form-urlencoded',
          'download': true
        },
        method: 'POST',
        path: '/genome_feature/'
      }), 'rql=eq%28feature_id%252CPATRIC.83332.12.NC_000962.CDS.2052.3260.fwd%29%2526sort%28%252Bfeature_id%29%2526limit%281%29')
        .then((body) => {
          assert.equal(body, ExpectedFeatureDnaFasta)
        })
    })

    it('Test call_method: query', async function () {
      this.timeout(MAX_TIMEOUT)

      return httpRequest(Object.assign(requestOptions, {
        headers: {
          'Accept': 'application/dna+fasta',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'POST',
        path: '/genome_feature/'
      }), 'rql=eq%28feature_id%252CPATRIC.83332.12.NC_000962.CDS.2052.3260.fwd%29%2526sort%28%252Bfeature_id%29%2526limit%281%29')
        .then((body) => {
          assert.equal(body, ExpectedFeatureDnaFasta)
        })
    })
  })

  describe('genome sequence', function () {
    it('Test call_method: stream', async function () {
      this.timeout(MAX_TIMEOUT)

      return httpRequest(Object.assign(requestOptions, {
        headers: {
          'Accept': 'application/dna+fasta',
          'Content-Type': 'application/x-www-form-urlencoded',
          'download': true
        },
        method: 'POST',
        path: '/genome_sequence/'
      }), 'rql=in%28sequence_id%252C%281765.317.con.0070%29%29%2526sort%28%252Bsequence_id%29%2526limit%282500000%29')
        .then((body) => {
          assert.equal(body, ExpectedSequenceDnaFasta)
        })
    })

    it('Test call_method: query', async function () {
      this.timeout(MAX_TIMEOUT)

      return httpRequest(Object.assign(requestOptions, {
        headers: {
          'Accept': 'application/dna+fasta',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'POST',
        path: '/genome_sequence/'
      }), 'rql=in%28sequence_id%252C%281765.317.con.0070%29%29%2526sort%28%252Bsequence_id%29%2526limit%282500000%29')
        .then((body) => {
          assert.equal(body, ExpectedSequenceDnaFasta)
        })
    })
  })
})

const ExpectedFeatureDnaFasta = '>fig|83332.12.peg.2|Rv0002|VBIMycTub87468_0002|   DNA polymerase III beta subunit (EC 2.7.7.7)   [Mycobacterium tuberculosis H37Rv | 83332.12]\n\
atggacgcggctacgacaagagttggcctcaccgacttgacgtttcgtttgctacgagag\n\
tctttcgccgatgcggtgtcgtgggtggctaaaaatctgccagccaggcccgcggtgccg\n\
gtgctctccggcgtgttgttgaccggctcggacaacggtctgacgatttccggattcgac\n\
tacgaggtttccgccgaggcccaggttggcgctgaaattgtttctcctggaagcgtttta\n\
gtttctggccgattgttgtccgatattacccgggcgttgcctaacaagcccgtagacgtt\n\
catgtcgaaggtaaccgggtcgcattgacctgcggtaacgccaggttttcgctaccgacg\n\
atgccagtcgaggattatccgacgctgccgacgctgccggaagagaccggattgttgcct\n\
gcggaattattcgccgaggcaatcagtcaggtcgctatcgccgccggccgggacgacacg\n\
ttgcctatgttgaccggcatccgggtcgaaatcctcggtgagacggtggttttggccgct\n\
accgacaggtttcgcctggctgttcgagaactgaagtggtcggcgtcgtcgccagatatc\n\
gaagcggctgtgctggtcccggccaagacgctggccgaggccgccaaagcgggcatcggc\n\
ggctctgacgttcgtttgtcgttgggtactgggccgggggtgggcaaggatggcctgctc\n\
ggtatcagtgggaacggcaagcgcagcaccacgcgacttcttgatgccgagttcccgaag\n\
tttcggcagttgctaccaaccgaacacaccgcggtggccaccatggacgtggccgagttg\n\
atcgaagcgatcaagctggttgcgttggtagctgatcggggcgcgcaggtgcgcatggag\n\
ttcgctgatggcagcgtgcggctttctgcgggtgccgatgatgttggacgagccgaggaa\n\
gatcttgttgttgactatgccggtgaaccattgacgattgcgtttaacccaacctatcta\n\
acggacggtttgagttcgttgcgctcggagcgagtgtctttcgggtttacgactgcgggt\n\
aagcctgccttgctacgtccggtgtccggggacgatcgccctgtggcgggtctgaatggc\n\
aacggtccgttcccggcggtgtcgacggactatgtctatctgttgatgccggttcggttg\n\
ccgggctga\n'

const ExpectedSequenceDnaFasta = '>accn|CDHH01000070   Mycobacterium bovis genome assembly Assembly of the genome MB3, contig 70, whole genome shotgun sequence.   [Mycobacterium bovis strain MB3 | 1765.317]\n\
agcgcgttcaggctcaacggaataccaggaatagtaatatccggcaccacaatcggaccg\n\
acaccacccagcgcgttcaggctcaacggaataccaggaatagtaatatccggcaccaca\n\
atcggaccgatgccaccattcacttcgacgctcagtgggatggcgggaatgctgagtgtg\n\
tctgagtagccaatcagaccctggtaatcgcccctccacagtatgccgttgctgtagctg\n\
cccgagatcagggcgccggtgttaaggtcgccaatgtttccccagccggtgttgaggtcg\n\
ccgaggtttaggta\n'