const { EmbedBuilder } = require('discord.js');

const errors = [
  {
    keywords: ['status 403', 'error : status 403','403 error'],
    embed: new EmbedBuilder()
      .setColor('#FF0000')
      .setTitle('API Exhausted error')
      .setDescription(' ▶️ If you get this error means YouTube API is used all.Watch This Video to get free API \n🔴 Link : https://youtu.be/-VCztMrNqRU')
      .setImage('https://cdn.discordapp.com/attachments/1264134884432285766/1274263721404792895/SHIVA.gif?ex=66c19e11&is=66c04c91&hm=ea317b9a9d4e0504f3b16f16ecee5da17b2ced3a6a1ff1ef4d0749f1866c06dd&'),
  },
{
    keywords: ['status edit bot ghost', 'how to edit bot ghost','bot ghost edit'],
    embed: new EmbedBuilder()
      .setColor('#FF0000')
      .setTitle('How to edit Bot Ghost Status')
      .setDescription('**Here is the video guide to edit bot ghost status on github.**\nhttps://cdn.discordapp.com/attachments/1039224128873443340/1213858294142341160/2024-03-03_20-02-28.mp4?ex=65f700a1&is=65e48ba1&hm=2acecf70f3fb882e24869d0ca2babc0e6eea707690ab3e63081b4db18cecc81e&')
   .setImage('https://cdn.discordapp.com/attachments/1264134884432285766/1274263721404792895/SHIVA.gif?ex=66c19e11&is=66c04c91&hm=ea317b9a9d4e0504f3b16f16ecee5da17b2ced3a6a1ff1ef4d0749f1866c06dd&'),
},
  {
    keywords: ['invalid bot token', 'incorrect token','token error'],
    embed: new EmbedBuilder()
      .setColor('#FF0000')
      .setTitle('Invalid Bot Token')
      .setDescription('⚠️ The token you provided for your bot is invalid. Please double-check your bot token or update it by keeping TOKEN in environment variables\n\n **▶️ token ❌    TOKEN ✅**')
      .setImage('https://cdn.discordapp.com/attachments/1264134884432285766/1274263721404792895/SHIVA.gif?ex=66c19e11&is=66c04c91&hm=ea317b9a9d4e0504f3b16f16ecee5da17b2ced3a6a1ff1ef4d0749f1866c06dd&'),
  },
  {
    keywords: ['how to make it 24/7s', 'how to host','bot goes offline','bot went offline','24/7 host','free hosting','stops working after'],
    embed: new EmbedBuilder()
      .setColor('#FF0000')
      .setTitle('How to host bot online forever')
      .setDescription('To host your bot online 24hrs, follow these steps:\n\n1. Make sure your bot is online and running.\n2. Now on render copy the link of your dashboard as shown in below.\n3. Go to [better stack](https://betterstack.com/) and create a new monitor.\n3. Then add the link you copied in step 2 in the URL section.\n4. Now your bot will be online 24hrs.')
      .setImage('https://cdn.discordapp.com/attachments/1170652474563117138/1201585363995607162/image.png?ex=65ca5a93&is=65b7e593&hm=0f5357dc194f787289718e8cb0f88b115fbccf3a7db370ef5f57701e8ad253ba&'),
  },
  {
    keywords: ['replit not working','on replit'],
    embed: new EmbedBuilder()
      .setColor('#FF0000')
      .setTitle('Replit is No Longer Supported')
      .setDescription('🔴 **Officail Announcement from REPLIT :** After January 1st, Deployments will be the only way to host applications on Replit. It means you cannot host bots free on Replit, you need to pay.\n\n✨ Best alternative for the replit is Render which works with help of GitHub. ')
    .setImage('https://cdn.discordapp.com/attachments/1264134884432285766/1274263721404792895/SHIVA.gif?ex=66c19e11&is=66c04c91&hm=ea317b9a9d4e0504f3b16f16ecee5da17b2ced3a6a1ff1ef4d0749f1866c06dd&'),
  },
  {
    keywords: ['card','credit card','asking card','payment','debit card','need to pay'],
    embed: new EmbedBuilder()
      .setColor('#FF0000')
      .setTitle('What? just no need to pay')
      .setDescription('**Everything is free!**\nMake sure you choose free option below. If you choose paid option, you will be redirected to the payment page.\n\nBoth Bettstack and Render are free no need to pay just make sure to check the free option by going to previous page or plan while hosting on Render.\n\n**▶️ USE VPN IF YOU CANNOT FIND FREE OPTION**')
    .setImage('https://cdn.discordapp.com/attachments/1264134884432285766/1274263721404792895/SHIVA.gif?ex=66c19e11&is=66c04c91&hm=ea317b9a9d4e0504f3b16f16ecee5da17b2ced3a6a1ff1ef4d0749f1866c06dd&'),
  },
  {
    keywords: ['missing permissions', 'no permissions'],
    embed: new EmbedBuilder()
      .setColor('#FF0000')
      .setTitle('Missing Permissions')
      .setDescription('✨ Please ensure your bot has the required permissions make sure to tick correct permissions while inviting the bot.')
      .setImage('https://cdn.discordapp.com/attachments/1264134884432285766/1274263721404792895/SHIVA.gif?ex=66c19e11&is=66c04c91&hm=ea317b9a9d4e0504f3b16f16ecee5da17b2ced3a6a1ff1ef4d0749f1866c06dd&'),
  },
  {
    keywords: ['application did not respond', 'application not responding', 'bot not responding', 'commands not working'],
    embed: new EmbedBuilder()
      .setColor('#FF0000')
      .setTitle('Restart Your Bot Code')
      .setDescription('✅ Just go to your bot host then stop the code then run it again!\n\n▶️ If you trying to use bot ghost status remover just **stop the both codes** and run the remover code first')
       .setImage('https://cdn.discordapp.com/attachments/1264134884432285766/1274263721404792895/SHIVA.gif?ex=66c19e11&is=66c04c91&hm=ea317b9a9d4e0504f3b16f16ecee5da17b2ced3a6a1ff1ef4d0749f1866c06dd&'),
},
  {
    keywords: ['used disallowed intents', 'disallowed intents', 'intents'],
    embed: new EmbedBuilder()
      .setColor('#FF0000')
      .setTitle('You Didn\'t Turn On Intents')
      .setDescription('**▶️ Follow Below Steps:**\n\n1. Go to https://discord.com/developers/applications\n2. Go to your bot Section then below the token you can find intents turn them on.\n3. watch this video if you can\'t Understand! https://cdn.discordapp.com/attachments/1192831222745927701/1199037727220453566/Intetns-1.mp4 ')
       .setImage('https://cdn.discordapp.com/attachments/1264134884432285766/1274263721404792895/SHIVA.gif?ex=66c19e11&is=66c04c91&hm=ea317b9a9d4e0504f3b16f16ecee5da17b2ced3a6a1ff1ef4d0749f1866c06dd&'),
  },

];


const allowedChannels = ['1125414929734832248', '1131584969844723794', '1169596862098059325', '1113800536483975267', '1113800536483975266', '1113800536483975264','1192831222745927701','1170652474563117138']; 

const cooldowns = new Map();

module.exports = {
  name: 'error',
  description: 'Automatically responds to matching errors.',
  cooldown: 3,
  execute(message) {
    if (!allowedChannels.includes(message.channel.id)) {
      return;
    }

    if (!cooldowns.has('error')) {
      cooldowns.set('error', new Map());
    }

    const now = Date.now();
    const timestamps = cooldowns.get('error');
    const cooldownAmount = (3) * 1000; 

    if (timestamps.has(message.author.id)) {
      const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

      if (now < expirationTime) {
        const timeLeft = (expirationTime - now) / 1000;
      }
    }

    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

    for (const error of errors) {
      if (Array.isArray(error.keywords)) {
        for (const keyword of error.keywords) {
          if (message.content.toLowerCase().includes(keyword.toLowerCase())) {
            message.reply({ embeds: [error.embed] });
             message.react('✅')
            return;
          }
        }
      } else {
        if (message.content.toLowerCase().includes(error.keywords.toLowerCase())) {
          message.reply({ embeds: [error.embed] });
          return;
        }
      }
    }
  },
};
