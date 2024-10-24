class Utility{
    async convertTexttoNumber(text){   // (text) Peramiter ta text hisebe pass hocche
        const value = await parseFloat(text.replace(/[$,]/g, ""));
        return value;
    }

    async randomNumber(max, min){
        const randomValue = Math.floor(Math.random() * (max - min + 1) ) + min;
        return randomValue;
    }

    async createRandomSting(length){
        const chars = "abcdefghijklmnopqrstuvwxyz";
        let result = "";
        for (let i=0; i< length; i++){
            result += chars.charAt(Math.floor(Math.random() * chars.length));   //chars defines with all the small letters
        }
        return result;
    }
}

module.exports = new Utility();