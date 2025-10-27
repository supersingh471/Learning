//1. Create a counter in Javascript (counts down from 30 to 0)
/*function printNumber () {
            let i = 1;
            let interval = setInterval(() => {
                console.log(i);
                if (i == 30) {
                    
                    clearInterval(interval);
                }
                i++;
            }, 1000);
            
};
printNumber();*/

//2. Calculate the time it takes between a setTimeout call and the inner function actually running
/*function measuringTimeoutCall() {
        const start = Date.now();

        setTimeout(() => {
            const end = Date.now();
            console.log(`Expected Delay: 1000ms`);
            console.log(`Actual Delay: ${end - start}ms`);
        }, 1000);
};
measuringTimeoutCall();*/

//3. Create a terminal clock (HH:MM:SS)
/*function terminalClock () {
   
    setInterval(() => {
        const now = new Date();
        const timestr = now.toLocaleTimeString();
        console.log(timestr);
        //process.stdout.write(`\r${timestr} `);
    }, 1000);
};

terminalClock();*/

const clockHands = ['🕛', '🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚'];

function terminalClock() {
    setInterval(() => {
        const now = new Date();
        const hours = now.getHours() % 12; // Convert 24-hour format to 12-hour
        const timeStr = now.toLocaleTimeString();
        process.stdout.write(`\r${clockHands[hours]} ${timeStr} `);
    }, 1000);
}

terminalClock();
