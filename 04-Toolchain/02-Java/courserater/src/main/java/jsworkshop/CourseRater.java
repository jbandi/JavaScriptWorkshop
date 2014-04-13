package jsworkshop;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;

import javax.enterprise.context.SessionScoped;
import javax.inject.Named;

@Named
@SessionScoped
public class CourseRater implements Serializable {

    private static final long serialVersionUID = 1L;
    private int rating = 0;
    private List<Rating> ratings = new ArrayList<Rating>();

    public void rate() {
        System.out.println("********** Rate: " + getRating());
        Rating ratingEntity = new Rating(getRating(), new Date());
        ratings.add(ratingEntity);
    }

    public List<Rating> getRatings() {
        List<Rating> reversed = new ArrayList<Rating>(ratings);
        Collections.reverse(reversed);
        return reversed;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }
}
