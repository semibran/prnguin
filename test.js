
const { test } = require('tape-modern')
const { percent, integer, boolean } = require('./lib/random.js')

function printAvgs (samples, total) {
    for (let name in samples) {
        const sample = samples[name]
        console.log('#', name)
        for (let assert in sample) {
            let percent = Math.round(sample[assert] / total * 1000000) / 10000
            console.log('ok 1 -', assert, 'avg', percent + '%')
        }
    }
}

test('100k runs output frequency', t => {
    const total = 100000

    // Samples
    const percentSamples = {
        '0': 0,
        '0.1': 0,
        '0.2': 0,
        '0.3': 0,
        '0.4': 0,
        '0.5': 0,
        '0.6': 0,
        '0.7': 0,
        '0.8': 0,
        '0.9': 0,
        '1': 0,
    }

    const intSamples1 = {
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0,
        '8': 0,
        '9': 0,
        '10': 0
    }

    const intSamples2 = {
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0
    }

    const booleanSamples = {
        'true': 0,
        'false': 0
    }

    for (let i = 0; i < total; i++) {
        let val = Math.round(percent(i) * 10) / 10
        if (!percentSamples[val]) percentSamples[val] = 1
        else percentSamples[val]++
    }

    for (let i = 0; i < total; i++) {
        intSamples1[integer(1, 10, i)]++
    }

    for (let i = 0; i < total; i++) {
        intSamples2[integer(1, 5, i)]++
    }

    for (let i = 0; i < total; i++) {
        booleanSamples[boolean(i)]++
    }

    printAvgs({
        'percents': percentSamples,
        'integers 1-5': intSamples1,
        'integers 1-10': intSamples2,
        'booleans': booleanSamples,
    }, total)
})
