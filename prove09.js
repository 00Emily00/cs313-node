function calculateRate(req, res) {
    const weight = req.query.weight;
    const mail = req.query.mail;
    
    let cost = 0;
    switch(mail) {
        case "Letters (Stamped)":
            if(weight <= 1)
                cost = .50;
            else
               cost = .50 + .21 * (weight - 1);
            break;
        case "Letters (Metered)":
            if(weight <= 1)
                cost = .47;
            else    
                cost = .47 + 21 * (weight - 1);
            break;
        case "Large Envelopes (Flats)":
            if(weight <= 1)
                cost = 1;
            else
                cost = 1 + .21 * (weight - 1);
            break;
        case "First-Class Package Service-Retail":
            if(weight <= 4)
                cost = 3.50;
            else if(weight >= 5 && weight <= 8)
                cost = 3.75;
            else if(weight == 9)
                cost = 4.10;
            else
                cost = 4.45 + .35 * (weight - 10);
        default:
            break;
    }

    res.render("pages/prove09", {results: cost.toFixed(2)});
    
}


module.exports = {
    calculateRate: calculateRate
}