module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune:(req,res) => {
        const fortunes = ['Delight the world with compassion, kindness and grace','The fortune you seek is in another cookie','Your reality check about to bounce']

        let randomIndex = Math.floor[Math.random() = fortunes.length]
        let randomFortune = fortuned[randomIndex]
        res.status(200).send(randomFortune)
    }

}