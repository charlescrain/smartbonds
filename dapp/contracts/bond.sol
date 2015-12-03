contract Bond {
    address owner; address buyer;
    uint par_value; uint inv_interest;
    uint frequency; uint seconds_to_maturity;
    uint maturity_date; uint last_payment;
    
    modifier onlyowner { if (msg.sender != owner) throw; _ }
    modifier onlybuyer { if (msg.sender != buyer) throw; _ }
    
    function Bond(){
        owner = msg.sender;
        par_value = inv_interest = 0;
        frequency = 0;
        seconds_to_maturity = 0;
        maturity_date = 0;
        last_payment = 0;
    }

    function initBond(uint _par_value, uint _inv_interest, uint _frequency, uint _seconds_to_maturity) onlyowner returns (uint) {
        par_value = _par_value;
        inv_interest = _inv_interest;
        frequency = _frequency;
        seconds_to_maturity = _seconds_to_maturity;
        return 1;
    }


    function purchaseBond(uint time_of_purchase) returns (int) {
        if(msg.value >= par_value) {
            buyer = msg.sender;
            uint leftover_eth = msg.value - par_value;
            buyer.send(leftover_eth);
            maturity_date = time_of_purchase + seconds_to_maturity;
            last_payment = time_of_purchase;
            return 1;
        }
        else 
            return -1;
    }
    
    
    function getPayment(uint timestamp) onlybuyer returns (int) {
        uint payment = 0;
        while(timestamp >= last_payment + frequency) {
            payment += par_value / inv_interest;
            last_payment += frequency;
        }
        if(payment > 0 && timestamp >=  maturity_date) {
            payment += par_value;
            buyer.send(payment); 
            kill();
            return 1;
        }
        else if(payment > 0) {
            buyer.send(payment);
            return 1;
        }
        else
            return -1;
    }
    
    
    function kill() internal {
        suicide(owner);
    }
    
    
    function() { throw; }
}