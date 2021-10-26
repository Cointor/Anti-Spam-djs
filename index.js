const AntiSpam = require('discord-anti-spam');
const antiSpam = new AntiSpam({
	warnThreshold: 3, //  Advertencia
	kickThreshold: 7, // Expulcion
	maxInterval: 1500, // Tiempo
	warnMessage: '{@user}, Tranquilo velocista, No escribas tan rápido', 
	kickMessage: '**{user_tag}** Lo lamento pero escribiste +7/s y no me quedo de otra mas que expulsarte del servidor.',
	maxDuplicatesWarning: 7,
	maxDuplicatesKick: 10, 
	exemptPermissions: [ 'ADMINISTRATOR'], 
	ignoreBots: true, 
	verbose: true, 
	ignoredUsers: ['753769842506727504'], // User Ignorados
	removeMessages: true 
});
client.on('message', (message) => antiSpam.message(message)); 
/// Links ////
client.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.cache.get("889042020042158192")
 	if (!channel) return
	channel.send(` <:join:889543471684284468> Te damos la bienvenida, <@${member.user.id}>. Esperamos que hayas traído pizza. `)
})
/* client.on('guildMemberRemove', async member => {
	const channel = member.guild.channels.cache.get("00")
 	if (!channel) return
	channel.send(`**${member.displayName}**, Abandono el servidor `)
})
*/
//// Logs ////
client.on("messageDelete", async message => {
    let canal = client.channels.resolve('889042046520799252')
const entry = await message.guild.fetchAuditLogs({type:'MESSAGE_DELETE'}).then(audit => audit.entries.first())
let user = entry.executor.username
const embed =  new Discord.MessageEmbed()
.setTitle("Mensaje eliminado")
.setColor("#303434")
.setDescription(`**${message.author.username}:** ${message.content}`)
canal.send(embed)
});

