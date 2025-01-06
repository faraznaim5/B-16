import javax.validation.constraints.NotEmpty;

public class User {
    @NotEmpty(message = "Username cannot be empty")
    private String username;

    // Getters and Setters
}
