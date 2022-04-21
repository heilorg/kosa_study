function run1() {
    const start = new Date();
    for( let i = 0; i < 1000000000; i++ ) { }
    const end = new Date();
    console.log( end - start + 'ms' );
}
run1();
console.log( 'end' );

function run2() {
    setTimeout( () => {
        const start = new Date();
        for( let i = 0; i < 1000000000; i++ ) { }
        const end = new Date();
        console.log( end - start + 'ms' );
    }, 1000 );
}
run2();
console.log( 'end2' );

function run3( callback ) {
    setTimeout( () => {
        const start = new Date();
        for( let i = 0; i < 1000000000; i++ ) { }
        const end = new Date();
        console.log( end - start + 'ms' );

        callback();
    }, 1000 );
}

run3( () => {
    console.log( 'end3' );
} )

function run4() {
    return new Promise( ( res, rej ) => {
        setTimeout( () => {
            const start = new Date();
            for( let i = 0; i < 1000000000; i++ ) { }
            const end = new Date();
            console.log( end - start + 'ms' );
            res();
        }, 1000 );
    } );
}

run4().then( () => {
    console.log( 'end4' );
} )

async function process() {
    await run4();
    await run4();
    console.log( 'end5' );
}
process()