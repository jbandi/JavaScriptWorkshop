package jsworkshop;

import java.util.Date;

public class Rating {

    public Rating(Integer rate, Date date) {
        this.date = date;
        this.rate = rate;
    }
    
    private Integer rate;
    private Date date;

    public Integer getRate() {
        return rate;
    }

    public Date getDate() {
        return date;
    }
}
