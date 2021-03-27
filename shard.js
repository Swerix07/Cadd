const {ShardingManager} = require ('discord.js');
const manager = new ShardingManager ('./index.js', {totalShards: 'auto', token: 'ODI0NTU4MDU2Mzg1MTUwOTk2.YFxHiA.DewTsswHJHvxfiXi_SFSR5G_JBU'}); // TOKEN discord.com/developers Alabilirsiniz!

manager.on ('shardCreate', shard => console.log (`Shardlar Başlatılıyor!`));
manager.spawn ();