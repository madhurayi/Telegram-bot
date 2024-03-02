//From here execution of program will starts
const {Telegraf} =require('telegraf');
const axios=require('axios');
/**How to get get the secret token for creating a bot?
 1.Open telegram and search for botfather
 2.To read instructions type /start and press enter.
 3.To create a new bot type /newbot and press enter.
 4.It will ask for a bot name, give a bot name without a / , ex: coding_bot
 5. then it ask for a username ending with bot ex: coding_bot
 6.   t.me/Cosing_solutionsbot 
 **/
let binarysearch=`
// Function to perform binary search on a sorted array
function binary_Search(items, value) {
    // Initialize variables for the first, last, and middle indices of the array
    var firstIndex  = 0,
        lastIndex   = items.length - 1,
        middleIndex = Math.floor((lastIndex + firstIndex) / 2);

    // Continue the search while the middle element is not equal to the target value
    // and the first index is less than the last index
    while (items[middleIndex] != value && firstIndex < lastIndex) {
        // Adjust the search range based on whether the target value is less or greater than the middle element
        if (value < items[middleIndex]) {
            lastIndex = middleIndex - 1;
        } else if (value > items[middleIndex]) {
            firstIndex = middleIndex + 1;
        }
        // Recalculate the middle index for the next iteration
        middleIndex = Math.floor((lastIndex + firstIndex) / 2);
    }

    // Return the index of the target value if found, otherwise return -1
    return (items[middleIndex] != value) ? -1 : middleIndex;
}

// Sorted array for testing
var items = [1, 2, 3, 4, 5, 7, 8, 9];

// Perform binary search for the target values 1 and 5
console.log(binary_Search(items, 1));   
console.log(binary_Search(items, 5));
`

const bot= new Telegraf(tolen);

bot.start((ctx)=>{
    ctx.reply("Welecone to the the new coding solutions bot from madhu");
})
bot.command('binarysearchjs',(ctx)=>{
    ctx.reply(binarysearch);
})
bot.command('binarytreesjs',async function(ctx){
    //const response=await axios.get('https://raw.githubusercontent.com/singhsanket143/FrontendDSA/master/Aug_29/trees.js');
    //console.log(response.data);
    // ctx.reply(response.data);
    ctx.reply(binarysearch);
})
bot.command('whomadethis',(ctx)=>{
    ctx.reply('madhu');
})
bot.on('sticker',(ctx)=>{
    ctx.reply('❤️');
})
bot.launch();
