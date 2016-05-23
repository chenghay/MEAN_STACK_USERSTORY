module.exports = {
	"database" : "mongodb://root:root@ds011880.mlab.com:11880/userstory_db",
	"port" : process.env.PORT || 3000,
	//secretKey 在hash的时候用来产生token
	"secretKey" : "YourSecretKey"
};